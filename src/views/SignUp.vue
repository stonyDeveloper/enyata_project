<template>
  <div class="signup">
    <EnyataLogo></EnyataLogo>

    <form @submit.prevent="handleSubmit">
      <h3>Sign Up</h3>
      <div v-if="passwordMatch" class="password-match">
        Passwords do not match!!!
      </div>
      <div v-if="emailExist" class="password-match">
        This email address exists already!!!
      </div>

      <div class="error"></div>
      <div class="error" v-if="signUpStatus">Signed Up Successfully!!!</div>

      <div class="form-input">
        <div class="input-field">
          <label>First Name</label><br />
          <input type="text" v-model="first_name" required />
        </div>
        <div class="input-field">
          <label>Last Name</label><br />
          <input type="text" v-model="last_name" required />
        </div>
        <div class="input-field">
          <label>Email Address</label><br />
          <input type="email" v-model="email" required /><br />
          <span class="invalidEmail" v-if="msg.email">{{ msg.email }}</span>
        </div>
        <div class="input-field">
          <label>Phone Number</label><br />
          <input type="text" maxlength="11" v-model="phone_number" required /><br />
          <span v-if="validNumber" class="invalidEmail">Please enter a valid phone number</span>
        </div>
        <div class="input-field">
          <label>Password</label><br />
          <input type="password" v-model="password" required />
        </div>
        <div class="input-field">
          <label>Confirm Password</label><br />
          <input type="password" v-model="confirm_password" required />
        </div>
      </div>

      <div class="btn">
        <ButtonComponent
          buttonText="Sign Up"
          width="520"
          height="50"
          border="2"
        />
      </div>

      <div class="form-text">
        <p>
          Already have an account?
          <span><router-link to="/login">Sign In</router-link></span>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
      error: false,
      // errorMsg: 'This Email Address already exists!!!',
      signUpStatus: false,
      passwordMatch: false,
      emailExist: false,
      msg: [],
      validNumber: false
    };
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
    phone_number(value){
      this.phone_number = value;
      this.validatePhoneNumber(value)
    }
  },
  methods: {
    validatePhoneNumber(value) {
      console.log(typeof value)
      if(value.length < 11){
         this.validNumber = true
      }else{
        this.validNumber = false
      }
     

    },
    validateEmail(value) {
      console.log(value)
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    async handleSubmit(e) {
      try {
        const userEmail = this.email;
        console.log(userEmail);
        const emailExists = await axios.get(
          "http://localhost:5500/users_email"
        );
        console.log(emailExists);
        for (let i = 0; i < emailExists.data.data.length; i++) {
          if (userEmail == emailExists.data.data[i].email_address) {
            this.passwordMatch = false;
            this.emailExist = true;
          }
        }
        if (this.password !== this.confirm_password) {
          this.emailExist = false;
          this.passwordMatch = true;
        }
        e.preventDefault();
        const response = await axios.post("http://localhost:5500/signup", {
          first_name: this.first_name,
          last_name: this.last_name,
          email_address: this.email,
          phone_number: this.phone_number,
          password: this.password,
          confirm_password: this.confirm_password,
        });

        console.log(response);
        this.emailExist = false;
        this.signUpStatus = true;

        setTimeout(() => {
          this.$router.push("/login");
        }, "2000");
      } catch (e) {
        this.error = true;
        // this.email = ''
      }
    },
  },
};
</script>

<style scoped>
.invalidEmail {
  color: red;
  font-size: 13px;
}

.password-match {
  color: red;
  text-align: center;
  padding-top: 20px;
}

.error {
  color: green;
  /* background: black; */
  text-align: center;
}
.signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form h3 {
  margin-top: 24px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  text-align: center;
}

.form-input {
  margin-top: 68px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 62px;
  grid-row-gap: 22px;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}

input {
  width: 379px;
  height: 48px;
}

.btn {
  text-align: center;
}

.form-text {
  margin-top: 10px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  text-align: center;
}
</style>

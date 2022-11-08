<template>
  <div>
    <form @submit.prevent="sendEmail">
      <div class="content">
        <h3>Forgot Password?</h3>
        <p>Please type in the email address you used to register.</p>
        <input
          type="email"
          placeholder="Email Address"
          v-model="email_address"
          required
        />
        <ButtonComponent
          class="createBtn"
          buttonText="Submit"
          width="420"
          height="45"
          border="2"
        ></ButtonComponent>
        <router-link to="/signup"> <p>Go back to Sign In</p></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email_address: "",
    };
  },
  methods: {
    async sendEmail() {
        const url = "http://localhost:5500/forgot_password"
        console.log(url)
        const resp = await axios.post(url, {
        email_address: this.email_address
      });
      console.log(resp)
    },
  },
};
</script>

<style scoped>
div {
  font-family: "Poppins";
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #7557d3;
  width: 100vw;
  color: #7557d3;

  /* margin-left: auto;  */
}

a {
  /* text-decoration: none; */
  color: #7557d3;
}

.content {
  box-shadow: 3px 7px 13px -13px rgba(0, 0, 0, 1);
  padding: 10px;
  width: 600px;
  height: 50vh;
  border-radius: 6px;
  background: white;
}

p:first-of-type {
  margin-top: 25px;
}

input {
  margin-top: 30px;
  height: 44px;
  width: 400px;
  padding-left: 10px;
  border-radius: 5px;
  border: solid white 1px;
  /* outline: none; */
  background: #7557d3;
  color: white;
}

input::placeholder {
  color: white;
}

.createBtn {
  background: #7557d3;
  color: white;
  margin-top: 40px;
}

p:last-of-type {
  margin-top: 20px;
  font-size: 15px;
}
</style>

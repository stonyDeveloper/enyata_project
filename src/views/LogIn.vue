<template>
  <div class="login">
    
    <EnyataLogo></EnyataLogo>
    
    <form @submit.prevent="login">
      <h3>Log In</h3>

      <div class="alert green" v-if="loggedIn">Logged In Successfully!!</div>
      <div class="alert" v-if="incorrectDetails">Incorrect Email Address or Password!!</div>

      <div class="form-input">
      <div class="input-field">
        <label>Email Address</label><br>
        <input type="email" v-model="email">
      </div>

      <div class="input-field">
        <label>Password</label><br>
        <input :type="[showPassword ? 'text' : 'password']" v-model="password">
        <img @click="showPassword = !showPassword" src="../assets/passwordicon.svg" alt="">
      </div>

      <ButtonComponent class="btn"
          buttonText="Sign In"
          width="400"
          height="50"
          border = "2"
        />
        </div>

        <div class="form-text">
        <p>Don’t have an account yet? <span><router-link to="/signup">Sign Up</router-link></span></p>

        <router-link to="/forgotpassword">
        <p>Forgot Password?</p>
        </router-link>
        </div>
    </form>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import axios from 'axios'

export default {
  name: "LogIn",
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      loggedIn: false,
      incorrectDetails: false,
      
    }
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e){

      try{
        e.preventDefault()

        // this.loggedIn = false

      

      const input = {
        email_address: this.email,
        password: this.password
      }

      console.log(input)

      const response = await axios.post('http://localhost:5500/login', input)
      console.log(response.status)
      this.incorrectDetails = false
      this.loggedIn = true
      // alert(response.data.message)
     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.token}`;

     localStorage.setItem('token', response.data.data.token)


     

     const user = response.data.data.user
     const token = response.data.data.token

     
     this.setUser(user);
     this.setToken(token);

    const getDate = localStorage.getItem('application')
    console.log(getDate)
    

    const applied = await axios.get('http://localhost:5500/allApplicant')
     
  
    
     const loggedInUser = this.$store.state.user.email_address

     

      setTimeout(() => {
  for(let i = 0; i < applied.data.data.length; i++){
        if(loggedInUser === applied.data.data[i].email_address){
          this.$router.push('/dashboard')
          return
        } else if(loggedInUser !== applied.data.data[i].email_address) {
           this.$router.push('/application')
        }

     }
}, "1000")

     

     if(!getDate){
      await this.$router.push('/dashboard')
    } else{
      await this.$router.push('/application')
    }
    
    }catch(e){
        this.error = true;
        this.email = '';
        this.password = ''
        this.incorrectDetails = true
      }
      
    },
 


}

}

</script>


<style scoped>
.alert{
  color: red;
  /* background: black; */
  text-align: center;
  padding-top: 20px;
}

.green{
  color: green;
}

.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login h3{
  text-align: center;
  font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #2B3C4E;
margin-top: 24px;
}

.form-input{
  margin-top: 68px;
}

label{
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
}

input{
  width: 379px;
  height: 48px;
  margin-top: 5px;
}

.form-input .input-field:nth-child(2){
  margin-top:22px
}

.form-text{
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}

.form-text p{
  font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
}

.form-text span{
  text-decoration-line: underline;

color: #1A2C56;
}

.input-field{
  position: relative;
}

.input-field img{
  position: absolute;
  top: 65%;
  right: 3%;
}


</style>

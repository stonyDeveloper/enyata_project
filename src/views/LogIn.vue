<template>
  <div class="login">
    
    <EnyataLogo></EnyataLogo>
    
    <form @submit.prevent="handleSubmit">
      <h3>Log In</h3>

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
          width="379"
          height="50"
          border = "2"
        />
        </div>

        <div class="form-text">
        <p>Don’t have an account yet? <span><router-link to="/signup">Sign Up</router-link></span></p>

        <p>Forgot Password?</p>
        </div>
    </form>
  </div>
</template>


<script>
// import axios from 'axios'
export default {
  name: "LogIn",
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
  methods: {
    

  }
}

</script>


<style scoped>
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

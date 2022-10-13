<template>
  <div class="login">
    
    <img src="../assets/whiteenyatalogo.svg" alt="">
    
    <form action="">
      <h3>Log In</h3>

      <div class="form-input">
      <div class="input-field">
        <label>Email Address</label><br>
        <input type="email">
      </div>

      <div class="input-field">
        <label>Password</label><br>
        <input type="password">
        <img src="../assets/passwordicon.svg" alt="">
      </div>

      <ButtonComponent class="btn"
          buttonText="Sign In"
          width="379"
          height="50"
          border = "2"
        />
        </div>

    </form>
  </div>
</template>


<script>
export default {
  name: "LogIn",
  data() {
    
  },
  methods: {
    togglePassword(){
      this.showPassword = !this.showPassword
    }
  }
  
};

</script>


<style scoped>
.login{
    background-image: url('../assets/adminloginbg.svg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 40vw 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #7557D3;
}

.login h3{
  text-align: center;
  font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #ffffff;
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
color: #FFFFFF;
}

input{
  width: 379px;
  height: 48px;
  margin-top: 5px;
  background: transparent;
  border: 1.5px solid #FFFFFF;
border-radius: 4px;
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
opacity: 0.6;
color: blue;
}

.btn{
    background: #fff;
    color: #7557D3;
}




</style>

<template>
    <div class="signup">
        <EnyataLogo></EnyataLogo>

        <form action="">
            <h3>Sign Up</h3>

            <div class="form-input">
                <div class="input-field">
        <label>First Name</label><br>
        <input type="text">
      </div>
                <div class="input-field">
        <label>Last Name</label><br>
        <input type="text">
      </div>
                <div class="input-field">
        <label>Email Address</label><br>
        <input type="email">
      </div>
                <div class="input-field">
        <label>Phone Number</label><br>
        <input type="number">
      </div>
                <div class="input-field">
        <label>Password</label><br>
        <input type="password">
      </div>
                <div class="input-field">
        <label>Confirm Password</label><br>
        <input type="password">
      </div>
      

            </div>

            <div class="btn">
            <ButtonComponent 
          buttonText="Sign Up"
          width="520"
          height="50"
          border = "2"
        />
        </div>

        <div class="form-text">
        <p>Already have an account? <span><router-link to="/login">Sign In</router-link></span></p>

        </div>


        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.signup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

form h3{
    margin-top: 24px;
    font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #2B3C4E;
text-align: center;

}

.form-input{
    margin-top: 68px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 62px;
    grid-row-gap: 22px;

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
    width:379px;
    height: 48px;
}

.btn{
   text-align: center; 
}

.form-text{
    margin-top: 10px;
    font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
text-align: center;

}


</style>
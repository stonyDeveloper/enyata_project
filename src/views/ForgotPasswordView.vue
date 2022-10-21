<template>
    <div class="forgot-password">
<h2>ForgotPassword</h2>
<p class="header-text">Please select option to send link to reset password</p>

<div class="reset">
    <div class="email">
        <div>
        <img src="../assets/email.svg" alt="">
        </div>
        <div class="reset_via_email">
            <h3>Reset via Email</h3>
            <p>Reset password link will be send to your<br>
registered email address.</p>
        </div>
        <img src="../assets/checkicon.svg" alt="">

    </div>
    <div class="sms">

    </div>
</div>

<ButtonComponent 
          buttonText="SendLink"
          width="379"
          height="50"
          border = "2"
        />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.forgot-password{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h2{
    font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 38px;
color: #2B3C4E;
}

.header-text{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #7D7D7D;
margin-top: 17px;
}

.email{
    display: flex;
    margin-top: 48px;
}
.email h3{
    font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #7557D3;
}

.email p{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
color: #B1B1B1;
margin-top: 16px;
}

.email img:first-of-type{
    padding: 16px;
    border-radius: 50%;
    background:  rgba(117, 87, 211, 0.1);
}

.email img:last-child{
    background: #7557D3;
    width: 11.7px;
    height: 9px;
    padding: 20px;
    border-radius: 50%;
    margin-left: 93px;
}

.reset_via_email{
    margin-left: 42px;
}
</style>
<template>
    <div class="signup">
        <EnyataLogo></EnyataLogo>

        <form action="">
            <h3>Application Form</h3>

            <div class="upload">
                <div class="CV"><span>+</span>Upload CV</div>

                <div class="photo"><span>+</span>Upload Photo</div>
            </div>


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
        <label>Date of Birth</label><br>
        <input type="date">
      </div>
                <div class="input-field">
        <label>Address</label><br>
        <input type="text">
      </div>
                <div class="input-field">
        <label>University</label><br>
        <input type="text">
      </div>
                <div class="input-field">
        <label>Course of Study</label><br>
        <input type="text">
      </div>
                <div class="input-field">
        <label>CGPA</label><br>
        <input type="text">
      </div>
      

            </div>

            <div class="btn">
            <ButtonComponent 
          buttonText="Submit"
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
        
    }
</script>

<style scoped>
.signup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 130vh;
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

.upload{
    display: flex;
    justify-content: center;
    margin-top: 93px;
    gap: 32px;
}

div.upload > *{
   width: 211px;
   height: 50px;
   border: 1.5px dashed #2B3C4E;
border-radius: 2.87205px;
display: flex;
justify-content: center;
align-items:center;
cursor: pointer;
}

span{ 
    margin-right: 10px;
}


</style>
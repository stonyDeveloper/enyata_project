<template>
    <div class="signup">
        <EnyataLogo></EnyataLogo>

        <form @submit="submitApplication">
            <h3>Application Form</h3>

            <div class="upload">
                <div class="CV"><span>+</span>Upload CV</div>

                <div class="photo"><span>+</span>Upload Photo</div>
            </div>


            <div class="form-input">
                <div class="input-field">
        <label>First Name</label><br>
        <input type="text" v-model="first_name">
      </div>
                <div class="input-field">
        <label>Last Name</label><br>
        <input type="text" v-model="last_name">
      </div>
                <div class="input-field">
        <label>Email Address</label><br>
        <input type="email" v-model="email_address">
      </div>
                <div class="input-field">
        <label>Date of Birth</label><br>
        <input type="date" v-model="dob">
      </div>
                <div class="input-field">
        <label>Address</label><br>
        <input type="text" v-model="address">
      </div>
                <div class="input-field">
        <label>University</label><br>
        <input type="text" v-model="university">
      </div>
                <div class="input-field">
        <label>Course of Study</label><br>
        <input type="text" v-model="course">
      </div>
                <div class="input-field">
        <label>CGPA</label><br>
        <input type="text" v-model="cgpa">
      </div>

      <div value>
        

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
import axios from 'axios'
    export default {
      data(){
        return {
          upload_CV: '',
          upload_photo: '',
          first_name: '',
          last_name: '',
          email_address: '',
          dob: '',
          address: '',
          university: '',
          course: '',
          cgpa: ''
        }
      },
      computed: {
        returnUser(){
          return this.$store.state.user.first_name;
        }
      },
      mounted(){
        {
          // let storeEmail = this.$store.state.user.email_address
          // console.log(storeEmail)
        }
      },
      methods: {
        async submitApplication(e){
           try {
        e.preventDefault()
        
        
        {
          const token = this.$store.state.token
           const response = await axios.post('http://localhost:5500/application', {
            upload_CV: this.upload_CV,
            upload_photo: this.upload_photo,
            first_name : this.first_name,
            last_name : this.last_name,
            email_address : this.email_address,
            date_of_birth: this.dob,
            address: this.address,
            university: this.university,
            course_of_study: this.course,
            cgpa: this.cgpa

          },{ 
            headers: { 
              'Authorization': `Bearer ${token}`  
            } 
          })

          // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        // console.log(returnUser())
        
        // console.log(token);
        console.log(response);

        const storeEmail = []

        const push = localStorage.setItem('applicationEmail', storeEmail)
        storeEmail.push(push)


        
        

        

        console.log(storeEmail)
        
        
        
         this.$router.push('/dashboard')
        }
         
      } catch(error){
        console.log(error)
        
  
      }

          
        }
  
      }
        
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

.none{
  display: hide;
}


</style>
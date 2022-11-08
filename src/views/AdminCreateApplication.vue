<template>
  <div class="container">
    <AdminDashboardSidebar />

    <div class="dashboard">
      <h1>Create Application</h1>

     
        <form @submit.prevent="createApplication">
          <div class="date_and_batch">
            <div class="closure_date">
                <label>Application closure date</label><br>
        <input type="date"
        v-model="application_closure_date">
            </div>
            <div class="batch_id">
                <label>Batch ID</label><br>
        <input type="text"  placeholder="Enyata Academy 6.0" v-model="batch_id">
            </div>
          </div> 
          
          
          <div class="instructions">
            <label>Instructions</label>
            <textarea name="" id="" cols="30" rows="10"  v-model="instruction"></textarea>
            <div class="attach_question">
               <img src="../assets/attach_question_icon.svg" alt=""> 

               <span>Attach question</span>
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
  </div>
</template>

<script>
import AdminDashboardSidebar from "../components/AdminDashboardSidebar.vue";

import axios from 'axios'

export default {
  components: {
    AdminDashboardSidebar,
  },
  data(){
    return{
      application_closure_date: '',
      batch_id: '',
      instruction: ''
    }
  },
  methods: {
     async createApplication(e){
      e.preventDefault()

      const input = {
        application_closure_date: this.application_closure_date,
        batch_id: this.batch_id,
        instruction: this.instruction
      }

      const token = this.$store.state.adminToken

      await axios.post('http://localhost:5500/create_batches', input, {
        withCredentials: false
      }, {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    })

      
    

      alert('Application created successfully')

      this.application_closure_date = ''
      this.batch_id = ''
      this.instruction = ''

      
  }
}
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 47px;
}

.dashboard {
  padding-top: 107px;
}

.dashboard h1 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;

  color: #2b3c4e;
}

.title {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #4f4f4f;
}

.updates p {
 font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
margin-top: 4px;

color: #4F4F4F;
}

.date-and-status {
  margin-top: 61px;
}

.date-and-status .date {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2b3c4e;
  margin-top: 11px;
}

.date-indicator {
  width: 148px;
  height: 4px;
  background: #006df0;
  border-radius: 4px;
  margin-top: 9px;
}

.status-indicator {
  width: 148px;
  height: 4px;
  background: #f09000;
  border-radius: 4px;
  margin-top: 9px;
}

.application-date div:last-child {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 9px;

  color: #4f4f4f;
}

.date-and-status {
  display: flex;
  gap: 84px;
}

.application-status .status {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2b3c4e;
  margin-top: 11px;
}

.application-status div:last-child {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 9px;

  color: #4f4f4f;
}

.updates-and-assessment {
  margin-top: 52px;
  display: flex;
  gap: 67px;
}

.updates-and-assessment h4 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  letter-spacing: -0.02em;

  color: #2b3c4e;
}

.updates {
  padding-top: 25px ;
  
  border-radius: 4px;
  height: 307px;
  width: 482px;
}



.assessment {
  padding: 25px 35px 99px 35px;
  border: 1px solid #ececf9;
  border-radius: 4px;
  height: 307px;
}

.assessment .content {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16.7273px;
  line-height: 20px;
  text-align: center;
  width: 412px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 24px;

  color: #4f4f4f;
}

.updates hr:first-of-type {
  margin-top: 87px;
}

.updates hr {
  width: 412px;
  margin-bottom: 74px;
}

.batches{
    margin-top: 32px;
}

.batch:first-child{
    border-left: solid 7px #7557D3;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
}

.batch{
    font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #4F4F4F;
    padding: 24px 21px 20px 25px;
    display: flex;
    justify-content: space-between;
    
    border-radius: 8px 0px 0px 8px;
}

form{
    margin-top: 100px;
}

label{
   font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #2B3C4E; 
}

.date_and_batch{
    display: flex;
    gap: 64px;
}

.date_and_batch input{
    width: 456px;
    height: 41px;
    margin-top: 5px;
    border: 1.5px solid #2B3C4E;
border-radius: 4px;
}

.closure_date input{
    /* padding: 15px 0px 14px 13px; */
    padding-left: 13px;
    font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 13px;
line-height: 12px;
color: black;

}

.batch_id input{
    font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 13px;
line-height: 12px;
color: black;
 padding-left: 13px;
}

.instructions{
    display: flex;
    flex-direction: column;
    margin-top: 36px;
}

.instructions textarea{
    border: 1.5px solid #2B3C4E;
border-radius: 4px;
margin-top: 5px;
}

.attach_question{
    margin-top: 16px;
    font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #2B3C4E;
display: flex;
align-items: center;
gap: 4px;

}

.btn{
    text-align: center;
}


</style>

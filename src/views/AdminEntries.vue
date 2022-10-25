<template>
  <div class="container">
    <AdminDashboardSidebar />

    <div class="dashboard">
      <h1>Entries - Batch 2</h1>
      <p>Comprises of all that applied for batch 2</p>

      

      <div class="updates-and-assessment">
        <div class="header">
                <span>Name</span>
                <span>Email</span>
                <span>DOB</span>
                <span>Address</span>
                <span>University</span>
                <span>CGPA</span>

            </div>
        
          <div class="entries">
            <div class="entry" v-for="entry in entries"
            :key="entry.email_address"
            @click="show(entry.email_address)">
                <span>{{entry.first_name}} {{entry.last_name}}</span>
                <span>{{entry.email_address}}</span>
                <span>{{entry.date_of_birth}}</span>
                <span>{{entry.address}}</span>
                <span>{{entry.university}}</span>
                <span>{{entry.cgpa}}</span>

            </div>

            

           
          </div>
      </div>

      <div class="background" v-if="showDetails" @click="closePopUp">
      <div ref="inner" class="popup">
        <img src="../assets/entrypopupimage.svg" alt="">
        <p>Personal Details</p>
        <hr>
        <div class="inputs">
          <div class="input">
          <label for="">Name</label>
          <input type="text" v-model="name">
          </div>
          <div class="input">
          <label for="">Email</label>
          <input type="email" v-model="email_address">
          </div>
          <div class="input">
          <label for="">Address</label>
          <input type="text" v-model="address">
          </div>
          <div class="input">
          <label for="">University</label>
          <input type="text" v-model="university">
          </div>
          <div class="input">
          <label for="">Course of study</label>
          <input type="text" v-model="course_of_study">
          </div>
          <div class="input">
          <label for="">Date of birth</label>
          <input type="text" v-model="date_of_birth">
          </div>
          <div class="input">
          <label for="">CGPA</label>
          <input type="text" v-model="cgpa">
          </div>
          <div class="input">
          <label for="">CV</label>
          </div>
        </div>

        <div class="btns">
          <ButtonComponent 
          @click="approved"
          class="approve"
          buttonText="Approve"
          width="125"
          height="48"
          border = "2"
        />
          <ButtonComponent 
          @click="declined"
          class="decline"
          buttonText="Decline"
          width="125"
          height="48"
          border = "2"
        />
        </div>
      </div>
      </div>

      <ValidateApplicationComponent class="hide" v-if="!approve"></ValidateApplicationComponent>
    </div>
  </div>
</template>

<script>
import AdminDashboardSidebar from "../components/AdminDashboardSidebar.vue";

import axios from 'axios'
import ValidateApplicationComponent from "@/components/ValidateApplicationComponent.vue";
const moment = require('moment')
 
export default {
 components: {
    AdminDashboardSidebar,
    ValidateApplicationComponent
},
  data(){
    return{
      entries:[],
      showDetails: false,
      name: '',
      email_address: '',
      address: '',
      university: '',
      course_of_study: '',
      date_of_birth: '',
      cgpa: '',
      upload_CV: null,
      approve: false

    }
  },
  async mounted(){
    {
        const response  = await axios.get('http://localhost:5500/allApplicant')
      // console.log(response.data)
      this.entries = response.data.data
      console.log(this.entries[0])
      // const obj = Object.assign({}, ...this.entries)
      // localStorage.setItem('savedEntries', obj)

      // console.log(localStorage.savedEntries)
      console.log(response.data.data[0].date_of_birth) 
      console.log(moment(response.data.data[0].date_of_birth).format('YYYY-MM-DD'))

      // console.log(this.$state.admin)
      

    }
  },
  methods: {
    entryDetails(){

    },
   async show(email_address){
      console.log(email_address)
      const getApplicant = await  axios.get(`http://localhost:5500/oneApplicant/${email_address}`)

      this.name = getApplicant.data.data.first_name + " " + getApplicant.data.data.last_name
      this.email_address =  getApplicant.data.data.email_address
      this.address =  getApplicant.data.data.address
      this.university =  getApplicant.data.data.university
      this.course_of_study =  getApplicant.data.data.course_of_study
      this.date_of_birth =  getApplicant.data.data.date_of_birth
      this.cgpa =  getApplicant.data.data.cgpa
    
      console.log(this.name)
      // let entry
      // for(entry in this.entries){
      //   console.log(entry)
      // }
      
      // const check = localStorage.getItem('applicationEmail')
      // console.log(check)
      this.showDetails = true
      // thisName = this.first_name
    },
    closePopUp(){
      this.showDetails = false
    },
    async declined(){
      await axios.post('http://localhost:5500/addStatus', {
        status: 'declined',
        email_address: `${this.email_address}`
      })
    },
    async approved(){
       const approve = await axios.post('http://localhost:5500/addStatus', {
        status: 'approved',
        email_address: `${this.email_address}`
      })

      this.setApplicationStatus(approve)

    }

  }
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.container {
  display: flex;
  gap: 47px;
}

.dashboard {
  padding-top: 107px;
  /* width: 70%; */
  position: relative;
 
  
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


.dashboard p{
  font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 13px;
line-height: 16px;


color: #4F4F4F;  
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
  margin-top: 38px;

  /* width: 100%; */
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

.entries{
    margin-top: 32px;
    /* width: 100%; */
}

.header{
    background: #2B3C4E;
    
    font-family: 'Lato';
font-size: 14px;
line-height: 17px;

text-align: center;

color: #FFFFFF;
border-radius: 0; 
display: flex;
/* justify-content: space-between; */
gap: 70px;
padding: 14px 42px;


}

.entry:nth-child(1){
    border-left: solid 7px #7557D3;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    margin-top: 20px;
    text-align: center;
}

.entry{
    font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #4F4F4F;
    padding: 24px 21px 20px 25px;
    display: flex;
    gap: 70px;
    /* justify-content: space-between; */
    text-align: center;
    
    border-radius: 8px 0px 0px 8px;
    cursor: pointer;
    box-sizing: border-box;
    

}

.entry span:not(:last-child){
  /* background: red; */
  /* width: fit; */
  width: 190px;
  text-align: left;

}
.header span:not(:last-child){
  width: 190px;
  text-align: left;
}

.popup{
  /* position: absolute; */
  top: 0;
  /* left: 0; */
  right: 0;
  /* width: 400px; */
  z-index: 99;
  background-color: #fff;
  height: inherit;
  padding: 95px 58px 148px 48px;
  /* text-align: right; */
  margin-left: 1000px;
}

.popup p{
  font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
margin-top: 42px;

color: #7D7D7D;
}

.popup hr{
  margin-top:14px;
}

.inputs{
  margin-top:32px;
}

input{
  height: 48px;
  border: 1px solid #CDCFD6;
border-radius: 4px;
}

.input{
  display: flex;
  flex-direction: column;
  gap:8px;
}

label{
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #B1B1B1;
}

.popup .inputs{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 36px;
  grid-column-gap: 32px;
}

.btns{
  margin-top:42px;
  text-align: center;
}

.approve{
  margin-right: 24px;
}

.decline{
  background: #fff;
  border: 1px solid #CECECE;
  color: #4F4F4F;

}

.background{
  width: 130vw;
  height: 100%;
  background: rgba(3, 17, 49, 0.2);
backdrop-filter: blur(4px);
  position: absolute;
  top: 0;
  /* left: 0; */
  right: 0;
  z-index: 99;
}

.hide{
  position: absolute;
  top: 50vh;
  left:50vw;
  z-index: 99;
}
</style>

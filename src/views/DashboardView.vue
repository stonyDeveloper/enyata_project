<template>
  <div class="container">
    <DashboardSidebar></DashboardSidebar>

    <div class="dashboard">
      <h1>Dashboard</h1>

      <p v-if="status == Pending">
        Your Application is currently being review, you will be notified if
        successful
      </p>

      <div class="date-and-status">
        <div class="application-date">
          <div class="title">Date of Application</div>

          <div class="date">{{date_of_application}}</div>

          <div class="date-indicator"></div>

          <div>{{daysAgo}} since applied</div>
        </div>

        <div class="application-status">
          <div class="title">Application Status</div>

          <div class="status">{{status}}</div>

     
          <!-- <div 
          v-if="status == Pending"
          class= "yellow-status-indicator"></div> -->
          

         
          <div
          class="green-status-indicator"></div>
         
<!-- 
         
          <div
          v-if="status == Approved" class="red-status-indicator"></div> -->
          

          <!-- <div>We will get back to you</div> -->
        </div>
      </div>

      <div class="updates-and-assessment">
        <div class="updates">
          <h4>Updates</h4>
          <hr />
          <hr />
          <hr />
          <hr />
        </div>

        <div class="assessment">
          <h4>Take Assessment</h4>

          <div class="content">
            <div>
              We have 4 days left until the next assessment Watch this space
            </div>

            
            <ButtonComponent
              :disabled="isActive"
              buttonText="Take Assessment"
              width="205"
              height="41"
              border="2"
              @click="validateButton"
            ></ButtonComponent>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DashboardSidebar from "../components/DashboardSidebar.vue";

const moment = require('moment')

export default {
  components: {
    DashboardSidebar,
  },
  data(){
    return {
      date_of_application: '',
      daysAgo: '',
      status: 'Pending',
      isGreen: false,
      isRed: false,
      isYellow: false,
      isActive: false

    }
  },
  methods: {
    validateButton(){

      console.log(this.status)
      if(this.status == "Declined" || this.status == "Pending"){
        this.$router.push("/dashboard")
      } else{
        this.$router.push("/assessment")
      }
    }
  },
  async mounted(){
    // {
    //   const response = axios.get('https://634828c60b382d796c6af96d.mockapi.io/applications')
    //   console.log(response)
    // }
    // {
      
      const applicationDate = this.$store.state.user.created_at
      const convertDate = moment(applicationDate).format('DD.MM.YY')

      this.date_of_application = convertDate

      const daysSince = moment(applicationDate).fromNow(true)

      this.daysAgo = daysSince

      console.log(daysSince);

      // console.log(this.$state.appli)
    // }
    {
      // const response = await axios.get('http://localhost:5500/total_applications')

      // console.log(response)
      const test = localStorage.getItem('applicationEmail')
      console.log(test)



      // const appliedDate = await axios.get('http/oneApplicant/:email_address')
    }
    {

     const userEmail = this.$store.state.user.email_address

      const status = await axios.get(`http://localhost:5500/oneApplicant/${userEmail}`)
      console.log(status.data.data.status)

      const realStatus = status.data.data.status

      this.status = realStatus.charAt(0).toUpperCase() + realStatus.slice(1);

      

      
    }
    {
      // if(this.status == "Pending"){
      //   this.isYellow = true
      // } else if(this.status == "Approved"){
      //   this.isGreen = true
      // }else{
      //   this.isRed = true
      // }
    }
    {
      localStorage.setItem("status", this.status)

      // const test = localStorage.getItem("status")
      // console.log(test)
    }
    

    
  }
  
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 58px;
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

.dashboard p {
  margin-top: 14px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
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

.yellow-status-indicator {
  width: 148px;
  height: 4px;
  background: #f09000;
  border-radius: 4px;
  margin-top: 9px;
}

.green-status-indicator{
  background:#12C52F;
  width: 148px;
  height: 4px;
  border-radius: 4px;
  margin-top: 9px;
}

.red-status-indicator{
  background: red;
  width: 148px;
  height: 4px;
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
  margin-top: 97px;
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
  padding: 25px 35px 99px 35px;
  border: 1px solid #ececf9;
  border-radius: 4px;
  height: 453px;
}

.assessment {
  padding: 25px 35px 99px 35px;
  border: 1px solid #ececf9;
  border-radius: 4px;
  height: 453px;
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
</style>

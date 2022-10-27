<template>
  <div class="container">
    <AdminDashboardSidebar />

    <div class="dashboard">
      <h1>Dashboard</h1>

      <div class="date-and-status">
        <div class="application-date">
          <div class="title">Current Applications</div>

          <div class="date">{{currentApplications}}</div>

          <div class="date-indicator"></div>

          <div>Academy {{batch}}</div>
        </div>

        <div class="application-status">
          <div class="title">Total Applications</div>

          <div class="status">{{totalApplications}}</div>

          <div class="status-indicator green"></div>

          <div>All entries do far</div>
        </div>

        <div class="application-status">
          <div class="title">Academy's</div>

          <div class="status">{{batch}}</div>

          <div class="status-indicator"></div>

          <div>So far</div>
        </div>
      </div>

      <div class="updates-and-assessment">
        <div class="updates">
          <h4>History</h4>
          <p>Last Update 18:24,{{getHumanDate(lastUpdate) }} 
            </p>

          <div class="batches">
            <div class="batch">
                <span>Academy Batch 1.0</span>
                <span>15 candidates</span>
                <span>started 11/09/15</span>

            </div>

            <div class="batch">
                <span>Academy Batch 1.0</span>
                <span>15 candidates</span>
                <span>started 11/09/15</span>

            </div>

            <div class="batch">
                <span>Academy Batch 1.0</span>
                <span>15 candidates</span>
                <span>started 11/09/15</span>

            </div>
          </div>
          
        </div>

        <div class="assessment">
          <h4>Create Assessment</h4>

          <div class="content">
            <div>
              Create test question for an incoming academy students
            </div>
            <router-link to="/admin_compose_assessment">
            <ButtonComponent
            class="createBtn"
              buttonText="Create Assessment"
              width="205"
              height="41"
              border="2"
            ></ButtonComponent>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminDashboardSidebar from "../components/AdminDashboardSidebar.vue";
import axios from 'axios'
import moment from 'moment'

export default {
  data(){
    return{
      totalApplications: '0',
      currentApplications: '0',
      batch: '0',
      lastUpdate: ''
    }
  },
  components: {
    AdminDashboardSidebar,
  },
  methods: {
    getHumanDate : function (date) {
                return moment(date, 'YYYY-MM-DD').format('DD/MM/YY');
            }
  },
  async mounted(){

    {
      const response = await axios.get('http://localhost:5500/total_applications')

      // console.log(response.data.data[0].count)
      this.totalApplications = response.data.data[0].count
    }
    {
      const current = await axios.get('http://localhost:5500/current_applications')
      // console.log(current.data.data.count)
      this.currentApplications = current.data.data.count

    }
    {
      const batch = await axios.get('http://localhost:5500/current_batch')
      console.log(batch.data.data.batch_id)
      this.batch = batch.data.data.batch_id
    }
    {
     const lastUpdate = await axios.get('http://localhost:5500/batches') 
     this.lastUpdate = lastUpdate.data.data[lastUpdate.data.data.length-1].created_at
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

.status-indicator.green{
  background: #00F026;
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

.createBtn{
  background-color: #12C52F;
}
</style>

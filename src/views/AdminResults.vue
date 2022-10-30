<template>
  <div class="container">
    <AdminDashboardSidebar />

    <div class="dashboard">
      <h1>Results - Batch 2</h1>
      <p>Comprises of all that applied for batch 2</p>

      <table class="table table-sm table-borderless table-responsive">
          <thead class="heading">
            <tr>
              <th class="name" scope="col">Name</th>
              <th class="email" scope="col">Email</th>
              <th class="dob" scope="col">
                DOB - Age
                <i class="fa fa-sort mx-1" aria-hidden="true" @click="sort('dob')"></i>
              </th>
              <th scope="col">Address</th>
              <th scope="col">University<br></th>
              <th scope="col" >
                CGPA 
                <i class="fa fa-sort mx-1" aria-hidden="true" @click="sort('dob')"></i>
              </th>
              <th scope="col">Test Scores
                <i class="fa fa-sort mx-1" aria-hidden="true" @click="sort('score')"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="different-row" v-for="entry in entries" :key="entry.index">
              <td class="text-left"><input type="checkbox" class="checkbox">{{ entry.first_name }} {{ entry.last_name }}</td>
              <td class="text-left">{{entry.email_address}}</td>
              <td class="text-left">{{entry.date_of_birth}}</td>
              <td class="text-left">{{entry.address}}</td>
              <td class="text-left">{{entry.university}}</td>
              <td class="text-left">{{entry.cgpa}}</td>
              <td class="text-left">{{entry.score}} <img src="../assets/optionsicon.svg"></td>
            </tr>
          </tbody>
        </table>

      

        
        
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
      entries:[],
      score:[]
    }
  },
  created(){
    console.log(localStorage.getItem('applicantID'))
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
      // console.log(response.data.data[0].date_of_birth) 
      // console.log(moment(response.data.data[0].date_of_birth).format('YYYY-MM-DD'))

      // console.log(this.$state.admin)
      console.log(this.entries)
      

    }
    {
      const scores = await axios.get('http://localhost:5500/single_assessment_result/all_assessments_results')
      console.log(scores)

      // const saveScores = []

      // saveScores.push(scores) 

      // console.log(saveScores)
    }
  }
};
</script>

<style scoped>
.text-left img{
  margin-left: 5px;
}
thead tr{
  height:60px;
}
.checkbox{
margin-right: 10px;
}

table{
  width: 153%;
  /* table-layout: fixed; */
  margin-top: 38px;
}

td:first-of-type{
  width: 150px;
}

tbody tr:hover {
background: #ffffff;
box-shadow: -5px 0px 0px 0px rgba(117, 87, 211, 1);
border-radius: 10px;
font-weight: bold;
color: #2b3c4e;
border: 30px solid #31d283;
cursor: pointer;
}




.title-entries {
  width: 350px;
  height: 53px;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 43px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-top: 50px;
}
#description-div {
  margin-bottom: 37px;
  text-align: left;
}

.container{
  width: 70% !important;
}

.description {
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  color: var(--text-secondary-small);
}

h3 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

h6 {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  color: #4f4f4f;
}

.heading {
  background: #2b3c4e;
}
th {
  color: white;
  font-family: Lato;
  font-size: 14px;
  text-align: left;
  line-height: 17px;
  padding-left: 20px;
}

th.name{
  padding-right: 80px;
  padding-left: 20px;
}

th.dob{
  padding-right: 60px;
  padding-left: 40px;
}

td {
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* text-align: center; */
color: #4F4F4F;
padding: 20px;
}


i {
  cursor: pointer;
  color: white;
}
.container {
  display: flex;
  gap: 47px;
}

.dashboard {
  padding-top: 107px;
  width: 70%;
 
  
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

  width: 100%;
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
    width: 100%;
}

.entry:first-child{
    background: #2B3C4E;
    
    font-family: 'Lato';
font-size: 14px;
line-height: 17px;

text-align: center;

color: #FFFFFF;
border-radius: 0; 
}

.entry:nth-child(2){
    border-left: solid 7px #7557D3;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    margin-top: 20px;
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
    justify-content: space-between;
    
    border-radius: 8px 0px 0px 8px;
    

}
</style>

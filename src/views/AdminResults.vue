<template>
  <div class="container">
    <AdminDashboardSidebar class="sidebar"></AdminDashboardSidebar>

    <div class="dashboard">
      <h1>
        Results - Batch {{ selectedBatch }}
        <img
          @click="getAllBatches"
          src="../assets/dropdownicon.svg"
          alt=""
          style="
             {
              cursor: pointer;
            }
          "
        />
      </h1>
      <p>Comprises of Batch {{ selectedBatch }} results</p>

      <table class="table table-sm table-borderless table-responsive">
        <thead class="heading">
          <tr>
            <th class="name" scope="col">Name</th>
            <th class="email" scope="col">Email</th>
            <th class="dob" scope="col">
              DOB - Age
              <i
                class="fa fa-sort mx-1"
                aria-hidden="true"
                @click="sort('dob')"
              ></i>
            </th>
            <th class="address" scope="col">Address</th>
            <th class="uni" scope="col">University</th>
            <th class="cgpa" scope="col">
              CGPA
              <i
                class="fa fa-sort mx-1"
                aria-hidden="true"
                @click="sort('cgpa')"
              ></i>
            </th>
            <th class="uni" scope="col">Test Score</th>
          </tr>
        </thead>
        <tbody>
          <!-- <input class="checkbox" type="checkbox"> -->
          
          <tr
            class="mx-1 different-row text-left"
            v-for="entry in entries"
            @click="show(entry.email_address)"
            :key="entry.email_address"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
          
            <td class="text-left">
              {{ entry.first_name }} {{ entry.last_name }}
            </td>
            <td class="text-left">{{ entry.email_address }}</td>
            <td class="text-left">{{ entry.date_of_birth }}</td>
            <td class="text-left">{{ entry.address }}</td>
            <td class="text-left">{{ entry.university }}</td>
            <td class="text-left">{{ entry.cgpa }}</td>
            <td class="text-left">
              {{ entry.score
              }}
            </td>
            <a :href="'mailto:' + entry.email_address">
            <img class="options" src="../assets/optionsicon.svg">
            </a>
          </tr>
          
        </tbody>
      </table>

      <!-- <div class="background" v-if="showDetails">
        <div class="exitPopUp" @click="closePopUp"></div>
        <div ref="inner" class="popup">
          <img src="../assets/entrypopupimage.svg" alt="" />
          <p>Personal Details</p>
          <hr />
          <div class="inputs">
            <div class="input">
              <label for="">Name</label>
              <input type="text" v-model="name" />
            </div>
            <div class="input">
              <label for="">Email</label>
              <input type="email" v-model="email_address" />
            </div>
            <div class="input">
              <label for="">Address</label>
              <input type="text" v-model="address" />
            </div>
            <div class="input">
              <label for="">University</label>
              <input type="text" v-model="university" />
            </div>
            <div class="input">
              <label for="">Course of study</label>
              <input type="text" v-model="course_of_study" />
            </div>
            <div class="input">
              <label for="">Date of birth</label>
              <input type="text" v-model="date_of_birth" />
            </div>
            <div class="input">
              <label for="">CGPA</label>
              <input type="text" v-model="cgpa" />
            </div>
            <div class="input">
              <label for="">CV</label>
            </div>
          </div>

          <div class="btns" v-if="showBtns">
            <ButtonComponent
              @click="showApprove"
              class="approve"
              buttonText="Approve"
              width="125"
              height="48"
              border="2"
            />
            <ButtonComponent
              @click="showDecline"
              class="decline"
              buttonText="Decline"
              width="125"
              height="48"
              border="2"
            />
          </div>
        </div>
      </div> -->

      <div class="approveModal" v-if="approveModal">
        <div class="approveDiv">
          <p>Are you sure you want to approve this application?</p>

          <div class="popUpBtns">
            <ButtonComponent
              @click="approved"
              class="yes"
              buttonText="Yes"
              width="125"
              height="48"
              border="2"
            />

            <ButtonComponent
              @click="closeApprove"
              class="no"
              buttonText="No"
              width="125"
              height="48"
              border="2"
            />
          </div>
        </div>
      </div>
      <div class="approveModal" v-if="declineModal">
        <div class="approveDiv">
          <p>Are you sure you want to decline this application?</p>

          <div class="popUpBtns">
            <ButtonComponent
              @click="declined"
              class="yes"
              buttonText="Yes"
              width="125"
              height="48"
              border="2"
            />

            <ButtonComponent
              @click="closeDecline"
              class="no"
              buttonText="No"
              width="125"
              height="48"
              border="2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="selectBatch" v-if="showBatches" @click="closeBatches">
    <div>
      <h4
        v-for="batch in batches"
        :key="batch.batch_id"
        @click="getByBatch(batch.batch_id)"
      >
        Batch{{ batch.batch_id }}
      </h4>
    </div>
  </div>
</template>

<script>
import AdminDashboardSidebar from "../components/AdminDashboardSidebar.vue";

import axios from "axios";
const moment = require("moment");

export default {
  components: {
    AdminDashboardSidebar,
  },
  data() {
    return {
      entries: [],
      showDetails: false,
      approveModal: false,
      declineModal: false,
      name: "",
      email_address: "",
      address: "",
      university: "",
      course_of_study: "",
      date_of_birth: "",
      cgpa: "",
      upload_CV: null,
      approve: false,
      id: "",
      batches: [],
      showBatches: false,
      showBtns: true,
      selectedBatch: "",
      showEmail: true,
    };
  },
  async mounted() {
    {
      const token = this.$store.state.adminToken
      const response = await axios.get("http://localhost:5500/allApplicant", {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    });
      this.entries = response.data.data;
      console.log(this.entries[0]);
      console.log(response.data.data[0].date_of_birth);
      console.log(
        moment(response.data.data[0].date_of_birth).format("YYYY-MM-DD")
      );
    }
  },
  methods: {
    async getAllBatches() {
      const token = this.$store.state.adminToken
      const allBatches = await axios.get("http://localhost:5500/all_batches", {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    });

      this.batches = allBatches.data.data;

      this.showBatches = true;
    },
    closePopUp() {
      this.showDetails = false;
    },
    async declined() {
      const token = this.$store.state.adminToken
      await axios.post("http://localhost:5500/addStatus", {
        status: "declined",
        email_address: `${this.email_address}`,
      }, {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    });
      this.declineModal = false;
    },
    async approved() {
      const token = this.$store.state.adminToken
      await axios.post("http://localhost:5500/addStatus", {
        status: "approved",
        email_address: `${this.email_address}`,
      }, {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    });

      console.log(this.email_address);

      console.log("working");

      this.closeApprove();
    },
    showApprove() {
      this.approveModal = true;
    },
    showDecline() {
      this.declineModal = true;
    },
    closeApprove() {
      this.approveModal = false;
    },
    closeDecline() {
      this.declineModal = false;
    },
    closeBatches() {
      this.showBatches = false;
    },
    async getByBatch(batch_id) {
      console.log(batch_id);
      const token = this.$store.state.adminToken
      const getOneBatch = await axios.get(
        `http://localhost:5500/batch_applicant/${batch_id}`
      , {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    });


      this.entries = getOneBatch.data.data;
      this.selectedBatch = this.entries[0].batch_id;
    },
     async show(email_address) {
      console.log(email_address);
      const token = this.$store.state.adminToken

      const getApplicant = await axios.get(
        `http://localhost:5500/oneApplicant/${email_address}`
      , {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    });

      if (
        getApplicant.data.data.status == "Approved" ||
        getApplicant.data.data.status == "Declined"
      ) {
        this.showBtns = false;
      }

      this.name =
        getApplicant.data.data.first_name +
        " " +
        getApplicant.data.data.last_name;
      this.email_address = getApplicant.data.data.email_address;
      this.address = getApplicant.data.data.address;
      this.university = getApplicant.data.data.university;
      this.course_of_study = getApplicant.data.data.course_of_study;
      this.date_of_birth = getApplicant.data.data.date_of_birth;
      this.cgpa = getApplicant.data.data.cgpa;
      this.id = getApplicant.data.data.id;

      console.warn(this.id);

      localStorage.setItem("applicantID", this.id);
      
      this.showDetails = true;
    },
    
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* .checkbox{
  margin-left: -50px;
} */

.options{
  margin-left: -30px;
}

tr td:last-of-type{
  padding-left: 35px;
}


img {
  cursor: pointer;
}

.approveModal {
  background: rgba(3, 17, 49, 0.2);
  backdrop-filter: blur(4px);
  width: 125vw;
  height: 100%;
  position: absolute;
  z-index: 99;
  top: 0;
  left: -464px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 20%;
}

.approveModal .approveDiv {
  width: 458px;
  height: 300px;
  /* padding: 75px 94px; */
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.approveModal .approveDiv p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  text-align: center;

  color: #4f4f4f;
}

.popUpBtns {
  margin-top: 48px;
}

.no {
  background: #ffffff;
  color: black;
}

.yes {
  background: #7557d3;
  border-radius: 4px;
  width: 125px;
  height: 48px;
}

.sidebar {
  min-height: 150vh;
}
.container {
  display: flex;
  gap: 47px;
  min-height: 150vh;
}

.dashboard {
  padding-top: 107px;
  /* width: 70%; */
  position: relative;
}

.selectBatch {
  /* width:368px; */
  width: 130vw;
  min-height: 100vh;
  position: absolute;
  left: -343px;
  top: 0;
  height: 100%;
  z-index: 1000;

  position: absolute;
  /* left: 35%; */
  /* transform: translate(-35%, -50%); */
  /* top: 20%; */

  /* From https://css.glass */
  background: trasparent;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(25, 13, 74, 0.3);
}

.selectBatch div {
  width: 368px;
  background: #fff;
  padding: 35px;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 20%;
}

.selectBatch div h4 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* text-align: center; */
  padding: 18px 18px 18px 25px;
  margin-top: 10px;

  color: #4f4f4f;
  border-radius: 10px;
}

.selectBatch div h4:hover {
  border-left: solid 7px #7557d3;
  cursor: pointer;
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

.dashboard p {
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #4f4f4f;
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
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;

  color: #4f4f4f;
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
  padding-top: 25px;

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

.entries {
  margin-top: 32px;
  /* width: 100%; */
}

.header {
  background: #2b3c4e;

  font-family: "Lato";
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: #ffffff;
  border-radius: 0;
  display: flex;
  /* justify-content: space-between; */
  gap: 70px;
  padding: 14px 42px;
}

.entry:nth-child(1) {
  border-left: solid 7px #7557d3;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  margin-top: 20px;
  text-align: center;
}

.entry {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #4f4f4f;
  padding: 24px 21px 20px 25px;
  display: flex;
  gap: 70px;
  /* justify-content: space-between; */
  text-align: center;

  border-radius: 8px 0px 0px 8px;
  cursor: pointer;
  box-sizing: border-box;
}

.entry span:not(:last-child) {
  /* background: red; */
  /* width: fit; */
  width: 190px;
  text-align: left;
}
.header span:not(:last-child) {
  width: 190px;
  text-align: left;
}

.exitPopUp {
  /* background: red; */
  z-index: 99;
  width: 73.3vw;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
}

.popup {
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

.popup p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 42px;

  color: #7d7d7d;
}

.popup hr {
  margin-top: 14px;
}

.popup img {
  width: 179px;
  height: 179px;
}

.inputs {
  margin-top: 32px;
}

input {
  height: 48px;
  border: 1px solid #cdcfd6;
  border-radius: 4px;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #b1b1b1;
}

.popup .inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 36px;
  grid-column-gap: 32px;
}

.btns {
  margin-top: 42px;
  text-align: center;
}

.approve {
  margin-right: 24px;
}

.decline {
  background: #fff;
  border: 1px solid #cecece;
  color: #4f4f4f;
}

.background {
  height: 100%;
  background: rgba(3, 17, 49, 0.2);
  backdrop-filter: blur(4px);
  position: absolute;
  top: 0;
  /* left: 0; */
  right: 0;
  z-index: 99;
}

.hide {
  position: absolute;
  top: 50vh;
  left: 50vw;
  z-index: 99;
}
table {
  margin-top: 30px;
  width: 930px;
  text-align: left;
  border-collapse: collapse;
}

thead {
  background: #2b3c4e;
  color: white;
  width: 1042px;
  height: 46px;
  font-family: Lato;
  font-size: 14px;
  line-height: 17px;
  margin-right: 200px;
}

td {
  padding: 20px 0;
}

td div {
  margin-bottom: 10px;
  margin-top: 11px;
  padding: 10px;
}

tr {
  height: 45.78px;
  border-left: 10px solid #ffffff;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}

tbody:before {
  content: "@";
  display: block;
  line-height: 20px;
  text-indent: -99999px;
}

tbody tr:hover {
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 10px solid #7557d3;
}

.batch1 {
  display: flex;
}

img {
  width: 12px;
  height: 12px;
  margin-left: 30px;
  margin-top: 20px;
}

h6 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  color: #2b3c4e;
}

p {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #2b3c4e;
}
</style>

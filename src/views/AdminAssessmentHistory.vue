<template>
  <div class="container">
    <AdminDashboardSidebar />

    <div class="dashboard">
      <h1>Assessment Template</h1>

      <div class="updates-and-assessment">
        <table>
          <thead class="table-header">
            <td>Batch</td>
            <td>Date Composed</td>
            <td>No of Questions</td>
            <td>Time Allocated</td>
          </thead>

          <tbody v-for="history in histories" v-bind:key="history.client_id">
            <tr>
              <td>
                <div>Batch {{ history.batch_id }}</div>
              </td>
              <td>
                <div>{{ getHumanDate(history.created_at) }}</div>
              </td>
              <td><div>5</div></td>
              <td><div>30 min</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AdminDashboardSidebar from "../components/AdminDashboardSidebar.vue";
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      histories: "",
    };
  },
  components: {
    AdminDashboardSidebar,
  },
  async mounted() {
    const res = await axios.get("http://localhost:5500/batches");
    console.log(res.data.data);
    this.histories = res.data.data;
    console.log(this.histories.history.created_at);
  },
  methods: {
    getHumanDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 47px;
}

.dashboard {
  padding-top: 107px;
  padding-right: 40px;
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
  /* gap: 24px; */

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
  width: 100%;
}

.entry:first-child {
  background: #2b3c4e;

  font-family: "Lato";
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: #ffffff;
  border-radius: 0;
}

.entry:nth-child(2) {
  border-left: solid 7px #7557d3;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  margin-top: 20px;
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
  justify-content: space-between;

  border-radius: 8px 0px 0px 8px;
}

table {
  margin-top: 30px;
  margin-left: 25px;
  width: 720px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}

td {
  padding: 0;
}

td div {
  margin-bottom: 10px;
  margin-top: 11px;
  padding: 10px;
}

.table-header {
  background-color: #2b3c4e;
  color: #fff;
  width: 946.48px;
  height: 47.78px;
}

tr {
  width: 946.48px;
  height: 45.78px;
  border-left: 10px solid #ffffff;
}

tr:hover {
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 10px solid #7557d3;
}
</style>

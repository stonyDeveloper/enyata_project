<template>
  <div class="container">
    <AdminDashboardSidebar />

    <div class="dashboard">
      <div class="header_and_timer">
        <h1>Compose Assessment</h1>

        <div class="timer">
          <p>Set Time</p>
          <div class="time">
            <div class="min">
              <h3 ref="timer" contenteditable class="val">{{ time_allocated }}</h3>
              <sub style="margin-top: 44px">min</sub>
            </div>
            <div class="polygon">

            </div>
            <span>00<sub>sec</sub></span>
            <div class="polygon">
  
            </div>
          </div>
        </div>
      </div>

      <div class="assessment">
        <p>{{ questionNumber + 1 }} / 5</p>

        
          <div class="choose_file">
            <label for="upload">
              <span>+</span><span>Choose file</span> 
            </label>
          </div>

          <form>

          <div class="questions">
            <p>Questions</p>
            <textarea
              placeholder="1. How many countries are in Africa?"
              v-model= "questions[questionNumber].question"
              required
          
            ></textarea>
          </div>

          <div class="options">
            <div class="input_field" v-for="(option, index) in questions[questionNumber].options" :key="index">
              
              <input
              v-on:dblclick="chooseCorrect(index)"
              type="text"
              v-model="option.text"
              />
            </div>
           
          </div>

          </form>

          <div class="btns">
            <ButtonComponent
              @click="prev"
              buttonText="Previous"
              width="125"
              height="41"
              border="2"
            >
            </ButtonComponent>

            <ButtonComponent
              @click="next"
              buttonText="Next"
              width="125"
              height="41"
              border="2"
            >
            </ButtonComponent>
          </div>

          <div class="submit">
            <ButtonComponent
            @click="uploadQuestions"
              buttonText="Save"
              width="205"
              height="41"
              border="2"
            >
            </ButtonComponent>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminDashboardSidebar from "../components/AdminDashboardSidebar.vue";
import axios from "axios";

export default {
  data() {
    return{
        time_allocated: 0,
        questions: [
        {  
          question: "",
           options: [
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false}
          ],
          img: null
        }
        ],
        questionNumber: 0,
        isCorrect: false,
      } 
    
  },
  methods: {
    async next(){   
        if(this.questionNumber < 5) {
          this.questions.push({
          question: "",
          options: [
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false},
            {text: "", correct: false}
          ]
        })
          this.questionNumber++
        }  
    },
    chooseCorrect(index){
     const options = this.questions[this.questionNumber].options

      options.forEach((option) => {
        option.correct = false;
      });
      options[index].correct = true;
    },
    prev(){
      this.questionNumber--
    },
    async uploadQuestions(){
       await axios.post('http://localhost:5500/assessments', {
        questions: JSON.stringify(this.questions),
        time_allocated: this.time_allocated
      })      
    }

  },
  components: {
    AdminDashboardSidebar,
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

.header_and_timer {
  display: flex;
  justify-content: space-between;
}

.timer p:first-of-type {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b4e2e;
}

.timer p:nth-of-type(2) {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2b4e2e;
}

.timer p:nth-of-type(2) span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
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
  margin-top: 62px;
}

.assessment p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #2b3c4e;
}

.choose_file {
  margin-top: 21px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  width: 456px;
  height: 108px;
  border: 1.55172px dashed #2b3c4e;
  border-radius: 6.2069px;
}

.choose_file input {
  /* display: none; */
  border: none;
  outline: none;
  /* background: blue; */
}

.choose_file label {
  cursor: pointer;
}

.questions {
  margin-top: 25px;
}

.questions p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}

.questions textarea {
  margin-top: 5px;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  width: 100%;
  height: 144px;
}

.options {
  margin-top: 25px;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
  margin-bottom: 5px;
}

.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 25px;
  grid-column-gap: 64px;
}

.options input {
  width: 100%;
  height: 41px;
}

.btns {
  margin-top: 52px;
  padding-left: 85px;
  padding-right: 85px;
  display: flex;
  justify-content: space-between;
}

.btns > * {
  background-color: #2b3c4e;
}

.submit {
  text-align: center;
  margin-top: 55px;
}

.submit > * {
  background-color: #cecece;
}

.timer {
  display: flex;
  flex-direction: column;
}

.timer p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b4e2e;
}

/* .time {
    display: flex;
} */

.timer {
  display: flex;
  flex-direction: column;
}

.timer p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #4f4f4f;
  margin-bottom: 4px;
}

.time {
  display: flex;
  align-items: center;
}

.time span {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  color: #2b3c4e;
}

.time sub {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #4f4f4f;
  margin-right: 5px;
}

.val {
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;

  text-align: center;

  color: #2b4e2e;
}
.min {
  display: flex;
}
</style>

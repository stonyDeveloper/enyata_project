<template>
  <div class="container">
    <DashboardSidebar></DashboardSidebar>

    <div class="assessment">
      <div class="assessment-and-timer">
        <div>
          <h1>Take Assessment</h1>

          <p>
            Click the finish button below to submit assessment, you can go back
            at any time to edit your<br />
            answers.
          </p>
        </div>

        <div class="right">
          <p>Timer</p>
          <div class="span">
            <div>
              <span class="time">
                {{ mins }}
                <span class="minute">mins</span>
              </span>
            </div>
            <div>
              <span class="seconds time">
                0{{ secs }}
                <span class="minute">sec</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div>
          <h6 class="text-center question-heading">
            Question {{ currentQuestion + 1 }}
          </h6>
          <div
            v-for="(question, index) in questions"
            :key="index"
            v-show="index === currentQuestion"
          >
            <h2 class="realquestion">{{ question.question }}</h2>
            <div class="d-flex justify-content-center mt-5">
              <div class="mb-5">
                <div class="align-items-center mb-3">
                  <div class="gap-3">
                    <input
                      id="question.options[0]"
                      type="radio"
                      value="0"
                      v-model="userAnswers[currentQuestion]"
                    />
                    <label for="question.options[0]">
                      <!-- {{questions[currentQuestion].optiona}} -->
                      {{ question.options[0].text }}
                    </label>
                  </div>
                  <div class="gap-3">
                    <input
                      id="question.options[1]"
                      type="radio"
                      value="1"
                      v-model="userAnswers[currentQuestion]"
                    />
                    <label for="question.options[1]">
                      <!-- {{questions[currentQuestion].optionb}} -->
                      {{ question.options[1].text }}
                    </label>
                  </div>
                  <div class="gap-3">
                    <input
                      id="question.options[2]"
                      type="radio"
                      value="2"
                      v-model="userAnswers[currentQuestion]"
                    />
                    <label for="question.options[2]">
                      <!-- {{questions[currentQuestion].optionc}} -->
                      {{ question.options[2].text }}
                    </label>
                  </div>
                  <div class="gap-3">
                    <input
                      id="question.options[3]"
                      type="radio"
                      value="3"
                      v-model="userAnswers[currentQuestion]"
                    />
                    <label for="question.options[3]">
                      <!-- {{questions[currentQuestion].optiond}} -->
                      {{ question.options[3].text }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <h2 class="text-center question_name">
            {{questions[currentQuestion]?.questions}}

           
            
        </h2> -->
        </div>
      </div>
      <div class="two-buttons">
        <button class="second-button" @click="preQuest">Previous</button>

        <router-link to="/assessment_completed">
          <ButtonComponent
            @click="submit"
            :class="btnBg()"
            buttonText="Finish"
            width="205"
            height="41"
            border="2"
          ></ButtonComponent>
        </router-link>

        <button @click="nextQuest" :class="btnNextQuest()">Next</button>
      </div>
    </div>
  </div>

  <!-- <div v-for="(question, index) in questions" :key="index.question">
   <p>{{ question }}</p>
  </div> -->
</template>

<script>
import axios from 'axios'
import DashboardSidebar from '../components/DashboardSidebar.vue'
export default {
  name: "QuestionPage",
  components:{
            DashboardSidebar
        },
  data() {
        return {
            mins: 30,
            secs: 0,
             currentQuestion: 0,
             selectedAnswers:{},
            showScore: false,
            score:0,
            btn: "btn",
            btnFinish: "btn-finish",
            btnNext: "second-button",
            noNext: "second-btn-drop",
            countDown : 30,
            timer:null,
            startQuiz: false,
            userAnswers: new Array().fill(""),
            questions: [],
        }
    },
    computed:{
    },
    methods: {
        next(){
            this.currentQuestion ++
        },
      btnBg(){
        if(this.currentQuestion === 4){
        return this.btnFinish
        }
          return this.btn
      },
        btnNextQuest(){
        if(this.currentQuestion === 5){
          return this.noNext
          }
        return this.btnNext
      },
        startTimer(duration) {
            let timer = duration
            setInterval(() => {
                this.mins = parseInt(timer / 60, 10);
                this.secs = parseInt(timer % 60, 10);
                this.mins = this.mins < 10 ? "0" + this.mins : this.mins;
                this.secs = this.secs < 10 ? "0" + this.secs : this.secs;
                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        },


        nextQuest(){
          if(this.currentQuestion === this.questions.length - 1) return
           this.currentQuestion += 1
        },
        preQuest(){
          if(this.currentQuestion === 0) return
           this.currentQuestion -= 1
        },
       async submit(){
           this.$router.push('/assessment_completed');
        //    const timeFinish = {mins:this.mins, secs:this.secs}
        //    this.$store.commit("setTimeFinish", timeFinish)
        const assessmentQuestions = JSON.parse(localStorage.getItem("questions"))
        console.log(assessmentQuestions)

        for (let i =0; i < assessmentQuestions.length; i++){
                    const options = assessmentQuestions[i].options
                    const answer = Number(this.userAnswers[i])
                    console.log(options)
                    console.log(answer)
                    
                    if(options[answer].correct){
                       this.score++

                    }
                    console.warn(this.score)
                    
            }

            const sendResult = await axios.post('http://localhost:5500/assessments_results',{
                score: this.score,
                email_address: this.$store.state.user.email_address
                
            })

            console.log(sendResult)
            







//         for (let i =0; i < assessmentQuestions.length; i++){
//     const options = assessmentQuestions[i].options
//         // for (let option in options) {
//         //     console.log(option)
//         //     console.log(options[option].correct)

//         //     const positions = []
//         // if(options[option].correct === true){
//         //     positions.push(option)
//         // }

// //         console.log(positions)
// //         }



// // }



//     

       },
       isDisabled(){
         if(this.currentQuestion === 5) return true
       }
    },
    async created(){
       const resp = await axios.get("http://localhost:5500/questions")
       console.log(resp)

        //  console.log(resp.data.data)
        this.questions = JSON.parse(resp.data.data[0].questions);
        // console.log(this.questions)
        //   console.log(resp.data.data)

        localStorage.setItem("questions", JSON.stringify(this.questions))

        // const testStore = localStorage.getItem("questions")

        // console.log(testStore)

       },
   mounted() {
        const thirtyMins = 60 * 30
         this.startTimer(thirtyMins)
    },
    watch:{
      userAnswers:{
        handler(userAnswers){
          console.log(userAnswers)
        },
        deep:true
      },
      secs(secs){
        if(Number(secs)===0 && Number(this.mins)===0){
         this.submit()
          // clearInterval(this.startTimer())
        }
      }
    }
  }
</script>

<style scoped>
.gap-3 {
  display: flex;
  align-items: baseline;
  margin: 30px 5px;
}

.gap-3 label {
  margin-left: 10px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #2b3c4e;
}
input[type="radio"] {
  width: 12px;
  height: 12px;
  background: #7557d3;
}
label {
  font-size: 18px;
}
.question_name {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
}
.options_name {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}
li {
  list-style: none;
}
.time {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
}
.span {
  display: flex;
}
.seconds {
  padding-left: 30px;
}
.minute {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}
.containers {
  display: flex;
  justify-content: space-between;
}

.question-heading {
  margin-top: 64px;
}
.last-button {
  background: #cecece;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  color: white;
  border: none;
}
.second-button {
  background: #ffffff;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  width: 125px;
  height: 41px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  margin: 50px 78px 30px 134px;
}
.second-btn-drop {
  background: #ffffff;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  width: 125px;
  height: 41px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: no-drop;
  margin: 50px 78px 30px 134px;
}
.first-button {
  background: white;
  border-radius: 4px;
  color: black;
  width: 125px;
  height: 41px;
  border: none;
}
.second-button:hover {
  color: white;
  background: #7557d3;
}
.btn {
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  background: #cecece;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  margin-top: 130px;
  font-size: 16px;
  line-height: 19px;
  color: white;
  cursor: no-drop;
}
.btn-finish {
  border: none;
  box-sizing: border-box;
  border-radius: 4px;
  background: #7557d3;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  margin-top: 130px;
  font-size: 16px;
  line-height: 19px;
  color: white;
}
.two-buttons {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.dot-text {
  width: 510px;
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 14px;
  color: #2b3c4e;
  margin-left: 0px;
}
.question-page {
  text-align: center;
}
.list {
  /* list-style-image: url("../assets/Rectangle.png"); */
  display: block;
  line-height: 3.333em;
  padding: 0 10px 0 20px;
  text-align: left;
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
h6 {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
h2 {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
}
.container > p {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
.right h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
}
.p-tag {
  font-family: Lato;
  font-style: normal;
  font-size: 30px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

.container {
  display: flex;
  gap: 47px;
}

.assessment {
  padding-top: 107px;
  padding-right: 82px;

  width: 100%;
}
.assessment h1 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;

  color: #2b3c4e;
}

.assessment p {
  margin-top: 14px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}
.assessment-and-timer {
  display: flex;
  justify-content: space-between;
}

.timer p:first-child {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #4f4f4f;
}

.timer p:nth-of-type(2) {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #2b3c4e;
}

.timer p:nth-of-type(2) span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #4f4f4f;
}

.finish {
  margin-top: 130px;
}

.realquestion {
  margin-top: 14px;
}
</style>

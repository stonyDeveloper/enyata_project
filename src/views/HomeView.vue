<template>
  <NavBar></NavBar>
  <div class="home">
    <div class="home-content">
      <div class="home-text">
        <h2>Ever had a Dream of<br/> Becoming a Software <br/> <span>Engineer?</span></h2>

        <p>
          Join enyata academy today and bring your long <br/> awaiting dream to
          reality.
        </p>
        <!-- <router-link to="/signup"> -->
        <ButtonComponent 
          @click="registerButton"
          class="btn"
          buttonText="Register Now"
          width="152"
          height="48"
          border = "2"
        />

        <LoadingState v-if="loading"></LoadingState>
        <!-- </router-link> -->
        <div class="registration_open" v-if="applicationOpen">
          <img src="../assets/registrationopenicon.svg" alt="">
          <div class="registration_paragraph">Registration not open</div>
        </div>
      </div>

      <div class="home-image">
        <img src="../assets/home-img.svg" alt="" />
      </div>
    </div>

    <div class="why_us">
     <div class="line"></div> <h2>Why us?</h2>

     <div class="cards">
      <div class="grey-card">
        <h3>Learn from the best</h3>

        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.</p>
      </div>
      <div class="white-card">
        <h3>100% online classes</h3>

        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.</p>
      </div>
      <div class="grey-card">
        <h3>Get paid while learning</h3>

        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.</p>
      </div>
      <div class="white-card">
        <h3>Work on real project</h3>

        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.</p>
      </div>
     </div>
    </div>

    
  </div>
  <footer>
      <div>Copyright © Enyata 2021
</div>
    </footer>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import LoadingState from "@/components/LoadingState.vue";
import { mapState } from "vuex";
const moment = require('moment');
export default {
  name: "HomeView",
  data(){
    return{
      applicationOpen: false
    // application_date: ''

    }
    

  },
  computed: {
    ...mapState([ "loading"])
  },
  methods: {
   async registerButton(){
      
       const response =  await axios.get('http://localhost:5500/batches')

      //  console.log(response)

       const applicationClosureDate = response.data.data[response.data.data.length - 1].application_closure_date

       console.log(applicationClosureDate)
      

      //  console.log(moment(applicationDate, 'DD.MM.YY'))



       const applicationDate = moment().add(10, 'days');
       console.log(applicationDate)

      const dateFormat = 'YYYY-MM-DD'
      const userCanApply = moment(applicationDate, dateFormat).isBefore(moment(applicationClosureDate, dateFormat))

      localStorage.setItem('application', userCanApply)

      console.log(userCanApply)

      if(userCanApply){
        this.applicationOpen = false;
        this.$router.push("/signup")
      }
       
        this.applicationOpen = true;  
    }
  },
  components: { LoadingState }
  
};
</script>

<style>
*{
  font-family: 'Poppins';
  margin: 0;
}

.home {
  /* background: blue; */
  
  padding-left: 133px;
  padding-right: 133px;
}

.home-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: black; */
  margin-top: 88px;
}

.home-content .home-text h2{
  font-style: normal;
font-weight: 700;
font-size: 40.9082px;
line-height: 57px;
letter-spacing: 0.035em;

color: #211F26;
}

.home-content .home-text p{
  font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
letter-spacing: 0.02em;
color: rgba(33, 31, 38, 0.71);
}

.home-content .home-text span{
  color: #7557D3;
}

.home-content .home-image{
  width: 582.01px;
height: 490px;
}

.home-content .home-image img{
  width: 100%;
  height: 100%;
}

.btn{
  margin-top: 32px;
}

.why_us{
  margin-top: 134px;
  position: relative;
  width: 100%;
}

.line{
  width: 34px;
  height: 2px;
  border-radius: 10px;
  background-color:#FDC840;

}

.why_us h2{
  font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 140%;


letter-spacing: 0.01em;

color: #211F26;
position: absolute;
top: -16px;
left: 50px;
}

.cards{
  margin-top: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.cards h3{
  font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 140%;

letter-spacing: 0.01em;

color: #211F26;
}

.cards p{
  font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 156%;


letter-spacing: 0.01em;

color: rgba(33, 31, 38, 0.6);
}

.why_us .cards .grey-card{
  /* width: 292px; */
height: 202px;
background: rgba(117, 87, 211, 0.1);
padding: 24px;
}

.why_us .cards .white-card{
  /* width: 292px; */
height: 202px;
background:#FFFFFF;
padding: 24px;
}

footer{
  background:  #7557D3;
  
padding: 55px ;


}

footer div{
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 156%;
letter-spacing: 0.01em;
text-align: center;
color: #FFFFFF;

}

.registration_open{
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 25px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.02em;
}

.registration_open .registration_paragraph{
  letter-spacing: 0.02em;
color: rgba(255, 0, 0, 0.71);
}
</style>

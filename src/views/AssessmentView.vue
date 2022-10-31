<template>
    <div class="container">
    <DashboardSidebar></DashboardSidebar>

    <div class="assessment">
        <div class="assessment-and-timer">
        <div>
        <h1>Take Assessment</h1>

        <p>Your Application is currently being review, you will be notified if successful</p>
        </div>

        <div class="timer">
            <CountDownComponent
            ref="count"
            :year = "year"
            :month = "month"
            :date = "date"
            :hour = "hour"
            :minute = "minute"
            :second = "second"
            :millisecond ="millisecond"

            />
            
        </div>
        </div>


        <div class="center-content">
            <div class="icon">
                <img src="../assets/hourglass.svg" alt="">
            </div>
            <p>We have 4 days left until the next assessment<br>
Watch this space</p>


            <ButtonComponent
            @click="countDown"
 buttonText="Take Assessment"
          width="205"
          height="41"
          border = "2"></ButtonComponent>
         
        </div>
    </div>
    </div>
</template>

<script>
import DashboardSidebar from '../components/DashboardSidebar.vue'
import CountDownComponent from '../components/CountDownComponent.vue'
import axios from 'axios'

    export default {
        components:{DashboardSidebar, CountDownComponent},
        data(){
            return {
            year : "2022",
            month : "10",
            date : "17",
            hour : "7",
            minute : "30",
            second : "5",
            millisecond : "31"
            }
        },

        methods:{
           async countDown(){
            // const status = localStorage.getItem("status")

            // console.log(status)
            
            // 

            const email_address = this.$store.state.user.email_address
            // console.log(email_address)

            const assessment = await axios.get(`http://localhost:5500/oneApplicant/${email_address}`)

            const result = assessment.data.data.score

            const status = assessment.data.data.status
            console.log(status)

        


            if(status == "approved" && result == null){
                const questions = await axios.get('http://localhost:5500/questions')
            
            console.log(questions)
            // this.$refs.count.showRemaining();

            console.log('ttttt')
            
            this.$router.push('/assessment/questions')
            } else{
                alert("Your application is pending or declined, or you've taken this assessment!!")
            }
            
            

            
           },

        },
        mounted(){
            
        }
            
        
        
    }
</script>


<style scoped>
.container{
    display: flex;
    gap: 47px;
}

.assessment{
    padding-top: 107px;
    padding-right: 82px;
   
    width: 100%;

}
.assessment h1{
    font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 43.5555px;
line-height: 52px;
letter-spacing: -0.02em;

color: #2B3C4E;
}

.assessment p{
    margin-top: 14px;
    font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #2B3C4E;

}

.assessment-and-timer{
    display: flex;
    justify-content: space-between;
    
    
}

.timer p:first-child{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #4F4F4F;
}

.timer p:nth-of-type(2) {
  font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 58px;
color: #2B3C4E;    
}

.timer p:nth-of-type(2) span{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #4F4F4F;
}

.center-content{
    
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.center-content p{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16.7273px;
line-height: 20px;
text-align: center;
margin-bottom: 24px;
color: #4F4F4F;
}

</style>
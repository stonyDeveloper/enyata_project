<template>
    <div class="container">
    <DashboardSidebar></DashboardSidebar>

    <div class="assessment">
        <div class="assessment-and-timer">
        <div>
        <h1>Assessment Completed</h1>

        <p>Thank you!</p>
        </div>

        
        </div>


        <div class="center-content">
            <div class="icon">
                <img src="../assets/confetti.svg" alt="">
            </div>
            <p>We have received your assessment test, we will get back to you soon. <br>
Best of luck</p>

            
<router-link to="/dashboard">
    <ButtonComponent
 buttonText="Home"
          width="205"
          height="41"
          border = "2"></ButtonComponent>
          </router-link>
        </div>
    </div>
    </div>
</template>

<script>
import DashboardSidebar from '../components/DashboardSidebar.vue'

    export default {
        components:{
            DashboardSidebar
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
margin-top: 21px;
margin-bottom: 34px;
color: #4F4F4F;
}

</style>
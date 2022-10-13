<template>
    <div class="container">
    <DashboardSidebar></DashboardSidebar>

    <div class="assessment">
        <div class="assessment-and-timer">
            <div>
                <h1>Take Assessment</h1>

                    <p>Click the finish button below to submit assessment, you can go back at any time to edit your<br>
                answers.</p>
            </div>

            <div class="timer">
                <p>Timer</p>
                <p>00<span>min</span>010<span>sec</span></p>
            </div>
        </div>

        <div class="questions">
            <div class="question">
                <p>Question 1</p>

                <h2>What is the purpose of HDR technology?</h2>
            </div>

            <div class="btns">
                <ButtonComponent
                    buttonText="Previous"
                    width="125"
                    height="41"
                    border = "2">
                </ButtonComponent>

                <ButtonComponent
                    buttonText="Next"
                    width="125"
                    height="41"
                    border = "2">
                </ButtonComponent>
            </div>

            <div class="finish">
            <ButtonComponent 
         buttonText="Finish"
                    width="205"
                    height="41"
                    border = "2">
            </ButtonComponent>
            </div>
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

.questions{
    margin-top: 64px;
}

.question p{
    font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #2B3C4E;
}

.question h2{
  font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #2B3C4E;
margin-top: 14px;  
}

.btns{
    margin-top: 319px;
    display: flex;
    justify-content: center;
    gap: 220px;
    margin-bottom: 80px;

}

.finish{
    text-align: center;
    margin-bottom: 206px;
}



</style>
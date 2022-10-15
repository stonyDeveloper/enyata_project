<template>
 <div class="container">

    <DashboardSidebar></DashboardSidebar>

    <div class="dashboard">
        <h1>Dashboard</h1>

        <p>Your Application is currently being review, you will be notified if successful</p>

        <div class="date-and-status">
        <div class="application-date">
        <div class="title">Date of Application  </div>

        <div class="date">09.09.19</div>

        <div class="date-indicator"></div>

        <div>4 days since applied</div>

        </div>

        <div class="application-status">
            <div class="title">Application Status  </div>

        <div class="status">Pending</div>

        <div class="status-indicator"></div>

        <div>We will get back to you</div>

        </div>
        </div>

        <div class="updates-and-assessment">
            <div class="updates">
                <h4>Updates</h4>
                <hr>
                <hr>
                <hr>
                <hr>
            </div>

            <div class="assessment">
                <h4>Take Assessment</h4>
                
                <div class="content">
                                <div>We have 4 days left until the next assessment
Watch this space</div>
<ButtonComponent
 buttonText="Take Assessment"
          width="205"
          height="41"
          border = "2"></ButtonComponent>
                </div>
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

<style  scoped>

.container{
    display: flex;
    gap: 58px;
    
}

.dashboard{
    padding-top: 107px;
}

.dashboard h1{
    font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 43.5555px;
line-height: 52px;
letter-spacing: -0.02em;

color: #2B3C4E;
}

.title{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;


color: #4F4F4F;

}

.dashboard p{
    margin-top: 14px;
    font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #2B3C4E;

}

.date-and-status{
    margin-top:61px;
}

.date-and-status .date{
   font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 58px;
color: #2B3C4E;
margin-top: 11px; 
}

.date-indicator{
    width: 148px;
    height: 4px;
    background:#006DF0;
    border-radius: 4px;
    margin-top: 9px;
}

.status-indicator{
    width: 148px;
    height: 4px;
    background:
#F09000;
    border-radius: 4px;
    margin-top: 9px;
}

.application-date div:last-child{
   font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
margin-top: 9px;

color: #4F4F4F; 
}

.date-and-status{
    display: flex;
    gap: 84px;
}

.application-status .status{
    font-family: 'Lato';
font-style: normal;
font-weight: 300;
font-size: 48px;
line-height: 58px;
color: #2B3C4E;
margin-top: 11px;
}

.application-status div:last-child{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
margin-top: 9px;

color: #4F4F4F;
}

.updates-and-assessment{
    margin-top: 97px;
    display: flex;
    gap:67px;
}

.updates-and-assessment h4{
    font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;


letter-spacing: -0.02em;

color: #2B3C4E;
}

.updates{
    padding: 25px 35px 99px 35px;
    border: 1px solid #ECECF9;
border-radius: 4px;
height: 453px;

}

.assessment{
     padding: 25px 35px 99px 35px;
    border: 1px solid #ECECF9;
border-radius: 4px;
height: 453px;
}

.assessment .content{
   font-family: 'Lato';
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

color: #4F4F4F; 
}

.updates hr:first-of-type{
    margin-top: 87px;
}

.updates hr{
    width:412px;
    margin-bottom: 74px;
}

</style>
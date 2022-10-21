<template>
    <div class="sidebar">
        <div class="bio">
            <div class="picture">
                <img src="../assets/dashboardimg.svg" alt="">
            </div>

            <div class="name">
                {{$store.state.user.first_name}} {{$store.state.user.last_name}}
            </div>

            <div class="email">{{$store.state.user.email_address}}</div>
        </div>

        <div class="routes">
            <router-link to="/dashboard">
            <div class="route">
                <img src="../assets/dashboardicon.svg" alt="">
                
                <span>Dashboard</span>
                
            </div>
            </router-link>


            <router-link to="/assessment">
            <div class="route">
                <img src="../assets/assessmenticon.svg" alt="">
                
                <span>Assessment</span>
                
            </div>
            </router-link>
            <div class="route logout">
                <img src="../assets/logouticon.svg" alt="">

                <router-link to="/"><span>Log Out</span></router-link>
            </div>

            
        </div>
        

    </div>
</template>

<script>
// import axios from 'axios'
    export default {
        name: "DashboardSidebar",
        data(){
                return{
                name: "",
                email: ""
                }
            },
        mounted(){
            
        
    }
}
</script>

<style scoped>
.sidebar{
    width: 292px;
    
    min-height: 100vh;
    
border-radius: 8px;
background: #FFFFFF;
box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
}



.bio{
    height: 255px;
    background: #7557d3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.name{
    font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
letter-spacing: -0.02em;

color: #FFFFFF;
margin-top: 15px;
}

.email{
    font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 16px;
line-height: 19px;


letter-spacing: -0.02em;

color: #FFFFFF;
margin-top: 5px;
}

.routes{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top:28px;
    
}
.routes .route{
    /* margin-left:43px; */
    padding-left: 43px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-left: 4px solid #ffffff; 
    display: flex;
    padding-right: 132px;
    

}

.routes .route img{
    margin-right:17px;
}

.routes .route:nth-child(1){
    /* margin-top: 42px; */
     
}

.routes .route:last-child{
    margin-top: px;
}

a{
    text-decoration: none;
    color: #2B3C4E;
}

.router-link-exact-active{
  border-left: 4px solid #7557D3;;
  font-weight: 700;
font-size: 16px;
line-height: 19px;


color: #2B3C4E;
}

.logout{
    margin-top: 57px;
}
</style>
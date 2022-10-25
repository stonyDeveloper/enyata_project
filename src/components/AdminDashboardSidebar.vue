<template>
    <div class="sidebar">
        <div class="bio">
            <div class="picture">
                <img src="../assets/dashboardimg.svg" alt="">
            </div>

            <div class="name">
                {{$store.state.admin[0].name}}
            </div>

            <div class="email">{{$store.state.admin[0].email_address}}</div>
        </div>

        <div class="routes">
            <router-link to="/admin_dashboard">
            <div class="route">
                <img src="../assets/dashboardicon.svg" alt="">

                <span>Dashboard</span>
            </div>
            </router-link>
            <router-link to="/admin_create_application">
            <div class="route">
                <img src="../assets/plusicon.svg" alt="">

                <span>Create Application</span>
            </div>
            </router-link>
            <router-link to="/admin_entries">
            <div class="route">
                <img src="../assets/application_entries_icon.svg" alt="">

                <span>Application Entries</span>
            </div>
            </router-link>
            <router-link to="/admin_compose_assessment">
            <div class="route">
                <img src="../assets/compose_assessment_icon.svg" alt="">

                <span>Compose Assessment</span>
            </div>
            </router-link>
            <router-link to="/admin_assessment_history">
            <div class="route">
                <img src="../assets/assessment_history_icon.svg" alt="">

                <span>Assessment History</span>
            </div>
            </router-link>
            <div class="route">
                <img src="../assets/results_icon.svg" alt="">

                <span>Results</span>
            </div>
            <router-link to="/admin_profiles_and_settings">
            <div class="route">
                <img src="../assets/settings_icon.svg" alt="">

                <span>Settings</span>
            </div>
            </router-link>
            <div class="route">
                <img src="../assets/logouticon.svg" alt="">

                <router-link to="/admin_login"><span>Log Out</span></router-link>
            </div>

            
        </div>
        

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "AdminDashboardSidebar",
        data(){
                return{
                name: "",
                email: ""
                }
            },
        async mounted(){
            const adminEmail = this.$store.state.admin[0].email_address
            const response = await axios.get(`http://localhost:5500/oneAdmin/${adminEmail}`)

            console.log(response)
        }
    }
</script>

<style scoped>
.sidebar{
    /* width: 292px; */
    
    min-height: 100vh;
    
border-radius: 8px;
background: #FFFFFF;
box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
/* padding-right: 100px; */
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
    /* margin-right: -500px; */
    width: 300px;
    
}
.routes .route{
    /* margin-left:43px; */
    padding-left: 43px;
    padding-top: 10px;
    padding-bottom: 28px;
    /* margin-right: 65px; */
    border-left: 4px solid #ffffff;
    display: flex;

    

}

.route span{
    display: inline-block;
}

.routes .route img{
    margin-right:17px;
}

.routes .route:nth-child(1){
    /* margin-top: 42px; */
    /* border-left: 4px solid #7557D3;  */
}

.routes .route:last-child{
    /* margin-top: 231px; */
}

a:first-child{
    
    margin-top: 40px;
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


</style>
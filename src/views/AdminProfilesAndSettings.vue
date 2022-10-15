<template>
  <div class="container">
    <AdminDashboardSidebar />

    <div class="dashboard">
      <h1>Profiles and Settings</h1>
      <p class="header_p">Helps you set admin profile and give other users permissions</p>

      <div class="profile_and_timer">
        <div class="profile">
            Admin Profile
        </div>

        <div class="timer">
            Timer Settings
        </div>
      </div>

      <div class="profile_settings">
        <h5>Profiles Setting</h5>

        <ButtonComponent class="edit_btn"
          buttonText="Edit"
          width="127"
          height="38"
          border = "3"
        />
      </div>



      <form>
      <div class="profile_image">
        <div class="image">
            <img src="../assets/profile_image_icon.svg" alt="">
        </div>

        <p class="upload">Upload new image</p>

        <p class="remove">X Remove</p>
      </div>

      <div class="inputs">
        <div class="name">
            <label>Name</label>
            <input type="text" placeholder="Cameron Williamson">
        </div>
        <div class="email">
            <label>Email</label>
            <input type="text"
            placeholder="debra.holt@example.com">
        </div>
        <div class="phone_number">
            <label>Phone number</label>
            <input type="text" placeholder="(303) 555-0105">
        </div>
        <div class="country">
            <label>Country</label>
            <input type="text" placeholder="Afghanistan">
        </div>
        <div class="address">
            <label>Address</label>
            <input type="text" placeholder="3891 Ranchview Dr. Richardson, California 62639">
        </div>
      </div>

      <div class="save_btn">
      <ButtonComponent
              buttonText="Save"
              width="205"
              height="41"
              border="2"
            ></ButtonComponent>

            </div>

      </form>

     

      

     
    </div>
  </div>
</template>

<script>
import AdminDashboardSidebar from "../components/AdminDashboardSidebar.vue";

export default {
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
  padding-right: 376px;
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


.dashboard .header_p{
 font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #202F44;
mix-blend-mode: normal;
opacity: 0.5;  
margin-top: 15px;
}



.profile_and_timer{
    margin-top: 86px;
    display: flex;
    gap: 52px;
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #333758;
mix-blend-mode: normal;
}

.profile_and_timer .profile{
    padding:24px 58px 23px 46px;
    background: rgba(117, 87, 211, 0.1);
}

.profile_and_timer .timer{
    padding:24px 58px 23px 46px;
}

.profile_settings{
    margin-top: 43px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #F2F2F2;
    padding-bottom: 16px;
}

.profile_settings h5{
    font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.4px;

color: #4A4A4A;
/* background: black; */
margin-top: 20px;
}

.edit_btn{
    background: #fff;
    font-family: 'Karla';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
letter-spacing: -0.5px;

color: #7557D3;
border: solid 2px #7557D3;

}

.profile_image{
    margin-top:56px;
    display: flex;
    align-items:center;
    gap: 35px;
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #202F44;
mix-blend-mode: normal;
  
}

.upload{
    text-decoration: underline;
}

.remove{
    color: #FF5722;
}

.inputs{
    margin-top: 44px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 39px;
    grid-row-gap: 40px;
    /* background: red; */
    
}

.inputs div:not(:last-child){
    width:216px;
}

input{
    background:  #E5E5E5;
/* height: 54px; */
/* width: 216px; */
color: black;
border: none;
padding-left: 12px;
padding-top: 16px;
padding-bottom: 15px;
}

.inputs div:last-child{
    /* width:432px; */
}

.inputs div{
    display: flex;
    flex-direction: column;
}

label{
   font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
letter-spacing: -0.117188px;
color: #333758;
opacity: 0.5 ;
margin-bottom: 8px;
}


.address{
    /* width: 432px; */
}

.save_btn{
    text-align: center;
    margin-top: 55px;
}

</style>

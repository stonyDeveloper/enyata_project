<template>
  <div class="container">
    <AdminDashboardSidebar />

    <div class="dashboard">
      <h1>Compose Assessment</h1>

      <div class="assessment">
            <p>0/30</p>
            <div class="choose_file">
                <span>+</span><span>Choose file</span>
            </div>

            <div class="questions">
                <p>Questions</p>
                <textarea></textarea>
            </div>

            <div class="options">
                <div class="input_field">
                    <label>Option A</label><br>
                    <input type="text" class="option_A">
                </div>
                <div class="input_field">
                    <label>Option B</label><br>
                    <input type="text" class="option_B">
                </div>
                <div class="input_field">
                    <label>Option C</label><br>
                    <input type="text" class="option_C">
                </div>
                <div class="input_field">
                    <label>Option D</label><br>
                    <input type="text" class="option_D">
                </div>
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


            <div class="submit">
                <ButtonComponent
                    buttonText="Save"
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


.dashboard p{
  font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 13px;
line-height: 16px;


color: #4F4F4F;  
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
 font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
margin-top: 4px;

color: #4F4F4F;
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
  padding-top: 25px ;
  
  border-radius: 4px;
  height: 307px;
  width: 482px;
}

.assessment{
    margin-top: 62px;
}

.assessment p{
  font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #2B3C4E;

}

.choose_file{
    margin-top: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    width: 456px;
    height: 108px;
    border: 1.55172px dashed #2B3C4E;
border-radius: 6.2069px;
}

.questions{
    margin-top: 25px;
}

.questions p{
   font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #2B3C4E;
}

.questions textarea{
    margin-top: 5px;
    border: 1.5px solid #2B3C4E;
border-radius: 4px;
width: 100%;
height:  144px;
}

.options{
    margin-top: 25px;
}

label{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #2B3C4E;
margin-bottom: 5px;
}

.options{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 25px;
    grid-column-gap: 64px;

}

.options input{
    width: 100%;
    height: 41px;

}

.btns{
    margin-top:52px;
    padding-left: 85px;
    padding-right: 85px;
    display: flex;
    justify-content: space-between;
}

.btns > *{
    background-color: #2B3C4E;
}

.submit{
    text-align: center;
    margin-top: 55px;
}

.submit > *{
    background-color: #CECECE;
}


</style>

<template>
  <div>
    <div class="content">
      <h3>Reset Password</h3>

      <p class="label">Enter new password</p>
      <input :type="[showPassword ? 'text' : 'password']" v-model="password" />
      <img
        @click="showPassword = !showPassword"
        src="../assets/passwordicon.svg"
        alt=""
      />
      <p class="label">Confirm password</p>
      <input
        :type="[showConfirmPassword ? 'text' : 'password']"
        v-model="confirm_password"
      />
      <img
        @click="showConfirmPassword = !showConfirmPassword"
        src="../assets/passwordicon.svg"
        alt=""
      />

      <ButtonComponent
        class="createBtn"
        buttonText="Submit"
        width="420"
        height="45"
        border="2"
      ></ButtonComponent>
      <router-link to="/signup"> <p>Go back to Sign In</p></router-link>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      password: "",
      confirm_password: "",
    };
  }
};
</script>

<style scoped>
div {
  font-family: "Poppins";
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #7557d3;
  width: 100vw;
  color: #7557d3;

  /* margin-left: auto;  */
}

.label {
  margin-left: -260px;
}

.label:first-of-type {
  margin-top: 30px;
}

.label:last-of-type {
  margin-top: 45px;
  margin-left: -280px;
}

.content {
  /* position: relative; */
  box-shadow: 3px 7px 13px -13px rgba(0, 0, 0, 1);
  padding: 15px 30px 30px 30px;
  width: 500px;
  height: 60vh;
  border-radius: 6px;
  background: white;
}

img:first-of-type {
  /* top: 100px;
    right: 20%; */
  margin-top: -32px;
  margin-right: -360px;
}

img:last-of-type {
  margin-top: -30px;
  margin-right: -360px;
}

a {
  color: #7557d3;
}

h3 {
  text-align: left;
}

p:first-of-type {
  margin-top: 15px;
}

input {
  height: 40px;
  width: 400px;
  padding-left: 10px;
  border-radius: 5px;
  border: solid white 1px;
  /* outline: none; */
  background: #7557d3;
  color: white;
  /* border: 1px solid black; */
  /* border: none;
    outline: none; */
}

input::placeholder {
  color: white;
}

input:nth-of-type(2) {
  /* margin-top: 40px; */
}

.createBtn {
  background: #7557d3;
  color: white;
  margin-top: 70px;
}

p:last-of-type {
  margin-top: 20px;
  font-size: 15px;
}
</style>

<template>
  <div class="login">
    
    <EnyataLogo></EnyataLogo>
    
    <form @submit.prevent="login">
      <h3>Log In</h3>

      <div class="form-input">
      <div class="input-field">
        <label>Email Address</label><br>
        <input type="email" v-model="email">
      </div>

      <div class="input-field">
        <label>Password</label><br>
        <input :type="[showPassword ? 'text' : 'password']" v-model="password">
        <img @click="showPassword = !showPassword" src="../assets/passwordicon.svg" alt="">
      </div>

      <ButtonComponent class="btn"
          buttonText="Sign In"
          width="379"
          height="50"
          border = "2"
        />
        </div>

        <div class="form-text">
        <p>Don’t have an account yet? <span><router-link to="/signup">Sign Up</router-link></span></p>

        <p>Forgot Password?</p>
        </div>
    </form>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import axios from 'axios'

export default {
  name: "LogIn",
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
  watch:{


  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e){
      e.preventDefault()

      

      const input = {
        email_address: this.email,
        password: this.password
      }

      // console.log(input)

      const response = await axios.post('http://localhost:5500/login', input, {
        withCredentials: false
      })

      console.log(response.data.data.user)
      console.log(response.data.data.token)

     axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

     const user = response.data.data.user
     const token = response.data.data.token
     this.setUser(user);
     this.setToken(token);
      

      await this.$router.push('/application')








      

      // try {
      //   const res = await axios.post(`http://localhost:5500/login`, {
      //     email_address: this.email,
      //     password: this.password
      //   });
      //   console.log(res)
      //   const { jwt, user} = res.data
      //   window.localStorage.setItem('jwt', jwt)
      //   window.localStorage.setItem('userData', JSON.stringify(user))
       

      //   const res2 = await axios.get(`http://localhost:5500/signup/${user.id}?populate=*`, {
      //     headers: {
      //       Authorization: `Bearer ${jwt}`,
      //     }
      //   })
      //   window.localStorage.setItem('bookmarks', JSON.stringify(res2?.data?.bookmarks || []))
      //   this.$router.push('/dashboard')
      // } catch(error){
      //   this.error = true
      //   this.password = ''
      // }
    }
    



    // async login(e) {
    //                     e.preventDefault()

    //                     try {
    //                         const res = await axios.post(`http://localhost:5500/login`, {
    //                             identifier: this.email,
    //                             password: this.password
    //                         });
    //                         const { jwt, user } = res.data
    //                         window.localStorage.setItem('jwt', jwt)
    //                         window.localStorage.setItem('userData', JSON.stringify(user))
    //                         const res2 = await this.axios.get(`http://localhost:5500/signup/${user.id}?populate=*`, {
    //                                 headers: {
    //                                     Authorization: `Bearer ${jwt}`,
    //                                 }
    //                             })
    //                         window.localStorage.setItem('bookmarks', JSON.stringify(res2?.data?.bookmarks || []))
    //                         this.$router.push('/dashboard')
    //                     } catch(error) {
    //                         this.error = true
    //                         this.password = ''
    //                     }
    //                 },
  //  async handleSubmit(){
  //      let response = await axios.post(
  //       "http://localhost:5500/login", {
  //         email: this.email,
  //         password: this.password
  //       },{
  //         withCredentials: true
  //       });

  //       axios.defaults.headers.commom['Authorization']


  //       console.log(response);
  //       console.log("yes");

  //       if(response.status == 200 && response.data.length > 0){
  //         console.log(response)
  //         alert('You have been logged in')
  //         this.$router.push('/dashboard')
  //       }
  //       else{
  //         alert('Please fill in the right information')
  //       }


        
  //   }
    

  // }

}

}

</script>


<style scoped>
.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login h3{
  text-align: center;
  font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #2B3C4E;
margin-top: 24px;
}

.form-input{
  margin-top: 68px;
}

label{
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
}

input{
  width: 379px;
  height: 48px;
  margin-top: 5px;
}

.form-input .input-field:nth-child(2){
  margin-top:22px
}

.form-text{
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}

.form-text p{
  font-family: 'Lato';
font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #4F4F4F;
}

.form-text span{
  text-decoration-line: underline;

color: #1A2C56;
}

.input-field{
  position: relative;
}

.input-field img{
  position: absolute;
  top: 65%;
  right: 3%;
}


</style>

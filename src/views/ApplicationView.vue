<template>
  <div class="signup">
    <EnyataLogo></EnyataLogo>

    <form @submit="submitApplication">
      <h3>Application Form</h3>

      <div class="alert" v-if="applicationStatus">
        Application Submitted Successfully!!
      </div>

      <div class="upload">
        <div class="CV"><span>+</span><input type="file" :v-model="upload_CV" ref="cv" @change="handleCvUpload">CV</div>
        <span v-if="upload_CV">name.doc</span>

        <div class="photo"><span>+</span><input type="file" :v-model="upload_photo" ref="image" @change="handleImageUpload"
        accept=".jpg, .jpeg, .png">Upload Photo<span v-if="upload_photo">image/png</span></div>
        
      </div>

      <div class="form-input">
        <div class="input-field">
          <label>First Name</label><br />
          <input type="text" v-model="first_name" class="email" />
        </div>
        <div class="input-field">
          <label>Last Name</label><br />
          <input type="text" v-model="last_name" class="email" />
        </div>
        <div class="input-field">
          <label>Email Address</label><br />
          <input type="email" v-model="email_address" class="email" />
        </div>
        <div class="input-field">
          <label>Date of Birth</label><br />
          <input type="date" v-model="dob" :max="maxDate" />
        </div>
        <div class="input-field">
          <label>Address</label><br />
          <input type="text" v-model="address" />
        </div>
        <div class="input-field">
          <label>University</label><br />
          <input type="text" v-model="university" />
        </div>
        <div class="input-field">
          <label>Course of Study</label><br />
          <input type="text" v-model="course" />
        </div>
        <div class="input-field">
          <label>CGPA</label><br />
          <input type="text" v-model="cgpa" />
        </div>

        <div value></div>
      </div>

      <div class="btn">
        <ButtonComponent
          buttonText="Submit"
          width="379"
          height="50"
          border="2"
        />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      upload_CV: "",
      upload_photo: "",
      first_name: "",
      last_name: "",
      email_address: "",
      dob: "",
      address: "",
      university: "",
      course: "",
      cgpa: "",
      pointer_events: "",
      maxDate: new Date().toISOString().split("T")[0],
      applicationStatus: false,
    };
  },
  computed: {
    returnUser() {
      return this.$store.state.user.first_name;
    },
  },
  async mounted() {
    {
      let storeEmail = this.$store.state.user.email_address;
      let firstName = this.$store.state.user.first_name;
      let lastName = this.$store.state.user.last_name;
      console.log(storeEmail);
      this.email_address = storeEmail;
      this.first_name = firstName;
      this.last_name = lastName;
    }
  },
  watch:{
    upload_CV(value){
      this.upload_photo = value
      this.showCV(value)
    }
  },
  methods: {
    showCV(value){
console.log(value)
    },
    handleImageUpload(event){
      this.upload_photo = event.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.upload_photo = reader.result
      }
      reader.readAsDataURL(this.upload_photo)
    },
    handleCvUpload(event){
      this.upload_CV = event.target.files[0] ;
      let reader = new FileReader();
      reader.onloadend = () => {
        this.upload_CV = reader.result
      }
      reader.readAsDataURL(this.upload_CV)
    },
    onFile(file) {
      console.log(file); // file object
    },
    async submitApplication(e) {
      try {
        e.preventDefault();

        {
          const token = this.$store.state.token;
          const response = await axios.post(
            "http://localhost:5500/application",
            {
              upload_CV: this.upload_CV,
              upload_photo: this.upload_photo,
              first_name: this.first_name,
              last_name: this.last_name,
              email_address: this.email_address,
              date_of_birth: this.dob,
              address: this.address,
              university: this.university,
              course_of_study: this.course,
              cgpa: this.cgpa,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          this.applicationStatus = true;

          localStorage.setItem("applicant", response);

          const applyID = response.data.data[0].id;

          localStorage.setItem("applicantID", applyID);

          setTimeout(() => {
            this.$router.push("/dashboard");
          }, "2000");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.alert {
  margin-top: 10px;
  color: green;
  /* background: black; */
  text-align: center;
  padding-top: 20px;
}
.email {
  pointer-events: none;
}

.signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130vh;
}

form h3 {
  margin-top: 24px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  text-align: center;
}

.form-input {
  margin-top: 68px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 62px;
  grid-row-gap: 22px;
}

label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}

input {
  width: 379px;
  height: 48px;
}

.btn {
  text-align: center;
}

.form-text {
  margin-top: 10px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  text-align: center;
}

.upload {
  display: flex;
  justify-content: center;
  margin-top: 93px;
  gap: 32px;
}

div.upload > * {
  width: 211px;
  height: 50px;
  border: 1.5px dashed #2b3c4e;
  border-radius: 2.87205px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

span {
  margin-right: 10px;
}

.none {
  display: hide;
}
</style>

<template>
  <div id="visa">
    <h1>Create a New Vue Account</h1>
    <form>
      <label for="full name">Full Name:</label>
      <input type="text" v-model="name" required />
      <br />
      <label for="email">Email Address:</label>
      <input type="text" v-model="email" required /> <br />
      <span v-if="msg.email">{{ msg.email }}</span>
      <label for="password">Password:</label>
      <input type="text" v-model="password" required /><br />
      <span v-if="msg.password">{{ msg.password }}</span>
      <br />
      <label for="twitter">Twitter Handle:</label>
      <input type="text" v-model="twitter" required />
    </form>
  </div>
</template>
We first added the span element, which will contain the prompts we’ll create
later. Then, added the msg array to store the values as the user types. After
that, copy the following code block into the script section.

<script>
export default {
  name: "TestComp",
  data() {
    return {
      name: "",
      password: "",
      email: "",
      msg: [],
      twitter: "",
    };
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
  },
  methods:{
    validateEmail(value) {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
  },
};
</script>





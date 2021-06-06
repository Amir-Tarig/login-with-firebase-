<template>
  <div class="formContainer">
    <form @submit.prevent="submit">
      <label for="email">Email:
      <input v-model="formData.email" type="email" name="email" value></label>

      <label for="password">Password:
      <input v-model="formData.password" type="password" name="password" value></label>

      <button type="submit" value="submit">Login</button>
      <button type="button" value="logout">Logout</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import firebase from '../utilities/firebase'

export default {
  name: 'LoginForm',
  props: { },
  setup() {
    const formData = reactive({
      email: 'peso@gmail.com',
      password: 'peso123'
    })

    function submit() {
      firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
    }

    function logout() {
      firebase.auth().signOut().then(() => {
  // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    }

    return { formData, submit , logout}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formContainer {
  margin: 20em auto;
  border: 1px solid red;
  width: 400px;
}
.formContainer form {
  border: 1px solid red ;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* height: 200px; */
}
</style>

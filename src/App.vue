<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/login">Login Form</router-link>
  </div>
  <router-view/>
</template>

<script>
import { onMounted, ref } from 'vue'
import firebase from './utilities/firebase'

export default {
  setup() {
    const isLoggedIn = ref(false)
    const authUser = ref({})

    onMounted(() => {
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            isLoggedIn.value = true
            authUser.value = user
            console.log(authUser.value)
        } else {
            isLoggedIn.value = false
            authUser.value = {}
        }
      });
    })

    return {isLoggedIn, authUser}
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  border: 1px solid red;
  display: flex;
  justify-content: center;
}

#nav a{
  margin-left: 1em;
  text-decoration: none;
}
</style>

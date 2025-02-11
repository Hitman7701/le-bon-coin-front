<script setup>
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios'
import { ref, inject } from 'vue'

const email = ref('')
const password = ref('')

const errorMessage = ref('')
const isConnecting = ref(false)

const router = useRouter()
const GlobalStore = inject('GlobalStore')

const handleSubmit = async () => {
  console.log('submit', {
    email: email.value,
    password: password.value,
  })
  if (email.value && password.value) {
    isConnecting.value = true
    try {
      const { data } = await axios.post(
        'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local',
        {
          identifier: email.value,
          password: password.value,
        },
      )

      console.log(data)
      GlobalStore.changeToken(data.jwt)
      router.push({ name: 'home' })
    } catch (error) {
      console.log(error.response.data.error)
      errorMessage.value = 'Un problème est survenu, veuillez essayer à nouveau'
    }
  } else {
    errorMessage.value = 'Veuillez remplir tous les champs'
  }
  isConnecting.value = false
}

const clearErrorMessage = () => {
  // S'il y a un message d'erreur on le vide
  if (errorMessage.value) {
    errorMessage.value = ''
  }
}
</script>

<template>
  <div class="container">
    <div class="loginCard">
      <h2>Bonjour !</h2>
      <p>Connectez-vous pour découvrir nos fonctionnalités.</p>
      <form @submit.prevent="handleSubmit">
        <label
          >E-mail *<input
            type="email"
            name="email"
            id="email"
            v-model="email"
            @input="clearErrorMessage"
        /></label>
        <label
          >Mot de passe *<input
            type="password"
            name="password"
            id="password"
            v-model="password"
            @input="clearErrorMessage"
        /></label>
        <p v-if="isConnecting">Connection en cours...</p>
        <button v-else>Se connecter<font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
      <p>
        Envie de nous rejoindre? <RouterLink :to="{ name: 'signup' }"> Créer un compte</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* border: 2px red solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  background-image: url(../assets/img/illustration.png);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}

.loginCard {
  /* border: 2px aquamarine solid; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 50px auto;
  height: 300px;
  width: 300px;
  background-color: white;
  box-shadow: 0px 0px 2px 3px rgba(128, 128, 128, 0.2);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

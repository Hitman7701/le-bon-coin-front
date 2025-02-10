<template>
  <div class="container">
    <div class="signupCard">
      <h2>Bonjour !</h2>
      <p>Inscrivez-vous pour découvrir nos fonctionnalités.</p>
      <form>
        <label>Nom *<input type="text" name="lastname" id="lastname" /></label>
        <label>E-mail *<input type="email" name="email" id="email" /></label>
        <label>Mot de passe *<input type="password" name="password" id="password" /></label>
        <button>S'inscrire <font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 2px red solid;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  background-image: url(../assets/img/illustration.png);
  background-size: contain;
}

.signupCard {
  border: 2px aquamarine solid;
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
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

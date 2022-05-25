<template>
  <div>
    <!--  <div class="wave" style="height: 100%; width: 100%; overflow: hidden;" ><svg viewBox="0 0 550 100" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-1.69,-6.39 C90.85,126.81 199.21,22.22 250.00,98.20 L304.17,194.91 L0.00,150.00 Z" style="stroke: none; fill: #E8194F;"></path></svg>
    </div>
    <nav>
      <img src="../src/assets/image/ColturLogo.png" alt="">
    </nav>

    <div class="container">
        <div class="img">
            <img src="../src/assets/svg/travelColtur.svg" alt="">
        </div>
        <div class="login-container">
            <login-view/>
        </div>
    </div> -->
      <router-view/>
  </div>
</template>


<script>
/* import LoginView from '../src/views/LoginView.vue'

export default {
  components: { LoginView },
    LoginView
} */
export default {
  name: 'App',
  created () {
    // Leer la información de estado en sessionStorage cuando se carga la página
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

         // Guarde la información en vuex en sessionStorage cuando se actualice la página
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}

</script>


<style>
.v-application--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 120px;
    max-width: 100%;
    position: relative;

}

</style>
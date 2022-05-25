<template>
<div>
<!-- <div class="wave" style="height: 100%; width: 100%; overflow: hidden;" >
  <svg viewBox="0 0 550 100" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-1.69,-6.39 C90.85,126.81 199.21,22.22 250.00,98.20 L304.17,194.91 L0.00,150.00 Z" style="stroke: none; fill: #D15939;"></path></svg>
</div> -->
    <!-- <nav>
      <img src="../assets/image/COLTUR_LOGO24.png" alt="">
    </nav> -->

    <div class="container-login">
        <div class="img">
            <img src="../assets/image/FondoWeb_Coltur.jpg" alt="">
        </div>
        <div class="login-container">
            <login-component />
        </div>
    </div>

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
  
  </div>
</template>

<script>
  import LoginComponent from '../components/LoginComponent.vue'

  export default {
    name: 'LoginView',

    components: {
      LoginComponent,
    },
  }
</script>

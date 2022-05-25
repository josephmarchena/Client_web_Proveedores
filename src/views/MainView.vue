<template>
  <div>
    <barra-menu-component/>
    <menu-component /><br>
    <info-component/>
    <div class="centrar_img">
      <img src="../assets/svg/imagemain.svg" alt="">
    </div>
  
  </div>
</template>

<script>
  import MenuComponent from '../components/MenuComponent.vue'
  import InfoComponent from '../components/InfoComponent.vue'
  import BarraMenuComponent from '../components/BarraMenuComponent.vue'

  export default {
    name: 'MainView',

    components: {
      MenuComponent,
      InfoComponent,
      BarraMenuComponent,
     
    },
  }
</script>

<style scoped>

.centrar_img {
  position: relative;
  width: 100%;
  /* border: 1px solid blueviolet; */
  text-align: center;
/*   margin: auto ;
  
  border: 1px solid blue;
  width: 200px;
  height: 200px; */
} 

img{
  
  /* border: 1px solid red; */
  margin: auto auto;
  text-align: center;
  width: 700px;
  height: 700px;
}

 @media (max-width: 420px) {
  
      img{
      
      margin: auto auto;
      text-align: center;
      width: 300px;
      height: 280px;
    }

 }

</style>

<template>
  <div>
    <div class="sidebar close">
    <div class="logo-details">
      <i class=''><img class="img-isotipo" src="../assets/image/COLTUR_ISOTIPO3.png" alt=""></i>
      <span class="logo_name">COLTUR</span>
    </div>
    <ul class="nav-links">
     
        <li>
          <div class="iocn-link" >
            <a href="#" class="clic">
              <i class='bx bx-collection' ></i>
              <span class="link_name">Información</span>
            </a>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul  class="sub-menu">
            <a id="unico" class="link_name clic" href="#">Información</a>
            <router-link to="/datos">Datos Generales</router-link>
            <router-link to="/contactos">Contactos</router-link>
            <router-link to="/establecimientos">Establecimientos</router-link>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <a href="#">
              <i class='bx bx-money'></i>
              <span class="link_name">Comprobantes</span>
            </a>
            <i class='bx bxs-chevron-down arrow' ></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name cerrar" href="#">Comprobantes</a></li>
            <router-link to="/comprobantes">Listado</router-link>
            <!-- <li><a class="cerrar" href="#">Rechazados</a></li> -->
          </ul>
        </li>
     
        <li>
          <div class="iocn-link">
            <a href="#">
              <i class='bx bx-wallet'></i>
              <span class="link_name">Prepagos</span>
            </a>
            <i class='bx bxs-chevron-down arrow' ></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name cerrar" href="#">Prepagos</a></li>
            <router-link to="/prepago">Listado</router-link>
            <!-- <li><a class="cerrar" href="#">Listado</a></li> -->
          </ul>
        </li>
     
     
    </ul>
  </div>
  
  <section class="home-section">
      <div class="home-content">
        <i class='bx bx-menu'></i>
        <!-- <span class="text"></span> -->
        
      </div>
    <!--   <div class="home-content-b">
        <img src="../assets/image/COLTUR_LOGO24.png" alt="">
      </div> -->
   
  </section>

  



  <!-- <section class="home-section">
  <section class="card">
    <p>Desde nuestra fundación, en 1957, nos mantenernos fieles a nuestros valores y principios, buscando, día a día, servir cada vez mejor a nuestros clientes, empleados, proveedores y a nuestra comunidad; esto nos permite afirmar que Coltur Viajes es sinónimo de innovación, calidad y confianza.
    Somos una empresa familiar que viene desarrollando, a través de tres generaciones, una importante labor en el desarrollo y el fortalecimiento del turismo en nuestro país. La excelencia de nuestro servicio está respaldado por alianzas estratégicas con dos de las principales redes de agencias de viajes, que garantizan ventajas exclusivas a nuestros clientes y agregan valor a sus operaciones</p>
  </section>

  </section> -->
   <!--  <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/menu">Menu</router-link>
    </nav> -->
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  components: {
      
  },
  methods: {

      mostrar: function () {  
      
      const pass = this.$el.querySelector('#password')
      if (pass.type == "text") {
          pass.type = "password"
      }else{
        pass.type = "text"
      }

     }


  },
  mounted(){
      console.log(this.$el.querySelectorAll('.arrow'));


        let arrow = this.$el.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e)=>{
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
        });
        }


       
        let sidebar = this.$el.querySelector(".sidebar");
        let sidebarBtn = this.$el.querySelector(".bx-menu");
        console.log(sidebar);
        sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
        });


  }
};
</script>

<style scoped>

.img-isotipo{
  width: 50px;
  height: 50px;
  padding-top: 5px;
}

</style>

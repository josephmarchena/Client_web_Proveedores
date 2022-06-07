<template>
<div>
    <barra-menu-component/>
    <menu-component/>
    <div class="div-main">
        <div class="div-title">
           <h2>{{ this.$store.state.datosUsuarioTitle}}</h2>
        </div>
    </div>
       
    <div class="div-main-informacion">
        <div class="div-informacion-datos">
            <div class="div-informacion-foto">
                    <!-- <img src="../assets/svg/avatarLogin.svg" />    -->
                    <img src="../assets/image/CostadelSolLogo.png" />   
            </div>
            <div class="div-informacion-datos-fiscales">
                <div class="div-razonsocial-comercial">
                        <span class="titulo-span"><h3>{{items.NomComercial}}</h3></span>
                </div>
                <div class="div-datos-comercial">
                    <div class="div-label-datos">
                        <p>RUC :</p>
                    </div>
                    <p class="label-texto">{{items.RUC}}</p>

                    <div class="div-label-datos">
                        <p>Razón Social :</p>
                    </div>
                    <p class="label-texto">{{items.RazonSocial}}</p>

                    <div class="div-label-datos">
                        <p>Departamento :</p>
                    </div>
                    <p class="label-texto">{{items.Departamento}}</p>

                    <div class="div-label-datos">
                        <p>Provincia :</p>
                    </div>
                    <p class="label-texto">{{items.Provincia}}</p>

                    <div class="div-label-datos">
                        <p>Distrito :</p>
                    </div>
                    <p class="label-texto">{{items.Distrito}}</p>

                    <div class="div-label-datos">
                        <p>Dirección Fiscal:</p>
                    </div>
                    <p class="label-texto">{{items.Direccion}}</p>

                    
                </div>
            </div>
        </div>
    </div>


    <div class="div-main-informacion">
        <div class="container-adicional">
            <div class="div-informacion-adicional">
                    <span class="titulo-span-adicional"><h3>Información Adicional</h3></span>

                <div class="div-datos-comercial">
                    <div class="div-label-datos-adicional">
                        <p>Página Web:</p>
                    </div>
                    <p class="label-texto-adicional">{{items.PaginaWeb}}</p>

                    <div class="div-label-datos-adicional">
                        <p>Página Web Reserva :</p>
                    </div>
                    <p class="label-texto-adicional">{{items.PaginaWebReserva}}</p>

                    <div class="div-label-datos-adicional">
                        <p>Email 1:</p>
                    </div>
                    <p class="label-texto-adicional">{{items.Email1}}</p>

                    <div class="div-label-datos-adicional">
                        <p>Email 2 :</p>
                    </div>
                    <p class="label-texto-adicional">{{items.Email2}}</p>

                    <div class="div-label-datos-adicional">
                        <p>Teléfono 1 :</p>
                    </div>
                    <p class="label-texto-adicional">{{items.Fono1}}</p>

                    <div class="div-label-datos-adicional">
                        <p>Teléfono 2:</p>
                    </div>
                    <p class="label-texto-adicional">{{items.Fono2}}</p>

                </div>
            </div>

            <div class="div-informacion-adicional">
                    <span class="titulo-span-adicional"><h3>Información del Crédito</h3></span>

                <div class="div-datos-comercial">
                    
                    <div class="div-label-datos-adicional">
                        <p>Condición de Pago:</p>
                    </div>
                    <p class="label-texto_combo"><v-combobox
                            v-model="items.FormaPago"
                            outlined
                            dense
                            style="width: 250px;"
                        ></v-combobox></p>
                    <!-- div>
                        <p>Condición de Pago:</p>
                        <v-col cols="3">
                        <v-combobox
                            v-model="datosUser.FormaPago"
                            outlined
                            dense
                            
                        ></v-combobox>
                        </v-col>
                    </div> -->
                    <!-- <p class="label-texto">{{datosUser.FormaPago}}</p> -->
                    
                    <div class="div-label-datos-adicional">
                        <p>Cantidad días:</p>
                    </div>
                    <p class="label-texto-adicional">{{items.NumDiasPago}}</p>

                </div>
            </div>
            <!-- <div class="div-informacion-credito">
                    Información de Crédito
            </div> -->
        </div>
        
    </div>

    <div class="div-main">
        <div class="div-informacion-datos-botones">
            <button class="info-boton" value="Contactos"><router-link to="/establecimientos" class="router-link">Establecimientos</router-link></button>
            <button class="info-boton" value="Contactos"><router-link to="/contactos" class="router-link">Contactos</router-link></button>
            
        </div>
    </div>

    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
   
</div>

</template>



<script>

import MenuComponent from '../components/MenuComponent.vue'
import BarraMenuComponent from '../components/BarraMenuComponent.vue'
import axios from 'axios'

export default {
    name: 'DatosUsuarioView',

    data () {
      return {
        /* select: [this.datosUser.FormaPago], */
         carga :'Hello',
         items: [],
         overlay : ''
         
      }
    },

    // watch: {
    //     carga (){
    //         console.log("El valor ha cambiado");
    //         this.carga = 'cambiado'
    //     }
    // },

    components: {
      MenuComponent,
      BarraMenuComponent,
    },

    computed: {
        datosUser(){
            
            console.log(this.$store.state.datosUsuario.RUC);
            return this.$store.state.datosUsuario;
        },

        message: {
            get () {
            return this.$store.state.datosUsuario.RUC
            }
        },

       /*  rucsito(){

            set(){
                this.carga = this.$store.state.datosUsuario.RUC;
            }
            //return this.$store.state.datosUsuario.RUC;
        } */
    },

    mounted(){
        /* console.log(this.$store.state.datosUsuario.FormaPago); */
        this.carga = "Ya se cargo";
        // this.texto = 'Loading'
        var ListDatos = async () =>{
            // this.overlay = true
            if (sessionStorage.getItem("ListDatos")){
                const newJSON = sessionStorage.getItem("ListDatos")
                const ListaDatos = JSON.parse(newJSON)
               this.items = JSON.parse(newJSON)
               console.log("LOS DATOS DEL NUEVO LISTADO",ListaDatos);
            }else{
                this.overlay = true
                let datos = await axios.get('https://apiweb-colturproveedor.azurewebsites.net/datosProveedor/'+ this.$store.state.IdEntidad )
                .then(res => (this.items = res.data))
                console.log("Se ejecuto el listado");
                const json = JSON.stringify(datos);
                sessionStorage.setItem("ListDatos", json);
                this.overlay = false
            }
        }
        
        console.log("antes del listado");
        
        ListDatos()
        
        console.log("Se termino el listado");
        
        //  getDatosUsuario(){
        //     axios.get('https://apiweb-colturproveedores.azurewebsites.net/datosProveedor/'+ this.state.IdEntidad )
        //     .then(res => {
        //     context.commit('getDatosUsuario', res.data);
        //     console.log('infoDU', res);
        //     })
            
        // },


    },

    created() {
    // this.$store.dispatch('getDatosUsuario');
        
    }

}
</script>

<style scoped>

.div-main{
    position: relative;
    display: flex;
    margin-top: 16px;
    width: 95%;
    float: right;
    height: 60px;
    /* border: 1px solid blueviolet; */
}

h2{
    font-weight: 500;
    font-size: 20px;
    /* text-decoration: underline red;  */
}

.titulo-span:before{
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  border-bottom: 2px solid #D15939;
  width: 70%;
  padding-top: 5px;
}

.titulo-span{
    display: inline-block;
    position: relative;
}


.titulo-span-adicional:before{
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  border-bottom: 2px solid #D15939;
  width: 70%;
  padding-top: 5px;
}

.titulo-span-adicional{
    display: inline-block;
    position: relative;
}


.div-main-informacion{
    position: relative;
    display: flex;
    margin-top: 15px;
    width: 95%;
    float: right;
    height: auto;
    /* border: 1px solid blueviolet; */
    margin-bottom: 1px;
}

.div-title{
    position: relative;
    width: 98%;
    margin: 0 auto; 
    padding: 20px 20px 15px 30px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid;
    border-width: 2px;
    font-weight: 600;
    background-color: white;
    /* box-shadow: 2px 2px 2px 2px #aaaaaa; */
    border-radius: 3px;
    /* left: 120px;
    top: 20px; */
}

.div-informacion-datos{
    position: relative;
    display: flex;
    flex-direction: row;
    width: 98%;
    height: 360px;
    padding: 20px 35px 15px 30px;
    margin: 0 auto;
    /* border: 1px solid blue; */
    border-color: #e7eaec;
    border-image: none;
    border-style: solid;
    border-width: 2px;
    background-color: white;
    /* box-shadow: 2px 2px 2px 2px #aaaaaa; */
    border-radius: 2px;
}

.div-informacion-foto{
    position: relative;
    width: 30%;
    height: auto;
    /* background-color: yellow; */
    padding: 40px 70px;
}

.div-informacion-foto img{
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
}

.div-informacion-datos-fiscales{
    position: relative;
    width: 70%;
    padding: 15px 15px;
}

.div-razonsocial-comercial{
    font-size: 17px;
}

h3 {
    font-weight: 600;
}

.div-datos-comercial{
    /* display: flex; */
    /* border: 1px solid blueviolet; */
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px 0 5px 0;
}

.div-label-datos{
    display: inline-block;
    width: 30%;
    margin-bottom: 10px;
    font-weight: 500;
}

.div-label-datos-adicional{
    display: inline-block;
    width: 30%;
    margin-bottom: 10px;
    font-weight: 500;
}

.label-texto{
    display: inline-block;
    width: 70%;
    margin-bottom: 20px;
    /* border: 1px solid blue; */
    font-size: 14px;
    color: #333333;
}

.label-texto-adicional{
    display: inline-block;
    width: 70%;
    margin-bottom: 20px;
    /* border: 1px solid blue; */
    font-size: 14px;
    color: #333333;
}

.label-texto_combo{
    display: inline-block;
    width: 50%;
}

.container-adicional{
    position: relative;
    width: 98%;
    margin: 0 auto;
    /* background-color: orangered; */
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    /* border: 1p xsolid blue; */
}

.div-informacion-adicional{
    position: relative;
    width: 49.5%;
    height: 340px;
    padding: 30px 0px 0px 40px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid;
    border-width: 2px;
    background-color: white;
    /* box-shadow: 2px 1px 2px 2px #aaaaaa; */
    border-radius: 5px;
}

.div-informacion-adicional h3{
    /* border: 1px solid orange; */
    display: inline-block;
}

.div-informacion-datos-botones{
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 35px 15px 30px;
    right: 0;
    /* border: 1px solid blue; */
   /*  background-color: white; */
    /* box-shadow: 2px 2px 2px 2px #aaaaaa; */
    border-radius: 2px;
    justify-content: flex-end;
    /* border: 1px solid orange; */
}

.info-boton{
    color: #fff;
    padding: 12px 20px 20px 25px;
    border-radius: 5px;
    background: #D15939;
    outline: none;
    font-size: 14px;
    box-shadow: 10px 5px 10px grey;
}

.router-link{
    font-size: 14px;
    color: #fff;
}

.info-boton:first-child{
    margin-right: 20px;
}

.info-boton:hover {
    transform: translatey(3px);
    box-shadow: none;
    color: #fff;
}

/* buttons hover Animation */
.info-boton:hover {
    animation: ani9 0.4s ease-in-out infinite alternate;
}
@keyframes ani9 {
    0% {
        transform: translateY(3px);
    }
    100% {
        transform: translateY(5px);
    }
}

@media (max-width: 420px) {

.div-main{
  position: relative;
  display: flex;
  margin-top: 16px;
  width: 100%;
  /* float: 0; */
  height: 60px;
    /* border: 1px solid blueviolet; */
}

h2{
    font-weight: 500;
    font-size: 20px;
    /* text-decoration: underline red;  */
}

.titulo-span:before{
  content: '';
  display: block;
  position: absolute;
  top: 100%;
  border-bottom: 2px solid #D15939;
  width: 50%;
  padding-top: 5px;
  left: 25%;
}

.titulo-span{
    display: inline-block;
    position: relative;
}

.div-main-informacion{
    position: relative;
    display: flex;
    margin-top: 15px;
    width: 100%;
    /* float: right; */
    height: auto;
    /* border: 1px solid blueviolet; */
    margin-bottom: 1px;
}

.div-informacion-datos{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 95%;
    height: auto;
    padding: 20px 5px 15px 5px;
    margin: 0 auto;
    /* border: 1px solid blue; */
    border-color: #e7eaec;
    border-image: none;
    border-style: solid;
    border-width: 2px;
    background-color: white;
    /* box-shadow: 2px 2px 2px 2px #aaaaaa; */
    border-radius: 2px;
}

.div-informacion-foto{
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    /* background-color: yellow; */
    background-image: url(../assets/image/COLTUR_ISOTIPO1.png);
    background-size: 380px;
    background-position: center;
    padding: 20px 0px;
}

.div-informacion-foto img{
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.div-informacion-datos-fiscales{
    position: relative;
    width: 100%;
    padding: 0px 15px;
    padding-top: 35px;
    /* background-color: #D15939; */
}

.div-razonsocial-comercial{
    font-size: 17px;
    /* background-color: #D15939; */
    text-align: center;
}

/* EITQUETAS LABELS */

.div-label-datos{
    /* display: none; */
    width: 100%;
    text-align: center;
    /* background-color: aqua; */
}

/* .div-label-datos{
    display: inline-block;
    width: 30%;
    margin-bottom: 10px;
    font-weight: 500;
} */

.label-texto{
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    /* border: 1px solid blue; */
    font-size: 14px;
    color: #333333;
    text-align: center;
}

/* CONTAINER ADICIONAL */

.container-adicional{
    position: relative;
    width:100%;
    margin: 0 auto;
    /* background-color: orangered; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding-bottom: 20px;
    /* border: 1px solid blue; */
    /* text-align: center; */
}

.div-informacion-adicional{
    position: relative;
    width: 95%;
    height: auto;
    padding: 30px 20px 0px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid;
    border-width: 2px;
    background-color: white;
    /* box-shadow: 2px 1px 2px 2px #aaaaaa; */
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 15px;
}

.div-label-datos-adicional{
    display: inline-block;
    width: 100%;
    margin-bottom: 14px;
    font-weight: 500;
}


.div-informacion-datos-botones{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0px 15px 15px 0px;
    right: 0;
    /* border: 1px solid blue; */
   /*  background-color: white; */
    /* box-shadow: 2px 2px 2px 2px #aaaaaa; */
    border-radius: 2px;
    justify-content: flex-end;
    /* border: 1px solid orange; */
}

.info-boton{
    color: #fff;
    padding: 12px 12px 12px 12px;
    border-radius: 5px;
    background: #D15939;
    outline: none;
    font-size: 14px;
    
}

.info-boton:first-child{
    margin-right: 20px;
}

.info-boton:hover {
    transform: translatey(3px);
    box-shadow: none;
}


}


</style>
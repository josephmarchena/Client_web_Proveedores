<template>
    <div>
       <form @submit.prevent="login" class="form">
                <img class="avatar" src="../assets/image/Coltur_Logo_Vertical.png" alt="">
                <div class="input-div-tipo">
                   
                    <input type="radio" id="proveedor" name="fav_language" value="Proveedor" checked>
                    <label for="proveedor">Proveedor</label><br>
                    <input type="radio" id="cliente" name="fav_language" value="Cliente">
                    <label for="cliente">Cliente</label><br>
                    <input type="radio" id="trabajador" name="fav_language" value="Trabajador">
                    <label for="trabajador">Trabajador</label>
                    
                </div>
                <div class="select-div-tipo">
                    <select class="select-css">
                        <option>Selecciona una opción</option>
                        <option>Proveedor</option>
                        <option>Cliente</option>
                        <option>Trabajador</option>
                      </select>
                </div>
                <div class="input-div one focus">
                    <div class="i">
                        <img class="iuser" src="../assets/svg/ruc.svg" alt="">
                    </div>
                    <div>
                        <h5>RUC</h5>
                        <input class="input" type="text">
                    </div>
                </div>
                <div class="input-div one focus">
                    <div class="i">
                        <img class="iuser" src="../assets/svg/user.svg" alt="">
                    </div>
                    <div>
                        <h5>Usuario</h5>
                        <input class="input" type="email" placeholder="Usuario" v-model="usuario.Correo">
                    </div>
                </div>
                <div class="input-div two focus">
                    <div class="i">
                        <img class="ipassword" src="../assets/svg/password.svg" alt="">
                    </div>
                    <div>
                        <h5>Clave</h5>
                        <input id="password" class="input" type="password" placeholder="Password" v-model="usuario.Contrasenha">
                    </div>
                    <div v-on:click="mostrar" class="i" style="position: absolute; right: 0; padding-top: 10px;cursor: pointer;">
                       <img id="mostrar" class="ipassword" src="../assets/svg/verpassword.svg" alt="">
                    </div>
                </div>

                <a href="#"> Olvidaste tu Clave?</a>
                <input type="submit" class="btn colorbtn" value="Ingresar">
                
            </form>
            <div v-if="mensaje != ''">
                <v-alert type="error">
                {{mensaje}}
                </v-alert>

            </div>
    </div>
</template>


<script>

import axios from "axios";

export default {

    name: 'LoginComponent',
    data(){
        return {
            usuario: {Correo: '', Contrasenha: ''},
            mensaje: ''
        }
    },
    components:{

    },
    
    methods: {
        
    mostrar: function () {  
      
      const pass = this.$el.querySelector('#password')
      if (pass.type == "text") {
          pass.type = "password"
      }else{
        pass.type = "text"
      }

    },

    login(){
        /* console.log(axios); */
        axios.post('https://apiweb-colturproveedores.azurewebsites.net/loginProveedores', this.usuario)
        .then(res => {
            const info = res.data.mensaje;

            
            if (info == "Email y Password incorrectos") {
                console.log("datos no establecidos");
                this.mensaje = "Email y Password incorrectos";
            }else{
                console.log(res.data);
                this.$store.state.IdEntidad = res.data.IdEntidad
                this.$store.state.RazonSocial = res.data.RazonSocial
                console.log("Mi IdEntidad es : " +this.$store.state.IdEntidad)
                console.log("Mi IdEntidad es : " +this.$store.state.RazonSocial)
                this.$router.push('/menu')
            }
           /*  if (res.data.status == "400") {
                console.log('No hay data');
            }else{
                console.log('Si hay data');
            } */
        })
        .catch(e => {
            this.mensaje =  e.response.data.mensaje
            console.log(e.message);
        })
    }
   
  }
}



</script>


<style scoped>

.colorbtn{
    color: #fff;
}

</style>
<template>
    <div>
        <barra-menu-component/>
        <menu-component/>
        <div class="div-main">
            <div class="div-title">
            <h2>{{ this.$store.state.datosListadoContactos}}</h2>
            </div>
        </div>

        <listado-contactos-component/>
    
        <div class="div-main">
            <div class="div-informacion-datos-botones">
                <button class="info-boton" value="Contactos"><router-link to="/datos" class="router-link">Datos Generales</router-link></button>
                <button class="info-boton" value="Contactos"><router-link to="/establecimientos" class="router-link">Establecimientos</router-link></button>   
            </div>
        </div>
    </div>
</template>

<script>
import BarraMenuComponent from '../components/BarraMenuComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'
import ListadoContactosComponent from '../components/ListadoContactosComponent.vue'

export default{
    name: 'ContactosView',

    components: {
        BarraMenuComponent,
        MenuComponent,
        ListadoContactosComponent,
    }

}

</script>

<style scoped>

.div-main{
    position: relative;
    display: flex;
    margin-top: 15px;
    width: 95%;
    float: right;
    height: 60px;
    /* border: 1px solid blueviolet; */
}

h2{
    font-weight: 500;
    font-size: 20px;
}

.div-title{
    position: relative;
    margin: 0 auto;
    width: 98%; 
    padding: 20px 20px 15px 10px;
    border: 0px solid #BFBFBF;
    font-weight: 600;
    background-color: white;
    /* box-shadow: 2px 2px 2px 2px #aaaaaa; */
    border-radius: 2px;
    color: #D15939;
    /* left: 120px;
    top: 20px; */
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

.router-link:hover {
    transform: translatey(3px);
    box-shadow: none;
    color: #fff;
}

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
    margin-top: 15px;
    width: 100%;
    float: right;
    height: 60px;
    /* border: 1px solid blueviolet; */
    }

    h2{
        font-weight: 500;
        font-size: 20px;
    }

    .div-title{
        position: relative;
        margin: 0 auto;
        width: 95%; 
        padding: 20px 20px 15px 10px;
        border: 0px solid #BFBFBF;
        font-weight: 600;
        background-color: white;
        /* box-shadow: 2px 2px 2px 2px #aaaaaa; */
        border-radius: 2px;
        color: #D15939;
        /* left: 120px;
        top: 20px; */
    }

}

</style>
<template>
    <div>
        <barra-menu-component/>
        <menu-component/>
        <div class="div-main">
            <div class="div-title">
            <h2>{{ this.$store.state.datosListadoEstablecimientos}}</h2>
            </div>
        </div>
        <listado-establecimientos/>
    </div>
</template>


<script>
import BarraMenuComponent from '../components/BarraMenuComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'
import ListadoEstablecimientos from '../components/ListadoEstablecimientosComponent.vue'

export default{
    name: 'EstablecimientosView',

    components: {
        BarraMenuComponent,
        MenuComponent,
        ListadoEstablecimientos,
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


@media (max-width: 420px) {
    
    .div-main{
    position: relative;
    display: flex;
    margin-top: 15px;
    width: 100%;
    /* float: right; */
    height: 60px;
    /* border: 1px solid blueviolet; */
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
    /* background-color: red; */
    /* left: 120px;
    top: 20px; */
}


}

</style>
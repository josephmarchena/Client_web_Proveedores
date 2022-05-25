<template>
    <div>
        <barra-menu-component/>
        <menu-component/>
        <div class="div-main">
            <div class="div-title">
            <h2>{{ this.$store.state.datosListadoPrepago}}</h2>
            </div>
        </div>
        <report-prepagos/>
        <filtros-datos-prepago/>
        <listado-prepago-component/>
    </div>
</template>

<script>
import ListadoPrepagoComponent from '../components/ListadoPrepagoComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'
import BarraMenuComponent from '../components/BarraMenuComponent.vue'
import ReportPrepagos from '../components/ReportPrepagos.vue'
import FiltrosDatosPrepago from '../components/FiltrosDatosPrepago.vue'

export default{
    name:'PrepagoView',

    components:{
        ListadoPrepagoComponent,
        MenuComponent,
        BarraMenuComponent,
        ReportPrepagos,
        FiltrosDatosPrepago,
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
    /* background-color: #fff; */
    width: 95%;
    /* display: flex; */
    /* height: 420px; */
    /* padding: 20px 35px 15px 30px; */
    /* border: 2px solid yellow; */
    /* box-shadow: 1px 0px 1px 0px #aaaaaa; */
    border-radius: 2px;
    
    }

}

</style>

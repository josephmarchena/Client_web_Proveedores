<template>
    <div>
        
        <barra-menu-component/>
        <menu-component/>
        <div class="div-main">
            <div class="div-title">
            <h2>{{ this.$store.state.datosListadoComprobanteTitle}}</h2>
            </div>
        </div>
        <report-datos-comprobante/>
        <filtros-datos-comprobantes/>
        <lista-comprobamtes/>
        <leyenda-component :EstadoRed="EstadoRed" :EstadoGreen="EstadoGreen"/>
        
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
import ReportDatosComprobante from '../components/ReportDatosComprobante.vue'
import FiltrosDatosComprobantes from  '../components/FiltrosDatosComprobantes.vue'
import ListaComprobamtes from  '../components/ListaComprobamtes.vue'
import BarraMenuComponent from '../components/BarraMenuComponent.vue'
import LeyendaComponent from '../components/LeyendaComponent.vue'

export default {
    name: 'listadoComprobantes',
     data () {
      return {
        /* select: [this.datosUser.FormaPago], */
         overlay : true,
         EstadoRed: 'Recepcionado',
         EstadoGreen: 'Pagado'
      }
    },

    components:{
        MenuComponent,
        ReportDatosComprobante,
        FiltrosDatosComprobantes,
        ListaComprobamtes,
        BarraMenuComponent,
        LeyendaComponent,
    },

    mounted(){
        this.overlay = false
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
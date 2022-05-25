<template>
    <div>
        <div class="div-main-informacion">
            <div class="div-informacion-datos">
                <v-app id="inspire">
                    <v-card>
                        <v-card-title>
                            <v-text-field
                            v-model="search"
                            append-icon="search"
                            label="Buscar Prepago"
                            single-line
                            
                            ></v-text-field>
                        </v-card-title>
                        <v-data-table
                            :headers="headers"
                            :items="computedFiltradoComprobantes"
                            :search="search"
                            :items-per-page="10"
                            class="elevation-1"
                        >

                            <template v-slot:[`item.EstadoPrepago`]="{ item }">
                                <!-- <v-chip
                                :color="getColor(item.EstadoPrepago)"
                                dark
                                >
                                {{ item.EstadoPrepago }}
                                </v-chip> -->
                                <div v-html="getColor(item.EstadoPrepago)"></div>
                            </template>

                            <template v-slot:[`item.flgEnvioCorreo`]="{ item }">
                                    <v-avatar left>
                                        <v-icon>{{getImage(item.flgEnvioCorreo)}}</v-icon>
                                    </v-avatar>                  
                            </template>

                        </v-data-table>
                    </v-card>
                </v-app>
            </div>
        </div>   
    </div>
    
</template>


<script>
/* 
import MenuComponent from '../components/MenuComponent.vue'
import BarraMenuComponent from '../components/BarraMenuComponent.vue' */
import {mapState} from 'vuex'

export default{
    name: 'ListadoPrepagoComponent',
     data(){
            return{
                luzRoja: '<div style="width:20px;height:20px;background-color:red;display:inline-block;border-radius:50%"></div>',
                luzVerde: '<div style="width:20px;height:20px;background-color:green;display:inline-block;border-radius:50%"></div>',
                comprobantes: [],
                search: '',
                headers: [
                { text: 'Estado Prepago', value: 'EstadoPrepago', width: "160px", align: 'center'},
                {
                text: 'Envio Correo',
                align: 'start',
                value: 'flgEnvioCorreo',
                width: "140px"
                },
                { text: 'Fecha Pago', value: 'FecPrePago', width: "130px"},
                { text: 'Nro Prepago', value: 'CodPrePago', width: "140px"},
                
                { text: 'Moneda', value: 'Moneda',width: "110px", align: 'start'},
                { text: 'Importe Prepago', value: 'importeoriginal',width: "120px", align: 'end'},
                { text: 'Importe Retencion', value: 'retencionporc',width: "120px", align: 'end'},
                { text: 'Importe Detraccion', value: 'ImporteDetraccion',width: "120px", align: 'end'},
                { text: 'Importe Pagar', value: 'Importe', width: "120px", align: 'end' },
                { text: 'Banco', value: 'Descripcion', width: "140px" },
                { text: 'Nro Cuenta', value: 'NroCuenta', width: "230px" },
                { text: 'File', value: 'Files', color: "FF0000", width: "130px" },
                { text: 'Cliente', value: 'NomComercial', width: "170px" },
                { text: 'Ejecutivo', value: 'NombreEjecutivo', width: "170px" },
            ],  
            }
        },
        
        computed: {
            ...mapState(['datosfiltrosprepago', 'filtroFechaDesde']),

            computedFiltradoComprobantes(){
                return this.filtraComprobantes(this.comprobantes)
            }
            
        },

        methods :{
            filtraComprobantes(cp){
                if(!cp) return null
                cp = this.$store.state.datosfiltrosprepago;
                return cp
            },

            getColor (EstadoPrepago) {
                /* if (EstadoPrepago == "Cancelado") return 'green'
                else return 'red' */
                if (EstadoPrepago == "Cancelado") return this.luzVerde
                else return this.luzRoja

            },

            getImage (flgEnvioCorreo) {
                if (flgEnvioCorreo == true) return 'mark_email_read'
                else return ''
            },

        },

        mounted(){
            console.log(this.$store.state.datosfiltroscomprobantes);
        /* console.log(this.$store.state.datosUsuario.FormaPago); */
        this.comprobantes = this.$store.state.datosfiltroscomprobantes;
        
        },

        created(){
            console.log(this.$store.state.datosfiltroscomprobantes);
            this.comprobantes = this.$store.state.datosfiltroscomprobantes;
            /* const IdEntidad = this. */
                /* this.date = this.$store.state.filtroFechaDesde;
                console.log(" Mi fecha desde es : " ,this.$store.state.filtroFechaDesde); */
            //this.$store.dispatch('setFiltroParameters', {fechaDesde: this.date_desde,  fechaHasta: this.date_hasta});
        },
    components: {
      /* MenuComponent,
      BarraMenuComponent, */
    },
    
}

</script>

<style scoped>

.div-main-informacion{
    position: relative;
    display: flex;
    margin-top: 15px;
    width: 95%;
    float: right;
    /* height: 350px; */
    /* border: 1px solid blueviolet; */
    margin-bottom: 40px;
}

.div-informacion-datos{
    position: relative;
    margin: 0 auto;
    /* background-color: #fff; */
    width: 98%;
    /* display: flex; */
    /* height: 420px; */
    /* padding: 20px 35px 15px 30px; */
    /* border: 2px solid yellow; */
    /* box-shadow: 1px 0px 1px 0px #aaaaaa; */
    border-radius: 2px;
    
}


.v-data-table ::v-deep th {
      font-size: 15px !important
}

.v-data-table::v-deep td {
    font-size: 13px !important;
}
        
    /* .v-data-table ::v-deep td{
font-size: 16px !important;
    } */
        

/* .v-application--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 0;
    max-width: 100%;
    position: relative;

} */


/* .div-main::after {
  content: "";
  clear: both;
  display: table;
}
 */

@media (max-width: 420px) {

.div-main-informacion{
    position: relative;
    display: flex;
    margin-top: 15px;
    width: 100%;
    /* float: right; */
    /* height: 350px; */
    /* border: 1px solid blueviolet; */
    margin-bottom: 40px;
}

.div-informacion-datos{
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

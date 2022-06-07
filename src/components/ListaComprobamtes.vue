<template>
<div>
    <div class="div-main-informacion">
        <div class="div-informacion-datos">
             <v-app id="inspire">
                <v-card>
                <v-card-title>
                    <v-text-field
                    v-model="search"
                    append-icon="search file_copy"
                    label="Buscar Comprobante"
                    single-line
                    locale="es"
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="computedFiltradoComprobantes"
                    :search="search"
                    :items-per-page="10"
                    class="elevation-1"
                    locale="es"
                >
                
                <template v-slot:[`item.estadopago`]="{ item }">
                           <!-- {{estadoComprobante(item.estadopago)}} -->
                           <div v-html="estadoComprobante(item.estadopago)"></div>
                </template>
                
                </v-data-table>
                </v-card>
            </v-app>

            
        </div>
    </div>
</div>
</template>


<script>
import {mapState} from 'vuex'
    export default {
        name: 'ListaComprobamtes',
        data(){
            return{
                roundhtml: '<div style="width:20px;height:20px;background-color:red;display:inline-block;border-radius:50%"></div>',
                roundhtml_green: '<div style="width:20px;height:20px;background-color:green;display:inline-block;border-radius:50%"></div>',
                comprobantes: [],
                search: '',
                headers: [
                { text: 'Estado', value: 'estadopago', width: "100px" },
                {
                text: 'Tipo Documento',
                align: 'start',
                filterable: true,
                value: 'TipoDocumento',
                width: "170px"
                },
                
                { text: 'Documento', value: 'NroFactura', width: "150px" },
                { text: 'Moneda', value: 'IdTipoMoneda' , width: "110px" },
                { text: 'Monto', value: 'MontoFactura' , width: "110px", align: 'end' },
                { text: 'Fecha Emision', value: 'FechaEmision' , width: "110px" },
                { text: 'Fecha Recepcion', value: 'FechaRecepcion', width: "150px"  },
                { text: 'Fecha Vencimiento', value: 'FechaVencimientoFact', width: "150px" },
                { text: 'Nro File', value: 'NroFileRef', width: "120px" },
                { text: 'Descripcion', value: 'Descripcion', width: "350px" },
                
            ], 
                overlay:false 
            }
        },
        
        computed: {
            ...mapState(['datosfiltroscomprobantes', 'filtroFechaDesde']),

            computedFiltradoComprobantes(){
                return this.filtraComprobantes(this.comprobantes)
            }
            
        },

        methods :{

            filtraComprobantes(cp){
                if(!cp) return null
                cp = this.$store.state.datosfiltroscomprobantes;
                return cp
            },

            estadoComprobante(EstadoComprobantes){
                if(EstadoComprobantes == "Pagado") return this.roundhtml_green
                else return this.roundhtml
            }

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
        }
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
   /*  border: 1px solid blueviolet; */
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
      font-size: 16px !important
}

.v-data-table::v-deep td {
    font-size: 13px !important;
}
        
    /* .v-data-table ::v-deep td{
font-size: 16px !important;
    } */
     
 i {
    margin-right: 70px    
 }    

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
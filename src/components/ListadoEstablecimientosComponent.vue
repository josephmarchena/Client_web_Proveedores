<template>
    <div>
        <div class="div-main-informacion">
            <div class="div-informacion-datos">
                <v-app id="inspire">
                    <v-card>
                    <v-card-title>
                        <v-text-field
                        v-model="searchEstablecimiento"
                        append-icon="search"
                        label="Buscar Establecimiento"
                        single-line
                        
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :single-expand="singleExpand"
                        :expanded.sync="expanded"
                        item-key="idEstabl"
                         show-expand
                        :items="computedListadoEstablecimientos"
                        :search="searchEstablecimiento"
                        :items-per-page="10"
                    >
                    

                    <template v-slot:[`item.linkenitinerario`]="{ item }">
                        <a target="_blank" width="50px" :href="item.linkenitinerario">
                        <v-icon>description</v-icon>
                        </a>
                    </template>

                      <template v-slot:expanded-item="{ headers, item }">
                        <td :colspan="headers.length" title="Contactos">
                            <v-row class="colorfila">
                                <v-col cols="12">
                                <filtro-contactospor-establecimientos-component :IdEstablecimiento="item.idEstabl" :DescripcionEstablecimiento="item.DescripcionEstabl"/>
                                </v-col>
                            </v-row>
                        </td>
                      </template>


                       <!-- <template v-slot:[`data-table-expand`]="{ item }">
                            <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <span v-on="on">{{item.data-table-expand}}</span>
                            </template>
                            <span>Hola</span>
                            </v-tooltip>
                       </template> -->
     


                    </v-data-table>
                    </v-card>
                </v-app>
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
//  import FiltroContactosporEstablecimientosComponent from '@components/FiltroContactosporEstablecimientosComponent.vue'
import FiltroContactosporEstablecimientosComponent from './FiltroContactosporEstablecimientosComponent.vue'


export default {
    name : 'ListadoEstablecimientosComponent',
    components: {
        // FiltroContactosporEstablecimientosComponent
        FiltroContactosporEstablecimientosComponent,
    },
    data(){
        return{
            establecimientos: [],
            searchEstablecimiento: '',
            headers: [
                {
                    text: 'Nombre',
                    align: 'start',
                    filterable: true,
                    value: 'DescripcionEstabl',
                    width: "210px"
                },
                { text: 'Ciudad', value: 'Ciudad', width: "110px" ,title: 'Contactos'},
                { text: 'Direccion', value: 'Direccion', width: "210px"},
                { text: 'CheckIn', value: 'HotelCheckin', width: "110px"},
                { text: 'CheckOut', value: 'HotelCheckOut', width: "125px"},
                { text: 'Itinerario', value: 'linkenitinerario', width: "120px", align: 'start'},
                { text: 'Categoria Coltur', value: 'CategoriaColtur', width: "170px"},
                { text: 'Categoria Hotel', value: 'CategoriaEstl', width: "170px", cellClass: "visible"},
                { text: '', value: 'data-table-expand', title: 'Contactos' },            
            ],
             overlay: '',
             expanded: [],
             singleExpand: false,
        }
    },

    computed:{

        computedListadoEstablecimientos(){
            let data = this.filtraEstablecimientos(this.establecimientos)
            sessionStorage.setItem("computedListadoEstablecimientos", data);
            return data
        }
    },

    methods:{
        filtraEstablecimientos(cp){
            if(!cp) return null
            cp = this.$store.state.datosEstablecimientos;
            return cp
        },

       
    },

    async mounted(){
        if (sessionStorage.getItem("computedListadoEstablecimientos")) {
            await this.$store.dispatch('getEstablecimientos');
        }else{
            this.overlay = true
            await this.$store.dispatch('getEstablecimientos');
            this.overlay = false
        }
        
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
      font-size: 16px !important
}

.v-data-table::v-deep td {
    font-size: 13px !important;
}

a {
    background-color: transparent;
    text-align: left;
}

.visible{
    /* visibility: hidden; */
    color: blue;
}
       
.colorfila{
    height: auto;
    padding: 10px 1px;
}

    /* .v-data-table ::v-deep td{
font-size: 16px !important;
    } */


@media (max-width: 420px) {
    
    .div-main-informacion{
    position: relative;
    display: flex;
    margin-top: 15px;
    width: 100%;
    /* float: right; */
    height: auto;
    /* border: 1px solid blueviolet; */
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
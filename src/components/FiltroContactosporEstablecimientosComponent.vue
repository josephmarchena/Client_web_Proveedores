<template>
    <div>
        <!-- {{this.contacosporEstablecimiento}} -->
         <v-app id="inspire">
                    <v-card>
                    <!-- <v-card-title>
                        <v-text-field
                        v-model="searchContactos"
                        append-icon="search"
                        label="Buscar Contactos"
                        single-line
                        
                        ></v-text-field>
                    </v-card-title> -->
                    <v-data-table
                        :headers="headers"
                        :items="contacosporEstablecimiento"
                        :search="searchContactos"
                        :items-per-page="10"
                        class="elevation-1"
                    >

                     <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Contactos del Establecimiento {{DescripcionEstablecimiento}}</v-toolbar-title>
                            <!-- <v-spacer></v-spacer>
                            <v-switch
                            v-model="singleExpand"
                            label="Single expand"
                            class="mt-2"
                            ></v-switch> -->
                        </v-toolbar>
                    </template>

                    
                    <template v-slot:[`item.FlgEnvioReserva`]="{ item }">
                        <div v-html="estadoContactos(item.FlgEnvioReserva)"></div>
                    </template>

                    <template v-slot:[`item.FlgEnvioVoucher`]="{ item }">
                        <div v-html="estadoContactos(item.FlgEnvioVoucher)"></div>
                    </template>

                    <template v-slot:[`item.FlgEnvioFactPrepago`]="{ item }">
                        <div v-html="estadoContactos(item.FlgEnvioFactPrepago)"></div>
                    </template>

                    <template v-slot:[`item.FlgEnvioComercial`]="{ item }">
                        <div v-html="estadoContactos(item.FlgEnvioComercial)"></div>
                    </template>
                    
                    </v-data-table>
                    </v-card>
         </v-app>
    </div>
</template>


<script>
import axios from "axios";


export default{
    name: 'FiltroContactosporEstablecimientosComponent',
    data(){
        return{
          contacosporEstablecimiento: [],
          id: '', 

          roundhtml: '<div style="width:20px;height:20px;background-color:red;display:inline-block;border-radius:50%"></div>',
          roundhtml_green: '<div style="width:20px;height:20px;background-color:green;display:inline-block;border-radius:50%"></div>',
          contactos: [],
          searchContactos: '',
          
          headers: [
                // {
                //     text: 'Nombre Comercial',
                //     align: 'start',
                //     filterable: true,
                //     value: 'DescripcionEstabl',
                //     width: "210px"
                // },
                { text: 'Nombre', value: 'Nombre', width: "110px"},
                { text: 'Telefono', value: 'Fono1', width: "120px"},
                { text: 'Email', value: 'Email1', width: "110px"},
                { text: 'Cargo', value: 'CargoContacto', width: "150px"},
                { text: 'Ciudad', value: 'Ciudad', width: "140px"},
                { text: 'Envio Reserva', value: 'FlgEnvioReserva', width: "160px"},
                { text: 'Envio Voucher', value: 'FlgEnvioVoucher', width: "160px"},
                { text: 'Envio Fact Prepago', value: 'FlgEnvioFactPrepago', width: "190px"},
                { text: 'Envio Comercial', value: 'FlgEnvioComercial', width: "170px"},
          ],
        
        }
    },
    props : [
        'IdEstablecimiento',
        'DescripcionEstablecimiento',
    ],

    methods: {

        async CargarDatosContactosporEstablecimiento(){

             this.id = this.$store.state.IdEntidad;
             await  axios.get(`https://apiweb-colturproveedor.azurewebsites.net/FiltroContactosporEstablecimiento/${this.id}/${this.IdEstablecimiento}`)
                .then(res => {
                //const info = res.data.mensaje;
                console.log("cxestable",res);
                    console.log("cxestable",res.status);
                    if (res.status == "200") {
                        console.log('Si hay data');
                        this.contacosporEstablecimiento = res.data
                    }else{
                        console.log('No hay data en filtro comprobantes por no tener status 200');
                    }
                })
                .catch(e => {
                    console.log(e.message);
                })
        },

        estadoContactos(EstadoContactos){
            if (EstadoContactos == true) return this.roundhtml
            else return this.roundhtml_green 
        }

    },

    mounted(){
        this.id = this.$store.state.IdEntidad;
        
    },
    
    created() {
        this.CargarDatosContactosporEstablecimiento()
        // this.$store.dispatch('getFiltroContactosEstablecimientos', this.IdEstablecimiento)
    }

}


</script>
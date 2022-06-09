<template>
    <div>
        <div class="div-main-informacion">
            <div class="div-informacion-datos">
                <v-app id="inspire">
                    <v-card>
                    <v-card-title>
                        <v-text-field
                        v-model="searchContactos"
                        append-icon="search"
                        label="Buscar Contactos"
                        single-line
                        
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="computedListadoContactos"
                        :search="searchContactos"
                        :items-per-page="10"
                        class="elevation-1"
                        :custom-sort="customSort"
                    >

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
        </div>

        <!-- <div class="div-main">
            <div class="div-informacion-datos-botones">
                <button class="info-boton" value="Contactos"><router-link to="/datos" class="router-link">Datos Generales</router-link></button>
                <button class="info-boton" value="Contactos"><router-link to="/establecimientos" class="router-link">Establecimientos</router-link></button>
                
            </div>
        </div> -->

        
        <v-overlay :value="overlay">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>

    </div>    

    
</template>

<script>
export default{
    name:'ListadoContactosComponent',
    data(){
        return{
            roundhtml: '<div style="width:20px;height:20px;background-color:red;display:inline-block;border-radius:50%"></div>',
            roundhtml_green: '<div style="width:20px;height:20px;background-color:green;display:inline-block;border-radius:50%"></div>',
            contactos: [],
            searchContactos: '',
            headers: [
                {
                    text: 'Nombre Comercial',
                    align: 'start',
                    filterable: true,
                    value: 'Nomcomercial',
                    width: "210px"
                },
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
            overlay: ''
        }

    },

    computed: {
        computedListadoContactos(){
            let data = this.filtrarContactos(this.contactos)
            sessionStorage.setItem("computedListadoContactos", data);
            return data
        }
    },

    methods:{
        filtrarContactos(cp){
            if(!cp) return null
            cp = this.$store.state.datosContactos;
            
            return cp
        },

        estadoContactos(EstadoContactos){
            if (EstadoContactos == true) return this.roundhtml
            else return this.roundhtml_green 
        },

        customSort(items, index, isDesc) {
        items.sort((a, b) => {
          if (isDesc != "false") {
            return a[index] < b[index] ? -1 : 1
          } else {
            return b[index] < a[index] ? -1 : 1
          }
        })
        return items
      }
    },

    async mounted(){
        if (sessionStorage.getItem("computedListadoContactos")) {
            await this.$store.dispatch('getContactos');
        }else{
            this.overlay = true
            await this.$store.dispatch('getContactos');
            this.overlay = false
        }
        
    }
}

</script>

<style >

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

a {
    background-color: transparent;
    text-align: left;
}

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
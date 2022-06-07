<template>
    <div class="">
    <form @submit.prevent="filtros">
        <div class="div-main-informacion">
            <div class="div-informacion-datos">
                <div class="filtro-cabecera">Filtro de Búsqueda</div>
                <div class="filtro-detalle">
                
                
                        <div class="contenido-filtro-factura">
                            <p class="texto-fecha-nrofactura">Nro.Factura  :</p>
                            <input class="text-filtro-left" type="text" placeholder="" v-model="nro_factura">
                        </div>

                        <div class="contenido">                    
                            <p class="texto-fecha">Fec.Emisión :</p>
                                <div class="container-fechas">
                                    <div class="container-fecha-desde">
                                    <p class="desde-fecha">Desde :</p>
                                    <div data-app class="dt-desde">
                                        <v-menu 
                                            v-model="menu1"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                            max-width="290px"
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                v-model="computedDateFormattedDesde"
                                                persistent-hint
                                                prepend-icon="mdi-calendar"
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                            </template>
                                            <v-date-picker
                                            v-model="date_desde"
                                            no-title
                                            @input="menu1 = false"
                                            locale="es"
                                            dark
                                            ></v-date-picker>
                                        </v-menu>   
                                    </div>
                                    </div>

                                    <div class="container-fecha-hasta">
                                    <p class="hasta-fecha">Hasta :</p>
                                    <div data-app class="dt-hasta">
                                            <v-menu 
                                                v-model="menu2"
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y
                                                max-width="290px"
                                                min-width="auto"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="computedDateFormattedHasta"
                                                    persistent-hint
                                                    prepend-icon="mdi-calendar"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                v-model="date_hasta"
                                                no-title
                                                @input="menu2 = false"
                                                locale="es"
                                                dark
                                                ></v-date-picker>
                                            </v-menu>   
                                    </div>
                                    </div>
                                </div>

                        </div>
                        <div class="contenido-cb">
                            <p class="texto-fecha-tipodocumento">Tipo Documento :</p>
                            <div class="select-estado-left">
                                <v-col>

                                </v-col>
                                <v-select
                                    v-model="select_tipo_doc"
                                    height="20px"       
                                    :items="items_tipo_doc"
                                    item-text="tipo"
                                    label="Seleccione"
                                    solo
                                ></v-select>
                            </div>
                        </div>


                        <div class="contenido-filtro-estado">
                            <p class="texto-fecha-estado">Estado:</p>
                            <div class="select-estado">
                                <v-col>

                                </v-col>
                                <v-select
                                    v-model="select"        
                                    :items="items"
                                    item-text="state"
                                    label="Seleccione"
                                    solo
                                ></v-select>
                            </div>
                        </div>    
                        <div class="contenido">
                            <div class="div-main-informacion-boton">
                                <div class="div-informacion-datos-boton">
                                    <input type="submit" class="info-boton" value="Buscar">
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </form>

    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
   
</div>
</template>


<script>

import axios from "axios";
import {mapState} from 'vuex'
import dayjs from 'dayjs'

export default {
    name: 'FiltrosDatosComprobantes',
    data(){
        return{

            date_desde: (dayjs().date(1)).toISOString().substr(0, 10),
            date_hasta: (dayjs().date(31)).toISOString().substr(0, 10),
            dateFormatted: this.formatDateDesde((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
            menu1: false,
            menu2: false,
            select: '',
            select_tipo_doc: '',
            items: [
            { state: 'Recepcionado' },
            { state: 'Pagado'}
            ],
            items_tipo_doc: [
            { tipo: 'Factura' },
            { tipo: 'Recibos Por Honorarios'},
            { tipo: 'Nota de Credito'},
            { tipo: 'Nota de Debito'}
            ],
            nro_factura: '',
            id: '',
            overlay: ''
            

        }
    },

    computed: {


        ...mapState(['IdEntidad']),

        computedDateFormattedDesde () {
        console.log(this.date_desde)
        return this.formatDateDesde(this.date_desde)
        },

         computedDateFormattedHasta () {
        console.log(this.date_hasta)
        return this.formatDateHasta(this.date_hasta)
        },
       /*  formatofechamostrar(){
        return dayjs(this.date).format('YYYYMMDD')
        
        }, */
       /*  formatdesde(){
            
            return this.formatoDesde(this.date_desde);
        } */
    },

    methods: {

        
        formatDateDesde (date) {
        if (!date) return null
        
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
        },

        formatDateHasta (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
        },


        async filtros(){

            this.overlay = true
            //this.$store.state.datosfiltroscomprobantes = this.date_desde
            console.log("Estas son las fechas",this.id, this.date_desde, this.date_hasta);
            let objetoFiltro = {
                IdEntidad: this.id.toString(), 
                NroFactura: this.nro_factura,
                fechadesde: this.date_desde,
                fechahasta: this.date_hasta,
                tipoDocumento: this.select_tipo_doc,
                EstadoFactura: this.select
            }

            //console.log("Hiciste click en filtros",IdEntidad, this.date_desde, this.date_hasta, this.nro_factura,this.select_tipo_doc, this.select);

            //axios.post('http://localhost:4000/comprobantesxProveedores', {IdEntidad: IdEntidad, NroFactura: this.nro_factura, fechadesde: this.date_desde, fechahasta: this.date_hasta, tipoDocumento: this.select_tipo_doc, EstadoFactura: this.select })
            await axios.post('https://apiweb-colturproveedor.azurewebsites.net/comprobantesxProveedores', objetoFiltro)
            .then(res => {
            //const info = res.data.mensaje;
                console.log("hola",res);
                console.log("hola",res.status);
                if (res.status == "200") {
                    console.log('Si hay data');
                    this.$store.state.datosfiltroscomprobantes = res.data
                    console.log("El listado es: " + this.$store.state.datosfiltroscomprobantes);
                }else{
                    console.log('No hay data en filtro comprobantes por no tener status 200');
                }
            })
            .catch(e => {
                console.log(e.message);
            })

            //console.log("ENVIANDO FECHAS PARA PROCESAR EL NUEVO LISTADO" , this.date_desde, this.date_hasta);
            //this.$store.state.filtroFechaDesde = this.date_desde
            //this.$store.state.filtroFechaHasta = this.date_hasta
            
            //ENVIANDO MONTO TOTAL DE COMPROBANTES DESDE FILTRO COMPROBANTES
            console.log("PASANDO PARAMETROS PARA LLENAR EL OBJETO MONTOS", this.id, this.date_desde, this.date_hasta);
            await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/TotalFacturado/${this.id}/${this.date_desde}/${this.date_hasta}`)
            .then(res => {
            /* console.log('info',res);  */
            this.$store.state.montoTotalFacturado  = res.data
            console.log('InfoTF', res);
            })

            //ENVIANDO MONTO DE PAGOS PENDIENTES DESDE FILTRO COMPROBANTES
           
            await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/PendientesPagoComprobantes/${this.id}/${this.date_desde}/${this.date_hasta}`)
            .then(res => {
                this.$store.state.comprobantesPendientes = res.data
                console.log('InfoPP', res);
            })

            //ENVIANDO MONTO DE COMPROBANTES PAGADOS DESDE FILTRO COMPROBANTES

            await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/ComprobantesPagados/${this.id}/${this.date_desde}/${this.date_hasta}`)
            .then(res => {
                this.$store.state.comprobantesPagados = res.data
                console.log('InfoCP', res);
            })
            
            this.overlay = false
            //console.log("IdEntidad",this.$store.state.IdEntidad);
            //console.log("Hiciste click en filtros", this.date_desde, this.date_hasta, this.nro_factura,this.select_tipo_doc, this.select);
        },

        async CargarDatosComprobantes(){
            this.overlay = true
            //console.log("TU ERES MI BEBITO FIU FIU CREATED",this.date_desde,this.date_hasta);
            this.id = this.$store.state.IdEntidad;


            let objetoFiltro = {
                IdEntidad: this.id.toString(), 
                NroFactura: this.nro_factura,
                fechadesde: this.date_desde,
                fechahasta: this.date_hasta,
                tipoDocumento: this.select_tipo_doc,
                EstadoFactura: this.select
            }

            //console.log("Hiciste click en filtros",IdEntidad, this.date_desde, this.date_hasta, this.nro_factura,this.select_tipo_doc, this.select);

            //axios.post('http://localhost:4000/comprobantesxProveedores', {IdEntidad: IdEntidad, NroFactura: this.nro_factura, fechadesde: this.date_desde, fechahasta: this.date_hasta, tipoDocumento: this.select_tipo_doc, EstadoFactura: this.select })
           await axios.post('https://apiweb-colturproveedor.azurewebsites.net/comprobantesxProveedores', objetoFiltro)
            .then(res => {
            //const info = res.data.mensaje;
                console.log("hola",res);
                console.log("hola",res.status);
                if (res.status == "200") {
                    console.log('Si hay data');
                    this.$store.state.datosfiltroscomprobantes = res.data
                    console.log("El listado es: " + this.$store.state.datosfiltroscomprobantes);
                }else{
                    console.log('No hay data en filtro comprobantes por no tener status 200');
                }
            })
            .catch(e => {
                console.log(e.message);
            })

            //console.log("TU ERES MI BEBITO FIU FIU CREATED ",this.date_desde,this.date_hasta);
            this.overlay = false
        }


       /*  formatoDesde(value){
            value = new Date();
            let firstday = new Date(value.getFullYear(), value.getMonth(), 1)
            console.log("FECHA ", firstday);
            let fs = dayjs(firstday).format('YYYY-MM-DD')
            console.log("FECHA 2", fs);
            
            return dayjs(firstday).format('DD/MM/YYYY')
        } */
        
    },

        mounted(){
            // console.log("TU ERES MI BEBITO FIU FIU MOUNTED");
            /* console.log(this.$store.state.datosUsuario.FormaPago); */
            this.id = this.$store.state.IdEntidad;
        },

        created(){

            this.CargarDatosComprobantes()
        /* const IdEntidad = this. */
            /* this.date = this.$store.state.filtroFechaDesde;
            console.log(" Mi fecha desde es : " ,this.$store.state.filtroFechaDesde); */
            this.$store.dispatch('setFiltroParameters', {fechaDesde: this.date_desde,  fechaHasta: this.date_hasta});
        },
    

}

</script>


<style scoped>

/* .filtrocompoenent{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
} */

.div-main-informacion{
    position: relative;
    display: flex;
    margin-top: 10px;
    width: 95%;
    float: right;
    /* height: auto; */
    /* border: 1px solid black; */  
}
.div-informacion-datos{
    position: relative;
    background-color: #fff;
    width: 98%;
    margin: 0 auto;
    /* display: flex; */
    height: auto;
    /* padding: 20px 35px 15px 30px; */
    /* border: 1px solid #BFBFBF; */
    /* box-shadow: 1px 0px 1px 0px #aaaaaa; */
    border-radius: 2px;
}
.filtro-cabecera{
    position: relative;
    width: 100%;
    height: 30%;
    padding-top: 12px;
    padding-left: 10px;
    font-size: 16px;
    border-bottom: 2px solid #EDEDED;
    /* border-bottom: 2px solid #EDEDED; */
    font-weight: 600;
    /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
    font-family: 'open sans', sans-serif;
}
.filtro-detalle{
    position: relative;
    width: 100%;
    height: 70%;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    
}
.select-estado{
    width: 170px;
    /* border: 1px solid blue;
    display: flex; */
    /* align-items: center; */
    /* align-content: center; */
}
.select-estado-left{
    width: 170px;
}
.contenido{
    display: flex;
    align-items: center;
    margin-left: 12px;
    height: 100%;
}
.contenido-filtro-factura{
    display: flex;
    align-items: center;
    margin-left: 12px;
    /* margin-left: 2px; */
    padding: 14px 4px;
    height: 100%;
}
.contenido-filtro-estado{
    display: flex;
    align-items: center;
    /* margin-left: 2px; */
    padding: 14px 4px;
    height: 100%;
}
.contenido-cb{
    display: flex;
    /* border: 1px solid blue; */
    align-items: center;
    margin-left: 12px;
    height: 100%;
}
/* .filtro-left{
    position: relative;
    width: 30%;
    height: 100%;
    background: yellow;
}
.filtro-right{
    position: relative;
    width: 70%;
    height: 100%;
    background: blue;
}
 */
.texto-fecha-tipodocumento{
    font-size: 14px;
    font-weight: 500;
    width: 42%;
    /* background-color: aqua; */
}
.texto-fecha-estado{
    font-size: 14px;
    font-weight: 500;
    width: 35%;
}
.texto-fecha{
    font-size: 14px;
    font-weight: 500;
    padding-right: 4px;
}
.texto-fecha-nrofactura{
    font-size: 14px;
    font-weight: 500;
    /* width: 34%; */
}
.desde-fecha {
    display: flex;
    align-items: center;
    font-size: 13px;
}
 
.hasta-fecha {
    display: flex;
    align-items: center;
    font-size: 13px;
}
.dt-desde{
    /* border: 1px solid blue; */
    padding: 0;
    margin: 0;
    width: 130px;
}
.dt-hasta{
    /* border: 1px solid blue; */
    padding: 0;
    margin: 0;
    width: 130px;
}
.text-filtro-left{
    /* outline: chocolate; */
    margin-left: 5px;
    border: 2px solid #EDEDED;
    height: 40px;
    width: 130px;
    padding-top: 5px;
    border-radius: 4px;
    font-size: 14px;
}
.info-boton{
    width: 100%;
    color: #fff;
    padding: 20px 15px 15px 15px;
    border-radius: 14px;
    background: #D15939;
    outline: none;
    font-weight: 500;
    text-transform: uppercase;
 /*    display: flex;
    justify-content: center;
    align-items: center; */
}
.div-main-informacion-boton{
    position: relative;
    height: auto;
    margin-bottom: 10px;
    margin-left: 30px;
}
.div-informacion-datos-boton{
    position: relative;
    /* background-color: #fff; */
    width: 120px;
    /* display: flex; */
    height: 50px;
    /* padding: 20px 35px 15px 30px; */
    /* border: 1px solid #BFBFBF; */
    /* box-shadow: 1px 0px 1px 0px #aaaaaa; */
    border-radius: 2px;
}
.container-fechas{
    display: flex;
   /*  background-color: aqua; */
}
.container-fecha-desde{
    position: relative;
    /* background-color: #D15939; */
    display: flex;
}
.container-fecha-hasta{
    display: flex;
}


@media (max-width: 420px) {


.div-main-informacion{
    position: relative;
    display: flex;
    margin-top: 10px;
    width: 100%;
    height: auto;
    /* float: right; */
    /* height: auto; */
    /* border: 1px solid black; */
}

.div-informacion-datos{
    position: relative;
    background-color: #fff;
    width: 98%;
    margin: 0 auto;
    /* display: flex; */
    height: auto;
    /* padding: 20px 35px 15px 30px; */
    /* border: 1px solid #BFBFBF; */
    /* box-shadow: 1px 0px 1px 0px #aaaaaa; */
    border-radius: 2px;
}

.filtro-cabecera{
    position: relative;
    width: 100%;
    height: 50px;
    padding-top: 13px;
    padding-left: 10px;
    font-size: 16px;
    border-bottom: 2px solid #EDEDED;
    /* border-bottom: 2px solid #EDEDED; */
    font-weight: 600;
    font-family: 'open sans', sans-serif;
}

.filtro-detalle{
    position: relative;
    width: 100%;
    height: auto;
    /* background-color: orange; */
    padding-left: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.contenido{
    position: relative;
    width: 100%;
    display: block;
    align-items: center;
    margin-left: 0px;
    padding: 12px 4px;
    height: auto;
    /* border: 1px solid blue; */
}

.contenido-filtro-factura{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 0px;
    height: auto;
    /* border: 1px solid blue; */
}

.contenido-cb{
    display: flex;
    /* border: 1px solid blue; */
    align-items: center;
    margin-left: 0px;
    padding-left: 4px;
    height: 70px;
}

.contenido-filtro-estado{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 0px;
    padding-left: 4px;
    height: 70px;
    /* border: 1px solid blue; */
}

.texto-fecha-nrofactura{
    font-size: 13px;
    font-weight: 500;
    width: 34%;
}

.texto-fecha-tipodocumento{
    font-size: 13px;
    font-weight: 500;
    width: 42%;
    /* background-color: aqua; */
}

.select-estado-left{
    width: 250px;
    /* background-color: aquamarine; */
}

.texto-fecha-estado{
    font-size: 13px;
    font-weight: 500;
    width: 35%;
}

.select-estado{
    width: 220px;
    /* border: 1px solid blue;
    display: flex; */
    /* align-items: center; */
    /* align-content: center; */
}

.container-fechas{
    position: relative;
    width: 100%;
    display: flex;
    /* background-color: aqua; */
}

.texto-fecha{
    font-size: 13px;
    font-weight: 500;
    padding-right: 4px;
}

.desde-fecha {
    font-size: 13px;
}
 
.hasta-fecha {
    font-size: 13px;
}

.dt-desde{
    /* border: 1px solid blue; */
    padding: 0;
    margin: 0;
    width: 130px;
}

.dt-hasta{
    /* border: 1px solid blue; */
    padding: 0;
    margin: 0;
    width: 130px;
}

.text-filtro-left{
    /* outline: chocolate; */
    margin-left: 5px;
    border: 2px solid #EDEDED;
    height: 40px;
    width: 210px;
    padding-top: 5px;
    border-radius: 4px;
    font-size: 14px;
}

.info-boton{
    width: 100%;
    color: #fff;
    padding: 12px 12px 12px 12px;
    border-radius: 14px;
    background: #D15939;
    outline: none;
    font-weight: 500;
    text-transform: uppercase;
 /*    display: flex;
    justify-content: center;
    align-items: center; */
}

.div-main-informacion-boton{
    position: relative;
    display: flex;
    height: auto;
    margin-bottom: 5px;
    margin-left: 0px;
    margin-right: 0px;
}

.div-informacion-datos-boton{
    position: relative;
    /* background-color: #fff; */
    width: 120px;
    /* display: flex; */
    height: 40px;
    /* padding: 20px 35px 15px 30px; */
    /* border: 1px solid #BFBFBF; */
    /* box-shadow: 1px 0px 1px 0px #aaaaaa; */
    border-radius: 2px;
}

.container-fechas{
    display: block;
   /*  background-color: aqua; */
}

.container-fecha-desde{
    position: relative;
    width: 100%;
    display: flex;
}

}


</style>
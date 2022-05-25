<template>
    <div>
    <div class="div-main-informacion">
        <div class="div-informacion-datos">
            <div class="posicionright">
                
                <div class="TabInformacion_pendiemte">
                    <div class="texto">
                        <p class="tab-titulo">Pendientes</p> 
                        <v-icon class="icon-color">monetization_on</v-icon>     
                    </div>
                    <div class="contador">
                       <div class="contador-dolares">
                           <p class="contador-dolares-texto">$ {{totalPendientesPrepago.Dolares}}</p>
                          <!--  <p class="contador-dolares-num">{{montoTotalFacturado.CountDolares}}</p> -->
                       </div>
                       <!-- <p class="texto-facturas">Facturas</p> -->
                    </div>
                </div>
                 <div class="TabInformacion_pendiemte">
                    <div class="texto">
                        <p class="tab-titulo">Pendientes</p> 
                        <v-icon class="icon-color">monetization_on</v-icon>     
                    </div>
                    <div class="contador">
                       <!-- <p class="texto-facturas">Facturas</p> -->
                       <div class="contador-soles">
                           <p class="contador-soles-texto">S/ {{totalPendientesPrepago.Soles}}</p>
                          <!--  <p class="contador-soles-num">{{montoTotalFacturado.CountSoles}}</p> -->
                       </div>
                    </div>
                </div>


                <div class="TabInformacion_pagados">
                    <div class="texto">
                        <p class="tab-titulo">Cancelado</p>
                        <v-icon class="icon-color">do_not_disturb_on</v-icon>
                    </div>
                    <div class="contador">
                        <p class="contador-texto-pendiente texto-pendiente">$ {{totalCanceladoPrepago.Dolares}}</p>
                    </div>
                </div>
                 <div class="TabInformacion_pagados">
                    <div class="texto">
                        <p class="tab-titulo">Cancelado</p>
                        <v-icon class="icon-color">do_not_disturb_on</v-icon>
                    </div>
                    <div class="contador">
                        <p class="contador-texto-pendiente texto-pendiente">S/ {{totalCanceladoPrepago.Soles}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>


<script>
import {mapState} from 'vuex'
export default {
    name:'ReportPrepagos',
    data(){
        return {
             pendienteprepago_dolares: '0',
             pendienteprepago_soles: '0'
        }
    },
     computed: {
         ...mapState(['totalPendientesPrepago', 'totalCanceladoPrepago']),
            
        recibiendo(){
            console.log("En el computed" ,this.$store.state.totalPendientesPrepago);
            return this.$store.state.totalPendientesPrepago;
        } 
         

    },
    methods :{
        
    },

    created(){
      /*   console.log("=======VALOR ES PENDIENTE EN CREA=======>",this.$store.state.totalPendientesPrepago);
        console.log("=======VALOR ES CANCELADO EN CREA=======>",this.$store.state.totalCanceladoPrepago);         */    
    },

     mounted(){
        /* console.log(this.$store.state.datosUsuario.FormaPago); */
        /* this.$store.dispatch('getTotalFactura');
        this.$store.dispatch('getPendientesPago');
        this.$store.dispatch('getComprobantesPagados'); */
        /* console.log("=======VALOR ES PENDIENTE=======>",this.$store.state.totalPendientesPrepago);
        console.log("=======VALOR ES CANCELADO=======>",this.$store.state.totalCanceladoPrepago); */
        this.$store.dispatch('getTotalPrepagoPendientes');
        this.$store.dispatch('getTotalPrepagoCancelado');
        /* this.$store.dispatch('getPendientePago'); */
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
    height: auto;
    /* border: 1px solid blueviolet; */
    margin-bottom: 10px;
    /* justify-content: left; */
}

.div-informacion-datos{
    position: relative;
    width: 98%;
    height: 100px;
    /* padding: 20px 35px 15px 30px; */
    /* border: 2px solid #BFBFBF; */
    /* box-shadow: 2px 2px 2px 2px #aaaaaa;
    border-radius: 5px; */
    margin: 0 auto;
    /* background-color: white; */
    justify-content: left;
    /* display: flex; */
    display: flex;
    
    
}

.posicionright{
    position: relative;
    /* margin-left: 20px; */
    width: 90%;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    justify-content: left;
    height: 100%;
    /* background-color: aqua; */
}

.posicionright .TabInformacion_total, .TabInformacion_pendiemte, .TabInformacion_pagados {
    margin-right: 8px;
}

.TabInformacion_pendiemte{
    
    width: 200px;
   /*  justify-items: center;
    align-items: center; */
    height: 100px;
    /* border: 1px solid blue; */
    font-family: Montserrat, sans-serif;
    border-radius: 5px;
    color: #fff;
    /* text-transform: uppercase; */
    background: #f1376e;  /* fallback for old browsers */
}

.TabInformacion_pagados{
    
    width: 200px;
    justify-items: center;
    align-items: center;
    height: 100px;
    /* border: 1px solid blue; */
    font-family: Montserrat, sans-serif;
    border-radius: 5px;
    color: #fff;
    /* text-transform: uppercase; */
    background: #39da8a;  /* fallback for old browsers */
}


.TabInformacion_pagados{
    
    width: 200px;
    justify-items: center;
    align-items: center;
    height: 100px;
    /* border: 1px solid blue; */
    font-family: Montserrat, sans-serif;
    border-radius: 5px;
    color: #fff;
    /* text-transform: uppercase; */
    background: #39da8a;  /* fallback for old browsers */
}

.texto{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px 5px; */
    /* border: 1px solid orange; */
    border-bottom: 1px solid #fff;
    height: 30%;
    font-weight: 500;
    font-size: 14px;
}

.tab-titulo{
    padding: 13px 15px;
}

.icon-color{
    color: #fff;
    padding-right: 5px;
}

.contador{
    display: flex;
    align-items: center;
    padding: 5px 10px;
    /* text-align: right; */
    font-size: 14px;
    font-weight: 500;
    /* border: 1px solid blue; */
    height: 70%;
    /* display: flex;
    justify-content: space-between; */
}

.contador-dolares{
    height: 50%;
    /* background: #39da8a; */
    display: flex;
    justify-content: space-between;
    /* border: 1px solid blue; */
    align-items: center;
}

.contador-dolares-texto{
    /* border: 1px solid blue; */
    font-weight: 600;
    font-size: 20px;
}

.contador-soles{
    height: 50%;
    /* background: #39da8a; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid blue; */
}

.contador-soles-texto{
    /* border: 1px solid blue; */
    font-weight: 600;
    font-size: 20px;
}

.contador-dolares-num{
    font-weight: 700;
    font-size: 20px;
}

.contador-soles-num{
    font-weight: 700;
    font-size: 20px;
}

.texto-facturas{
    display: flex;
    float: right;
}

.contador-texto-pendiente{
    /* border: 1px solid beige; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.texto-pendiente{
    font-size: 20px;
    font-weight: 700;
}

/* .TabInformacion .contador:first-child{
    font-size: 10px;
    display: flex;
} */

/* .usd{
    padding-bottom: 2px;
} */

@media (max-width: 1720px) {

.posicionright{
    position: relative;
    width: 88%;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    float: right;
    height: 100%;
    /* background-color: aqua; */
}

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
    margin-bottom: 10px;
    /* justify-content: left; */
}

.div-informacion-datos{
    position: relative;
    width: 95%;
    height: auto;
    /* padding: 20px 35px 15px 30px; */
    /* border: 1px solid red; */
    /* box-shadow: 2px 2px 2px 2px #aaaaaa;
    border-radius: 5px; */
    margin: 0 auto;
    /* background-color: white; */
    justify-content: left;
    /* display: flex; */
    display: flex;   
}

.posicionright{
    position: relative;
    /* margin-left: 20px; */
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    /* justify-content: left; */
    justify-content: space-between;
    height: 100%;
    /* background-color: aqua; */
    flex-wrap: wrap;
}

.posicionright .TabInformacion_total, .TabInformacion_pendiemte, .TabInformacion_pagados {
    margin: 3px;
}

.TabInformacion_pendiemte{
    
    position: relative;
    width: 48%;
    justify-items: center;
    align-items: center;
    height: 100px;
    /* border: 1px solid blue; */
    font-family: Montserrat, sans-serif;
    border-radius: 5px;
    color: #fff;
    /* text-transform: uppercase; */
    background: #f1376e;  /* fallback for old browsers */

}

.TabInformacion_pagados{
    
    width: 48%;
    justify-items: center;
    align-items: center;
    height: 100px;
    /* border: 1px solid blue; */
    font-family: Montserrat, sans-serif;
    border-radius: 5px;
    color: #fff;
    /* text-transform: uppercase; */
    background: #39da8a;  /* fallback for old browsers */

}





}

</style>
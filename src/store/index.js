import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios';

export default new Vuex.Store({


  state: {
    IdEntidad: '',
    RazonSocial: '',
    datosUsuario: [],
    montoTotalFacturado: [],
    comprobantesPendientes: '',
    comprobantesPagados: '',
    datosUsuarioTitle : 'Perfil de Usuario',
    datosListadoComprobanteTitle: 'Listado de Comprobantes',
    datosListadoPrepago: 'Listado de Prepagos',
    datosListadoEstablecimientos: 'Listado de Establecimientos',
    datosListadoContactos: 'Listado de Contactos',
    filtroFechaDesde : '',
    filtroFechaHasta : '',
    fechita: '2021-01-03',
    datosfiltroscomprobantes: [],
    totalPendientesPrepago: [],
    totalCanceladoPrepago: [],
    filtroFechaDesde_Prepago : '2022-01-01',
    filtroFechaHasta_Prepago : '2022-05-15',
    datosfiltrosprepago: [],
    datosEstablecimientos: [],
    datosContactos: []
  },
  getters: {
  },
  mutations: {
    getDatosUsuario(state , datos){
        state.datosUsuario = datos;
        /* console.log(state.datosUsuario); */
    },
    
    setFiltroParameters(state , payload){
      state.filtroFechaDesde = payload.fechaDesde
      state.filtroFechaHasta = payload.fechaHasta
    },

    getTotalFactura(state , montos){
      state.montoTotalFacturado = montos;
      /* console.log(state.montoTotalFacturado); */
    },

    getPendientesPago(state, pendientes){
      state.comprobantesPendientes = pendientes;
    },

    getComprobantesPagados(state, pagados){
      state.comprobantesPagados = pagados;
    },

    //Prepagos
    getTotalPrepagoPendientes(state, pendientesPrepago){
      state.totalPendientesPrepago = pendientesPrepago;
      console.log("en state pen :",state.totalPendientesPrepago); 
    },

    getTotalPrepagoCancelado(state, canceladoPrepago){
      state.totalCanceladoPrepago = canceladoPrepago;
       console.log("en state cancelado :",state.totalCanceladoPrepago); 
    },

    //Establecimientos
    
    getEstablecimientos(state, datosEstablecimientos){
      state.datosEstablecimientos = datosEstablecimientos;
      console.log("Los establecimientos :",state.datosEstablecimientos); 
    },

    //Contactos

    getContactos(state, datosContactos ){
      state.datosContactos = datosContactos;
      console.log("Los contactos: ",state.datosContactos);
    }

    /* getObtenerMontoSoles(state){

      this.datosArray = state.montoTotalFacturado; 
      console.log(this.datosArray);
    }
 */
  },
  actions: {


    getDatosUsuario(context){
        console.log(this.IdEntidad);
        axios.get('https://apiweb-colturproveedores.azurewebsites.net/datosProveedor/'+ this.state.IdEntidad )
        .then(res => {
          context.commit('getDatosUsuario', res.data);
          console.log('infoDU', res);
        })
        
    },

    setFiltroParameters(context, payload){
      console.log('PayLoad', payload);
      context.commit('setFiltroParameters', payload)
    },


    getTotalFactura(context){
      console.log("=========> ", this.state.filtroFechaDesde);
      axios.get(`https://apiweb-colturproveedores.azurewebsites.net/TotalFacturado/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getTotalFactura', res.data);
        console.log('InfoTF', res);
      })
    },


    getPendientesPago(context){
      console.log(this.state.IdEntidad);
      axios.get(`https://apiweb-colturproveedores.azurewebsites.net/PendientesPagoComprobantes/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`)
      .then(res => {
        context.commit('getPendientesPago', res.data)
        console.log('InfoPP', res);
      })
      
    },

    getComprobantesPagados(context){
      console.log(this.state.IdEntidad);
      axios.get(`https://apiweb-colturproveedores.azurewebsites.net/ComprobantesPagados/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`)
      .then(res => {
        context.commit('getComprobantesPagados', res.data)
        console.log('InfoCP', res);
      })
      
    },
    //PREPAGO
    getTotalPrepagoPendientes(context){
      console.log(this.state.IdEntidad);
      axios.get(`https://apiweb-colturproveedores.azurewebsites.net/TotalPendientesPrepago/${this.state.IdEntidad}/${this.state.filtroFechaDesde_Prepago}/${this.state.filtroFechaHasta_Prepago}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getTotalPrepagoPendientes', res.data);
        console.log('InfoTPP', res);
      })
    },


    getTotalPrepagoCancelado(context){
      console.log(this.state.IdEntidad);
      axios.get(`https://apiweb-colturproveedores.azurewebsites.net/TotalCanceladoPrepago/${this.state.IdEntidad}/${this.state.filtroFechaDesde_Prepago}/${this.state.filtroFechaHasta_Prepago}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getTotalPrepagoCancelado', res.data);
        console.log('InfoTPC', res);
      })
    },

    //ESTABLECIMIENTOS

    getEstablecimientos(context){
      console.log(this.state.IdEntidad);
      axios.get(`https://apiweb-colturproveedores.azurewebsites.net/ListadoEstablecimientos/${this.state.IdEntidad}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getEstablecimientos', res.data);
        console.log('InfoEst', res);
      })
    },


    //CONTACTOS
    getContactos(context){
      console.log(this.state.IdEntidad);
      axios.get(`https://apiweb-colturproveedores.azurewebsites.net/ListadoContactos/${this.state.IdEntidad}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getContactos', res.data);
        console.log('InfoCont', res);
      })

    }


   


 /*    getObtenerMontoSoles(context){
      console.log(this.state.IdEntidad);
      context.commit('getObtenerMontoSoles')
    }
 */
   /*  getPendientePago(context){
      console.log(this.state.IdEntidad);
      axios.get('http://localhost:4000/PendientesPagoComprobantes/'+ this.state.IdEntidad )
      .then(res => {
        context.commit('getPendientePago', res.data);
        console.log('info', res.data);
      })
    } */

  },
  modules: {
  }
})

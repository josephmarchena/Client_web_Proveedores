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
    totalPrepagos: [],
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
      console.log("EL MONTO TOTAL FACTURADO ES:",state.montoTotalFacturado);
    },

    getPendientesPago(state, pendientes){
      state.comprobantesPendientes = pendientes;
    },

    getComprobantesPagados(state, pagados){
      state.comprobantesPagados =pagados;
    },

    //Prepagos

    getTotalPrepago(state, totalPrepago){
      state.totalPrepagos = totalPrepago;
      //console.log("en state TOTALPREPAGOS :",state.totalPrepagos);
    },

    getTotalPrepagoPendientes(state, pendientesPrepago){
      state.totalPendientesPrepago = pendientesPrepago;
      console.log("en state PREPAGOPENDIENTES :",state.totalPendientesPrepago); 
    },

    getTotalPrepagoCancelado(state, canceladoPrepago){
      state.totalCanceladoPrepago = canceladoPrepago;
       console.log("en PREPAGOCANCELADO :",state.totalCanceladoPrepago); 
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
        axios.get('https://apiweb-colturproveedor.azurewebsites.net/datosProveedor/'+ this.state.IdEntidad )
        .then(res => {
          context.commit('getDatosUsuario', res.data);
          console.log('infoDU', res);
        })
        
    },

    async setFiltroParameters(context, payload){
      console.log('PayLoad', payload);
      await context.commit('setFiltroParameters', payload)
    },


    async getTotalFactura(context){
      console.log("=========>MI FILTRO FECHA DESDE ES: ", this.state.filtroFechaDesde);
      await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/TotalFacturado/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getTotalFactura', res.data);
        console.log('InfoTF', res);
      })
    },
    
    async getPendientesPago(context){
      console.log(this.state.IdEntidad);
      await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/PendientesPagoComprobantes/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`)
      .then(res => {
        context.commit('getPendientesPago', res.data)
        console.log('InfoPP', res);
      })
      
    },

    async getComprobantesPagados(context){
      console.log(this.state.IdEntidad);
      await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/ComprobantesPagados/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`)
      .then(res => {
        context.commit('getComprobantesPagados', res.data)
        console.log('InfoCP', res);
      })
      
    },
    //PREPAGO
    
    async getTotalPrepago(context){
      console.log(this.state.IdEntidad);
      await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/MontoTotalPrepago/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getTotalPrepago', res.data);
        console.log('InfoTPP', res);
      })
    },

    async getTotalPrepagoPendientes(context){
      console.log(this.state.IdEntidad);
      await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/TotalPendientesPrepago/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getTotalPrepagoPendientes', res.data);
        console.log('InfoTPP', res);
      })
    },


    async getTotalPrepagoCancelado(context){
      console.log(this.state.IdEntidad);
      await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/TotalCanceladoPrepago/${this.state.IdEntidad}/${this.state.filtroFechaDesde}/${this.state.filtroFechaHasta}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getTotalPrepagoCancelado', res.data);
        console.log('InfoTPC', res);
      })
    },

    //ESTABLECIMIENTOS

    async getEstablecimientos(context){
      console.log(this.state.IdEntidad);
      await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/ListadoEstablecimientos/${this.state.IdEntidad}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getEstablecimientos', res.data);
        console.log('InfoEst', res);
      })
    },


    //CONTACTOS
    async getContactos(context){
      console.log(this.state.IdEntidad);
      await axios.get(`https://apiweb-colturproveedor.azurewebsites.net/ListadoContactos/${this.state.IdEntidad}`  )
      .then(res => {
        /* console.log('info',res);  */
        context.commit('getContactos', res.data);
        console.log('InfoCont', res);
      })

    },

   // CONTACTOS POR ESTABLECIMIENTOS
  //  async getFiltroContactosEstablecimientos(context){
  //   console.log(this.state.IdEntidad);
  //   await axios.get(`http://localhost:4000/FiltroContactosporEstablecimiento/${this.state.IdEntidad}`  )
  //   .then(res => {
  //     /* console.log('info',res);  */
  //     context.commit('getFiltroContactosEstablecimientos', res.data);
  //     console.log('InfoContxEstablecimientos', res);
  //   })

  // },

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

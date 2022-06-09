<template>
    <div>
        <div class="div-main-informacion">
            <div class="div-informacion-datos">
                <h4>Leyenda del Estados</h4>
                
                <hr>
                <ul>
                    <li><div class="div Recepcionado"></div>{{EstadoRed}}</li>
                    <li><div class="div Pagado"></div>{{EstadoGreen}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeyendaComponent',
    props : [
        'EstadoRed',
        'EstadoGreen'
    ]

}

</script>


<style scoped>

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
    background-color: transparent;
    width: 98%;
    margin: 0 auto;
    /* display: flex; */
    height: auto;
    /* padding: 20px 35px 15px 30px; */
    /* border: 1px solid #BFBFBF; */
    /* box-shadow: 1px 0px 1px 0px #aaaaaa; */
    border-radius: 2px;
}

h4 {
    margin: 5px 15px 10px 10px;
}

ul {
    list-style: none;
    margin: 20px 5px 5px 15px;
}

li{
    margin-bottom: 10px;
}

.Recepcionado{
    display: inline-block;
    width:20px;
    height:20px;
    background-color:red;
    border-radius:50%;
    margin-right: 15px;
}

.Pagado{
    display: inline-block;
    width:20px;
    height:20px;
    background-color:green;
    border-radius:50%;
    margin-right: 15px;
}



/* <div style="width:20px;height:20px;background-color:red;display:inline-block;border-radius:50%" */

</style>
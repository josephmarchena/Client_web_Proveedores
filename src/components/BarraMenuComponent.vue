<template>
    <div>
        <div class="menu-main">
            <div class="menu-left"></div>
            <div class="menu-right">
                <ul class="nav navbar-top-links">
                    <li><span class="bnv-message">Bienvenido : <span class="bnv-dato">{{this.$store.state.RazonSocial}}</span></span></li>
                    <li class="bnv-picture"><img src="../assets/image/CostadelSolLogo.png" alt=""></li>
                    <li class="bnv-noti">
                        <span class="titulo-span"><v-icon class="icon-color" title="Notificaciones">mail</v-icon></span>
                    </li>
                    <li class="bnv-logout">
                        <router-link to="/" class="router-link"><v-icon class="icon-color icon-color-logout">logout</v-icon>Cerrar Sesion</router-link>
                        <router-link to="/"><v-icon class="icon-color-single icon-color-logout">logout</v-icon></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>

</script>


<style scoped>

.menu-main{
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
}

.menu-left {
    position: relative;
    width: 50%;
    height: 60px;
}

.menu-right {
    position: relative;
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.bnv-picture img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.nav{
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    align-items: center;
}

.navbar-top-links li{
    display: inline-block;
    align-self: center;
    margin-right: 25px;
    font-size: 14px;
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.icon-color{
    font-size: 18px;
    cursor: pointer;
    z-index: 100;
}

.icon-color-logout{
    /* color: rebeccapurple; */
    margin-right: 7px;
}

.bnv-dato{
    font-weight: 200;
    color: #333333;
}

.icon-color-single{
    display: none;
}

.bnv-logout{
    width: 108px;
    /* background-color: blueviolet; */
    color: black;
    z-index: 50;
}

.router-link{
    font-size: 13px;
    color: #333333;
}

.navbar-top-links .bnv-message{
    font-size: 13px;
    font-weight: 200;
}

.bnv-noti{
    background-color:transparent;
    cursor: pointer;
}

.titulo-span:before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    /* border-bottom: 2px solid #D15939; */
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    padding-top: 5px;
    cursor: pointer;
}
.titulo-span{
    display: inline-block;
    position: relative;
    width: 25px;
    cursor: pointer;
}




@media (max-width: 420px) {
    
   .menu-main{
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    /* border: 1px solid blue; */
    }

    .menu-left {
    position: relative;
    width: 50%;
    height: 60px;
    }

    .menu-right {
    position: relative;
    width: 50%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* border: 1px solid blue; */
    }

    .navbar-top-links li{
    display: inline-block;
    align-self: center;
    margin-right: 20px;
    font-size: 14px;
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .navbar-top-links .bnv-message{
        display: none;
    }

    .bnv-logout{
    width: 38px;
    /* background-color: blueviolet; */
    color: black;
    z-index: 50;
    }

    .router-link{
        display: none;
    }

    .icon-color-single{
        display: block;
    }
}

</style>
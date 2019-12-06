<template>
  <div id="app">
    <div id="nav">
      <span id="logo">
        <router-link to="/"><img id= "dog" src="../public/images/logo.svg" height="72" width="62"><h1>아프지말개냥</h1></router-link>
      </span>
      <div id="menu">
        <h3>
          <router-link to="/login">Login</router-link> |
          <router-link to="/board">Board</router-link> |
          <router-link to="/booking">My Pet</router-link>|
          <router-link to="/map">Map</router-link>
          <p></p>
        </h3>
    
      </div>
    </div>
    <router-view/>
  </div>
</template>





<style>
#dog{
  padding: 30px 0px 0px 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#menu{
  padding-right: 100px;
  text-align: right;
  margin:auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>

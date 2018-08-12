<template>
  <section id="home" class="home" style="background: url('https://cdn.laurarosales.es/images/bg.jpg'); background-attachment: fixed;background-position: center;
    background-repeat: no-repeat;
    background-size: cover;">
      <div class="home-overlay"></div>
      <div class="home-content" id="scroll-down">
          <div class="home-intro">
              <div class="col-sm-3">
                  <router-link class="logo" to="/"><img src="https://cdn.laurarosales.es/images/logo.jpg" alt="logo" width="260" height="260"></router-link>
              </div>
              <div class="col-sm-9">
                  <h2>Hola, me llamo</h2>
                  <h1>Laura Rodriguez Rosales</h1>
                  <div class="type-wrap">
                      <div id="typed-strings">
                          <span>Pastelera</span>
                          <span>Gamer</span>
                          <span>Pandaaaaa!!!!</span>
                      </div>
                      <span id="typed" style="white-space:pre;"></span> 
                  </div>   
                  <a class="download-link hvr-shutter-out-horizontal" href="">¿Descargar mi CV?</a>
              </div>
          </div>
          <a class="scroll-down page-scroll" title="Scroll Down" href="#about"><i class="fa fa-circle" aria-hidden="true"></i></a>
      </div>
      <div class="menu_area" id="stick_menu">
          <div class="container">
              <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <nav class="navbar navbar-default" role="navigation">
                          <div class="container-fluid">
                              <div class="navbar-collapse mainnavmenu" id="bs-example-navbar-collapse-1">
                                  <div id="menu-center">
                                      <ul class="nav navbar-nav mainnav">
                                          <li class="active"><a href="#home" class="page-scroll">Inicio <span class="sr-only">(current)</span></a></li>
                                          <li><a href="#about" class="page-scroll">Sobre mí</a></li>
                                          <li><a href="#skills" class="page-scroll">Habilidades</a></li>
                                          <li><a href="#resumes" class="page-scroll">Experiencia</a></li>
                                          <li><a href="#services" class="page-scroll">Servicio</a></li>
                                          <li><a href="#portfolio" class="page-scroll">Recetas</a></li>
                                          <li><a href="#blog" class="page-scroll">Blog</a></li>
                                          <!--<li><a href="#testimonials" class="page-scroll">Testimonials</a></li>-->
                                          <li><a href="#contact" class="page-scroll">Contact</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Galeries</router-link>
        </li>
        <li class="nav-item" v-if="loggedIn">
          <router-link to="/Admin" class="nav-link">Admin</router-link>
        </li>
      </ul>
    </div>
  </nav>-->
</template>

<script>
export default {
 computed:{
   loggedIn() {
     return localStorage.getItem("token") != null
   }
 }
}
</script>
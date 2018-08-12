
<template>
  <div>
    <div class="responsive-menu">
			<router-link to="/"> <b>LAURA</b></router-link> 
			  <a id="menu-icon" class="but" href="#">
				<span class="ti-menu">
				<img src="https://cdn.laurarosales.es/images/menu.png" alt="image">
			</span> 
			</a>
		</div>
    <div class="container-fluid">
      <div class="row">
        <div class="main scroll-page">
                <Header/>
                <router-view/>
            </div>
        </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

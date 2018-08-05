<template>
  <div>
    <b-container>
      <b-tabs>
        <b-tab title="Galeries" active>
          <Galeries/>
        </b-tab>
        <b-tab title="Recipes">
          <Recipes/>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>


<script>
import Galeries from '@/components/AdminGaleries.vue'
import Recipes from '@/components/AdminRecipes.vue'

export default {
  name: 'admin',
  components: {
    Galeries,
    Recipes
  }
}
</script>
<template>
    <div>
        <vue-element-loading :active="isActive"  spinner="spinner" :is-full-screen="true"/>
        <b-card no-body>
            <b-tabs pills card vertical>
                <b-tab v-bind:title="galery.name" v-bind:key="galery.Id" active v-for="galery in Galeries">
                    <Images :images="galery.images" :idGalery="galery.id" />
                </b-tab>
            </b-tabs>
            <b-tab-item slot="tabs" @click.prevent="newTab" href="#">
                <icon name="plus"/>
            </b-tab-item>
        </b-card>
    </div>
</template>


<script>
import Images from '@/components/AdminGaleriesImages.vue';
import axios from 'axios';
import VueElementLoading from 'vue-element-loading';
export default {
    name: 'admin',
    components: {
        Images,
        VueElementLoading
    },
    data () {
        return {
            Galeries:[],
            isActive: true
        }
    },
    methods: {
        GetGaleries(){
            this.$http.get('/galeries')
            .then(response => (
                this.Galeries = response.data,
                this.isActive = false
            )).catch(error => (
                this.isActive = false,
                console.log(error)
            ))
        }
    },
    created: function () {
        this.GetGaleries();
    }
}
</script>

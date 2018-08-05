<template>
    <div>
        <vue-element-loading :active="isActive"  spinner="spinner" :is-full-screen="true"/>
        <div class="mb-5">
            <div>
                <b-btn v-b-modal.modal-center>Upload Image</b-btn>
            </div>
        </div>
        <b-container fluid class="p-4 bg-dark">
            <b-row v-bind:key="image.Id" v-for="(image, index)  in images" v-if="index % 4 == 0">
                <b-col v-if="images[index]">
                    <b-img-lazy  thumbnail fluid :src="images[index].src" alt="Thumbnail" v-img:idGalery/>
                    <h6 class="text-white font-weight-bold">{{images[index].name}}</h6>
                </b-col>
                <b-col v-if="images[index + 1]">
                    <b-img-lazy  thumbnail fluid :src="images[index + 1].src" alt="Thumbnail" v-img:idGalery/>
                    <h6 class="text-white font-weight-bold">{{images[index + 1].name}}</h6>
                </b-col>
                <b-col v-if="images[index + 2]">
                    <b-img-lazy thumbnail fluid :src="images[index + 2].src" alt="Thumbnail" v-img:idGalery/>
                    <h6 class="text-white font-weight-bold">{{images[index + 2].name}}</h6>
                </b-col>
                <b-col v-if="images[index + 3]">
                    <b-img-lazy  thumbnail fluid :src="images[index + 3].src" alt="Thumbnail" v-img:idGalery/>
                    <h6 class="text-white font-weight-bold">{{images[index + 3].name}}</h6>
                </b-col>
            </b-row>
        </b-container>
        <b-modal id="modal-center" ref="modal" centered title="Uploader" @ok="handleOk" @shown="clearImage">
            <div>
                <form @submit.stop.prevent="handleSubmit">
                    <b-form-input class="mt-2" type="text" placeholder="Name" v-model="ImageModel.Name"></b-form-input>
                    <b-form-input class="mt-2" type="text" placeholder="Description" v-model="ImageModel.Description"></b-form-input>
                    <b-form-file class="mt-2" v-model="files" accept="image/*" placeholder="Choose a file..." ></b-form-file>
                </form>
            </div>
        </b-modal>
    </div>
</template>


<script>
import JQuery from 'jquery';
import axios from 'axios';
import VueElementLoading from 'vue-element-loading';
let $ = JQuery;
export default {
    components: {
        VueElementLoading
    },
    props: {
        images:{},
        idGalery: Number
    },
    data () {
        return {
            files: '',
            ImageModel: {},
            isActive: false
        }
    },
    methods: {
        clearImage () {
            this.ImageModel = {}
        },
        handleOk (evt) {
            // Prevent modal from closing
            evt.preventDefault()
            this.isActive = true;
            if (this.ImageModel.Name != '' && !this.files) {
                alert('Atleast write a name and select a file')
                 this.isActive = false;
            } else {
                this.$refs.modal.hide()
                this.handleSubmit()
            }
        },
        handleSubmit () {
            this.submitFiles();
        },
        submitFiles(){
            let formData = new FormData();
            formData.append(this.files.name, this.files);
            axios({ 
                method: "POST",
                 "url": "http://api.laurarosales.es/api/uploader/upload",
                 "data": formData,
                  "headers": { 
                      "content-type": "multipart/form-data" 
                      }
                      }).then(result => {
                        this.InsertImage();
                    }, error => {
                        this.isActive = false;
                        this.$refs.modal.hide()
                        console.error(error);
                    });
        },
        InsertImage(){
            let uri = "http://api.laurarosales.es/api/images";
            this.ImageModel.Src = "http://api.laurarosales.es/Images/" + this.files.name;
            this.ImageModel.IdGalery = this.idGalery;

            axios.post(uri, this.ImageModel, { 
                    headers: {
                        'Content-type': 'application/json; charset=utf-8',
                }
            }).then(response => {
                this.images.push(response.data);
                this.isActive = false;
            })
            .catch(e => {
                this.isActive = false;
                console.error(e);
            })
        }
    }
}
</script>
<template>
    <div>
        <div class="grid image-wrapper">
            <div>
                <a v-for="item in images" class="images" data-lightbox="gallery" v-bind:data-title="item.info" :href="item.img">
                    <img class="galleryImages 1/4 grid__cell" v-bind:src="item.img">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        images: [
            //Add your images and information about the image here. The info will appear in the foot of the modal
            {img: 'assets/images/1.jpg',info: 'Img one info'},
            {img: 'assets/images/2.jpg',info: 'Img two info'},
            {img: 'assets/images/3.jpg',info: 'Img three info'},
            {img: 'assets/images/4.jpg',info: 'Img four info'},
            {img: 'assets/images/5.jpg',info: 'Img five info'},
            {img: 'assets/images/6.jpg',info: 'Img six info'},
            {img: 'assets/images/7.jpg',info: 'Img seven info'},
            {img: 'assets/images/8.jpg',info: 'Img eight info'},
        ],
    };
  },
}
</script>

<style lang="sass" scoped>

@import url("/node_modules/lightbox2/src/css/lightbox.css");

.galleryImages {
  object-fit:cover;
  padding-bottom: 20px;
  height: 13rem;
  max-width: 25%;
}
.modal-image {
  max-height: 29rem;
}
footer {
  background-color: white;
  text-align:center;
}
</style>
<template>
    <div>
        <div class="grid image-wrapper">
            <div>
                <a v-for="image in images" class="images" data-lightbox="gallery" v-bind:data-title="image.caption" :href="image.img">
                    <img class="galleryImages 1/4 grid__cell" v-bind:src="image.img">
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
            //Add your images and captions here.
            {img: 'assets/images/1.jpg',caption: 'Img one caption'},
            {img: 'assets/images/2.jpg',caption: 'Img two caption'},
            {img: 'assets/images/3.jpg',caption: 'Img three caption'},
            {img: 'assets/images/4.jpg',caption: 'Img four caption'},
            {img: 'assets/images/5.jpg',caption: 'Img five caption'},
            {img: 'assets/images/6.jpg',caption: 'Img six caption'},
            {img: 'assets/images/7.jpg',caption: 'Img seven caption'},
            {img: 'assets/images/8.jpg',caption: 'Img eight caption'},
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
img {
    filter: drop-shadow(.2em .2em .2em rgba(0,0,0,.6));
    transition: .3s;
    }
img:hover {
    filter: drop-shadow(.2em .2em .2em rgba(0,0,0,0));
    }
</style>
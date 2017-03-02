<template>
        <div class="image-wrapper">
                <a v-for="image in images" class="images" data-lightbox="gallery" v-bind:data-title="image.caption" :href="image.img">
                    <img class="galleryImages" v-bind:src="image.img">
                </a>
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

@import url("https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.css"); // I'm using a cdn here but you can replace it with this: /node_modules/lightbox2/src/css/lightbox.css

.image-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.galleryImages {
  object-fit:cover;
  height: 200px;
  max-width: 200px;
  margin: .5em;
}
img {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
img:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
@media screen and (min-width: 900px) {
  .image-wrapper {
    justify-content: space-around;
  }
}
</style>

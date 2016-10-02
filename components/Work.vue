<template>
  <div>
    <div class="grid image-wrapper">
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img1 :data=img1_info>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img2 :data=img2_info>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img3 :data=img3_info>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img4 :data=img4_info>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img5 :data=img5_info>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img6 :data=img6_info>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img7 :data=img7_info>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img8 :data=img8_info>
      </a>
    </div>
    <section class="modal--show" id="modal-image" tabindex="-1" data-cssmodal-resize role="dialog" aria-labelledby="modal-label" aria-hidden="true">
  	   <div class="modal-inner">
  		     <div class="modal-content">
  			      <img class="modal-image">
  			      <footer></footer>
  		      </div>
  	    </div>
  	<a href="#!" class="modal-close" title="Close this modal" data-close="Close" data-dismiss="modal">×</a>
    </section>
  </div>
</template>

<script>

var $ = require('jquery');
export default {
  data () {
    return {
        
      img1: 'http://lorempixel.com/800/200/city/',
      img1_info: 'Img one footer',
        
      img2: 'http://lorempixel.com/250/250/city/',
      img2_info: 'Img two footer',
        
      img3: 'http://lorempixel.com/300/300/city/',
      img3_info: 'Img three footer',
        
      img4: 'http://lorempixel.com/350/350/city/',
      img4_info: 'Img four footer',
        
      img5: 'http://lorempixel.com/400/400/city/',
      img5_info: 'Img five footer',
        
      img6: 'http://lorempixel.com/450/450/city/',
      img6_info: 'Img six footer',
        
      img7: 'http://lorempixel.com/500/500/city/',
      img7_info: 'Img seven footer',
        
      img8: 'http://lorempixel.com/800/800/city/',
      img8_info: 'Img eight footer'
    };
  },
  ready: function() {
    $( document ).ready(function() {
      $('.images').click(function(e) {
        var imgSrc;
        var footerInfo;
        imgSrc = $('img', this).attr('src');
        footerInfo = $('img', this).attr('data')
        $('.modal-image').attr('src',imgSrc);
        $('footer').text(footerInfo);
    });
    });
  }
}

</script>

<style lang="sass" scoped>

@import 'modal';
@import 'modal-resize';

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

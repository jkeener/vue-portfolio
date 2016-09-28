<template>
  <div>
    <div class="grid image-wrapper">
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img1>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img2>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img3>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img4>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img5>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img6>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img7>
      </a>
      <a class="images" href="#modal-image">
        <img class="galleryImages 1/4 grid__cell" :src=img8>
      </a>
    </div>
    <section class="modal--show" id="modal-image" tabindex="-1" data-cssmodal-resize role="dialog" aria-labelledby="modal-label" aria-hidden="true">
  	   <div class="modal-inner">
  		     <div class="modal-content">
  			      <img class="modal-image">
              <footer id="modal-footer">
                Work info
              </footer>
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
      img2: 'http://lorempixel.com/250/250/city/',
      img3: 'http://lorempixel.com/300/300/city/',
      img4: 'http://lorempixel.com/350/350/city/',
      img5: 'http://lorempixel.com/400/400/city/',
      img6: 'http://lorempixel.com/450/450/city/',
      img7: 'http://lorempixel.com/500/500/city/',
      img8: 'http://lorempixel.com/800/800/city/'
    };
  },
  ready: function() {
    $( document ).ready(function() {
      $('.images').click(function(e) {
        var imgSrc;
        imgSrc = $('img', this).attr('src');
        $('.modal-image').attr('src',imgSrc);
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
#modal-footer {
  background-color: white;
  text-align:center;
}
</style>

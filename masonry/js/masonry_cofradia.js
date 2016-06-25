

function setting(directory_path) {
    this.directory_path = directory_path;
}

var setting = new setting('Abrigos');

var dir = 'http://localhost/web/project/img/'+setting.directory_path+'/';

var fileextension = ".jpg";

var image_url = [];


$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    async : false,
    success: function (data) {

        // List all .png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = $(this)[0].innerHTML;
            image_url.push("<img src='" + dir + filename + "'>")
        });

    },
    error : function(err) {
        throw err;
    }
});

console.log(image_url);
$( function() {

  var $container = $('#container').masonry({
    itemSelector: '.item',
    columnWidth: 200
  });

  $('#load-images').click( function() {
    var $items = getItems();
    $container.masonryImagesReveal( $items );
  });

});

$.fn.masonryImagesReveal = function( $items ) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;
  // hide by default
  $items.hide();
  // append to container
  this.append( $items );
  $items.imagesLoaded().progress( function( imgLoad, image ) {
    // get item
    // image is imagesLoaded class, not <img>, <img> is image.img
    var $item = $( image.img ).parents( itemSelector );
    // un-hide item
    $item.show();
    // masonry does its thing
    msnry.appended( $item );
  });

  return this;
};

function randomInt( min, max ) {
  return Math.floor( Math.random() * max + min );
}

function getItem(i) {
  var item = '<div class="item">' +image_url[i]+ '</div>';
    console.log(item);
  return item;
}

function getItems() {
  var items = '';
  for ( var i=0; i < image_url.length; i++ ) {
    items += getItem(i);
  }
  // return jQuery object
  return $( items );
}

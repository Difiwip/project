

function setting(directory_path) {
    this.directory_path = directory_path;
}

var setting = new setting('Abrigos');

//var dir = '../../web-system/img/'+setting.directory_path+'/';
var dir = '../../web-system/img/'+setting.directory_path+'/';

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

  var $masonry_grid = $('#masonry_grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  $('#load-images').click( function() {
    var $items = getItems();
    $masonry_grid.masonryImagesReveal( $items );
  });

});

$.fn.masonryImagesReveal = function( $items ) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;
  // hide by default
  $items.hide();
  // append to masonry_grid
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
    var item = '<div class="grid-item">' +image_url[i]+ '</div>';
    console.log(item);
  return item;
}

function getItems() {
  var items = '';
  var flag;
  for ( var i=0; i < image_url.length; i++ ) {
    items += getItem(i);
  }
  // return jQuery object
  return $( items );
}

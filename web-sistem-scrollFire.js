// Example of initializing scrollfire with all of its callbacks and most of its properties
$('.container').scrollfire({

    // Offsets
    offset: 0,
    topOffset: 150,
    bottomOffset: 150,

    // Fires once when element begins to come in from the top
    onTopIn: function( elm, distance_scrolled ) {
        $(elm).animate({opacity: 1.0}, 500);
        $(elm).removeClass('fully-visible');
        $(elm).find('.parallax-cell').html('onTopIn');
    },

    // Fires once when element beings to go out at the top
    onTopOut: function( elm, distance_scrolled ) {
        $(elm).animate({opacity: 0.2}, 500);
        $(elm).removeClass('fully-visible');
        $(elm).find('.parallax-cell').html('onTopOut');
    },

    // Fires once when element begins to come in from the bottom
    onBottomIn: function( elm, distance_scrolled ) {
        $(elm).animate({opacity: 1}, 500);
        $(elm).removeClass('fully-visible');
        $(elm).find('.parallax-cell').html('onBottomIn');
    },

    // Fires once when element begins to go out at the bottom
    onBottomOut: function( elm, distance_scrolled ) {
        $(elm).animate({opacity: 0.2}, 500);
        $(elm).removeClass('fully-visible');
        $(elm).find('.parallax-cell').html('onBottomOut');
    },

    // Fires once when element goes completely out of view at the top
    onTopHidden: function( elm ) {
        $(elm).removeClass('fully-visible').addClass('fully-hidden');
        $(elm).find('.parallax-cell').html('onTopHidden');
    },

    // Fires once when element completely comes into view from the bottom
    onBottomVisible: function( elm ) {
        $(elm).removeClass('fully-hidden').addClass('fully-visible');
        $(elm).find('.parallax-cell').html('onBottomVisible');
    },

    // Fires once when element goes completely out of view at the bottom
    onBottomHidden: function( elm ) {
        $(elm).removeClass('fully-visible').addClass('fully-hidden');
        $(elm).find('.parallax-cell').html('onBottomHidden');
    },

    // Fires once when element completely comes into view from the top
    onTopVisible: function( elm ) {
        $(elm).removeClass('fully-hidden').addClass('fully-visible');
        $(elm).find('.parallax-cell').html('onTopVisible');
    },

    // Fires continuously while scrolling in either direction while element is in at least partial view
    onScroll: function( elm, distance_scrolled ) {
    },

    // Fires continuously while scrolling down and while the element is in at least partial view
    onScrollDown: function( elm, distance_scrolled ) {
    },

    // Fires continuously while scrolling up and while the element is in at least partial view
    onScrollUp: function( elm, distance_scrolled ) {
    },

    // Fires continuously while scrolling in either direction regardless of if the element is in view
    onScrollAlways: function( elm, distance_scrolled ) {
    },

    // Fires continuously while scrolling down regardless of if the element is in view
    onScrollDownAlways: function( elm, distance_scrolled ) {
    },

    // Fires continuously while scrolling up regardless of if the element is in view
    onScrollUpAlways: function( elm, distance_scrolled ) {
    }
});

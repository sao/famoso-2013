$(function() {

  var methods = {

    init: function() {
      this.mobile_menu_trigger();
    },

    // Handles when the "hamburger icon" is clicked.
    mobile_menu_trigger: function() {
      $('.mobile-nav-toggle').on('click', function(e) {
        e.preventDefault();

        var container_height = $('.header nav').height();

        if(container_height == 0) {
          $('.header nav').animate({
            height: 300
          });
        } else {
          $('.header nav').animate({
            height: 0
          });
        }
      });
    }

  };

  methods.init();

});

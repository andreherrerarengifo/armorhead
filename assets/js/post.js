$(document).ready(function() {
  // Tables
  $("table").wrap("<div class='responsive-table'></div>");

  // Zoom
  const zoom = mediumZoom();
  zoom.attach(document.querySelectorAll('.post-content .kg-image'));
  zoom.attach(document.querySelectorAll('.post-content .kg-gallery-image img'));
  zoom.attach(document.querySelectorAll('.post-content .left-aligned img'));
  zoom.attach(document.querySelectorAll('.post-content .right-aligned img'));

  if (typeof disqus === 'undefined') {
    $('.post-comments').css({
      'display': 'none'
    });
  } else {
    $('#show-disqus').on('click', function() {
      $.ajax({
        type: "GET",
        url: "//" + disqus + ".disqus.com/embed.js",
        dataType: "script",
        cache: true
      }).done(function() {
        $('.post-comments-title').css({
          'display': 'none'
        });
      }).fail(function() {
        $(this).removeClass('loading');
      });
      $(this).addClass('loading');
    });

    if(disqus_auto_show === true) {
      $('#show-disqus').click();
    }
  }

  var clipboard = new ClipboardJS('.btn');
  clipboard.on('success', function(e) {
    let notification = $(e.trigger).parent().find(".clipboard-notification");
    if(!notification.hasClass("visible-class")) {
      notification.toggle("visible");
      notification.addClass("visible-class");
      setTimeout(function() {
        notification.toggle("visible");
        notification.removeClass("visible-class");
      }, 2000);
    }
    e.clearSelection();
  });

});

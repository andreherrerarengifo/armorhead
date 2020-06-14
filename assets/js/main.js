$(document).ready(function() {
  moment.locale($("html").attr("lang"));

  let $body = $("body");

  let $sidebar = $(".sidebar");

  let $menuShow = $("#menu-show");
  let $searchShow = $("#search-show");
  let $usersShow = $("#users-show");

  let $menuClose = $("#menu-close");
  let $searchClose = $("#search-close");

  let $overlay = $(".overlay");

  let $ghostSearchField = $("#ghost-search-field");

  function sidebar() {
    $body.toggleClass("sidebar-opened");
  }

  function search() {
    if(!$body.hasClass("search-opened")) {
      setTimeout(function() {
        $("#ghost-search-field").focus()
      }, 100);
    } else {
      $("#ghost-search-field").val("")
    }
    $body.toggleClass("search-opened");
  }

  function users() {
    $body.toggleClass("users-opened");
  }

  $menuShow.add($menuClose).on("click", function() {
    sidebar();
  });

  $searchShow.on("click", function() {
    search();
  });

  $usersShow.on("click", function() {
    users();
  });

  function closeAny() {
    if ($body.hasClass("sidebar-opened")) {
      $sidebar.scrollTop(0);
      sidebar();
    }

    if ($body.hasClass("search-opened")) {
      $ghostSearchField.val("");
      search();
    }

    if ($body.hasClass("users-opened")) {
      users();
    }
  }

  $searchClose.on("click", function() {
    closeAny();
  });

  $overlay.on("click", function() {
    closeAny();
  });

  hotkeys.filter = function(event){
    var tagName = (event.target || event.srcElement).tagName;
    hotkeys.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');
    return true;
  }

  hotkeys('esc', function(event, handler) {
    closeAny();
  });

  hotkeys('alt+f', function(event, handler) {
    search();
  });

  hotkeys('alt+m', function(event, handler) {
    sidebar();
  });

  $(".accordion-title").on("click", function() {
    if ($(window).width() < 900) {
      let $currentSub = $(this).next(".accordion-sub");

      $(".accordion-sub").not($currentSub).hide();

      $currentSub.toggle();
    }
  });

  function sizes() {
    if ($(window).width() >= 900) {
      $(".accordion-sub").show()
    } else {
      $(".accordion-sub").hide()
    }
  }

  $(window).resize(function() {
    sizes();
  });

  if (typeof searchKey !== 'undefined' && typeof searchUrl !== 'undefined') {
    $(".search-action").css("display", "block");

    let ghostSearch = new GhostSearch({
      key: searchKey,
      url: searchUrl,
      api: {
        resource: 'posts',
        parameters: {
          fields: ['title', 'slug', 'published_at'],
        },
      },
      template: function(result) {
        let url = [location.protocol, '//', location.host].join('');
        return '<div class="ghost-result"><a class="ghost-result-link" href="' + url + '/global/' + result.slug + '"><div class="ghost-result-title">' + result.title + '</div><div class="ghost-result-date">' + moment(result.published_at).format("MMM DD, YYYY") + '</div></a></div>';
      }
    });
  }

  $(".site-date span").text(moment(new Date()).format("dddd, MMMM DD, YYYY"));

});

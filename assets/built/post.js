$(document).ready((function(){$("table").wrap("<div class='responsive-table'></div>");const e=mediumZoom();e.attach(document.querySelectorAll(".post-content .kg-image")),e.attach(document.querySelectorAll(".post-content .kg-gallery-image img")),e.attach(document.querySelectorAll(".post-content .left-aligned img")),e.attach(document.querySelectorAll(".post-content .right-aligned img")),"undefined"==typeof disqus?$(".post-comments").css({display:"none"}):($("#show-disqus").on("click",(function(){$.ajax({type:"GET",url:"//"+disqus+".disqus.com/embed.js",dataType:"script",cache:!0}).done((function(){$(".post-comments-title").css({display:"none"})})).fail((function(){$(this).removeClass("loading")})),$(this).addClass("loading")})),!0===disqus_auto_show&&$("#show-disqus").click()),new ClipboardJS(".btn").on("success",(function(e){let s=$(e.trigger).parent().find(".clipboard-notification");s.hasClass("visible-class")||(s.toggle("visible"),s.addClass("visible-class"),setTimeout((function(){s.toggle("visible"),s.removeClass("visible-class")}),2e3)),e.clearSelection()}))}));
//# sourceMappingURL=post.js.map
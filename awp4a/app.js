// app.js - small interactions
$(document).on("pagecreate", function () {
  // Contact form handler
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    var name = $("#cname").val().trim() || "Friend";
    // Show toast
    showToast("Thanks, " + name + "! We'll get back to you soon.");
    // reset form
    this.reset();
  });

  // Toast helper
  function showToast(text, duration) {
    duration = duration || 2500;
    var $t = $("#toast");
    $t.text(text).fadeIn(150);
    setTimeout(function () { $t.fadeOut(250); }, duration);
  }
});

$(document).ready(function () {
    $(".cdn-copy").click(function () {
        a = $('.cdn-css').text();
        navigator.clipboard.writeText(a);
        $('.color-code-toast').text(a);
        $('.toast').toast('show');
      });
});
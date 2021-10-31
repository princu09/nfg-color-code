$(document).ready(function () {
  const colors = ["#1ABC9C", "#2ECC71", "#3498DB", "#9B59B6", "#34495E", "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50", "#F1C40F", "#E67E22", "#E74C3C", "#ECF0F1", "#95A5A6", "#D35400", "#C0392B", "#BDC3C7", "#7F8C8D", "#FFB900", "#E74856", "#0078D7", "#0099BC", "#7A7574", "#767676", "#FF8C00", "#E81123", "#0063B1", "#2D7D9A", "#5D5A58", "#4C4A48", "#F7630C", "#EA005E", "#8E8CD8", "#00B7C3", "#68768A", "#69797E", "#CA5010", "#C30052", "#6B69D6", "#038387", "#515C6B", "#4A5459", "#DA3B01", "#E3008C", "#8764B8", "#00B294", "#567C73", "#647C64", "#EF6950", "#BF0077", "#744DA9", "#018574", "#486860", "#525E54", "#D13438", "#C239B3", "#B146C2", "#00CC6A", "#498205", "#847545", "#FF4343", "#9A0089", "#881798", "#10893E", "#107C10", "#7E735F"]

  for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    $('.colors-row').append(`
      <div class="col-md-2 color">
        <div class="card my-2 p-3" style="background-color: ${element};">
          <p class="m-0 p-0 color-code">${element}</p>
        </div>
      </div>`);
  }

  $(".card").click(function () {
    a = $(this).find('.color-code').text();
    navigator.clipboard.writeText(a);
    $('.color-code-toast').text(a);
    $('.toast').toast('show');
  });

  $(".gradient-card").click(function () {
    a = $(this).attr('style');
    navigator.clipboard.writeText(a);
    $('.color-code-toast').text(a);
    $('.toast').toast('show');
  });




  let search = document.getElementById('searchTxt');

  search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    let colorCard = document.getElementsByClassName('color');

    Array.from(colorCard).forEach(function (element) {
      let cardTxt = element.getElementsByTagName('p')[0].innerHTML.toLowerCase();

      if (cardTxt.includes(inputVal)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    })
  })

});
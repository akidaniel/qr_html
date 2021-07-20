//IDIOMAS
$(document).ready(function() {

var display = function(block_name) {
  $('.menuitem').css('display', 'none');
  $('#' + block_name).css('display', 'block');
  $('.' + block_name).css('display', 'block');


}

$('.UK').on('click', function() {
  display('LUK', $(this));
});

$('.ES').on('click', function() {
  display('LES', $(this));
});


$('.FR').on('click', function() {
  display('LFR', $(this));
});
});

//MENUS
$(document).ready(function() {

var display = function(block_name) {
  $('.menucomida, .menudevinos, .menudepostres').css('display', 'none');
  $('#' + block_name).css('display', 'block');
  $('.' + block_name).css('display', 'block');
}

$('.platos').on('click', function() {
  display('menucomida', $(this));
});

$('.vinos').on('click', function() {
  display('menudevinos', $(this));
});

$('.postres').on('click', function() {
  display('menudepostres', $(this));
});

});


//MENUS
/*
  @method Cards
  @description this is for label based radio navigation to change the labels style to 'active'
 */
const Cards = ((() => {
  /*
   * @description dom loaded event listener
   */
window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  /*
   * @method init
   * @parameter e {event}
   * @description initiates event listeners on all cards
   */
  function init(e)
  {
    if(document.querySelector(".cards"))
    {
      let cards = document.querySelector(".cards");
      cards.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards .card")[1].click();
    }
  }

  /*
   * @method clicked
   * @parameter e {event}
   * @description this is the callback from the assigned event listener binding
   */
  function clicked(e)
  {
    let card = e.target;
    if(card.getAttribute("data-card")){rearrange(card.getAttribute("data-card"));}
  }

  /*
   * @method rearrange
   * @parameter card {object}
   * @description this is the callback from the assigned event listener binding
   */
  function rearrange(card)
  {
    let cards = document.querySelectorAll(".cards .card");
    for(let n = 0; n < cards.length; n++)
    {
cards[n].classList.remove("card--leftleft");
cards[n].classList.remove("card--left");
cards[n].classList.remove("card--center");
cards[n].classList.remove("card--right");
cards[n].classList.remove("card--rightright");

    }
cards[card].classList.add("card--center");
    if(card == 0)
    {
cards[3].classList.add("card--leftleft");
cards[4].classList.add("card--left");
cards[1].classList.add("card--right");
cards[2].classList.add("card--rightright");
}
if(card == 1)
{
cards[4].classList.add("card--leftleft");
cards[0].classList.add("card--left");
cards[2].classList.add("card--right");
cards[3].classList.add("card--rightright");

}
if(card == 2)
{cards[0].classList.add("card--leftleft");
cards[1].classList.add("card--left");
cards[3].classList.add("card--right");
cards[4].classList.add("card--rightright");

    }
 
if(card == 3)
{cards[1].classList.add("card--leftleft");
cards[2].classList.add("card--left");
cards[4].classList.add("card--right");
cards[0].classList.add("card--rightright");

    }

if(card == 4)
{cards[2].classList.add("card--leftleft");
cards[3].classList.add("card--left");
cards[0].classList.add("card--right");
cards[1].classList.add("card--rightright");

    }
  }

  return {
    init
  }
})());
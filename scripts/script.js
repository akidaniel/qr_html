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


//MENU PETXINES
/*
  @method cards_petxines
  @description this is for label based radio navigation to change the labels style to 'active'
 */
const cards_petxines = ((() => {
  /*
   * @description dom loaded event listener
   */
window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  /*
   * @method init
   * @parameter e {event}
   * @description initiates event listeners on all cards_petxines
   */
  function init(e)
  {
    if(document.querySelector(".cards_petxines"))
    {
      let cards_petxines = document.querySelector(".cards_petxines");
      cards_petxines.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards_petxines .card")[1].click();
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
    let cards_petxines = document.querySelectorAll(".cards_petxines .card");
    for(let n = 0; n < cards_petxines.length; n++)
    {
cards_petxines[n].classList.remove("card--leftleft");
cards_petxines[n].classList.remove("card--left");
cards_petxines[n].classList.remove("card--center");
cards_petxines[n].classList.remove("card--right");
cards_petxines[n].classList.remove("card--rightright");

    }
cards_petxines[card].classList.add("card--center");
    if(card == 0)
    {
cards_petxines[3].classList.add("card--leftleft");
cards_petxines[4].classList.add("card--left");
cards_petxines[1].classList.add("card--right");
cards_petxines[2].classList.add("card--rightright");
}
if(card == 1)
{
cards_petxines[4].classList.add("card--leftleft");
cards_petxines[0].classList.add("card--left");
cards_petxines[2].classList.add("card--right");
cards_petxines[3].classList.add("card--rightright");

}
if(card == 2)
{cards_petxines[0].classList.add("card--leftleft");
cards_petxines[1].classList.add("card--left");
cards_petxines[3].classList.add("card--right");
cards_petxines[4].classList.add("card--rightright");

    }
 
if(card == 3)
{cards_petxines[1].classList.add("card--leftleft");
cards_petxines[2].classList.add("card--left");
cards_petxines[4].classList.add("card--right");
cards_petxines[0].classList.add("card--rightright");

    }

if(card == 4)
{cards_petxines[2].classList.add("card--leftleft");
cards_petxines[3].classList.add("card--left");
cards_petxines[0].classList.add("card--right");
cards_petxines[1].classList.add("card--rightright");

    }
	

  }

  return {
    init
  }
})());

//MENU VICTORIA
/*
  @method cards_victoria
  @description this is for label based radio navigation to change the labels style to 'active'
 */
const cards_victoria = ((() => {
  /*
   * @description dom loaded event listener
   */
window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  /*
   * @method init
   * @parameter e {event}
   * @description initiates event listeners on all cards_victoria
   */
  function init(e)
  {
    if(document.querySelector(".cards_victoria"))
    {
      let cards_victoria = document.querySelector(".cards_victoria");
      cards_victoria.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards_victoria .card")[1].click();
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
    let cards_victoria = document.querySelectorAll(".cards_victoria .card");
    for(let n = 0; n < cards_victoria.length; n++)
    {
cards_victoria[n].classList.remove("card--leftleft");
cards_victoria[n].classList.remove("card--left");
cards_victoria[n].classList.remove("card--center");
cards_victoria[n].classList.remove("card--right");
cards_victoria[n].classList.remove("card--rightright");

    }
cards_victoria[card].classList.add("card--center");
    if(card == 0)
    {
cards_victoria[3].classList.add("card--leftleft");
cards_victoria[4].classList.add("card--left");
cards_victoria[1].classList.add("card--right");
cards_victoria[2].classList.add("card--rightright");
}
if(card == 1)
{
cards_victoria[4].classList.add("card--leftleft");
cards_victoria[0].classList.add("card--left");
cards_victoria[2].classList.add("card--right");
cards_victoria[3].classList.add("card--rightright");

}
if(card == 2)
{cards_victoria[0].classList.add("card--leftleft");
cards_victoria[1].classList.add("card--left");
cards_victoria[3].classList.add("card--right");
cards_victoria[4].classList.add("card--rightright");

    }
 
if(card == 3)
{cards_victoria[1].classList.add("card--leftleft");
cards_victoria[2].classList.add("card--left");
cards_victoria[4].classList.add("card--right");
cards_victoria[0].classList.add("card--rightright");

    }

if(card == 4)
{cards_victoria[2].classList.add("card--leftleft");
cards_victoria[3].classList.add("card--left");
cards_victoria[0].classList.add("card--right");
cards_victoria[1].classList.add("card--rightright");

    }
	

  }

  return {
    init
  }
})());


//MENU VICTORIA
/*
  @method cards_kitsume
  @description this is for label based radio navigation to change the labels style to 'active'
 */
const cards_kitsume = ((() => {
  /*
   * @description dom loaded event listener
   */
window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  /*
   * @method init
   * @parameter e {event}
   * @description initiates event listeners on all cards_kitsume
   */
  function init(e)
  {
    if(document.querySelector(".cards_kitsume"))
    {
      let cards_kitsume = document.querySelector(".cards_kitsume");
      cards_kitsume.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards_kitsume .card")[1].click();
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
    let cards_kitsume = document.querySelectorAll(".cards_kitsume .card");
    for(let n = 0; n < cards_kitsume.length; n++)
    {
cards_kitsume[n].classList.remove("card--leftleft");
cards_kitsume[n].classList.remove("card--left");
cards_kitsume[n].classList.remove("card--center");
cards_kitsume[n].classList.remove("card--right");
cards_kitsume[n].classList.remove("card--rightright");

    }
cards_kitsume[card].classList.add("card--center");
    if(card == 0)
    {
cards_kitsume[3].classList.add("card--leftleft");
cards_kitsume[4].classList.add("card--left");
cards_kitsume[1].classList.add("card--right");
cards_kitsume[2].classList.add("card--rightright");
}
if(card == 1)
{
cards_kitsume[4].classList.add("card--leftleft");
cards_kitsume[0].classList.add("card--left");
cards_kitsume[2].classList.add("card--right");
cards_kitsume[3].classList.add("card--rightright");

}
if(card == 2)
{cards_kitsume[0].classList.add("card--leftleft");
cards_kitsume[1].classList.add("card--left");
cards_kitsume[3].classList.add("card--right");
cards_kitsume[4].classList.add("card--rightright");

    }
 
if(card == 3)
{cards_kitsume[1].classList.add("card--leftleft");
cards_kitsume[2].classList.add("card--left");
cards_kitsume[4].classList.add("card--right");
cards_kitsume[0].classList.add("card--rightright");

    }

if(card == 4)
{cards_kitsume[2].classList.add("card--leftleft");
cards_kitsume[3].classList.add("card--left");
cards_kitsume[0].classList.add("card--right");
cards_kitsume[1].classList.add("card--rightright");

    }
	

  }

  return {
    init
  }
})());
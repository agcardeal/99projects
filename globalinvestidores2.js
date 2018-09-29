window.onload = function(){



console.log('teste');

/* MENU MOBILE */
var el = document.querySelector('.c-hamburger');
var h =  document.querySelector('#header');
var nav =  document.querySelector('#menu');
var ham = document.querySelector('.c-hamburger--htx') ;

el.onclick = function() { 
  
  el.classList.toggle('is-active');
  if (el.classList.contains('is-active')) {   
    showMenu(nav);
    
  }else{    
    hideMenu(nav);    
  }
};

function showMenu(el){
  jQuery(el).addClass('open');
  jQuery(h).addClass('open');
};

function hideMenu(el){
  jQuery(el).removeClass('open');
  jQuery(h).removeClass('open');
  jQuery(ham).removeClass('is-active');
};
  
// modal
var exibirModal = function(){
  jQuery('#modal-inscreva-se').show(500);
};

var fecharModal = function(){
  jQuery('#modal-inscreva-se').fadeOut(500);
};
  
  exibirModal();
  jQuery('#modal-inscreva-se .fechar').on('click', fecharModal);
    

}





// Voor het togglen van het formulier (op de contactpagina) -->

function toggleFormVisibility(){

  var frm_element = document.getElementById('contact_frm'); 
  var formaan_element = document.getElementById('formaan');
  var formuit_element = document.getElementById('formuit');

  var vis = frm_element.style;
  
  if(vis.display=='' || vis.display=='none') {
	  vis.display = 'block';
	  formaan_element.style.display='none';
	  formuit_element.style.display='';
  }
  else {
	  vis.display = 'none';
	  formaan_element.style.display='block';
	  formuit_element.style.display='none';
  };

};

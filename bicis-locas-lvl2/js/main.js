function validateForm(){
	/* Antigua funcion
	var nmbr = document.getElementById('name').value;
		if (nmbr == "" ){
		alert('Es necesario completar el campo Nombre');
		return;
		}
		if (!nmbr.match(/^[a-zA-Z]+$/)){
			alert('El nombre debe ser solo con letras');
			return;
		}
		if (nmbr[0] != nmbr[0].toUpperCase()){	
			alert('La primera letra de tu nombre debe ser en Mayúscula');
			return;
		}
	*/
		//FUNCIONES
	function alertar(mensaje, elem){
		var span = elem.parentNode.children[2];
		if (!span){ //si pan no existe, entonces lo creo
			var span=document.createElement('span');
		}
		span.innerHTML=mensaje;
		elem.parentNode.appendChild(span);
	}	
	function remover(elemnt){
		var span = elemnt.parentNode.children[2];
			if(!span) {
				return;
			}
			elemnt.parentNode.removeChild(span);
		}

	var name = document.getElementById('name');
	if(name.value.length == 0){
		alertar('Debe ingresar un Apellido', name);
	}  
	else if (!name.value.match(/^[a-zA-Z]+$/)){
		alertar('Debe ingresar solo letras',name);
	}else if (name.value[0] != name.value[0].toUpperCase()){
		alertar('El apellido debe comenzar en MAYÚSCULA',name);
	} else{
		remover(name);
	}
/*
	var Aplld = document.getElementById('lastname').value;
		if (Aplld == ""){
		alert("Es necesario completar el campo Apellido");
		return;
		}
		if (!Aplld.match(/^[a-zA-Z]+$/)){
			alert('El Apellido debe ser solo con letras');
			return;
		}
		if (Aplld[0] != Aplld[0].toUpperCase()){
			alert('La primera letra de tu apellido debe ser en Mayúscula');
			return;
		}

		*/

		// PARA EVITAR REPETIR SIEMPRE LO MISMO CREAMOS UNA FUNCION


		var lastname = document.getElementById('lastname');
		if(lastname.value.length == 0){
			alertar('Debe ingresar un Apellido', lastname);
		}  
		else if (!lastname.value.match(/^[a-zA-Z]+$/)){
			alertar('Debe ingresar solo letras',lastname);
		}else if (lastname.value[0] != lastname.value[0].toUpperCase()){
			alertar('El apellido debe comenzar en MAYÚSCULA',lastname);
		} else{
			remover(lastname);
		}

/*
	var eml = document.getElementById('input-email').value;
		if (eml == ""){
		alert("Es necesario completar el campo Email");
		return;
		}
		if(eml.match(/^\w+ @ \w+ \.\w+$/)){
			alert('El campo email debe tener un formato válido. Ej: name@domain.com');
		}
*/
		var email = document.getElementById('input-email');
		if(email.value.length == ""){
			alertar('Es necesario completar el campo Email',email);
		} else if (!email.value.match(/^\w+@\w+\.\w+$/)){
			alertar('El campo email debe tener un formato válido Ej: name@domain.com',email);
		}else{
			remover(email);
		}
	/*
	var pssw = document.getElementById('input-password').value;
		if (pssw == ""){
		alert("Es necesario completar el campo Contraseña");
		return;
		}

		if(pssw == "password" || pssw == "123456" || pssw == "0987654"){
		alert("La contraseña debe ser distinto a password , 123456 o 098754");
		return;
		}
		if(pssw.length <= 6){
		alert("La contraseña debe tener al menos 6 caracteres");
		return;
		}
		*/
		var password = document.getElementById('input-password');
		if(password.value.length == 0){
			alertar('Debe ingresar una contraseña',password);
		} else if (password.value == "password" || password.value == "123456" || password.value == "0987654"){
			alertar('La contraseña debe ser distinto a password , 123456 o 098754',password);
		}else if (password.value.length <=6){
			alertar('La contraseña debe tener al menos 6 caracteres',password);
		}else{
			remover(password);
		}

	
	var selec=document.getElementsByTagName('select')[0].value;
		if(selec == 0) {
			alert('Debe seleccionar un tipo de bici');
			return;
		}
		

	

}
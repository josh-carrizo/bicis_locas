function validateForm(){

	var nmbr = document.getElementById('name').value;
		if (nmbr == "" ){
		alert('Es necesario completar el campo Nombre');
		return;
		}
		if (nmbr != nmbr.match(/^[a-z A-Z]+$/)){
			alert('El nombre debe ser solo con letras');
			return;
		}
		if (nmbr[0] != nmbr.toUpperCase()){
			alert('La primera letra debe ser en Mayúscula');
			return;
		}

	var Aplld = document.getElementById('lastname').value;
		if (Aplld == ""){
		alert("Es necesario completar el campo Apellido");
		return;
		}
		if (Aplld != Aplld.match(/^[a-z A-Z]+$/)){
			alert('El Apellido debe ser solo con letras');
			return;
		}
		if (Aplld[0] != Aplld.toUpperCase()){
			alert('La primera letra debe ser en Mayúscula');
			return;
		}


	var eml = document.getElementById('input-email').value;
		if (eml == ""){
		alert("Es necesario completar el campo Email");
		return;
		}

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


}
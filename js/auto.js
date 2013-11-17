var soglasion = false;

function soglasieclick() {
	if (soglasion == false){
		soglasion = true;
		//alert(soglasion);
		document.getElementById("soglasietext").innerHTML = '<p  title = "Согласие на обработку персональных данных">Нет, я не согласен(на) на обработку моих данных</p>';
	}else{
		soglasion = false;
		document.getElementById("soglasietext").innerHTML = '<p  title = "Согласие на обработку персональных данных">Да, я согласен(на) на обработку моих данных</p>';
		//alert(soglasion);
	}
}

function submitonclick() {
	if (soglasion==false) {
		alert('Вы не подвердили свое согласие на обработку ваших персональных данных');
		
	}
}
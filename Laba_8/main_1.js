var hour = new Date().getHours();
//описали структуру данных
var people = [
	{
	name:"Назаргулов Ильнур",
	info:{
		phone:"81982112",
		address:"Маршала-Жукова 24",
		email:"ilqwe@mail.ru"
	}},
	{
		name:"Иванов Иван",
		info:{
			phone:"2412141",
			address:"Кукуевицкого 41",
			email:"i32523e@mail.ru"
		}
	},
	{
		name:"Немилостив Иван",
		info:{
			phone:"2414124124",
			address:"Башлачева 55",
			email:"rwerwcr@gmail.ru"
		}
	}
	]

function openNoticeBook(){
	document.getElementById('people').style.visibility = "visible";
}

function setPeopleInfo(el,peopleInfo){
	el.innerHTML='<p>Телефон: ' + peopleInfo.phone + '<br>' + 
	'Адрес: ' + peopleInfo.address + '<br>' +
	'Почта: ' + peopleInfo.email+'</p>'
}

function createElement(name,id) {
	let a = document.createElement('a');
	a.style.display="block";
	a.textContent = name;
	a.addEventListener("click", function(event){
			var info = document.getElementById('people').children[0].children[1];
			info.style.visibility="visible";
			var name=event.target.textContent;
			for (i=0; i < people.length; i++){
				if(people[i].name==name){
					var peopleInfo=people[i].info;
					setPeopleInfo(info,peopleInfo);
				}
			}
		});
	return a;
}


window.onload = function () {
	if(hour < 12){
		document.body.style.backgroundColor = 'rgb('+(hour+40)+','+(hour+40)+','+(hour+40)+')';
	}
	else{
		document.body.style.backgroundColor = 'rgb('+(200-hour)+','+(200-hour)+','+(200-hour)+')';
	}
	var peopleTable = document.getElementById('people');
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2= document.createElement('td');
	for (i=0; i < people.length; i++){
		var childElement = createElement(people[i].name);
		td1.appendChild(childElement);
	}
	//set default
	setPeopleInfo(td2, people[0].info);
	tr.appendChild(td1);
	tr.appendChild(td2);
	peopleTable.appendChild(tr);
};
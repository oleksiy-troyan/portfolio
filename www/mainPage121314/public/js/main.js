$(function () {
 $('#searchs').on('click', function(event) {
 event.preventDefault();
 $('#search').addClass('open');
 $('#search > form > input[type="search"]').focus();
 });
 $('#search, #search button.close').on('click keyup', function(event) {
 if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
 $(this).removeClass('open');
 }
 });
 });
let cardx1 = {
	'foto': 'image/men.jpg',
	'title': 'Заголовок',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolor soluta cum iusto nemo repudiandae nulla fugiat, assumenda sit. Placeat quidem alias amet eligendi rerum, necessitatibus magni facilis atque omnis.'
};
let cardx2 = {
	'foto': 'image/men.jpg',
	'title': 'Заголовок',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolor soluta cum iusto nemo repudiandae nulla fugiat, assumenda sit. Placeat quidem alias amet eligendi rerum, necessitatibus magni facilis atque omnis.'
};
let cardx3 = {
	'foto': 'image/men.jpg',
	'title': 'Заголовок',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolor soluta cum iusto nemo repudiandae nulla fugiat, assumenda sit. Placeat quidem alias amet eligendi rerum, necessitatibus magni facilis atque omnis.'
};
let cardx4 = {
	'foto': 'image/men.jpg',
	'title': 'Заголовок',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolor soluta cum iusto nemo repudiandae nulla fugiat, assumenda sit. Placeat quidem alias amet eligendi rerum, necessitatibus magni facilis atque omnis.'
};
let cardx5 = {
	'foto': 'image/men.jpg',
	'title': 'Заголовок',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolor soluta cum iusto nemo repudiandae nulla fugiat, assumenda sit. Placeat quidem alias amet eligendi rerum, necessitatibus magni facilis atque omnis.'
};
let cardx6 = {
	'foto': 'image/men.jpg',
	'title': 'Заголовок',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolor soluta cum iusto nemo repudiandae nulla fugiat, assumenda sit. Placeat quidem alias amet eligendi rerum, necessitatibus magni facilis atque omnis.'
};
let cardx7 = {
	'foto': 'image/men.jpg',
	'title': 'Заголовок',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolor soluta cum iusto nemo repudiandae nulla fugiat, assumenda sit. Placeat quidem alias amet eligendi rerum, necessitatibus magni facilis atque omnis.'
};
let cardx8 = {
	'foto': 'image/men.jpg',
	'title': 'Заголовок',
	'intro': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolor soluta cum iusto nemo repudiandae nulla fugiat, assumenda sit. Placeat quidem alias amet eligendi rerum, necessitatibus magni facilis atque omnis.'
};

let arr = [cardx1, cardx2, cardx3, cardx4, cardx5, cardx6, cardx7, cardx8];
let start = 0;
$("#loadMore").on("click", function () {
	let htmlToInsert = '';
	for(let i = start; i < arr.length; i++) {
		if(i > 3 + start)
			break;
		htmlToInsert += "<div class='card'><img src='" + arr[i].foto + "' class='card-img-top' alt='" + arr[i].title + "'><div class='card-body'><h5 class='card-title'>" + arr[i].title + "</h5><p class='card-text'>" + arr[i].intro + "</p><a href='#' class='btn btn-warning'>Читать далее</a></div></div>";
		if(i == arr.length - 1) {
			$("#loadMore").hide();
			break;
		}
	}
	$("#loadMoreBlock").append(htmlToInsert + "<div style='clear: both'></div>");
	start += 4;
});

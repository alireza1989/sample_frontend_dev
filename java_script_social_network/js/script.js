/*SCRIPT*/


var users = [
    {
		name:'Lucy',
		gender:'F',
		hobby: 'pets',
		avatar: 'avatar2.jpg'
	},
	{
		name:'Betty',
		gender:'F',
		hobby: 'pets',
		avatar: 'avatar2.jpg'
	},
	{
		name:'Ronald',
		gender:'M',
		hobby: 'music',
		avatar: 'avatar1.jpg'
	},
	{
		name:'Chrsitopher',
		gender:'M',
		hobby: 'sports',
		avatar: 'avatar1.jpg'
	},
];

window.addEventListener('load', function() {

    var results = document.getElementById('results');

    function search() {

        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        console.log(gender);

        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {

			// Check Gender
			if (gender == 'A' || gender == users[i].gender)
			{
				//Check hobby
				if (true)
				{
					//code
					resultsHtml += '<div class="person-row">\
                    <img src="images/' + users[i].avatar + '" />\
                    <div class="person-info">\
                    <div>' + users[i].name + '</div>\
                    <div>' + users[i].hobby + '</div></div>\
                    <button>Add as friend</button></div>';
				}
			}

        }

        results.innerHTML = resultsHtml;
    }

    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', search);
});

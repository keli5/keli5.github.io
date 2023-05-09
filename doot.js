var pattern = ['d', 'o', 'o', 't'];
var current = 0;
var dooted = false;

var keyHandler = function (event) {
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}
	current++;

	if (pattern.length === current) {
		current = 0;
		dooted = !dooted;
        if (dooted) {
            document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/293340619395563521/1105641603219079189/dootdoot.gif')"
        } else {
            document.body.style.backgroundImage = "none"
        }
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);
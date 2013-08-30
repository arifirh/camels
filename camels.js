function coinToss() {
	return Math.floor(Math.random() * 2) === 1;
}

function someNumber(size) {
	var sigFigs;
	switch(size) {
		case 'verySmall':
			if (coinToss()) {
				sigFigs = 1;
			}
			else {
				sigFigs = 2;
			}
			return (Math.random() * (0.9 - 0.1) + 0.1).toFixed(sigFigs);
		default:
			return '3';
	}
}

var camelWorths = {
	'none': 'no',
	'barelyAny': [
		'barely any',
		someNumber('verySmall')
		],
	'one': 'one',
	'some': someNumber('small'),
	'lots': someNumber('large'),
	'anAwfulLot': 'such an awful lot of',
	randomCamelWorth: function() {
		return 'not very many';
	}
}

var responses = {
	'none': 'Go home',
	'barelyAny': [
		'Well, nevermind',
		'I guess that\'s not too bad',
		'You still have your health',
		'It\'s really nothing to be ashamed of'
		],
	'some': [
		'That\'s quite respectable, really',
		'Well done',
		'Good for you'
		],
	'lots': [
		'Gosh',
		'Heavens',
		'Gracious me',
		'Well done',
		'What a lot of camels'
		],
	'anAwfulLot': [
		'I\'m actually slightly embarrased to say',
		'I couldn\'t possibly tell you, you\'d get a big head',
		'I started counting them but I got bored'
		],
	randomResponse: function() {
		return 'Go home';
	}
}

var buttons = [
	'Rubbish',
	'Utter bollocks',
	'Sod off, no I\'m not',
	'I am worth at least twice that many camels'
]

function setCamelWorth() {
	var camelWorth = camelWorths.randomCamelWorth();
	var h1 = 'You are worth ' + camelWorth + ' camels';
	$('h1').html(h1);
}

function setResponse() {
	var response = responses.randomResponse();
	$('h2').html(response);
}

$('document').ready(function() {
	setCamelWorth();
	setResponse();
});

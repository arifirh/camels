var camelWorthType;

function coinToss() {
	return Math.floor(Math.random() * 2) === 1;
}

function numberBetween(min, max) {
	return Math.random() * (max - min) + min;
}

function pickKeyFromObject(object) {
	keys = Object.keys(object);
	index = Math.floor(numberBetween(0, keys.length));
	return keys[index];
}

function pickValueFromObject(object) {
	keys = Object.keys(object);
	index = Math.floor(numberBetween(0, keys.length));
	return object[keys[index]];
}

function keepPickingValuesUntilString(input) {
	if (typeof input === 'string') {
		return input;
	}
	else { 
		return keepPickingValuesUntilString(pickValueFromObject(input));
	}
}

function someNumber(size) {
	var sigFigs;
	var number;
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	switch(size) {
		case 'verySmall':
			if (coinToss()) {
				sigFigs = 1;
			}
			else {
				sigFigs = 2;
			}
			number = (numberBetween(0.1, 0.9)).toFixed(sigFigs);
			break;
		case 'small':
			number = Math.floor(numberBetween(1,9));
			break;
		case 'large':
			number = numberWithCommas(Math.floor(numberBetween(99,99999)));
			break;
		default:
			number = '3';
			break;
	}
	return number.toString();
}

var camelWorths = {
	typesOfWorth: {
		'none': 'no',
		'barelyAny': [
			'barely any',
			'not very many',
			someNumber('verySmall')
			],
		'one': 'one',
		'some': someNumber('small'),
		'lots': someNumber('large'),
		'anAwfulLot': 'such an awful lot of',
	},
	randomCamelWorth: function() {
		camelWorthType = pickKeyFromObject(camelWorths['typesOfWorth']);
		return keepPickingValuesUntilString(camelWorths['typesOfWorth'][camelWorthType]);
	}
}

var responses = {
	typesOfResponse: {
		'none': 'Go home',
		'barelyAny': [
			'Well, nevermind',
			'But there are more important things than being worth lots of camels, I guess',
			'But you still have your health',
			'It\'s really nothing to be ashamed of'
			],
		'some': [
			'That\'s quite respectable, really',
			'Well done',
			'Good for you'
			],
		'one': 'What an achievement',
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
			'I started counting but I got a bit bored'
			],
	},
	randomResponse: function() {
		return keepPickingValuesUntilString(responses['typesOfResponse'][camelWorthType]);
	}
}

var buttons = {
	buttonText: [
		'Rubbish',
		'What',
		'Utter bollocks',
		'Sod off no I\'m not',
		'I am worth at least twice that many camels',
		'Load of toss',
		'You are talking out of your hat'
		],
	randomButton: function() {
		return pickValueFromObject(buttons['buttonText']);
	}
}

function setCamelWorth() {
	var camelWorth = camelWorths.randomCamelWorth();
	var h1 = 'You are worth ' + camelWorth + ' camels';
	$('h1').html(h1);
}

function setResponse() {
	var response = responses.randomResponse();
	$('h2').html(response);
}

function setButton() {
	var button = buttons.randomButton();
	$('button').html(button);
}

function setElements() {
	setCamelWorth();
	setResponse();
	setButton();
}

$('document').ready(function() {
	setElements();
});

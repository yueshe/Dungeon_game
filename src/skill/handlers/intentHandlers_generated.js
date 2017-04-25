var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"GoWestIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Go west" )
	},
	"GoSouthIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Go south" )
	},
	"GoEastIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go east" )
	},
	"GoNorthIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go north" )
	},
	"WalkUpToItIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Walk up to it" )
	},
	"SneakBehindIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "sneak behind" )
	},
	"RaiseSwordIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Raise sword" )
	},
	"DodgeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "dodge" )
	},
	"SwingSwordIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "swing sword" )
	},
	"GoToTrailIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Go to trail" )
	},
	"ReadyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "READY" )
	},
	"SkipIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "SKIP" )
	},
	"SkullIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "SKULL" )
	},
	"CandleIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "candle" )
	},
	"WineIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "wine" )
	},
	"MaskIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "mask" )
	},
	"FireMagicIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "Fire magic" )
	},
	"HolyMagicIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "holy magic" )
	},
}
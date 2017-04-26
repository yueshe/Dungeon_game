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
		processUtterance( intent, session, request, response, "go west" )
	},
	"GoSouthIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go south" )
	},
	"GoEastIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go east" )
	},
	"GoNorthIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go north" )
	},
	"WalkUpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "walk up" )
	},
	"SneakBehindIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "sneak behind" )
	},
	"RaiseSwordIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "raise sword" )
	},
	"DodgeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "dodge" )
	},
	"SwingSwordIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "swing sword" )
	},
	"GoToTrailIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go to trail" )
	},
	"ReadyIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "ready" )
	},
	"SkipIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "skip" )
	},
	"SkullIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "skull" )
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
		processUtterance( intent, session, request, response, "fire magic" )
	},
	"HolyMagicIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "holy magic" )
	},
}
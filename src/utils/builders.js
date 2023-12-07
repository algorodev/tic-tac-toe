import { GAME_STATS } from '../constants/game.js'

export const buildElementToPrint = () =>
	GAME_STATS.IS_BLUE_TURN ? `<span class="player-x">X</span>` : `<span class="player-y">O</span>`


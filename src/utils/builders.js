import { GAME_STATS } from '../constants/game.js'

export const buildElementToPrint = () =>
	GAME_STATS.TURN === 'blue' ? `<span class="player-x">X</span>` : `<span class="player-y">O</span>`


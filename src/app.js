import { DOM_BOARD_ITEMS } from './constants/dom.js'
import { GAME_STATS } from './constants/game.js'
import { buildElementToPrint } from './utils/builders.js'

for (let i = 1; i <= Object.keys(DOM_BOARD_ITEMS).length; i++) {
	DOM_BOARD_ITEMS[`item${i}`].addEventListener('click', () => {
		DOM_BOARD_ITEMS[`item${i}`].innerHTML = buildElementToPrint()
		DOM_BOARD_ITEMS[`item${i}`].classList.add('board__item--pressed')
		GAME_STATS.TURN = finishTurn()
	})
}

export const finishTurn = () =>
	GAME_STATS.TURN === 'blue' ? 'red' : 'blue'

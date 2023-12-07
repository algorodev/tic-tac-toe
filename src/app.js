import { DOM_BOARD_ITEMS, DOM_LAYOUT_ITEMS } from './constants/dom.js'
import { GAME_STATS } from './constants/game.js'
import { buildElementToPrint } from './utils/builders.js'

let isWinner = false
let isTie = false

DOM_BOARD_ITEMS.item1.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item1.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item1.classList.add('board__item--pressed')
	GAME_STATS.BOARD[0][0] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_BOARD_ITEMS.item2.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item2.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item2.classList.add('board__item--pressed')
	GAME_STATS.BOARD[0][1] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_BOARD_ITEMS.item3.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item3.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item3.classList.add('board__item--pressed')
	GAME_STATS.BOARD[0][2] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_BOARD_ITEMS.item4.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item4.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item4.classList.add('board__item--pressed')
	GAME_STATS.BOARD[1][0] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_BOARD_ITEMS.item5.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item5.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item5.classList.add('board__item--pressed')
	GAME_STATS.BOARD[1][1] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_BOARD_ITEMS.item6.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item6.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item6.classList.add('board__item--pressed')
	GAME_STATS.BOARD[1][2] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_BOARD_ITEMS.item7.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item7.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item7.classList.add('board__item--pressed')
	GAME_STATS.BOARD[2][0] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_BOARD_ITEMS.item8.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item8.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item8.classList.add('board__item--pressed')
	GAME_STATS.BOARD[2][1] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_BOARD_ITEMS.item9.addEventListener('click', () => {
	DOM_BOARD_ITEMS.item9.innerHTML = buildElementToPrint()
	DOM_BOARD_ITEMS.item9.classList.add('board__item--pressed')
	GAME_STATS.BOARD[2][2] = GAME_STATS.IS_BLUE_TURN ? 'X' : 'O'
	if (GAME_STATS.TURN >= 5) isWinner = checkWinner()
	if (GAME_STATS.TURN === 9) isTie = checkTie()
	if (isWinner) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.banner.classList.add('banner--visible')
		DOM_LAYOUT_ITEMS.result.textContent = GAME_STATS.IS_BLUE_TURN ? 'Blue' : 'Red'
	}
	if (isTie) {
		DOM_LAYOUT_ITEMS.board.classList.add('board--hidden')
		DOM_LAYOUT_ITEMS.tieBanner.classList.add('banner--visible')
	}
	++GAME_STATS.TURN
	GAME_STATS.IS_BLUE_TURN = !GAME_STATS.IS_BLUE_TURN
})

DOM_LAYOUT_ITEMS.reset1.addEventListener('click', () => resetGame())

DOM_LAYOUT_ITEMS.reset1.addEventListener('click', () => resetGame())

export const checkWinner = () => {
	for (let i = 0; i < 3; i++) {
		if (
			(GAME_STATS.BOARD[i][0] === GAME_STATS.BOARD[i][1] && GAME_STATS.BOARD[i][0] === GAME_STATS.BOARD[i][2]) ||
			(GAME_STATS.BOARD[0][i] === GAME_STATS.BOARD[1][i] && GAME_STATS.BOARD[0][i] === GAME_STATS.BOARD[2][i]) ||
			(GAME_STATS.BOARD[0][0] === GAME_STATS.BOARD[1][1] && GAME_STATS.BOARD[0][0] === GAME_STATS.BOARD[2][2]) ||
			(GAME_STATS.BOARD[0][2] === GAME_STATS.BOARD[1][1] && GAME_STATS.BOARD[0][2] === GAME_STATS.BOARD[2][0])
		) return true
	}

	return false
}


export const checkIsBoardFull = () => {
	for (let row = 0; row < 3; row++) {
		for (let col = 0; col < 3; col++) {
			if (GAME_STATS.BOARD[row][col] === null) return false
		}
	}

	return true
}

export const checkTie = () => !!(checkIsBoardFull() && !checkWinner())

export const resetGame = () => {
	for (let i = 1; i <= Object.keys(DOM_BOARD_ITEMS).length; i++) {
		console.log(i)
		DOM_BOARD_ITEMS[`item${i}`].replaceChildren()
		DOM_BOARD_ITEMS[`item${i}`].classList.remove('board__item--pressed')
	}
	GAME_STATS.TURN = 1
	GAME_STATS.IS_BLUE_TURN = true
	GAME_STATS.BOARD = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]
	DOM_LAYOUT_ITEMS.board.classList.remove('board--hidden')
	DOM_LAYOUT_ITEMS.banner.classList.remove('banner--visible')
	DOM_LAYOUT_ITEMS.tieBanner.classList.remove('banner--visible')
}

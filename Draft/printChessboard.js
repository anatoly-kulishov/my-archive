/**
 * "На JS написать программу, которая выводит шахматную доску,
 * где чёрные клетки символы “#”, а белые – “_”. Размер доски должен задаваться переменными.
 *
 * Пример:
 * #_#_#_#_
 * _#_#_#_#
 * #_#_#_#_
 * _#_#_#_#
 * #_#_#_#_
 * _#_#_#_#
 * #_#_#_#_
 * _#_#_#_#
 */

const printChessboard = (row, col) => {
    for (let i = 0; i < row; i++) {
        let row = "";

        for (let j = 0; j < col; j++) {
            if (i % 2 === j % 2) {
                row += "#"
            } else {
                row += "_"
            }
        }

        console.log(row)
    }
}

printChessboard(8, 8);

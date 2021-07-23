export const TETROMINOS: any = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: { 
        shape: [
            [0, 0, 0, 0],
            ['I', 'I', 'I', 'I'],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        color: '80, 227, 230'
    },
    J: { 
        shape: [
            ['J', 0, 0],
            ['J', 'J', 'J'],
            [0, 0, 0]
        ],
        color: '36, 95, 223'
    },
    L: { 
        shape: [
            [0, 0, 'L'],
            ['L', 'L', 'L'],
            [0, 0, 0]
        ],
        color: '223, 173, 36'
    },
    O: { 
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color: '223, 217, 36'
    },
    S: { 
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48, 211, 56'
    },
    T: { 
        shape: [
            [0, 'T', 0],
            ['T', 'T', 'T'],
            [0, 0, 0]
        ],
        color: '132, 61, 198'
    },
    Z: { 
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '227, 78, 78'
    },
};

export const randomTetromino: any = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}

export const nextTetromino: any = () => {
    const tetrominos = 'IJLOSTZ';
    const nextTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[nextTetromino];
}
export const STAGE_WIDTH = 10;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[y].length; x += 1) {
            //1. check that we're on tetromino cell
            if (player.tetromino[y][x] !== 0) {
                if (
                //2. check that our movement is in the game area height
                // shouldn't go through bottom on game area
                !stage[y + player.pos.y + moveY] || 
                //3. check that move is within game area width
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || 
                //4. check that cell we're moving to isn't set to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                };
            };

        };

    };
};
const generateMove = () => {
    return Math.floor(Math.random() * 10000) % 3;
};

const gameStart = (req, res) => {

    const ROCK = 'ROCK', PAPER = 'PAPER', SCISSOR = 'SCISSOR';
    const moves = [ROCK, PAPER, SCISSOR];
    const result = [];
    let matrix = new Array(4).fill(0).map(() => new Array(4).fill(0));
    for (let i = 0; i < 4; i++) matrix[i][i] = null;

    for (let it = 0; it < 50; it++) {
        const move = [moves[generateMove()], moves[generateMove()], moves[generateMove()], moves[generateMove()]];
        // console.log(move);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i == j) continue;
                if (move[i] == ROCK && move[j] == SCISSOR) matrix[i][j]++;
                if (move[i] == PAPER && move[j] == ROCK) matrix[i][j]++;
                if (move[i] == SCISSOR && move[j] == PAPER) matrix[i][j]++;
            }
        }
        // console.log(matrix);
        const iterationResult = JSON.parse(JSON.stringify(matrix)); // deep copy of matrix to push the result of iteration in result array
        result.push(iterationResult);
    }
    // console.log(result);
    res.status(200).json(result);
};

export default gameStart;
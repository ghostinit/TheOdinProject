const ScoreKeeper = (
    function () {

        let score = 0;
        const increase = () => {
            score += 1;
        };
        const decrease = () => {
            score -= 1;
        };
        const getScore = () => {
            return score;
        };
        const reset = () => {
            score = 0;
        }
        return { increase, decrease, getScore, reset };
    }
)();

ScoreKeeper.increase();
console.log(ScoreKeeper.getScore());
ScoreKeeper.increase();
ScoreKeeper.increase();
console.log(ScoreKeeper.getScore());
ScoreKeeper.decrease();
console.log(ScoreKeeper.getScore());
ScoreKeeper.reset();
console.log(ScoreKeeper.getScore());

const ScoreManager = (
    function () {
        let highScore = 0;
        let highScorePlayer = undefined;
        const getScoreKeeper = (playerName) => {
            let score = 0;
            const increment = () => {
                score += 1;
                if (score > highScore) {
                    highScore = score;
                    highScorePlayer = playerName;
                }
            }
            const getScore = () => {
                return score;
            }
            return { increment, getScore }
        }
        const getHighScore = () => {
            if (highScore === 0) {
                return 'No High Score Yet';
            } else {
                return `High Score: ${highScore} by ${highScorePlayer}`
            }
        }
        return { getScoreKeeper, getHighScore }
    }
)();

const adam = ScoreManager.getScoreKeeper('Adam');
const seriah = ScoreManager.getScoreKeeper('Seriah');

adam.increment();
console.log(ScoreManager.getHighScore());

seriah.increment();
seriah.increment();
seriah.increment();

console.log(ScoreManager.getHighScore());

adam.increment();
adam.increment();
adam.increment();
adam.increment();

console.log(ScoreManager.getHighScore());

const joeDaveBobbySue = ScoreManager.getScoreKeeper('Joe Dave Bobby Sue');

joeDaveBobbySue.increment();
joeDaveBobbySue.increment();
joeDaveBobbySue.increment();
joeDaveBobbySue.increment();
joeDaveBobbySue.increment();
joeDaveBobbySue.increment();
joeDaveBobbySue.increment();

console.log(ScoreManager.getHighScore());
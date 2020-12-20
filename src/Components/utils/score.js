
const getScore = (userAnswer,answer, points, setScore)=>{
    if (userAnswer === answer){
        // add the score
        return points;
    }else{
        // subtract the score
        console.log('Your answer is wrong');
        return 0;
    }
}

export default getScore;
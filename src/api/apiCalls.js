import axios from "axios";

const fetchApi = async (category) => {
    console.log('called API');
    const res = await axios.get('https://opentdb.com/api.php', {
        params: {
            amount: 5,
            category,
            type: 'multiple'
        }
    });
    const results = res.data.results;
    return results.reduce((finalObj, curr) => {
        let currObjArr = Object.values(curr);
        if (Object.values(finalObj).indexOf(currObjArr[0]) >= 0){
            let questionData = {
                question: currObjArr[3],
                answer: currObjArr[4]
            }
            finalObj['questions'].push(questionData);
        }else{
            finalObj['category'] = currObjArr[0]
            finalObj['questions'] = [ {
                question: currObjArr[3],
                answer: currObjArr[4]
            } ]
        }
        return finalObj;
    }, {});

}

const configureApi = secArr => {
    return secArr.map( section => fetchApi(section));
}

export default configureApi;
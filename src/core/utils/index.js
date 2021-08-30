import moment from 'moment'


function getFormattedTime(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')

}

function calculateSumOfNumbers(listOfNumbers){
    const sum = listOfNumbers.reduce((acc,el)=> acc+el)
    return sum
}

export {getFormattedTime}
export {calculateSumOfNumbers}










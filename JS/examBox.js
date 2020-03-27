
getJson("exercise/exerciseDate2.txt").then(function (data) {
    let exerciseData = JSON.parse(data);
    let date = new Date(Date.now());
    let month = date.getMonth()+1;
    let day = date.getDate();
    let exerciseName = "2020-"+month+"-"+day;
    let dailyExcercise = exerciseData[exerciseName];
    changeQuestion(dailyExcercise);
    loadHistory2(exerciseData);
})

getJson("exercise/exerciseDate1.txt").then(function (data) {
    let exerciseDate=JSON.parse(data);
    loadHistory(exerciseDate);
    bindListenerForHistoryLink(exerciseDate);
})


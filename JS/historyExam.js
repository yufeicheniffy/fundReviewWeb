getJson("exercise/exerciseDate1.txt").then(function (data) {
    let exerciseDate=JSON.parse(data);
    changeQuestion(exerciseDate[exerciseDate.length-1]["questions"][0]);
    loadHistory(exerciseDate);
    bindListenerForHistoryLink(exerciseDate);
})

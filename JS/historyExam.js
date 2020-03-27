getJson("exercise/exerciseDate1.txt").then(function (data) {
    let today = new Date(Date.now());
    let exerciseDate=JSON.parse(data);
    getTodayQues(today,exerciseDate);
    loadHistory(today,exerciseDate);
    bindListenerForHistoryLink(today,exerciseDate);
})

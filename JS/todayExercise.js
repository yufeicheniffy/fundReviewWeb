getJson("exercise/exerciseDate1.txt").then(function (data) {
    let exerciseDate=JSON.parse(data);
    let today = new Date(Date.now());
    getTodayQues(today,exerciseDate);
})
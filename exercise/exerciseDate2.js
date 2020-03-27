let exerciseDate = {
    "2020-3-27":{
        date: new Date(2020,2,27),
        questionText:"ETF基金最早产生于（）",
        questionAnswers:['加拿大','英国','美国','澳大利亚'],
        correctAnswer:0,
        answerExplain:"ETF基金最早产生于加拿大。",
    },
    "2020-3-28":{
        date: new Date(2020,2,28),
        questionText:"一下信息中不属于基金运作信息披露文件的是（）",
        questionAnswers:['基金上市交易公告书','基金资产净值和份额净值公告','基金定期报告','基金份额发售公告'],
        correctAnswer:3,
        answerExplain:"基金份额发售公告属于基金募集信息披露。",
    },
    "--":{
        date: new Date(2030,2,2),
        questionText:"",
        questionAnswers:['','','',''],
        correctAnswer:0,
        answerExplain:"",
    },
}

var fs = require('fs');
fs.writeFile("exerciseDate2.txt", JSON.stringify(exerciseDate), function(err) {
    if (err) {
        console.log(err);
    }
});
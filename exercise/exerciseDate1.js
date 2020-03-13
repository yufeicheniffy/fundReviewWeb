var exerciseDate=[
    {
        date: new Date(2020,3,12),
        questions:[
            {
                questionText:"开放式基金连续发生巨额赎回时，已接受的赎回申请可以延缓支付赎回款项，但延缓期限不得超过（）个工作日",
                questionAnswers:['5','10','15','20'],
                correctAnswer:3,
                answerExplain:"考察巨额赎回的处理方式",
            },
        ],
        questionNumber:1,
    },
    {
        date: new Date(2020,3,13),
        questions:[
            {
                questionText:"当基金市场价格为0.8元，份额净值为1.00元时，该基金的折价率为（）",
                questionAnswers:['-20%','20%','80%','-80%'],
                correctAnswer:0,
                answerExplain:"折（溢）价率=（二级市场价格-基金份额净值）/基金份额净值",
            },
            {
                questionText:"公司型基金依据（）设立并营运",
                questionAnswers:['公司法','公司章程','基金法','基金合同'],
                correctAnswer:1,
                answerExplain:"公司型基金依据基金公司章程设立，基金投资者是基金公司的股东，享有股东权，按所持有的股份承担有限责任。",
            },
        ],
        questionNumber:2,
    },
]

var fs = require('fs');
fs.writeFile("exerciseDate1.txt", JSON.stringify(exerciseDate), function(err) {
    if (err) {
        console.log(err);
    }
});
var exerciseDate=[
    {
        date: new Date(2020,2,12),
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
        date: new Date(2020,2,13),
        questions:[
            {
                questionText:"当基金市场价格为0.8元，份额净值为1.00元时，该基金的折价率为（）",
                questionAnswers:['-20%','20%','80%','-80%'],
                correctAnswer:0,
                answerExplain:"折（溢）价率=（二级市场价格-基金份额净值）/基金份额净值",
            },
        ],
        questionNumber:1,
    },
    {
        date: new Date(2020,2,14),
        questions:[
            {
                questionText:"公司型基金依据（）设立并营运",
                questionAnswers:['公司法','公司章程','基金法','基金合同'],
                correctAnswer:1,
                answerExplain:"公司型基金依据基金公司章程设立，基金投资者是基金公司的股东，享有股东权，按所持有的股份承担有限责任。",
            },
        ],
        questionNumber:1,
    },
    {
        date: new Date(2020,2,15),
        questions:[
            {
                questionText:"开放式基金的投资人开立的（）是基金注册登记人为基金投资人开立的、用于记录其持有的基金份额级变动情况的账户。",
                questionAnswers:['基金账户','证券账户','资金账户','第三方账户'],
                correctAnswer:0,
                answerExplain:"基金账户又称TA基金账户（Transaction Account 简称TA基金账户），是指注册登记人为投资人建立的用于管理和记录投资人交易该注册登记人所注册登记的基金种类、数量变化情况的账户。\n" +
                    "实用案例:" +
                    "为了给那些资金小、投资经验不足及受其他限制不愿或不能直接买卖股票的投资者提供方便，证券交易所特别开设了手续简单、快捷、费用低，专门用于购买基金的账户 ，即基金账户。",
            },
        ],
        questionNumber:1,
    },
]

var fs = require('fs');
fs.writeFile("exerciseDate1.txt", JSON.stringify(exerciseDate), function(err) {
    if (err) {
        console.log(err);
    }
});
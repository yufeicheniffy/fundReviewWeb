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
    {
        date: new Date(2020,2,16),
        questions:[
            {
                questionText:"关于基金分类标准，下列说法不正确的是：",
                questionAnswers:['50%以上的基金资产投资于股票的为股票基金','80%以上的基金资产投资于债券的为债券基金','以货币市场工具为投资对象的为货币市场基金','同时以股票和债券为投资对象的为混合基金'],
                correctAnswer:0,
                answerExplain:"80%以上的基金资产投资于股票的为股票基金。80%以上的基金资产投资于债券的为债券基金。" },
        ],
        questionNumber:1,
    },
    {
        date: new Date(2020,2,17),
        questions:[
            {
                questionText:"在日常运作中，目前我国基金管理公司按照（）的规定管理基金资产",
                questionAnswers:['公司章程','基金托管协议','基金合同','发起人协议'],
                correctAnswer:2,
                answerExplain:"基金管理人是基金产品的募集者和管理者，其主要职责是根据基金合同的规定，负责基金资产的投资及运作，在有效控制风险的基础下为基金投资者争取最大投资收益。" },
        ],
        questionNumber:1,
    },
    {
        date: new Date(2020,2,18),
        questions:[
            {
                questionText:"根据《证券投资基金法》，不属于基金托管人职责的是（）",
                questionAnswers:['募集资金','资产保管','资产清算、核算','投资运作监督'],
                correctAnswer:0,
                answerExplain:"募集资金不是基金托管人的职责。" },
        ],
        questionNumber:1,
    },
    {
        date: new Date(2020,2,19),
        questions:[
            {
                questionText:"交易是实现基金经理投资决策的最后环节，为了避免决策的随意性和道德风险，应该实行决策人和执行人的分离，其具体含义是（）",
                questionAnswers:['基金经理不得向交易员直接下达交易指令或者直接进行交易','投资指令必须经董事会讨论后才能确定','基金投资人不可以向基金经理下达指令','基金公司不得向基金经理下达指令'],
                correctAnswer:0,
                answerExplain:"考察基金经理如何管理基金。" },
        ],
        questionNumber:1,
    },
    {
        date: new Date(2020,2,20),
        questions:[
            {
                questionText:"如果封闭式基金募集期满后不能成立，则基金管理人需要在（）日内返还投资者已缴纳的款项，并加记银行同期存款利息。",
                questionAnswers:['7','10','20','30'],
                correctAnswer:3,
                answerExplain:"基金管理人需要在30日内返还投资者已缴纳的款项" },
        ],
        questionNumber:1,
    },
    {
        date: new Date(2020,2,22),
        questions:[
            {
                questionText:"基金监管从内容上讲，不包括（）",
                questionAnswers:['对基金信息披露的监管','对基金服务机构的监管','对基金运作的监管','对基金高级管理人员的监管'],
                correctAnswer:0,
                answerExplain:"包括对基金服务机构、基金运作、基金高级管理人员的监管。" },
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
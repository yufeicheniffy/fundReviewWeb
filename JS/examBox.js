getJson("exercise/exerciseDate1.txt").then(function (data) {
    let exerciseDate=JSON.parse(data);
    changeQuestion(exerciseDate[exerciseDate.length-1]["questions"][0]);
    loadHistory(exerciseDate);
    bindListenerForHistoryLink(exerciseDate);
})

function bindListenerForHistoryLink(date){
    let questionLinks = document.querySelectorAll(".historyLink");
    questionLinks.forEach(function (item,index) {
        item.addEventListener('click',function(){
            changeQuestion(date[date.length-index-1]["questions"][0]);
        })
    })

}
function loadHistory(exerciseDate){
    let historyBar=document.querySelector("#historyBar")
    let totalN = exerciseDate.length;
    exerciseDate.forEach(function(item,index){
        let ques = exerciseDate[totalN-index-1]
        let date = new Date(ques["date"])
        let day = date.getDate();
        let month = date.getMonth()+1;
        let questionElement = document.createElement('div');
        questionElement.classList.add("historyLink")
        questionElement.innerHTML=month+'月'+day+'日';
        historyBar.appendChild(questionElement);
    })
}

function changeQuestion(question){
    let exerciseText = document.querySelector("#exerciseText");
    exerciseText.textContent=question["questionText"];
    let choiceButtons = document.querySelectorAll(".choiceText");
    for(let i=0;i<4;i++){
        choiceButtons[i].textContent=question["questionAnswers"][i];
    }
    let examBox=document.querySelector("#examBox");
    let checkAnswerButton=document.querySelector("#checkAnswer");
    checkAnswerButton.addEventListener("click",function(){
        let data = new FormData(examBox);
        let exerciseAnswer=document.querySelector("#exerciseAnswer");
        let exerciseExplain=document.querySelector("#exerciseExplain")
        for (const entry of data) {
            if(entry[1]==question["correctAnswer"]){
                exerciseAnswer.innerHTML="正确！"+"<div id=\"exerciseExplain\">解析："+question["answerExplain"]+"</div>";
                exerciseAnswer.style+="color:red;";
            }else{
                exerciseAnswer.innerHTML=entry[1]+"错误！看了解析再试一次吧。"+"<div id=\"exerciseExplain\">解析："+question["answerExplain"]+"</div>";
                exerciseAnswer.style+="color:green;";
            }
        };
        exerciseAnswer.style+="display:block;";
        event.preventDefault()
    },false)
}
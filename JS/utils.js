const getJson=function(url){
    return new Promise(function (resolve,reject){
        const handler = function(){
            if(this.readyState===4){
                if(this.status>=200 && this.status<400){
                    resolve(this.response);
                }else{
                    console.log(this.status)
                    reject(new Error(this.statusText+this.readyState));
                }
            }
        }
        const client = new XMLHttpRequest();
        client.open("GET",url);
        client.onreadystatechange = handler;
        client.send();
    })
}

function bindListenerForHistoryLink(today,exerciseDate){
    let questionLinks = Array.from(document.querySelectorAll(".historyLink"));
    let indexE = exerciseDate.length;
    let j = 0 ;
    for(let i = indexE-1;i>=0;i--){
        let ques = exerciseDate[i]
        let date = new Date(ques["date"])
        if(date<=today) {
            questionLinks[j].addEventListener('click',()=>{
                changeQuestion(exerciseDate[i]["questions"][0]);
            });
            j+=1;
        }
    }
}

function loadHistory(today,exerciseDate){
    let indexE = exerciseDate.length;
    let historyBar=document.querySelector("#historyBar")
    let totalN = exerciseDate.length;
    for(let i = indexE-1;i>=0;i--){
        let ques = exerciseDate[i]
        let date = new Date(ques["date"])
        if(date<=today) {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let questionElement = document.createElement('div');
            questionElement.classList.add("historyLink")
            questionElement.innerHTML = month + '月' + day + '日';
            historyBar.appendChild(questionElement);
        }
    }
}

function changeQuestion(question){
    let exerciseAnswer=document.querySelector("#exerciseAnswer");
    exerciseAnswer.innerHTML=''
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

function getTodayQues(today,exerciseDate){
    console.log(today)
    let indexE = exerciseDate.length;
    for(let i = indexE-1;i>=0;i--){
        let exercise = exerciseDate[i];
        let question = exercise["questions"][0];
        let exerciseDay = new Date(exercise['date']);
        if(exerciseDay<=today){
            changeQuestion(question);
            break;
        }
    }
}
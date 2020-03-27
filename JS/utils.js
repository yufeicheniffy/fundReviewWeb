function bindListenerForHistoryLink(date){
    let questionLinks = document.querySelectorAll(".historyLink");
    questionLinks.forEach(function (item,index) {
        item.addEventListener('click',function(){
            changeQuestion(date[date.length-index-1]["questions"][0]);
        })
    })
}


function appendDateLinks(question,historyBar){
    let date = new Date(question["date"]);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let questionElement = document.createElement('div');
    questionElement.classList.add("historyLink")
    questionElement.innerHTML=month+'月'+day+'日';
    historyBar.appendChild(questionElement);
    questionElement.addEventListener('click',()=>{
        changeQuestion(question);
    })
}

function loadHistory2(exerciseDate){
    let historyBar=document.querySelector("#historyBar");
    for (let dateIndex in exerciseDate){
        let question = exerciseDate[dateIndex];
        let today = new Date(Date.now());
        let exerDate = new Date(question["date"]);
        if (exerDate<=today){
            appendDateLinks(question,historyBar);
        }
    }
}

function loadHistory(exerciseDate){
    let historyBar=document.querySelector("#historyBar");
    let totalN = exerciseDate.length;
    exerciseDate.forEach(function(item,index){
        let ques = exerciseDate[totalN-index-1]
        appendDateLinks(ques,historyBar);
    })
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
    checkAnswerButton.addEventListener("click",function(event){
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
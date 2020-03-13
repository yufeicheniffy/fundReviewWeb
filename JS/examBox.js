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

getJson("exercise/exerciseDate1.txt").then(function (data) {
    let exerciseDate=JSON.parse(data);
    let todayExcerciseDate=exerciseDate[exerciseDate.length-1]["questions"][0]
    let exerciseText = document.querySelector("#exerciseText");
    exerciseText.textContent=todayExcerciseDate["questionText"];
    let choiceButtons = document.querySelectorAll(".choiceText");
    for(let i=0;i<4;i++){
        choiceButtons[i].textContent=todayExcerciseDate["questionAnswers"][i];
    }
    let examBox=document.querySelector("#examBox");
    examBox.addEventListener("submit",function(){
        let data = new FormData(examBox);
        let exerciseAnswer=document.querySelector("#exerciseAnswer");
        let exerciseExplain=document.querySelector("#exerciseExplain")
        for (const entry of data) {
           if(entry[1]==todayExcerciseDate["correctAnswer"]){
               exerciseAnswer.textContent="正确！"+todayExcerciseDate["answerExplain"];
               exerciseAnswer.style+="color:red;";
               exerciseExplain.textContent=todayExcerciseDate["answerExplain"];
           }else{
               exerciseAnswer.textContent="错误！看了解析再试一次吧。"+todayExcerciseDate["answerExplain"];
               exerciseAnswer.style+="color:green;";
               exerciseExplain.textContent=todayExcerciseDate["answerExplain"];
           }
        };
        exerciseAnswer.style+="display:block;";
        event.preventDefault()
    },false)
})

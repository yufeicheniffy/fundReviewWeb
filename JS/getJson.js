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
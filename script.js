const button=document.querySelector('button');


button.addEventListener('click',function(e){
    e.preventDefault();
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 &&this.status==200){
            const data=JSON.parse(this.responseText);
            console.log(data.value);

            let colors=["red","yellow","orange","green","blue","pink"];
            const rando=Math.floor(Math.random()*colors.length);
            let colorstwo=["red","yellow","orange","green","blue","pink"];
            const randotwo=Math.floor(Math.random()*colorstwo.length);


             document.querySelector('.joke-container').innerHTML=`<h1 style="color:${colors[rando]}">${data.value}</h1><p style="color:${colorstwo[randotwo]}">${data.updated_at}</p>`;
        }
    };

    xhttp.open("GET","https://api.chucknorris.io/jokes/random",true);
    xhttp.send();


})
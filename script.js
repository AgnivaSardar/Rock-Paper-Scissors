let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector(".result");

let ranNo=0, choice=0, user=0, comp=0;
document.querySelector(".user-pt").innerText = user;
document.querySelector(".comp-pt").innerText = comp;
let arr=["none","Rock","Paper","Scissors"];

if(user==0 && comp==0)
{
    result.classList.add("play");
    result.innerText="Start";
    console.log(user)
    console.log(comp)
}
rock.addEventListener("click",()=>{

    rock.classList.add("dark-rock");
    ranNo = Math.floor((Math.random()*3)+1);
    choice=1;
    if(ranNo==2)
    {
        comp++;
        result.classList.remove("result-win");
        result.classList.remove("result-draw");
        result.classList.remove("play");
        result.classList.add("result-loss")
        result.innerText = "You Lose, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    else if(ranNo==3)
    {
        user++;
        result.classList.remove("result-loss");
        result.classList.remove("result-draw");
        result.classList.remove("play");
        result.classList.add("result-win");
        result.innerText = "You Win, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    else
    {
        user++;
        comp++;
        result.classList.remove("result-win");
        result.classList.remove("result-loss");
        result.classList.remove("play");
        result.classList.add("result-draw")
        result.innerText = "Draw, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    console.log("c="+choice)
    console.log("rn="+ranNo)
})
paper.addEventListener("click",()=>{

    paper.classList.add("dark-paper");
    ranNo = Math.floor((Math.random()*3)+1);
    choice=2;
    if(ranNo==1)
    {
        user++;
        result.classList.remove("result-loss");
        result.classList.remove("result-draw");
        result.classList.remove("play");
        result.classList.add("result-win");
        result.innerText = "You Win, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    else if(ranNo==3)
    {
        comp++;
        result.classList.remove("result-win");
        result.classList.remove("result-draw");
        result.classList.remove("play");
        result.classList.add("result-loss")
        result.innerText = "You Lose, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    else
    {
        user++;
        comp++;
        result.classList.remove("result-win");
        result.classList.remove("result-loss");
        result.classList.remove("play");
        result.classList.add("result-draw")
        result.innerText = "Draw, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    console.log("c="+choice)
    console.log("rn="+ranNo)
})
scissors.addEventListener("click",()=>{

    scissors.classList.add("dark-scissors");
    ranNo = Math.floor((Math.random()*3)+1);
    choice=3;
    if(ranNo==2)
    {
        user++;
        result.classList.remove("result-loss");
        result.classList.remove("result-draw");
        result.classList.remove("play");
        result.classList.add("result-win");
        result.innerText = "You Win, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    else if(ranNo==1)
    {
        comp++;
        result.classList.remove("result-win");
        result.classList.remove("result-draw");
        result.classList.remove("play");
        result.classList.add("result-loss")
        result.innerText = "You Lose, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    else
    {
        user++;
        comp++;
        result.classList.remove("result-win");
        result.classList.remove("result-loss");
        result.classList.remove("play");
        result.classList.add("result-draw")
        result.innerText = "Draw, \n your choice = "+arr[choice]+" \n comp choice = "+arr[ranNo];
        document.querySelector(".user-pt").innerText = user;
        document.querySelector(".comp-pt").innerText = comp;
    }
    console.log("c="+choice)
    console.log("rn="+ranNo)
})
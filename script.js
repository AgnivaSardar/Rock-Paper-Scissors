let O = document.querySelector("#box41");
let I = document.querySelector("#box30");
let II = document.querySelector("#box31");
let III = document.querySelector("#box32");
let IV = document.querySelector("#box20");
let V = document.querySelector("#box21");
let VI = document.querySelector("#box22");
let VII = document.querySelector("#box10");
let VIII = document.querySelector("#box11");
let IX = document.querySelector("#box12");

let plus = document.querySelector("#box33")
let minus = document.querySelector("#box23")
let div = document.querySelector("#box03")
let prod = document.querySelector("#box13")
let mod = document.querySelector("#box02")
let equal = document.querySelector("#box43")
let back = document.querySelector("#box01")
let clear = document.querySelector("#box00")

let calcSpace = document.querySelector(".calc-space");

let num=0,res=0, decide=0;

O.addEventListener("click",()=>
{
    if(!(num==0));
    {
        if(decide==-1)
            {
                res=0;
                num=0;
                decide=0;
            }
        num=(num*10)+0;
        calcSpace.innerText=num;
    }
})
I.addEventListener("click",()=>
{
    if(decide==-1)
        {
            res=0;
            num=0;
            decide=0;
        }
        num=(num*10)+1;
        calcSpace.innerText=num;
})
II.addEventListener("click",()=>
{
    if(decide==-1)
        {
            res=0;
            num=0;
            decide=0;
        }
        num=(num*10)+2;
        calcSpace.innerText=num;
})
III.addEventListener("click",()=>
{
    if(decide==-1)
        {
            res=0;
            num=0;
            decide=0;
        }
        num=(num*10)+3;
        calcSpace.innerText=num;
})
IV.addEventListener("click",()=>
{
    if(decide==-1)
        {
            res=0;
            num=0;
            decide=0;
        }
        num=(num*10)+4;
        calcSpace.innerText=num;
})
V.addEventListener("click",()=>
{
    if(decide==-1)
        {
            res=0;
            num=0;
            decide=0;
        }
        num=(num*10)+5;
        calcSpace.innerText=num;
})
VI.addEventListener("click",()=>
{
    if(decide==-1)
        {
            res=0;
            num=0;
            decide=0;
        }
        num=(num*10)+6;
        calcSpace.innerText=num;
})
VII.addEventListener("click",()=>
{
    if(decide==-1)
        {
            res=0;
            num=0;
            decide=0;
        }
        num=(num*10)+7;
        calcSpace.innerText=num;
})
VIII.addEventListener("click",()=>
{
    if(decide==-1)
        {
            res=0;
            num=0;
            decide=0;
        }
        num=(num*10)+8;
        calcSpace.innerText=num;
})
IX.addEventListener("click",()=>
{
    if(decide==-1)
    {
        res=0;
        num=0;
        decide=0;
    }
        num=(num*10)+9;
        calcSpace.innerText=num;
})

plus.addEventListener("click",()=>
{
    if(decide==0)
    {
        res=num;
    }
    if(decide==1)
    {
        res=res+num;
    }
    else if(decide==2)
    {
        res=res-num;
    }
    else if(decide==3)
    {
        res=res/num;
    }
    else if(decide==4)
    {
        res=res*num;
    }
    else if(decide==5)
    {
        res=res%num;
    }
    calcSpace.innerText=res+" +";
    num=0;
    decide=1;
})
minus.addEventListener("click",()=>
{
    if(decide==0)
        {
            res=num;
        }
        if(decide==1)
        {
            res=res+num;
        }
        else if(decide==2)
        {
            res=res-num;
        }
        else if(decide==3)
        {
            res=res/num;
        }
        else if(decide==4)
        {
            res=res*num;
        }
        else if(decide==5)
        {
            res=res%num;
        }
        calcSpace.innerText=res+" -";
        num=0;
        decide=2;
})
div.addEventListener("click",()=>
{
    if(decide==0)
        {
            res=num;
        }
        if(decide==1)
        {
            res=res+num;
        }
        else if(decide==2)
        {
            res=res-num;
        }
        else if(decide==3)
        {
            res=res/num;
        }
        else if(decide==4)
        {
            res=res*num;
        }
        else if(decide==5)
        {
            res=res%num;
        }
        calcSpace.innerText=res+" /";
        num=0;
        decide=3;
})
prod.addEventListener("click",()=>
{
    if(decide==0)
        {
            res=num;
        }
        if(decide==1)
        {
            res=res+num;
        }
        else if(decide==2)
        {
            res=res-num;
        }
        else if(decide==3)
        {
            res=res/num;
        }
        else if(decide==4)
        {
            res=res*num;
        }
        else if(decide==5)
        {
            res=res%num;
        }
        calcSpace.innerText=res+" *";
        num=0;
        decide=4;
})
mod.addEventListener("click",()=>
{
    if(decide==0)
        {
            res=num;
        }
        if(decide==1)
        {
            res=res+num;
        }
        else if(decide==2)
        {
            res=res-num;
        }
        else if(decide==3)
        {
            res=res/num;
        }
        else if(decide==4)
        {
            res=res*num;
        }
        else if(decide==5)
        {
            res=res%num;
        }
        calcSpace.innerText=res+" %";
        num=0;
        decide=5;
})
equal.addEventListener("click",()=>
{
    if(decide==0)
        {
            res=num;
        }
        if(decide==1)
        {
            res=res+num;
        }
        else if(decide==2)
        {
            res=res-num;
        }
        else if(decide==3)
        {
            res=res/num;
        }
        else if(decide==4)
        {
            res=res*num;
        }
        else if(decide==5)
        {
            res=res%num;
        }
    calcSpace.innerText=res;
    num=0;
    decide=-1;
})
clear.addEventListener("click",()=>
{
    num=0;
    res=0;
    decide=0;
    calcSpace.innerText=num;
})
back.addEventListener("click",()=>
{
    num=Math.floor(num/10);
    calcSpace.innerText=num;
})

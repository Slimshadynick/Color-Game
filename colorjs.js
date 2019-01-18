//var colors=["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 0, 255)"];
var colors=createArray(6);
var squares=document.querySelectorAll(".box");
var colorName=document.getElementById('colorname');
var colorPicked=pickcolor();
colorName.textContent=colors[colorPicked];
var messageDisplay=document.getElementById("message");
var resetButton=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
easy.addEventListener("click",function(){
    easy.classList.add("bcolor");
    hard.classList.remove("bcolor");
    colors=createArray(3);
    colorPicked=pickcolor();
    colorName.textContent=colors[colorPicked];
    for(let i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})
hard.addEventListener("click",function(){
    hard.classList.add("bcolor");
    easy.classList.remove("bcolor");
    colors=createArray(6);
    colorPicked=pickcolor();
    colorName.textContent=colors[colorPicked];
    for(let i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
})
resetButton.addEventListener("click",function(){
    colors=createArray(6);
    colorPicked=pickcolor();
    colorName.textContent=colors[colorPicked];
    changecolor();
    if(this.textContent==="Play Again")
    {
        let result=document.querySelector("#result");
        let h1=document.querySelector("h1");
        this.textContent="New Colors";
        result.style.backgroundColor="white";
        h1.style.backgroundColor="rgb(35, 35, 35)";
    }
})
function changecolor()
{
    for(let i=0;i<squares.length;i++)
    {
        //console.log(squares[i]);
        //console.log(colors[i]);
        //squares[0].style.backgoundColor="rgb(255, 255, 0)";
        squares[i].style.backgroundColor=colors[i];
        squares[i].addEventListener("click",function(){
            var clickedcolor=this.style.backgroundColor;
            if(clickedcolor===colors[colorPicked]){
                messageDisplay.textContent="Correct!!!";
                changeColorsAll(clickedcolor);
                let result=document.querySelector("#result");
                let h1=document.querySelector("h1");
                h1.style.backgroundColor=clickedcolor;
                result.style.backgroundColor=clickedcolor;
                resetButton.textContent="Play Again";
            }
            else
            {
                this.style.backgroundColor="rgb(35, 35, 35)";
                messageDisplay.textContent="Try Again!!!";
            }
        });
    }
}
changecolor();
function changeColorsAll(clickedcolor)
{
    for(let i=0;i<colors.length;i++)
    {
        squares[i].style.backgroundColor=clickedcolor;
    }
}
function pickcolor()
{
    let l=colors.length;
    return Math.floor(Math.random()*l);
}
function createArray(num)
{
    let arr=[];
    for(let i=0;i<num;i++)
    {
        let a=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        let c=Math.floor(Math.random()*256);
        let str="rgb(";
        str=str+a+", "+b+", "+c+")";
        arr.push(str);
    }
    return arr;
}
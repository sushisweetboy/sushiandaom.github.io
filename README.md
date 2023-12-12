<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>flip coin for picking the restaurent</title>
    <style>
         body{
            background-color: rgb(25, 25, 25);
            color: white;
            font-family: Arial;
        }
        .aom{
           
            width: 100px;
            
            cursor: pointer;
        }
        .sushi{
            
            width: 100px;
            
            cursor: pointer;
        }
        .moveicon{
        
        height: 50px;
        }
        .move-button{
            
            background-color: transparent;
            border: 3px solid white;
            width: 100px;
            height: 100px;
            border-radius: 60px;
            cursor: pointer;
        }

    </style>
</head>
      
    
    
<body>
    <button class="aom move-button " onclick="allquestionapper('aom');" ><img src="picture/aom.png" 
        class="move-button" > </button>    <button class="sushi move-button" onclick="allquestionapper('sushi');"><img src="picture/sushi.png" 
            class="move-button"></button>
            <div>

            
            
    <button class="head" onclick="playgame(playername,'head');"></button>    <button class="tail" onclick="playgame(playername,'tail');"></button>
    </div>

    <p class="show"></p>
    <p class="result "></p>
    <p class="statement"></p>
</body>
<script>
    let playername='';
function allquestionapper(name){
    if(name==='aom'){
         playername='aom';
      document.querySelector('.head').
      innerHTML=`<img src="picture/head.png" class="move-button" >`;
      document.querySelector('.tail').
      innerHTML=`<img src="picture/tail.png" class="move-button">`;

    }else if(name==='sushi'){
         playername='sushi';
        document.querySelector('.head').
      innerHTML=`<img src="picture/head.png" class="move-button" >`;
      document.querySelector('.tail').
      innerHTML=`<img src="picture/tail.png" class="move-button">`;

    }

}
  function playgame(playername,pick){
    console.log(playername,pick);
    const computerrandom=random();
    if(playername==='aom'){
        
         let show=document.querySelector('.show').
         innerHTML=`you choose<img src="picture/${pick}.png" class="move-button" > 
           computer choose <img src="picture/${computerrandom}.png" class="move-button" > `;
        if(pick===computerrandom){
            let result=document.querySelector('.result').
            innerHTML=`<img src="picture/$youwin.png" class="move-button"  > `;

            let statement=document.querySelector('.statement').
             innerHTML=`ออมเป็นคนเลือกร้านอาหาร`;
        
        } else{
            let result=document.querySelector('.result').
            innerHTML=`<img src="picture/lose.png" class="move-button"  > `;
            let statement=document.querySelector('.statement').
             innerHTML=`ซูชิเป็นคนเลือกร้านอาหาร`;
        }
    }else if(playername==='sushi'){
        let show=document.querySelector('.show').
         innerHTML=`you choose<img src="picture/${pick}.png" class="move-button" > 
           computer choose <img src="picture/${computerrandom}.png" class="move-button" > `;
        if(pick===computerrandom){
            let result=document.querySelector('.result').
            innerHTML=`<img src="picture/youwin.png" class="move-button"  > `;

            let statement=document.querySelector('.statement').
             innerHTML=`ซูชิเป็นคนเลือกร้านอาหาร`;
        
        } else{
            let result=document.querySelector('.result').
            innerHTML=`<img src="picture/lose.png" class="move-button"  > `;
            let statement=document.querySelector('.statement').
             innerHTML=`ออมเป็นคนเลือกร้านอาหาร`;
        }
  }
}
  function random(){
    let commove='';
    let a=Math.random();
    if(a>=0&&a<1/2){
       commove='head';
    }else if(a>=1/2&&a<2/2){
       commove='tail';
    }
    return commove;
  }

</script>
</html>

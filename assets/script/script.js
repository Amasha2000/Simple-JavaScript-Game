var marks=0;
      var character=document.getElementById("character");
      var block=document.getElementById("block");
      function jump(){
          if(character.classList != "animate"){
            character.classList.add("animate");
            block.style.animation="block 3s infinite linear";
            marks=marks+1;
         }
            $("#scoreText").css('display','inline');
            $("#mark").text(marks);
            window.setTimeout(function(){
              character.classList.remove("animate");
          },500)        
 }

 document.addEventListener("keydown",function(){
   jump();
 });

 var checkLose=setInterval(function(){
     var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
     var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
     if(blockLeft<120 && blockLeft>0 && characterTop>=363.12){
         block.style.animation="none";
         $("#scoreText").css('display','none');
         $("#mark").text("You Lose");
         marks=0;
         //alert("You Lose");
      } 
 },10);
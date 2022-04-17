function playerName(){
  var name = prompt("What's your name?");
  alert("Hello " + name + ", welcome to this puzzle game!");
}
playerName()

function enterAnswer(){
  var answer = prompt("您的答案是：");
  if (answer) {
    document.getElementById("answers").innerHTML = "你输入的答案：" + answer;
  }
  if (answer === "10"){
    alert("恭喜回答正确！")
  }
  else{
    alert("很遗憾，" + answer + "并不是正确答案，请再思考思考！")
  }
}

function getAnswer(){
  alert("正确答案是：10。");
}

function getHint(){
  var hint = ["4+6。","和是方格所填的数字之和。"];
  for(i=0;i<2;i++){
    alert(hint[i])
  }
}

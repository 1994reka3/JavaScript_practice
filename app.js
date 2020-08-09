// 2章カリキュラム
hello = "Hello,World"
alert(hello);
alert(3+4);

var str1 ="Hello"
var str2 ="World!!"
alert(str1+str2)


var orange = 100;
var apple = 120;
if(orange < apple){
  alert("みかんの値段がりんごより安い");
}
else if(orange == apple){
  alert("みかんとりんごが同じ値段");
}
else{
  alert("みかんの値段がりんごより高い");
}


var max = 100;
var num = 1;
var count =0;
while(num < max){
  num = num * 2;
  count = count +1;
}
alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");


var i;
var num = 0;
for(i = 1; i < 11; i++){
  num = num + i;
}
alert("1から10まで足し算した結果は" + num + "です");

var int1 = 10;
var int2 = 2;
alert(int1 + int2)
alert(int1 - int2)
alert(int1 * int2)
alert(int1 / int2)

// 3章カリキュラム

var alertString;
alertString = addString("WebCamp");
alert(alertString);
function addString(strA){
  var addStr = "Hello" + strA;
  return addStr;
}


var promptStr = prompt("何か好きな文字を入力してください。");
alert(promptStr);

// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
// 結果を表示する
alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");
// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3);
  var hand_name;

  if(js_hand_num == 0){
    js_hand = "グー";
  }else if(js_hand_num == 1){
    js_hand = "チョキ";
  }else if(js_hand_num == 2){
    js_hand = "パー";
  }
  return js_hand;
}
// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ"
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}




let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu =0;
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);
let judge =false;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let i = document.querySelector('input[name="shimei"]');
    let yoso = Number(i.value);
    kaisu++;
  let b = document.querySelector('p#result');   
let n =document.querySelector('span#kaisu'); 
  n.textContent =kaisu;
  let a =document.querySelector('span#answer'); 
  a.textContent =yoso;
  if(judge===false){
    if(kaisu>=4){
      b.textContent=('答えは'+kotae+'でした。ゲームは既に終わっています。');
      console.log("答えは"+ kotae +"でした。ゲームは既に終わっています。");
     }if(kaisu===3){
      if(yoso===kotae){
        b.textContent= ("正解です。おめでとう！");
      }else{
        b.textContent=("残念、答えは、"+kotae+"でした。");
      }
     }
     if(kaisu<3){
      if(kotae<yoso){
        console.log("残念、もっと小さいよ");
        b.textContent=('残念、もっと小さいよ');
      } else if(kotae>yoso){
        console.log("残念、もっと大きいですよ。");
        b.textContent=('残念、もっと大きいですよ。');
      }else {
        console.log("正解、おめでとう！");
        b.textContent=('正解、おめでとう！');
        judge=true;
      }
  }
 }else{
  b.textContent=('答えは'+kotae+'でした。ゲームは既に終わっています。');
 }
 
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
 
 

                                                                                                                          
}  
  
  

  
  // 課題3-1: 正解判定する
  
  
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール


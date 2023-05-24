//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let n =document.createElement('p');
n.textContent='写真表と都市の緯度軽度のページです。';
n.setAttribute('style','sesame green');
// 練習4-3 写真表作成プログラム
let div =  document.querySelector('div#phototable');
let beeLink = document.createElement('p');
n =document.createElement('img');
n.setAttribute('src',"taro.png");
beeLink.insertAdjacentElement('beforeend',n);  
div.insertAdjacentElement('beforeend', beeLink); 
let div2 = document.querySelector('div#phototable');
 let beeLink2 = document.createElement('p');
 a =document.createElement('img');
 a.setAttribute('src',"jiro.png");
 beeLink2.insertAdjacentElement('beforeend',a); 
 div2.insertAdjacentElement('beforeend', beeLink2); 
 let div3 = document.querySelector('div#phototable');
 let beeLink3 = document.createElement('p');
 c =document.createElement('img');
 c.setAttribute('src',"hanako.png");
 beeLink3.insertAdjacentElement('beforeend',c); 
 div3.insertAdjacentElement('beforeend', beeLink3); 
// 練習4-4 箇条書き削除プログラム
let ps3 = document.querySelectorAll('ul#location > li'); 
for(let n of ps3){        
	n.remove();
}                         
// 練習4-5 箇条書き追加プログラム
let h2 = document.querySelector('ul#location'); 
for(let n of data){
	let li =document.createElement('li');
	li.textContent = n.name+',,,緯度:'+n.lat+'経度'+n.lng;
	h2.insertAdjacentElement('afterend', li);
} 



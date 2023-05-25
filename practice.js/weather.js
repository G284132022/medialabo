let data = {
  "coord":[ {
    "lon": 116.3972,
    "lat": 39.9075
  }],
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      description: "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main":[ {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  }],
  "visibility": 10000,
  "wind":[ {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  }],
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys":[ {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  }],
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log("北京市の天気予報");
console.log(data.id+data.name);
for(let n of data.main){
console.log("最高気温:"+n.temp_max);
console.log("最低気温:"+n.temp_min);
console.log("湿度"+n.humidity);
}for(let a of data.coord){
  console.log("緯度"+a.lon);
  console.log("軽度"+a.lat);
}for(let b of data.weather){
  console.log("天気"+b.description);
}for(let c of data.wind){
  console.log("風速"+c.speed);
  console.log("風向"+c.deg); 
}
let n =document.querySelector('p#ID'); 
   n.textContent=data.id+data.name;
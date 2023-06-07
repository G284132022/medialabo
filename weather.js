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

let b = document.querySelector('#btn');
b.addEventListener('click', sendRequest);
   
   

function sendRequest() {
    
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json';

    
    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);      
}


function showResult(resp) {
    
    let data = resp.data;

    
    if (typeof data === 'string') {
        data = JSON.parse(data);
    } 
    
    let b2 =document.querySelector('li#btn');
    b2.insertAdjacentElement('beforeend', A);
    b2.textContent='北京市の天気予報';
    b2.textContent=(data.id+data.name);
    for(let n of data.main){
      b2.textContent=("最高気温:"+n.temp_max);
      b2.textContent=("最低気温:"+n.temp_min);
      b2.textContent=("湿度"+n.humidity);
    }for(let a of data.coord){
      b2.textContent=("緯度"+a.lon);
      b2.textContent=("軽度"+a.lat);
    }for(let b of data.weather){
      b2.textContent=("天気"+b.description);
    }for(let c of data.wind){
      b2.textContent=("風速"+c.speed);
      b2.textContent=("風向"+c.deg); 
    }
    
    
    

    
    
}


function showError(err) {
    console.log(err);
}


function finish() {
    console.log('Ajax 通信が終わりました');
}

const text = "澳門（葡萄牙語：Macau；縮寫：MAC），全稱澳門特別行政區（葡萄牙語：Região Administrativa Especial de Macau；縮寫：RAEM），簡稱「澳」，古稱「龍涯門」、「濠鏡澳」、「濠江」、「海鏡」、「鏡海」、「嶴門」，民間又稱「馬交」或「梳打埠」，是中華人民共和國兩個特別行政區之一，是中國面積最小的一級行政單位；1999年回歸以前則為葡萄牙第二大城巿。澳門位於南海北岸、珠江口西側，北接廣東省珠海市，東面與鄰近的香港相距63公里，其餘兩面與南海鄰接。澳門亦是粵港澳大灣區的中心城市之一。";
let index = 0;

// 模擬打字機那樣一個字一個字地輸出
function type() {
  const text_area = document.getElementById("text");
  text_area.textContent += text[index];
  index++;
  if (index >= text.length) {
    clearInterval(timer);
    document.getElementById("cursor").style.display = "none"; // 打完字就隱藏鼠標
  }
}

const timer = setInterval(type, 100);

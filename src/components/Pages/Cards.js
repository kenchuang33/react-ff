import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>探索台東景點</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/火車.jpeg'
              text='【台東太麻里景點】多良車站 全台灣最美車站！'
              label='多良車站'
              path=''
            />
            <CardItem
              src='images/3-1.jpeg'
              text='”台東光點 點亮在地音樂與手創市集”'
              label='鐵花村'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/栗松溫泉.jpeg'
              text='【台東旅遊】白煙裊裊，山谷間藏如翡翠般的靜謐時光'
              label='栗松溫泉'
              path=''
            />
            <CardItem
              src='images/熱氣球.png'
              text='「睇見台灣 從台東開始」'
              label='鹿野高台'
              path=''
            />
            <CardItem
              src='images/伯朗大道.jpeg'
              text='時而散發金黃色光芒的道路，被譽為是一條「翠綠的天堂路」'
              label='伯朗大道'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
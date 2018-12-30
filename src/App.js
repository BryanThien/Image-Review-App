import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    const images = ['https://external-preview.redd.it/xeu1yBZA4o1GNjmYZwpV_KNrEm_8P5HpFWlaKYDnZd0.jpg?s=5b0457ceb17b62f77d776ee39fbe03ed82266310','https://rdcnewscdn.realtor.com/wp-content/uploads/2017/10/NuclearMap4.jpg', 'https://i.pinimg.com/564x/fe/ae/58/feae5891c70d3710a5d28a88b2be7a10.jpg'];
    
    let newArray;
    
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      newArray = a;
  }
    shuffle(images);

    return (
      <div id="Image">
        <ol>
          {newArray.map((img, index) => (
            <li key={index}>
              <img src={img} alt={img}></img>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;

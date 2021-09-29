
import './App.css';

function App() {
  let prodlist= [{
    name: "oneplus",
    price:"$400"
  },{
    name:"pixel",
    price:"$500"
  },{
    name:"iphone",
    price:"$600"
  }] 

  function importAll(r) {
    let images = {};
   
    r.keys().map((item, index) => { return(images[item.replace('./', '')] = r(item) )});
    
    return images;
  }
  
  const images = importAll(require.context('./productimg', false, /\.(png|jpe?g|svg)$/));

  return (

    prodlist.map((product,index)=>{
        let imgg= product.name+'.jpg';
      
        return(
       
          <div className={'card'} key={index}>
          <img src={images[imgg].default} style={{width:"100%"}} alt={prodlist.name} />
          <h2>{product.name.toUpperCase()}</h2>
          <p className={'price'} >{product.price}</p>
          </div>
          


        )
    })
  );
}

export default App;

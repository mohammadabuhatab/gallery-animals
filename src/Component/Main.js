import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component{
  render(){
      return(
        <>
        {
          data.map ((item,i)=>{
            return(
              <HornedBeast
              key={i}
              title={item.title}
              imgUrl={item.image_url}
              description={item.description}
              />
            )
          }

          )
        }
        </>
      )
  }
}
export default Main;
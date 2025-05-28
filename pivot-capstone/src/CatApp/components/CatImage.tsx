import React from 'react'

export default function CatImage(props) {
  return (
    <div style={{
        width: 100
    }}>
        {props.imageOfCat && <img
        src={props.imageOfCat}
        alt="default text"
        />}
    </div>
  )
    
}

import React from 'react'
import './button.css'
import {
  Link
} from "react-router-dom";

export default function Button({ name, onClick, width, height, navigate, data, size, marginLeft }) {
  return (
    <button className="button" style={{ width, height, marginLeft }} onClick={onClick}>
      {navigate !== undefined ?
        <Link className="link" to={`${navigate}`} state={{ data: data }}>
          <span className="text" style={{ fontSize: size }}>{name}</span> 
        </Link>
        : <span className="text" style={{ fontSize: size }}>{name}</span>
      }
    </button>
  )
}

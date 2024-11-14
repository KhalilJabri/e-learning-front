import React from 'react'

function Card({src, price, title}) {
  return (
    <div className='card'>
            <div className='card_container'>
                <div className='icon_container'>
                    <img className='icon' src={src} alt='video-icon' />
                </div>
                <p className='price'>{price}</p>
                <p className='title'>{title}</p>
            </div>
        </div>
  )
}

export default Card
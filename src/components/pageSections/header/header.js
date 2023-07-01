import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='header-logo' />
      <div className='header-right'>
        <div className='location-container'>
          <div className='location-wrapper'>
            <div className='location-icon'>
            <i className="fi fi-rr-marker absolute-center location-icon"></i>
            <div className='location-name'>Bangalore</div>
            </div>
            <i className="fi fi-rr-angle-down absolute-center"></i>
          </div>
          <div className='search-separator'></div>
          <div className='searchbar'>
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input placeholder='Search for Restuarant, cuisine and dish' className='search-input' />
          </div>
        </div>
        <div className='profile-wrapper'>
          <img src='https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A' alt='profile' className='header-profile-image'/>
          <span className='header-username'>Irfan</span>
          <i className="fi fi-rr-angle-down absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Header

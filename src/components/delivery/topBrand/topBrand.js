import React from 'react'
import './topBrand.css';
import NextArrow from '../../pageSections/carousel/nextArrow';
import PrevArrow from '../../pageSections/carousel/prevArrow';
import Slider from 'react-slick';


const topBrandList = [
  {
    id: 1,
    time: "27 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611376239.png"
  },
  {
    id: 2,
    time: "33 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/4d016eeff686a88becd56bba073f18cd_1605111085.png"
  },
  {
    id: 3,
    time: "30 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0619ae0b489d44dd3562538f7768e48a_1658818124.png"
  },
  {
    id: 4,
    time: "20 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d9218c866ad4910c515b30e1294638fd_1686544142.png"
  },
  {
    id: 5,
    time: "22 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/fe634dbf45e76fa00be2a35169aae1d2_1574162031.png"
  },
  {
    id: 6,
    time: "31 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/e47dec3eb2950cde399b62b48c5645f6_1675832511.png"
  },
  {
    id: 7,
    time: "36 min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d1694ebb9a346c1be51d062b29674323_1643449510.png"
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />, 
  prevArrow: <PrevArrow />,
};

const TopBrand = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((brand) => {
          return <div>
              <div className='top-brands-cover'>
              <img src={brand.cover} className='top-brand-image' alt={brand.title}/>
              </div>          
          </div>
        })}
      </Slider>
      
    </div>
  )
}

export default TopBrand

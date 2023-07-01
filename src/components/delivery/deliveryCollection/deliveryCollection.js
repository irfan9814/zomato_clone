import React from 'react'
import './deliveryCollection.css'
import NextArrow from '../../pageSections/carousel/nextArrow';
import PrevArrow from '../../pageSections/carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem/deliveryItem';

const deliveryItems =[
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id: 2,
        title: "Bidai",
        cover: "https://b.zmtcdn.com/data/dish_photos/c0a/02d1be99f403d1639db9f148c6675c0a.jpg",
    },
    {
        id: 3,
        title: "Idli",
        cover: "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
    },
    {
        id: 4,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
        id: 5,
        title: "Dosa",
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    },
    {
        id: 6,
        title: "Dhokla",
        cover: "https://b.zmtcdn.com/data/dish_photos/2b5/a7d9a93cfa8b6ec604f22de144d002b5.jpg",
    },
    {
        id: 7,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id: 8,
        title: "South Indian",
        cover: "https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png",
    },
    {
        id: 9,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
        id: 10,
        title: "Aloo Kachori",
        cover: "https://b.zmtcdn.com/data/dish_photos/224/42150320317358ff15330ddd0cc5d224.jpg",
    },
    {
        id: 11,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id: 12,
        title: "Jalebi",
        cover: "https://b.zmtcdn.com/data/o2_assets/348a8b7fdafc56ba233c77113e7e3a491632716601.png",
    }
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />,
  };

const DeliveryCollection = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Eat what make you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item) =>{
                    return <DeliveryItem item={item} />
                })}
            </Slider>
        </div>
      
    </div>
  )
}

export default DeliveryCollection

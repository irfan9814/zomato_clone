import React from 'react'
import './delivery.css'
import Filters from '../pageSections/filter/filter'
import DeliveryCollection from './deliveryCollection/deliveryCollection'
import TopBrand from './topBrand/topBrand'
import ExploreSection from '../pageSections/exploreSection/exploreSection'
import { restaurants } from '../../data/restuarant'


const deliveryFilter = [
  {
      id: 1,
      icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
  },
  {
      id: 2,
      title: "Rating: 4.0+",
  },
  {
      id: 3,
      title: "Pure Veg",
  },
  {
      id: 4,
      title: "Cuisine",
      icon: <i className="fi fi-rr-angle-down absolute-center"></i>
  },
];

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filtersList={deliveryFilter} />
      </div>
      <DeliveryCollection />
      <TopBrand />
      <ExploreSection list={restaurantsList} collectionName='Delivery Restuarants in Agra' /> 
    </div>
  )
}

export default Delivery

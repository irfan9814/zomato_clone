import React from 'react'
import './nightlife.css'
import { nightLife } from '../../data/dataNightLife';
import ExploreSection from '../pageSections/exploreSection/exploreSection';
import Filters from '../pageSections/filter/filter';

const nightFilter = [
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

const collectionList = [
  {
      id: 1,
      title: "6 Taj View Restaurants",
      cover: "https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png",
      places: "5 places",
  },
  {
      id: 2,
      title: "18 Best Luxury Dining Places",
      cover: "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg",
      places: "18 Place",
  },
  {
      id: 3,
      title: "6 Best Mughali Places",
      cover: "https://b.zmtcdn.com/data/collections/a33a75bb9ce00650cde613173fe9d2ee_1684740006.png",
      places: "6 Places",
  },
  {
      id: 4,
      title: "12 Blissful Breakfast Places",
      cover: "https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1684741472.jpg",
      places: "12 Places",
  },
  {
      id: 5,
      title: "14 Local Favourite Places",
      cover: "https://b.zmtcdn.com/data/collections/c3e8fb46e352ebb9d72c4f0cb5d27f39_1686042567.png",
      places: "14 Places",
  },
  {
      id: 6,
      title: "13 Serene Rooftop Places",
      cover: "https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1684741669.jpg",
      places: "13 Places",
  },
  {
      id: 7,
      title: "19 Great Cafes",
      cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1684741886.jpg",
      places: "19 Places",
  },
  {
      id: 8,
      title: "13 Best Bar and Pubs",
      cover: "	https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1684741284.jpg",
      places: "14 places",
  },
];

const nightList = nightLife;

const NightLife = () => {
  return (
    <div>
      <collection list = {collectionList} />
      <div className='max-width'>
        <Filters filterList={nightFilter} />
      </div>
      <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Agra" />
    </div>
  )
}

export default NightLife

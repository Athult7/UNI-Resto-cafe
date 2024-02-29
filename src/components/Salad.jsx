import React, { useEffect, useState } from 'react';
import veg from '../logo/veg.jpg';
import './Salad.css';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Salad = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("https://run.mocky.io/v3/f47694b8-4d45-4c30-aed0-dd82bb4025fb")
            .then((response) => {
                const salad = response.data.data[0].table_menu_list.find(category => category.menu_category === "Salads and Soup")
                if (salad) {
                    setData(salad.category_dishes);
                }
                else {
                    setData([]);
                }
            })




    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                {data.map((value, index) => (
                                    <div class="card mb-3">
                                        <div class="row g-0">

                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h2 class="card-title">{value.dish_name}</h2>
                                                    <p> SAR {value.dish_price}</p>
                                                    <p class="card-text">{value.dish_description}</p>

                                                    

                                                </div>
                                            </div>

                                            <div class="col-md-2"><br/> <br/>
                                                <p> calories {value.dish_calories}</p>
                                            </div>

                                            <div class="col-md-2">
                                                <img
                                                    id='dish'

                                                    src={value.dish_image} class="img-fluid rounded-start" alt="..." />
                                            </div>
                                            {value.addonCat.length >0?<Link to="#">Customization available</Link>:""}
                                           {
                                            value.dish_Availability? <div className='left'>
                                            <div className="quantity">
                                                <button className="minus">-</button>
                                                <input
                                                    type="text"
                                                    className="input-number"
                                                    value="1"
                                                    min="0"
                                                    max="10"
                                                />
                                                <button className="plus">+</button>
                                            </div>
                                        </div>:"not availble"
                                           }

                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Salad;

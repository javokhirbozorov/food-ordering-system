import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoodReducer } from "../actions/foodActions";
import Food from "../components/Food";
import Loading from "../components/Loading";
import Error from "../components/Error";


export default function Menu() {
    const dispatch = useDispatch()

    const foodState = useSelector(state => state.getAllFoodReducer)
    const { menu, error, loading } = foodState

    useEffect(() => {
        dispatch(getAllFoodReducer())
    }, [])

    return (
        <div>
            <h1>Menu</h1>
            {loading ? (<Loading/>)
                : error ? (<Error/>) :
                    <div className="menu">


                        {
                            menu.map(food => {

                                return <div key={food._id}>
                                    <Food food={food} key={food._id} />
                                </div>
                            })
                        }
                    </div>
            }

        </div>
    )
}

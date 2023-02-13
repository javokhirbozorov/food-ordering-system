import React from "react";
import Food from "../components/Food";
import menuData  from "../menuData"

export default function Menu(){
    return(
        <>
        <h1>Menu</h1>
        <div className="menu">
   

        {
            menuData.map(food => {

                return <div>
                    <Food food = {food}/>
                </div>
            })
        }
    </div>
    </>
    )
}

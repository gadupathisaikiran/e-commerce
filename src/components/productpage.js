import React, { useEffect, useState } from 'react'
import '../App.css';
import Popup from './popup';



import 'bootstrap/dist/css/bootstrap.min.css';

export default function Productpage(props) {


    let setdisplay = props.display

    const [data, setdata] = useState()

    const [disdata, setdisdata] = useState("")

    const [select, setselect] = useState("")

    const [index, setindex] = useState(0)

    useEffect(() => {

        async function product() {

            await fetch('https://dummyjson.com/products/?limit=100')
                .then(res => res.json())
                .then(data => setdata(data.products));


        }

        product()

    }, [])

    function pagechange() {

        let i = index + 1

        setindex(i)
    }
    function beforepage() {

        let i = index - 1

        setindex(i)
    }




    return (

        <>
            <div style={{ justifyContent: "center", width: "1400px", alignContent: "center" }}>






                <h1 style={{ backgroundColor: "rgb(101, 228, 152)", textAlign: "center", width: "100%" }}>Available Products</h1>

                <select onChange={(e) => { setselect(e.target.value) }} style={{ width: "20%", height: "3%", fontSize: "22px" }}>



                    <option>select</option>


                    {data ?
                        data.map(data => {
                            let map = new Map()



                            if (!map.has(data.category)) {
                                map.set(data.category)

                                return (
                                    <option value={data.category}>
                                        {data.category}
                                    </option>
                                )


                            }

                        }

                        )
                        : ""}

                </select>



                {
                    disdata !== "" &&




                    <div style={{ display: "inline", width: "50%", height: "400px", textAlign: "center", marginLeft: "20%" }}>

                        <Popup disdata={disdata} display={setdisdata} />



                    </div>



                }





                <div className='product-div' style={{ position: "absolute" }}>
                    {
                        data ?
                            data.map(data => {
                                if (data.category == select) {
                                    return (
                                        <div className='product-card'>


                                            <img style={{ height: "100%", width: "80%" }} src={data.images[0]} alt="img" onClick={() => { setdisdata(data) }}></img>







                                        </div>
                                    )

                                }
                                else {
                                    <h1>please select</h1>
                                }
                            })
                            : ""}




                    <div style={{ textAlign: "center" }}>
                        <button style={{ display: "inline", margin: "5px" }} onClick={() => { beforepage() }}>Previour</button>

                        <h2 style={{ display: "inline", margin: "5px" }}>{index > 0 ? index : "1"}</h2>

                        <button style={{ display: "inline", margin: "5px" }} onClick={() => { pagechange() }}>Next</button>
                    </div>



                </div>






            </div>




        </>


    )
}

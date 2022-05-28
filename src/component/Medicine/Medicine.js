import React from 'react';

function Medicine(props) {
    const orgData = [

        {

            id: 101,

            name: 'Abacavir',

            quantity: 25,

            price: 150,

            expiry: 2022

        },

        {

            id: 102,

            name: 'Eltrombopag',

            quantity: 90,

            price: 550,

            expiry: 2021

        },

        {

            id: 103,

            name: 'Meloxicam',

            quantity: 85,

            price: 450,

            expiry: 2025

        },

        {

            id: 104,

            name: 'Allopurinol',

            quantity: 50,

            price: 600,

            expiry: 2023

        },

        {

            id: 105,

            name: 'Phenytoin',

            quantity: 63,

            price: 250,

            expiry: 2021

        },

    ]
    // console.log(orgData);
    // let [id1] = data;
    // console.log(id1);


    // console.log(data.map((i) => { return i }));

    let ans = orgData.reduce((acc, d, i) => acc + d.price, 0);

    return (
        <>
            <h4 className='text-center'>Medicine</h4>
            <table border = "1" key={orgData}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Expiry</th>
                    <th>Total-Price</th>
                </tr>
                <tbody>
                    {
                        orgData.map((orgData, index) => {
                            return (
                                <tr>
                                    <td>{orgData.id}</td>
                                    <td>{orgData.name}</td>
                                    <td>{orgData.quantity}</td>
                                    <td>{orgData.price}</td>
                                    <td>{orgData.expiry}</td>
                                    {index === 4 ? <td rowSpan={orgData.length = "5"} > {ans} </td> : null}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Medicine;
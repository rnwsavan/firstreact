import React from 'react';

function Form_1({data}) {
    return (
        <>
            {
                data.map((d, i) =>
                // <div className={d.expiry ? 'abc' : 'jgg'}>
                    <div className="col-lg-4 mb-3">
                        <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt/>
                            </div>
                            <div className="member-info">
                                {/* {
                                    d.expiry ? ch : null
                                } */}
                                <h4>{d.id}</h4>
                                <span>{d.name}</span>
                                <p className="m-0">quantity: {d.quantity}</p>
                                <p className="m-0">Salary: {d.price}</p>
                                <p className="m-0">Experience: {d.quantity}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Form_1;
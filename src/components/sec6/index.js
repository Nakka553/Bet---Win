import React from "react";

function Sec6(){
    return(
        <div>
            <section className="section-team style-1" id="team">
        <div className="text mt-5 text-center text-white">
            <h1>Our Team</h1><br/>
            <p>With help from our teams, contributors and investors these are the <br />
                milestones we are looking forward to achieve.</p>
        </div><br />
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="card" style={{height: "25rem;"}}>
                        <img className="card-img-top" src="./assets/img/ceo.jpeg" alt="Card image cap"/>
                        <div className="card-body text-center">
                            <h2>Badreddine SLIME</h2>
                            <p className="card-text">CEO & Founder</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="card" style={{height: "25rem;"}} >
                        <img className="card-img-top" src="./assets/img/kiransir.jpg" alt="Card image cap"/>
                        <div className="card-body text-center mt-2">
                            <h1>Kiran PVS</h1>
                            <p className="card-text">Technical Architect</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="card" style={{height: "25rem;"}}>
                        <img className="card-img-top" src="./assets/img/Alicia.jpeg" alt="Card image cap"/>
                        <div className="card-body text-center">
                            <h1>Alicia F</h1>
                            <p className="card-text">Marketing Manager</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card cardhover" style={{height:" 25rem"}}>
                        <img className="card-img-top" src="./assets/img/Carlitos.jpeg" alt="Card image cap"/>
                        <div className="card-body text-center">
                            <h1>Carlitos R</h1>
                            <p className=" cadrColor">Marketing Content Creator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
    )
}
export default Sec6;
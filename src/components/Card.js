import React from "react";
import dai from "../images/dai.png"
import "./styles/Card.scss"
import { Button } from 'react-bootstrap';

function Card() {
    return (
        <div className="card mx-auto Dai-Card">
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img width="20" height="20" src={dai} className="float-right" />
                    </div>
                    <div className="col-6 Dai-Card-Info">
                        <h1>Titulo en h1</h1>
                        <p>Parrafo dentro de class/card</p>
                    </div>
                </div>
                <Button size="lg">
                    Show Message
                </Button>
            </div>
        </div>
    )
}
export default Card;
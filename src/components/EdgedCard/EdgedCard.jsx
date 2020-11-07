import React from "react";
import { Card } from "react-bootstrap";
import "./EdgedCard.scss";

const EdgedCard = (props) => {
    return (
        <article className="card-parent">
            <Card
                bg="primary"
                text="info"
                style={{
                    width: "18rem"
                }}
            >
                {props.children}
            </Card>
        </article>
    );
};

export default EdgedCard;

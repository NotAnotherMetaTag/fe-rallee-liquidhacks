import React from "react";
import { Card } from "react-bootstrap";
import "./EdgedCard.scss";

const EdgedCard = (props) => {
    return (
        <article
            className={`card-parent ${props.growOnHover ? "card-grow" : ""}`}
        >
            <Card
                bg="primary"
                text="info"
                style={{
                    width: `${props.width}`,
                    margin: "0 auto"
                }}
            >
                {props.children}
            </Card>
        </article>
    );
};

EdgedCard.defaultProps = {
    width: "100%",
    growOnHover: false
};

export default EdgedCard;

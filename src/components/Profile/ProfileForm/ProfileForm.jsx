import React from "react";
import { Form } from "react-bootstrap";

import EdgedCard from "../../EdgedCard";
import FormDivider from "../../FormDivider";

function ProfileForm() {
    return (
        <EdgedCard width="100%">
            <div style={{ padding: "0 0.5rem" }}>
                <h2>Username</h2>
                <FormDivider />
            </div>
        </EdgedCard>
    );
}

export default ProfileForm;

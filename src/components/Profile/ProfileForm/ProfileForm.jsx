import React from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

import EdgedCard from "../../EdgedCard";
import FormDivider from "../../FormDivider";
import PersonalProfile from "./PersonalProfile";
import GameProfiles from "./GameProfiles";

function ProfileForm() {
    return (
        <EdgedCard width="60%">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                    style={{
                        maxWidth: "1100px",
                        width: "100%",
                        padding: "1rem 4rem"
                    }}
                >
                    <h2>$$$Username</h2>

                    <FormDivider />

                    <h3>Personal Profile</h3>
                    <PersonalProfile />

                    <FormDivider />

                    <h3>Game Profiles</h3>
                    <GameProfiles />
                </div>
            </div>
        </EdgedCard>
    );
}

export default ProfileForm;

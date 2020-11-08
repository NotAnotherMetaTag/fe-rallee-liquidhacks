import React from "react";
import "./FilterBar.scss";
import TimeZones from "./TimeZones.json";

const FilterBar = () => {
    return (
        <aside className="bar" style={{ width: "100%" }}>
            <div className="header">Search Filters</div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Game</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option value="lol">League of Legends</option>
                    <option value="dota">Dota 2</option>
                    <option value="val">Valorant</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Language</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option value="english">English</option>
                    <option value="mandarin">Mandarin Chinese</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="arabic">Arabic</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Max Rank</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Immortal</option>
                    <option>Divine</option>
                    <option>Ancient</option>
                    <option>Legend</option>
                    <option>Archon</option>
                    <option>Crusader</option>
                    <option>Guardian</option>
                    <option>Herald</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Min Rank</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Herald</option>
                    <option>Guardian</option>
                    <option>Crusader</option>
                    <option>Archon</option>
                    <option>Legend</option>
                    <option>Ancient</option>
                    <option>Divine</option>
                    <option>Immortal</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Time Zone</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    {TimeZones.tzInts.map((zone, i) => {
                        return (
                            <option key={i} value={zone.value}>
                                {zone.label}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                />
                <label class="form-check-label" for="exampleRadios1">
                    Casual
                </label>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                />
                <label class="form-check-label" for="exampleRadios2">
                    Competitive
                </label>
            </div>
        </aside>
    );
};

export default FilterBar;

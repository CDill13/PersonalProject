import React, {Component} from "react";
import "./profile.css";
import {updateMembership} from "../../../reducks/reducer";
import {connect} from "react-redux";
import axios from "axios";
import swal from "sweetalert";

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            date_created: "",
            name: "",
            phone_home: "",
            phone_cell: "",
            email: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            abana_bool: "",
            abana_num: "",
            referred_by: ""
        }
    }

    checkForSession(){
        console.log(this.session)
    }

    create_id(prop, input){
        this.setState({
            [prop]: input.target.value
        })
    }

    saveMembershipInfo(){
        if(this.state.name !== "" && 
        (this.state.phone_cell !== "" || this.state.phone_home !== "") && 
        ((this.state.address !== "" && this.state.city !== "" && this.state.state !== "" && this.state.zip !== "") || (this.state.email !== "" && this.state.email.includes("@")))){
            swal({
                title: "Is all of this correct?",
                text: `Name: ${this.state.name}
                Home Phone: ${this.state.phone_home}
                Cell Phone: ${this.state.phone_cell}
                Email: ${this.state.email}
                Street address: ${this.state.address}
                City: ${this.state.city}
                State: ${this.state.state}
                ABANA # ${this.state.abana_num}`,
                buttons: {
                    cancel: "EDIT",
                    ok: {
                        text: "SAVE CHANGES",
                        value: "Ok",
                    }
                }
            })
            .then((value) => {
                switch (value) {
                    default: 
                        break;
                    case "Ok":
                    axios.put("/api/update_membership/:id", {
                        date_created: this.state.date_created,
                        name: this.state.name,
                        phone_home: this.state.phone_home,
                        phone_cell: this.state.phone_cell,
                        email: this.state.email,
                        address: this.state.address,
                        city: this.state.city,
                        state: this.state.state,
                        zip: this.state.zip,
                        abana_bool: this.state.abana_bool,
                        abana_num: this.state.abana_num,
                        referred_by: this.state.referred_by
                    })
                }
            })
        }else {
            swal("Missing some required Info.", "Please fill out the required fields", "error");
        }
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <h1>Profile</h1>
               <div className="home-title-container">
                    <p>GBBG MEMBERSHIP</p>
                </div>
                <div className="member-form" >
                    <p></p>
                    Date Created: <input onChange={(e) => this.create_id("date_created", e)} placeholder="MM/DD/YYYY" type="date" maxLength="10" />

                    <p></p>
                    Name: <input onChange={(e) => this.create_id("name", e)} placeholder="Your name" type="text" maxLength="80" />

                    <p></p>
                    Home Phone: <input onChange={(e) => this.create_id("phone_home", e)} placeholder="(000) 000-0000" type="tel" maxLength="15" />
                    <p></p>
                    Cell Phone: <input onChange={(e) => this.create_id("phone_cell", e)} placeholder="(000) 000-0000" type="tel" maxLength="15" />
                    <p></p>
                    Email: <input onChange={(e) => this.create_id("email", e)} placeholder="your.email@something.com" type="email" maxLength="64" />

                    <p></p>
                    Address: <input onChange={(e) => this.create_id("address", e)} placeholder="1234 Street Name" type="text" maxLength="128" />

                    <p></p>
                    City: <input onChange={(e) => this.create_id("city", e)} placeholder="City Name" type="text" maxLength="64" />
                    <p></p>
                    State: <input onChange={(e) => this.create_id("state", e)} placeholder="ST" type="text" maxLength="2" />
                    <p></p>                            
                    Zip: <input onChange={(e) => this.create_id("zip", e)} placeholder="55555" type="text" maxLength="15" />

                    <p></p>
                    Are you an ABANA member?: <select onChange={(e) => this.create_id("abana_bool", e)}>
                        <option defaultValue="NO" >NO</option>
                        <option value="YES" >YES</option>
                    </select> 

                    <p></p>
                    ABANA #: <input onChange={(e) => this.create_id("abana_num", e)} placeholder="ABANA #" type="text" maxLength="32" /> 

                    <p></p>
                    Are you an ABANA member?: <select onChange={(e) => this.create_id("referred_by", e)}>
                        <option value="Referred by Member" >Referred by Member</option>
                        <option value="Internet Search" >Internet Search</option>
                        <option value="Flyer" >Flyer</option>
                        <option value="ABANA Newsletter" >ABANA Newsletter</option>
                        <option value="Other">Other</option>
                    </select> 
                </div>
                <button onClick={() => this.saveMembershipInfo()} >SUBMIT</button>
                <button onClick={() => this.checkForSession()} >CHECK FOR SESSION</button>
            </div>

        )
    }
}

function mapStateToProps(membershipState){
    const {date_created, name, phone_home, phone_cell, email, address, city, state, zip, abana_bool, abana_num, referred_by} = membershipState;
    return {
        date_created,
        name,
        phone_home,
        phone_cell,
        email,
        address,
        city,
        state,
        zip,
        abana_bool,
        abana_num,
        referred_by
    };
}

export default connect(mapStateToProps, {updateMembership})(Profile);
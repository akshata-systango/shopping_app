import React from 'react';
import { Link } from 'react-router-dom';
import './Refferal.css';

const Refferal = () => {

    const InstallButtonHandler = () =>{
        <Link to="/newPage"/>
    };
    return (
        <React.Fragment>
            <div className="ractangle">
                <p className="inviteLine">Invite Friends To Friends Festival And Get Up To $150 Bonus For Every Referral  </p>
                <button type="button" className="inviteNow" onClick={InstallButtonHandler}>Install  now</button>
            </div>
        </React.Fragment>
    )
}

export default Refferal;


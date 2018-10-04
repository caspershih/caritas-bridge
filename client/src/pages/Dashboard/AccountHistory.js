import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";
import AddDonation from "../../components/AddDonation";

const AccountHistory = () => (
    <div className="dashWrap">
    <UserLogout />
    <div className="dashRow">
        <div className="dashTop">
            <h3>User Dashboard</h3>
            <div className="userName">Welcome User Name!</div>
        </div>
    </div>

<div className="dashRow">
<div className="leftColumn">
    <UserNav />
</div>
<div className="rightColumn">

<div className="resultsDiv">

    <div className="messageCenterTop">
    <h2>Account History</h2>
    <AddDonation />
    </div>

    <div className="accountBalance">
    <p className="balanceText">Current Account Balance: </p>
    <p className="balanceText">$1000.00 </p>
    </div>
    
<nav>
<div className="nav nav-tabs" id="nav-tab" role="tablist">
<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-received" role="tab" aria-controls="nav-received" aria-selected="true">Pending Donations</a>
<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-sent" role="tab" aria-controls="nav-sent" aria-selected="false">Past Donations</a>

</div>
</nav>
<div className="tab-content" id="nav-tabContent">
<div className="tab-pane fade show active" id="nav-received" role="tabpanel" aria-labelledby="nav-received-tab">

            <table className="table">
                    <thead>
                    <tr>
                        <th className="messageCenter">DATE RECEIVED</th>
                        <th className="messageCenter">DONATION AMOUNT</th>
                        <th className="messageCenter">CHARITY ORGANIZATION</th>
                        <th className="messageCenter centerTD">ACCOUNT BALANCE</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="TRhover">
                        <td>09/15/2018</td>
                        <td>$150.00</td>
                        <td>The Jane Goodall Institute</td>
                        <td className="centerTD">$1000.00</td>
                    </tr>
                    <tr className="TRhover">
                        <td>09/12/2018</td>
                        <td>$50.00</td>
                        <td>The Climate Reality Project</td>
                        <td className="centerTD">$1150.00</td>
                    </tr>
                    <tr className="TRhover">
                        <td>09/08/2018</td>
                        <td>$200.00</td>
                        <td>UNICEF</td>
                        <td className="centerTD">$1350.00</td>
                    </tr>
                    <tr className="TRhover">
                        <td>09/06/2018</td>
                        <td>$100.00</td>
                        <td>National Alliance to End Homelessness</td>
                        <td className="centerTD">$1450.00</td>
                    </tr>
                    </tbody>
            </table>

            </div>
<div className="tab-pane fade" id="nav-sent" role="tabpanel" aria-labelledby="nav-sent-tab">
                <table className="table">
                    <thead>
                    <tr>
                        <th className="messageCenter">DATE SENT</th>
                        <th className="messageCenter">CHARITY ORGANIZATION</th>
                        <th className="messageCenter">DONATED AMOUNT</th>
                        <th className="messageCenter centerTD">TOTAL AMOUNT DONATED</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="TRhover">
                        <td>08/15/2018</td>
                        <td>Gary Sinise Foundation</td>
                        <td>$150.00</td>
                        <td className="centerTD">$250.00</td>
                    </tr>
                    <tr className="TRhover">
                        <td>07/12/2018</td>
                        <td>World Wildlife Fund</td>
                        <td>$80.00</td>
                        <td className="centerTD">$300.00</td>
                    </tr>
                    <tr className="TRhover">
                        <td>06/08/2018</td>
                        <td>Rainforest Partnership</td>
                        <td>$100.00</td>
                        <td className="centerTD">$500.00</td>
                    </tr>
                    <tr className="TRhover">
                        <td>05/06/2018</td>
                        <td>Coral Reef Alliance</td>
                        <td>$50.00</td>
                        <td className="centerTD">$800.00</td>
                    </tr>
                    </tbody>
            </table>

</div>
</div>
       
    </div>
</div>
</div>
</div>

);

export default AccountHistory;
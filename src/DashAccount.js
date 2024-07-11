import BasicModal from './VerificationStep1';
import Account from './Accounts';
import React, { useState } from "react";


function DashAccount() {
    return (
        <div className="">
        <body>
              <div>
                <div style={{paddingLeft:'32px'}}>
                  <h3>
                    Account List
                  </h3>
                  <BasicModal>
  
                  </BasicModal>
  
                </div>
                  <div style={{paddingRight:'38px'}}>
                    <Account></Account>
                  </div>
              </div>
        </body>
      </div>
      );
    }

export default DashAccount;
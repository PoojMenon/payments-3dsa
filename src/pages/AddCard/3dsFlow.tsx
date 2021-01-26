import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const [twoFa, setTwoFa] = useState("");
  const history = useHistory();

  useEffect(() => {
    alert("Your bank code is 781256.");
  }, []);

  return (
    <div>
      <img src="https://www.logodesign.net/logo/piggy-bank-merged-with-a-bank-building-4574ld.png?size=2&industry=bank&bg=0" />
      <div>
        <label htmlFor="">
          Please enter the one-time token you received to verify your payment.
        </label>
      </div>
      <div>
        <input
          type="text"
          value={twoFa}
          onChange={(e) => setTwoFa(e.target.value)}
        />
      </div>
      <div>
        <input
          style={{ marginTop: 10 }}
          type="submit"
          onClick={() => {
            if (twoFa === "781256") {
              setTimeout(() => {
                history.push("/payment-methods-added");
              }, 2400);
            }
          }}
        />
      </div>
    </div>
  );
};

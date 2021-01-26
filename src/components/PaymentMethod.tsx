import React, { useEffect, useState } from "react";
import { useUIDSeed } from "@twilio-paste/core/uid-library";
import { Box } from "@twilio-paste/box";
import { Label } from "@twilio-paste/label";
import { Input, HelpText } from "@twilio-paste/core";
// import { Select, Option } from "@twilio-paste/core/select";
import { Button } from "@twilio-paste/button";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { Link, useHistory } from "react-router-dom";
import { Stack } from "@twilio-paste/core";

export const PaymentMethod = ({ fundAmount, source }) => {
  // const [inputValue, setInputValue] = React.useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [ccName, setCCName] = React.useState("");
  const [ccNameError, setCCNameError] = useState("");

  const [cardNumber, setCardNumber] = React.useState("");
  const [ccNumberError, setCCNumberError] = useState("");

  // const [inputValue3, setInputValue3] = React.useState("");
  const [expDate, setExpDate] = React.useState("");
  const [ccExpiryError, setCCExpiryError] = useState("");

  const [ccCVV, setCCCVV] = useState("");
  const [ccCVVError, setCCCVVError] = useState("");

  const router = useHistory();

  useEffect(() => {
    if (formSubmitted) {
      if (!ccName) {
        setCCNameError("Please enter the cardholder name.");
      } else if (ccName.length < 3) {
        setCCNameError(
          "Cardholder name is too short. Must be a minimum of 3 characters."
        );
      } else {
        setCCNameError("");
      }

      if (!cardNumber) {
        setCCNumberError("Please enter a credit card number.");
      } else if (isNaN(cardNumber)) {
        setCCNumberError("Card number must be numbers only.");
      } else if (cardNumber.length < 16) {
        setCCNumberError(
          "Card number is too short. Must be a minimum of 16 characters."
        );
      } else {
        setCCNumberError("");
      }

      if (!expDate) {
        setCCExpiryError("Please enter the card expiry (MMYY).");
      } else if (expDate.length < 4) {
        setCCExpiryError("Card expiry is too short. Must be in MMYY format.");
      } else {
        setCCExpiryError("");
      }

      if (!ccCVV) {
        setCCCVVError("Please enter the card CVV number.");
      } else if (isNaN(ccCVV)) {
        setCCCVVError("Card CVV must be numbers only.");
      } else if (ccCVV.length < 3) {
        setCCCVVError(
          "Card expiry is too short. Must be a minimum of 3 characters."
        );
      } else {
        setCCCVVError("");
      }
    }
  }, [ccName, cardNumber, expDate, ccCVV, formSubmitted]);

  const inputID = useUIDSeed();

  const handleFormSubmit = () => {
    if (
      formSubmitted &&
      !ccNameError &&
      !ccNumberError &&
      !ccExpiryError &&
      !ccCVVError
    ) {
      // router.push("/add-funds");
      if (source === "addfunds") {
        router.push({
          pathname: "/add-funds",
          state: { cardNumber, expDate }
        });
      } else if (source === "upgrade") {
        router.push("/complete");
      }
    }
  };
  return (
    <Box as="form">
      <Box marginBottom="space60" maxWidth="size30">
        <Box marginBottom="space50" maxWidth="size30">
          <Label htmlFor={inputID("ccName")}>Name on credit card</Label>
          <Input
            id={inputID("ccName")}
            onChange={(e) => setCCName(e.currentTarget.value)}
            type="text"
            value={ccName}
            hasError={ccNameError ? true : false}
          />
          {ccNameError && (
            <HelpText id="email_error_help_text" variant="error">
              {ccNameError}
            </HelpText>
          )}
        </Box>
        <Box marginBottom="space50" maxWidth="size30">
          <Label htmlFor={inputID("cardNumber")}>Credit card number</Label>
          <Input
            id={inputID("cardNumber")}
            onChange={(e) => setCardNumber(e.currentTarget.value)}
            type="text"
            value={cardNumber}
            hasError={ccNumberError ? true : false}
          />
          {ccNumberError && (
            <HelpText id="email_error_help_text" variant="error">
              {ccNumberError}
            </HelpText>
          )}
        </Box>

        <Box marginBottom="space50">
          <Label htmlFor={inputID("input4")}>Expiry date</Label>
          <Box maxWidth="size10">
            <Input
              id={inputID("input4")}
              onChange={(e) => setExpDate(e.currentTarget.value)}
              type="text"
              value={expDate}
              hasError={ccExpiryError ? true : false}
            />
          </Box>
          {ccExpiryError ? (
            <HelpText variant="error">{ccExpiryError}</HelpText>
          ) : (
            <HelpText>Enter the expiry date in MMYY format</HelpText>
          )}
        </Box>

        <Box marginBottom="space50">
          <Label htmlFor={inputID("ccCVV")}>CVV</Label>
          <Box maxWidth="size10">
            <Input
              id={inputID("ccCVV")}
              onChange={(e) => setCCCVV(e.currentTarget.value)}
              type="text"
              value={ccCVV}
              hasError={ccCVVError ? true : false}
            />
          </Box>
          {ccCVVError ? (
            <HelpText variant="error">{ccCVVError}</HelpText>
          ) : (
            <HelpText>The last 3 numbers on the back of your card</HelpText>
          )}
        </Box>
      </Box>

      <Box marginBottom="space50">
        <CheckboxGroup
          name="billing address"
          legend="Is your billing address the same as your main address?"
        >
          <Checkbox checked id="billing" value="billing">
            Yes, my billing address is the same.
          </Checkbox>
        </CheckboxGroup>
      </Box>
      {source === "upgrade" && (
        <Box marginBottom="space50">
          <CheckboxGroup
            name="future payments"
            legend="Save this card for future payments?"
          >
            <Checkbox id="future" value="future">
              Yes, save these details.
            </Checkbox>
          </CheckboxGroup>
        </Box>
      )}
      <Stack orientation="horizontal" spacing="space60">
        {/* <Link
          to={{
            pathname: "/add-funds",
            state: { cardNumber, expDate }
          }}
        > */}
        <Button
          variant="primary"
          onClick={() => {
            setFormSubmitted(true);
            handleFormSubmit();
          }}
        >
          Add Credit Card
        </Button>
        {/* </Link> */}
      </Stack>
    </Box>
  );
};

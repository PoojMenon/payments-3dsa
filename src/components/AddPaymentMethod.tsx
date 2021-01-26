import React, { useEffect, useState } from "react";
import { useUIDSeed } from "@twilio-paste/core/uid-library";
import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Label } from "@twilio-paste/core/label";
import { Input } from "@twilio-paste/core/input";
// import { Select, Option } from "@twilio-paste/core/select";
import { Button } from "@twilio-paste/core/button";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
// import { Link } from "react-router-dom";
import { Stack } from "@twilio-paste/core";
import { HelpText } from "@twilio-paste/core/help-text";
import { Modal, ModalBody } from "@twilio-paste/core/modal";
import { Spinner } from "@twilio-paste/core/spinner";

import { Link, useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { ToastContext } from "../context/ToastContext";

export const AddPaymentMethod = ({ fundAmount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [ccName, setCCName] = useState("");
  const [ccNameError, setCCNameError] = useState("");

  const [ccNumber, setCCNumber] = useState("");
  const [ccNumberError, setCCNumberError] = useState("");

  const [ccExpiry, setCCExpiry] = useState("");
  const [ccExpiryError, setCCExpiryError] = useState("");

  const [ccCVV, setCCCVV] = useState("");
  const [ccCVVError, setCCCVVError] = useState("");

  const router = useHistory();

  useEffect(() => {
    if (!ccName) {
      setCCNameError("Please enter the cardholder name.");
    } else if (ccName.length < 3) {
      setCCNameError(
        "Cardholder name is too short. Must be a minimum of 3 characters."
      );
    } else {
      setCCNameError("");
    }

    if (!ccNumber) {
      setCCNumberError("Please enter a credit card number.");
    } else if (isNaN(ccNumber)) {
      setCCNumberError("Card number must be numbers only.");
    } else if (ccNumber.length < 16) {
      setCCNumberError(
        "Card number is too short. Must be a minimum of 16 characters."
      );
    } else {
      setCCNumberError("");
    }

    if (!ccExpiry) {
      setCCExpiryError("Please enter the card expiry date.");
    } else if (ccExpiry.length < 4) {
      setCCExpiryError(
        "Card expiry is too short. Must be a minimum of 4 characters."
      );
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
  }, [ccName, ccNumber, ccExpiry, ccCVV]);

  const handleFormSubmit = () => {
    if (!ccNameError && !ccNumberError && !ccExpiryError && !ccCVVError) {
      setIsOpen(true);
      setTimeout(() => {
        router.push("/threeds");
      }, 3750);
    } else {
      console.log("no redirect yet");
    }
  };

  const renderModal = () => (
    <Modal
      isOpen={isOpen}
      onDismiss={() => console.log("closing")}
      size="default"
    >
      <ModalBody>
        <h2>
          For additional security, we are redirecting you to your bank for
          authorisation.
        </h2>
        <p>
          This can take upto 30 seconds. Please do not close or refresh this
          page.
        </p>
        <div style={{ textAlign: "center" }}>
          <Spinner size="sizeIcon110" decorative={false} title="Loading" />
        </div>
      </ModalBody>
    </Modal>
  );

  return (
    // <Box as="form">
    <Box>
      {renderModal()}
      <Box marginBottom="space50" maxWidth="size30">
        <Label htmlFor={"ccName"}>Name on credit card</Label>
        <Input
          id={"ccName"}
          onChange={(e) => setCCName(e.currentTarget.value)}
          type="text"
          value={ccName}
        />
        {ccNameError && formSubmitted && (
          <HelpText id="email_error_help_text" variant="error">
            {ccNameError}
          </HelpText>
        )}
      </Box>
      <Box marginBottom="space50" maxWidth="size30">
        <Label htmlFor={"ccNumber"}>Credit card number</Label>
        <Input
          id={"ccNumber"}
          onChange={(e) => setCCNumber(e.currentTarget.value)}
          type="text"
          value={ccNumber}
        />
        {ccNumberError && formSubmitted && (
          <HelpText id="email_error_help_text" variant="error">
            {ccNumberError}
          </HelpText>
        )}
      </Box>

      <Box marginBottom="space50">
        <Label htmlFor={"ccExpiry"}>Expiry date</Label>
        <Box maxWidth="size10">
          <Input
            id={"ccExpiry"}
            onChange={(e) => setCCExpiry(e.currentTarget.value)}
            type="text"
            value={ccExpiry}
          />
        </Box>
        {ccExpiryError && formSubmitted ? (
          <HelpText variant="error">{ccExpiryError}</HelpText>
        ) : (
          <HelpText>MMYY</HelpText>
        )}
      </Box>

      <Box marginBottom="space50">
        <Label htmlFor={"ccCVV"}>CVV</Label>
        <Box maxWidth="size10">
          <Input
            id={"ccCVV"}
            onChange={(e) => setCCCVV(e.currentTarget.value)}
            type="text"
            value={ccCVV}
          />
        </Box>
        {ccCVVError && formSubmitted ? (
          <HelpText variant="error">{ccCVVError}</HelpText>
        ) : (
          <HelpText>The last 3 numbers on the back of your card</HelpText>
        )}
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

      <Stack orientation="horizontal" spacing="space60">
        <Button
          onClick={() => {
            setFormSubmitted(true);
            handleFormSubmit();
          }}
          variant="primary"
        >
          Add Credit card
        </Button>
      </Stack>
    </Box>
  );
};

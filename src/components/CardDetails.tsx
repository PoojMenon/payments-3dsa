import * as React from "react";
import { useUIDSeed } from "@twilio-paste/core/uid-library";
import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Label } from "@twilio-paste/core/label";
import { Input } from "@twilio-paste/core/input";
import { Button } from "@twilio-paste/core/button";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { Flex, Stack } from "@twilio-paste/core";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalFooterActions,
  ModalHeader,
  ModalHeading
} from "@twilio-paste/core/modal";
import { Paragraph } from "@twilio-paste/paragraph";
import { useHistory } from "react-router-dom";

export const CardDetails = () => {
  // const [inputValue, setInputValue] = React.useState("");
  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");
  // const [inputValue3, setInputValue3] = React.useState("");
  const [inputValue4, setInputValue4] = React.useState("");
  const [inputValue5, setInputValue5] = React.useState("");

  // Modal properties
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  // const modalHeadingID = useUID();
  const router = useHistory();
  const inputID = useUIDSeed();
  const handleFormSubmit = () => {
    router.push({
      pathname: "/card-edited"
    });
  };

  return (
    <Box as="form">
      <Box marginBottom="space50" maxWidth="size30">
        <Label htmlFor={inputID("input1")}>Name on credit card</Label>
        <Input
          id={inputID("input1")}
          onChange={(e) => setInputValue1(e.currentTarget.value)}
          type="text"
          value={inputValue1}
          placeholder="Joe Coulson"
        />
      </Box>
      <Box marginBottom="space50" maxWidth="size30">
        <Label htmlFor={inputID("input2")}>Credit card number</Label>
        <Input
          id={inputID("input2")}
          onChange={(e) => setInputValue2(e.currentTarget.value)}
          type="number"
          value={inputValue2}
          placeholder="**** **** **** 1111"
          disabled
        />
      </Box>

      <Box marginBottom="space50" maxWidth="size10">
        <Label htmlFor={inputID("input4")}>Expiry date</Label>
        <Input
          id={inputID("input4")}
          onChange={(e) => setInputValue4(e.currentTarget.value)}
          type="number"
          value={inputValue4}
          placeholder="01 / 21"
        />
      </Box>
      <Box marginBottom="space50" maxWidth="size10">
        <Label htmlFor={inputID("input5")}>CVV</Label>
        <Input
          id={inputID("input5")}
          onChange={(e) => setInputValue5(e.currentTarget.value)}
          type="number"
          value={inputValue5}
          placeholder="***"
        />
      </Box>
      <Box marginBottom="space50">
        <CheckboxGroup
          name="billing address"
          legend="Is your billing address the same as your company address?"
        >
          <Checkbox checked id="outlook" value="outlook">
            Yes, my billing address is the same.
          </Checkbox>
        </CheckboxGroup>
      </Box>

      <Stack orientation="horizontal" spacing="space200">
        <Button
          variant="primary"
          onClick={() => {
            handleFormSubmit();
          }}
        >
          Update details
        </Button>
        {/* <Button variant="secondary">Cancel</Button> */}
        <Button variant="destructive_secondary" onClick={handleOpen}>
          Delete this payment method
        </Button>
        <Modal isOpen={isOpen} onDismiss={handleClose} size="default">
          <ModalHeader>
            <ModalHeading as="h3">Delete payment method</ModalHeading>
          </ModalHeader>
          <ModalBody>
            <Paragraph>
              Are you sure you want to delete this payment method?
            </Paragraph>
          </ModalBody>
          <ModalFooter>
            <ModalFooterActions>
              <Button variant="secondary" onClick={handleClose}>
                No, take me back
              </Button>
              <Button variant="destructive">
                Yes, delete this payment method
              </Button>
            </ModalFooterActions>
          </ModalFooter>
        </Modal>
      </Stack>
    </Box>
  );
};

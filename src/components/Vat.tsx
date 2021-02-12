import * as React from "react";
import { useUIDSeed } from "@twilio-paste/core/uid-library";
import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Label } from "@twilio-paste/core/label";
import { Input } from "@twilio-paste/core/input";
import { Select, Option } from "@twilio-paste/core/select";
import { Button } from "@twilio-paste/core/button";
import { Link, useHistory } from "react-router-dom";
import { Heading } from "@twilio-paste/core/heading";
import { Stack } from "@twilio-paste/stack";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Anchor } from "@twilio-paste/core/anchor";
import { Radio, RadioGroup } from "@twilio-paste/radio-group";
import { HelpText } from "@twilio-paste/core";

export const Vat = ({ fundAmount }) => {
  const [formSubmitted, setIsSubmitted] = React.useState(false);
  const [taxValueError, setTaxValueError] = React.useState("");
  const [taxValue, setTaxValue] = React.useState("");
  const [isTaxVisible, setIsTaxVisible] = React.useState(false);
  const [value, setValue] = React.useState("");

  const history = useHistory();

  const handleForm = () => {
    setIsSubmitted(true);
    if (isTaxVisible && !taxValue) {
      setTaxValueError("Please enter a tax number.");
    } else if (isTaxVisible && taxValue) {
      setTaxValueError("");
      history.push("/add-funds-upg");
    } else {
      history.push("/add-funds-upg");
    }
  };

  return (
    <Stack orientation="vertical" spacing="space40">
      <RadioGroup
        name="tax"
        value={value}
        legend="Can you provide a business tax number?"
        onChange={(newValue) => {
          setValue(newValue);
          setIsTaxVisible(newValue === "yes" ? true : false);
        }}
      >
        {/* <Anchor
          href="https://support.twilio.com/hc/en-us/articles/360036082174-How-Does-Twilio-Validate-my-Tax-ID-"
          showExternal
        >
          Learn more
        </Anchor> */}
        <Radio
          id="yes"
          value="yes"
          name="tax"
          // onChange={(event) => {
          //   setIsTaxVisible(event.target.checked);
          // }}
        >
          Yes, I can provide a tax number
        </Radio>
        {isTaxVisible && (
          <Box>
            <Box marginLeft="space80" maxWidth="size30">
              <Input
                onChange={(e) => {
                  setTaxValue(e.target.value);
                }}
                value={taxValue}
                hasError={taxValueError ? true : false}
              />
            </Box>
            <Box marginLeft="space80">
              {taxValueError ? (
                <HelpText variant="error">{taxValueError}</HelpText>
              ) : (
                <HelpText>
                  Please enter a valid VAT, GST or other tax identification
                  number.
                </HelpText>
              )}
            </Box>
          </Box>
        )}
        <Radio id="no" value="no" name="tax">
          No, I cannot provide a tax number
        </Radio>
      </RadioGroup>

      <Stack orientation="horizontal" spacing="space40">
        <Button
          variant="primary"
          onClick={() => {
            handleForm();
          }}
        >
          Continue
        </Button>
        <Anchor href="#">Back</Anchor>
      </Stack>
    </Stack>
  );
};

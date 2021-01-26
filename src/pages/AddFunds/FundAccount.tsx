import React, { useState, useEffect } from "react";
// import { useUID } from "@twilio-paste/core/uid-library";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@twilio-paste/tabs";
import { Button } from "@twilio-paste/button";
import { Input, Label, HelpText, UnorderedList } from "@twilio-paste/core";
import { Checkbox } from "@twilio-paste/checkbox";
import AutoRecharge from "../components/AutoRecharge";
import { Link } from "react-router-dom";
import { Combobox } from "@twilio-paste/combobox";
import { Anchor } from "@twilio-paste/anchor";
import { Flex } from "@twilio-paste/flex";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { useHistory, useLocation } from "react-router-dom";

const FundAccount = (props) => {
  let location = useLocation();
  console.log(location.state);
  const [ccNumber] = useState(location.state ? location.state.cardNumber : 0);
  const ccEnd = ccNumber.toString().slice(-4);
  const [expDate] = useState(location.state ? location.state.expDate : 0);
  const cardDetail = location.state
    ? `Visa ending ${ccEnd} (Exp. ${expDate})`
    : "";
  console.log(cardDetail);

  const [cardDetails, setcardDetails] = useState(cardDetail);
  const [fundAmount, setFundAmount] = useState("20");
  const cards = [
    "Visa ending in 1111 (Exp. 03/30)",
    "Mastercard ending in 4444 (Exp. 03/30)",
    "Paypal (joe.coulson@gmail.com)"
  ];
  if (location.state) {
    cards.push(cardDetail);
  }

  return (
    <>
      <Box as="div">
        <Flex vAlignContent="center">
          <Box as="div">
            <ArrowBackIcon
              decorative={true}
              title="Back"
              size="sizeIcon40"
              color="colorTextLink"
            />
          </Box>
          <Box as="div">
            <Anchor href="/">{"Back to Billing Overview"}</Anchor>
          </Box>
        </Flex>
      </Box>
      <Heading as="h1" variant="heading10">
        Fund your account
      </Heading>
      <Tabs selectedId={"payment"} baseId="horizontal-tabs-example">
        <TabList aria-label="My tabs">
          <Tab id={"payment"}>Payment</Tab>
          <Tab id={"promo-code"}>Promo code</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id={"payment"}>
            <Stack orientation="vertical" spacing="space60">
              <Text
                as="h5"
                fontSize="fontSize30"
                marginBottom="space30"
                color="colorText"
              >
                How much would you like to add to your account balance?
              </Text>
              <Box>
                <Label htmlFor="payment_amount">Payment Amount</Label>
                <Box maxWidth="size20">
                  <Input
                    value={fundAmount}
                    aria-describedby="payment_amount_help_text"
                    id="payment_amount"
                    name="payment_amount"
                    type="number"
                    placeholder="20"
                    insertBefore={<div>$</div>}
                    onChange={(event) => {
                      setFundAmount(event.currentTarget.value);
                    }}
                    required
                  />
                </Box>
                <HelpText id="foo_text">
                  Enter an amount between $20 and $2,000
                </HelpText>
              </Box>
              <Box maxWidth="size40">
                <Combobox
                  items={cards}
                  labelText="Payment method"
                  inputValue={cardDetails}
                  onInputValueChange={(event) => {
                    setcardDetails(event.inputValue);
                  }}
                />
              </Box>
              {/* <Anchor href="/add-payment-method" showExternal>
                Add a new payment method
              </Anchor> */}
              <Box display="flex" alignItems="center">
                <Box as="div">
                  <PlusIcon
                    decorative={true}
                    title="add payment method"
                    size="sizeIcon30"
                    color="colorTextLink"
                  />
                </Box>
                <Box>
                  <Anchor href="/add-payment-method">
                    Add a new payment method
                  </Anchor>
                </Box>
              </Box>
              <Link
                to={{
                  pathname: "/funds-added",
                  state: { fundAmount }
                }}
              >
                <Button variant="primary">
                  {fundAmount
                    ? `Add $${fundAmount} to my balance`
                    : "Add to my balance"}
                </Button>
              </Link>
            </Stack>
          </TabPanel>
          <TabPanel id={"promo-code"}>
            <Stack orientation="vertical" spacing="space60">
              <Text
                as="h5"
                fontSize="fontSize30"
                marginBottom="space30"
                color="colorText"
              >
                Enter your promo code
              </Text>

              <Box paddingBottom="space60" maxWidth="size40">
                <Label htmlFor="payment_amount" required>
                  Promo code
                </Label>

                <Input
                  value="321"
                  aria-describedby="payment_amount_help_text"
                  id="payment_amount"
                  name="payment_amount"
                  type="number"
                  placeholder="ABC"
                  onChange={() => console.log("input clicked")}
                  required
                />
                <HelpText id="payment_amount_help_text">
                  Enter a valid promo code.
                </HelpText>
              </Box>

              <Link
                to={{
                  pathname: "/add-payment-method",
                  search: "?sort=name",
                  hash: "#the-hash",
                  state: { fromDashboard: true }
                }}
              >
                <Button variant="primary">Continue</Button>
              </Link>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default FundAccount;

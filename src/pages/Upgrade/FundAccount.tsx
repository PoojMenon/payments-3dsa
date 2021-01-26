import React, { useState, useEffect } from "react";
// import { useUID } from "@twilio-paste/core/uid-library";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/core/text";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@twilio-paste/tabs";
import { Button } from "@twilio-paste/button";
import { Input, Label, HelpText } from "@twilio-paste/core";
import { Checkbox } from "@twilio-paste/checkbox";
import AutoRecharge from "../../components/AutoRecharge";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { Flex } from "@twilio-paste/flex";
import { Anchor } from "@twilio-paste/core/anchor";

const FundAccount = () => {
  const [fundAmount, setFundAmount] = useState("20");
  const [isAutoRechargeVisible, setIsAutoRechargeVisible] = useState(false);

  // useEffect(() => {
  //   console.log("Fund amount has changed", fundAmount);
  // }, [fundAmount]);

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
            <Anchor href="/tax">{"Back to Tax"}</Anchor>
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
                How much would you like to start your account balance with?
              </Text>
              <Box as="form">
                <Label htmlFor="payment_amount">Payment Amount</Label>

                <Box maxWidth="size20">
                  <Input
                    value={fundAmount}
                    aria-describedby="payment_amount_help_text"
                    id="payment_amount"
                    name="payment_amount"
                    type="number"
                    placeholder=""
                    insertBefore={<div>$</div>}
                    onChange={(event) => {
                      setFundAmount(event.currentTarget.value);
                    }}
                  />
                </Box>
                <HelpText id="foo_text">
                  Enter an amount between $20 and $2,000
                </HelpText>
              </Box>
              <Text as="h5" fontSize="fontSize30" color="colorText">
                Would you like to set up automatic recharge to keep your account
                balance topped up?
              </Text>

              <Checkbox
                id="autor"
                checked={isAutoRechargeVisible}
                name="autor"
                value="autor"
                onChange={(event) => {
                  setIsAutoRechargeVisible(event.target.checked);
                }}
              >
                Yes, enable auto-recharge
              </Checkbox>
              {isAutoRechargeVisible && <AutoRecharge />}
              <Link
                to={{
                  pathname: "/add-payment-method-upg",
                  search: "?sort=name",
                  hash: "#the-hash",
                  state: { fundAmount }
                }}
              >
                <Button variant="primary">Continue</Button>
              </Link>
            </Stack>
          </TabPanel>
          <TabPanel id={"promo-code"}>
            <Stack orientation="vertical" spacing="space60">
              <Box>
                <Label htmlFor="payment_amount">Enter your promo code</Label>
                <Box maxWidth="size20">
                  <Input
                    value=""
                    aria-describedby="payment_amount_help_text"
                    id="payment_amount"
                    name="payment_amount"
                    type="number"
                    placeholder=""
                    onChange={() => console.log("input clicked")}
                    required
                  />
                </Box>
              </Box>
              <Text as="h5" fontSize="fontSize30" color="colorText">
                Would you like to set up automatic recharge to keep your account
                balance topped up?
              </Text>

              <Checkbox
                id="autor"
                value="autor"
                name="autor"
                onChange={() => console.log("checkbox clicked")}
              >
                Yes, enable auto-recharge
              </Checkbox>
              {/* <AutoRecharge /> */}
              <Link
                to={{
                  pathname: "/add-payment-method-upg",
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

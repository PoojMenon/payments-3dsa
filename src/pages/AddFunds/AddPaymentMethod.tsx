import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Theme } from "@twilio-paste/theme";
import { Grid, Column } from "@twilio-paste/grid";
import { Stack } from "@twilio-paste/stack";
import { Box } from "@twilio-paste/core/box";

// import AlertBox from "./components/AlertBox";

import { Flex } from "@twilio-paste/flex";
import { Anchor } from "@twilio-paste/anchor";
import { Heading } from "@twilio-paste/heading";
import { PaymentMethod } from "../../components/PaymentMethod";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@twilio-paste/tabs";
import { Text } from "@twilio-paste/core/text";
import { Button } from "@twilio-paste/button";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";

export default function AddPaymentMethodPage() {
  return (
    <Stack orientation="vertical" spacing="space160">
      <Stack orientation="vertical" spacing="space70">
        <Box as="section">
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
                <Anchor href="/add-funds">{"Back to Add Funds"}</Anchor>
              </Box>
            </Flex>
          </Box>
          <Heading as="h1" variant="heading10">
            Add Payment Method
          </Heading>

          {/* Tabs */}
          <Tabs selectedId={"creditCard"} baseId="horizontal-tabs-example">
            <TabList aria-label="My tabs">
              <Tab id={"creditCard"}>Credit Card</Tab>
              <Tab id={"payPal"}>PayPal</Tab>
            </TabList>
            <TabPanels>
              <TabPanel id={"creditCard"}>
                <PaymentMethod fundAmount="" source="addfunds" />
              </TabPanel>
              <TabPanel id={"payPal"}>
                <Stack orientation="vertical" spacing="space70">
                  <Text
                    as="p"
                    fontSize="fontSize30"
                    marginBottom="space40"
                    color="colorText"
                  >
                    To add your Paypal account, click on the link below.
                  </Text>
                  <Anchor href="/components" showExternal>
                    Go to Paypal
                  </Anchor>
                  <Button variant="primary">Add Paypal</Button>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </Stack>
  );
}

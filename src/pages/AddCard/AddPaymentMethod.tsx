import React from "react";

import { Stack } from "@twilio-paste/core/stack";
import { Box } from "@twilio-paste/core/box";

import { Flex } from "@twilio-paste/flex";
import { Anchor } from "@twilio-paste/anchor";
import { Heading } from "@twilio-paste/heading";
// import { CardDetails } from "../components/CardDetails";
import { AddPaymentMethod } from "../../components/AddPaymentMethod";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@twilio-paste/tabs";
import { Text } from "@twilio-paste/core/text";
import { Button } from "@twilio-paste/core/button";
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
                <Anchor href="/view-payment-methods">
                  {"Back to payment methods"}
                </Anchor>
              </Box>
            </Flex>
          </Box>
          <Heading as="h1" variant="heading10">
            Add payment method
          </Heading>

          {/* Tabs */}
          <Tabs selectedId={"creditCard"} baseId="horizontal-tabs-example">
            <TabList aria-label="My tabs">
              <Tab id={"creditCard"}>Credit card</Tab>
              <Tab id={"payPal"}>PayPal</Tab>
            </TabList>
            <TabPanels>
              <TabPanel id={"creditCard"}>
                <AddPaymentMethod />
              </TabPanel>
              <TabPanel id={"payPal"}>
                <Stack orientation="vertical" spacing="space70">
                  <Text
                    as="p"
                    fontSize="fontSize30"
                    marginBottom="space40"
                    color="colorText"
                  >
                    To add a PayPal account, select the button below.
                  </Text>
                  <Button variant="primary">PayPal</Button>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </Stack>
  );
}

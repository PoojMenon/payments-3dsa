import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useUID } from "@twilio-paste/core/uid-library";
import { Anchor } from "@twilio-paste/core/anchor";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { Flex } from "@twilio-paste/flex";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/core/text";
import { PaymentMethod } from "../../components/PaymentMethod";
// import packageJSON from "../package.json";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@twilio-paste/tabs";

const PaymentMethods = (props) => {
  let location = useLocation();
  let history = useHistory();

  const [fundAmount] = useState(location.state ? location.state.fundAmount : 0);

  // Modal properties
  // const [isOpen, setIsOpen] = React.useState(false);
  // const handleOpen = () => setIsOpen(true);
  // const handleClose = () => setIsOpen(false);
  // const modalHeadingID = useUID();

  // Content properties
  // const [projectName, setProjectName] = React.useState("");
  // const projectInputID = useUID();
  const selectedId = useUID();

  // const handleClick = (event) => {
  //   alert("clicked");
  // };

  return (
    <Stack orientation="vertical" spacing="space160">
      <Stack orientation="vertical" spacing="space70">
        <Box as="section">
          {/* <Box as="div">
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
                <Anchor href="/add-funds-upg">{"Back to Add funds"}</Anchor>
              </Box>
            </Flex>
          </Box> */}
          <Heading as="h1" variant="heading10">
            Payment method
          </Heading>
          {/* Tabs */}
          <Tabs selectedId={"creditCard"} baseId="horizontal-tabs-example">
            <TabList aria-label="My tabs">
              <Tab id={"creditCard"}>Credit card</Tab>
              <Tab id={"payPal"}>PayPal</Tab>
            </TabList>
            <TabPanels>
              <TabPanel id={"creditCard"}>
                <PaymentMethod fundAmount={fundAmount} source="upgrade" />
              </TabPanel>
              <TabPanel id={"payPal"}>
                <Stack orientation="vertical" spacing="space70">
                  <Text
                    as="p"
                    fontSize="fontSize30"
                    marginBottom="space40"
                    color="colorText"
                  >
                    To pay with PayPal, select the button below.
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
};

export default PaymentMethods;

import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useUID } from "@twilio-paste/core/uid-library";
import { Anchor } from "@twilio-paste/core/anchor";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import { Heading } from "@twilio-paste/core/heading";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { Flex } from "@twilio-paste/flex";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/core/text";
import { Complete } from "../../components/Complete";
// import packageJSON from "../package.json";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@twilio-paste/tabs";

const CompletePage = (props) => {
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
          <Heading as="h1" variant="heading10">
            Congratulations
          </Heading>
          <Complete />
        </Box>
      </Stack>
    </Stack>
  );
};

export default CompletePage;

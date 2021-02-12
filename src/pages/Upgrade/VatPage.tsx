import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useUID } from "@twilio-paste/core/uid-library";
import { Anchor } from "@twilio-paste/core/anchor";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { Flex } from "@twilio-paste/flex";
import { Stack } from "@twilio-paste/stack";
import { Vat } from "../../components/Vat";
// import packageJSON from "../package.json";

const VatPage = () => {
  let location = useLocation();

  const [] = useState(location.state ? location.state.fundAmount : 0);

  // Modal properties
  // const [isOpen, setIsOpen] = React.useState(false);
  // const handleOpen = () => setIsOpen(true);
  // const handleClose = () => setIsOpen(false);
  // const modalHeadingID = useUID();

  // Content properties
  // const [projectName, setProjectName] = React.useState("");
  // const projectInputID = useUID();

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
                <Anchor href="/company-address">
                  {"Back to Company address"}
                </Anchor>
              </Box>
            </Flex>
          </Box> */}
          <Heading as="h1" variant="heading10">
            Tax
          </Heading>
          <Vat />
        </Box>
      </Stack>
    </Stack>
  );
};

export default VatPage;

import React from "react";
import { useLocation } from "react-router-dom";
import { useUID } from "@twilio-paste/core/uid-library";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/core/text";
import { CompanyAddress } from "../../components/CompanyAddress";
// import packageJSON from "../package.json";

const CompanyAddressPage = () => {
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
                <Anchor href="/">{"Back to Company address"}</Anchor>
              </Box>
            </Flex>
          </Box> */}
          <Box marginBottom="space60">
            <Heading as="h1" variant="heading10" marginBottom="space0">
              Main Address
            </Heading>
            <Box maxWidth="size60">
              <Text as="p">
                This address will be used for taxation purposes. For US
                customers this is your service address. For international
                customers this is your primary or registered address.
              </Text>
            </Box>
          </Box>
          <CompanyAddress />
        </Box>
      </Stack>
    </Stack>
  );
};

export default CompanyAddressPage;

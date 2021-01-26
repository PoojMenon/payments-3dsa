import React, { useContext, useEffect, useState } from "react";

import { Stack } from "@twilio-paste/core/stack";
import { Box } from "@twilio-paste/core/box";
import { Flex } from "@twilio-paste/flex";
import { Anchor } from "@twilio-paste/core/anchor";
import { Heading } from "@twilio-paste/core/heading";
import { CardDetails } from "../../components/CardDetails";
import { ArrowBackIcon } from "@twilio-paste/icons/esm/ArrowBackIcon";
import { useLocation } from "react-router-dom";
import { Toaster, useToaster } from "@twilio-paste/toast";

const CardEdited = (props) => {
  let location = useLocation();
  const updateCard = useState(
    location.state ? location.state.updateCard : false
  );

  const toaster1 = useToaster();
  useEffect(() => {
    if (updateCard) {
      toaster1.push({
        message: "Card details updated",
        variant: "success",
        dismissAfter: 4000
      });
    }
  }, []);

  return (
    <Box>
      <Toaster {...toaster1} />

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
                  <Anchor href="/payment-methods">
                    {"Back to Payment Methods"}
                  </Anchor>
                </Box>
              </Flex>
            </Box>
            <Heading as="h1" variant="heading10">
              Credit Card Details
            </Heading>
            <CardDetails />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CardEdited;

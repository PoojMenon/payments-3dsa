import React, { useContext, useEffect, useState } from "react";
import { render } from "react-dom";
import { Theme } from "@twilio-paste/theme";
import { Grid, Column } from "@twilio-paste/grid";
import { Stack } from "@twilio-paste/core/stack";
import { Box } from "@twilio-paste/core/box";
import { Flex } from "@twilio-paste/flex";
import { Anchor } from "@twilio-paste/core";
import { Heading } from "@twilio-paste/core/heading";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
// import Maincontainer from "../components/Maincontainer";
import PaymentMethodTable from "../../components/PaymentMethodTable";

const PaymentMethodList = (props) => {
  return (
    <Box>
      {/* <Toaster {...toaster1} /> */}
      <Stack orientation="vertical" spacing="space160">
        <Stack orientation="vertical" spacing="space70">
          <Box as="section">
            <Box marginBottom="space40">
              <Flex vAlignContent="center">
                <Flex grow>
                  <Heading as="h1" variant="heading10" marginBottom="space0">
                    Payment methods
                  </Heading>
                </Flex>
                <Flex>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Anchor href="/add-new-payment-method">
                        Add payment method
                      </Anchor>
                    </Box>
                    <Box as="div">
                      <PlusIcon
                        decorative={true}
                        title="add payment method"
                        size="sizeIcon30"
                        color="colorTextLink"
                      />
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <PaymentMethodTable />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PaymentMethodList;

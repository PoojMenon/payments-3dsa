import React, { useState, useEffect } from "react";
import { Heading } from "@twilio-paste/heading";
import { Grid, Column } from "@twilio-paste/grid";
import { Text } from "@twilio-paste/text";
import { Card } from "@twilio-paste/core";
import { Button } from "@twilio-paste/button";
import { Anchor } from "@twilio-paste/anchor";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { Box } from "@twilio-paste/box";
import { Link } from "react-router-dom";
import { Toaster, useToaster } from "@twilio-paste/toast";
import { useLocation } from "react-router-dom";

const FundsAdded = (props) => {
  let location = useLocation();
  const [fundAmount] = useState(
    location.state ? location.state.fundAmount - 2.5 : 0
  );

  const toaster = useToaster();
  useEffect(() => {
    toaster.push({
      message: "Funds added successfully",
      variant: "success"
    });
  }, []);

  return (
    <>
      <Toaster {...toaster} />
      <Heading as="h1" variant="heading10">
        Billing Overview
      </Heading>
      <Grid gutter="space30">
        <Column span={6}>
          <Card padding="space70">
            <Heading as="h3" marginBottom="space70" variant="heading30">
              Billing Information
            </Heading>
            <Grid gutter="space30">
              <Column>
                <Heading as="h4" marginBottom="space20" variant="heading40">
                  Current Balance
                </Heading>
                <Text
                  as="p"
                  fontWeight="fontWeightMedium"
                  fontSize="fontSize70"
                  color="colorTextSuccess"
                  marginBottom="space60"
                >
                  {fundAmount ? `$${Number(fundAmount).toFixed(2)}` : "-$2.50"}
                </Text>
                <Link
                  to={{
                    pathname: "/add-funds"
                  }}
                >
                  <Button variant="primary">Add Funds</Button>
                </Link>
              </Column>
              <Column>
                <Heading as="h4" marginBottom="space20" variant="heading40">
                  Auto Recharge
                </Heading>
                <Box
                  as="span"
                  display="flex"
                  alignItems="left"
                  padding="space30"
                  borderRadius="borderRadius20"
                >
                  <CloseIcon decorative={false} title="Description of icon" />
                  <Box marginLeft="space20">Disabled</Box>
                  <Box marginLeft="space30">
                    <Anchor href="/components">Enable auto recharge</Anchor>
                  </Box>
                </Box>
              </Column>
            </Grid>
          </Card>
        </Column>
        <Column>
          <Card>
            <Box paddingBottom="space200">
              <Heading as="h3" marginBottom="space70" variant="heading30">
                Preferences
              </Heading>
            </Box>
            <Box paddingBottom="space100"></Box>
          </Card>
        </Column>
      </Grid>
      <Box padding="space40"></Box>
      <Grid gutter="space30">
        <Column span={6}>
          <Card>
            <Box paddingBottom="space200">
              <Heading as="h3" marginBottom="space70" variant="heading30">
                Usage Summary
              </Heading>
            </Box>
            <Box paddingBottom="space100"></Box>
          </Card>
        </Column>
        <Column>
          <Card>
            <Box paddingBottom="space200">
              <Heading as="h3" marginBottom="space70" variant="heading30">
                Payment History
              </Heading>
            </Box>
            <Box paddingBottom="space100"></Box>
          </Card>
        </Column>
      </Grid>
    </>
  );
};

export default FundsAdded;

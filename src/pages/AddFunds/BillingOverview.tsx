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
import { Flex } from "@twilio-paste/flex";

export default function BillingOverview() {
  return (
    <>
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
                  color="colorTextError"
                  marginBottom="space60"
                >
                  -$2.50
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
}

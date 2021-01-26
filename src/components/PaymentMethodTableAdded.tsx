import React, { Component } from "react";
import { Anchor, Box } from "@twilio-paste/core";
import { Table, THead, TBody, Tr, Th, Td } from "@twilio-paste/table";
import { Text } from "@twilio-paste/core/text";

export class PaymentMethodTableAdded extends Component {
  render() {
    return (
      <Box>
        <Table tableLayout="fixed">
          <THead>
            <Tr>
              <Th>Type</Th>
              <Th textAlign="left">Details</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>Mastercard</Td>
              <Td textAlign="left">
                <Anchor href="/edit-card">
                  **** **** **** 1111 <br />
                  exp. 01/2021
                </Anchor>
              </Td>
              <Td>
                <Text as="p">Joe Coulson</Text>

                <Text as="p" color="colorTextWeak">
                  Beale st, 11111, US
                </Text>
              </Td>
              <Td>
                <Box display="flex" alignItems="center">
                  <Box
                    width="sizeSquare40"
                    height="sizeSquare40"
                    backgroundColor="colorBackgroundPrimary"
                    borderRadius="borderRadiusCircle"
                  />
                  <Text as="p" textAlign="right" marginLeft="space30">
                    Primary payment method
                  </Text>
                </Box>
                <Text as="p" color="colorTextWeak" marginLeft="space60">
                  auto recharge
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>PayPal</Td>
              <Td textAlign="left">
                <Anchor href="#">joe.coulson@email.com</Anchor>
              </Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>Visa</Td>
              <Td textAlign="left">
                <Anchor href="#">
                  **** **** **** 1234 <br />
                  exp. 01/2023
                </Anchor>
              </Td>
              <Td>
                <Text as="p">Joe Coulson</Text>

                <Text as="p" color="colorTextWeak">
                  Beale st, 11111, US
                </Text>
              </Td>

              <Td>
                <Box display="flex" alignItems="center">
                  <Box
                    width="sizeSquare40"
                    height="sizeSquare40"
                    backgroundColor="colorBackgroundPrimaryLight"
                    borderRadius="borderRadiusCircle"
                  />
                  <Text as="p" marginLeft="space30">
                    Backup payment method
                  </Text>
                </Box>
                <Text as="p" color="colorTextWeak" marginLeft="space60">
                  auto recharge
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>Visa</Td>
              <Td textAlign="left">
                <Anchor href="#">
                  **** **** **** 1234 <br />
                  exp. 01/2023
                </Anchor>
              </Td>
              <Td>
                <Text as="p">Joe Coulson</Text>

                <Text as="p" color="colorTextWeak">
                  Beale st, 11111, US
                </Text>
              </Td>

              <Td></Td>
            </Tr>
          </TBody>
        </Table>
      </Box>
    );
  }
}

export default PaymentMethodTableAdded;

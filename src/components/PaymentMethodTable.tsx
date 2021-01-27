import React, { Component } from "react";
import { Anchor, Box } from "@twilio-paste/core";
import { Table, THead, TBody, Tr, Th, Td } from "@twilio-paste/table";
import { Text } from "@twilio-paste/core/text";

export class PaymentMethodTable extends Component {
  render() {
    return (
      <Box>
        <Table tableLayout="fixed">
          <THead>
            <Tr>
              <Th>Details</Th>
              <Th>Billing address</Th>
              <Th>Auto recharge setup</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Anchor href="/edit-card">**** **** **** 1111</Anchor>

                <Text as="p" color="colorTextWeak">
                  Mastercard
                </Text>
              </Td>
              <Td>
                <Text as="p">Joe Coulson</Text>

                <Text as="p" color="colorTextWeak">
                  Beale st, 11111, US
                </Text>
              </Td>
              <Td>
                <Box display="flex" alignItems="center">
                  <Text as="p">Primary payment method</Text>
                </Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Anchor href="#">joe.coulson@email.com</Anchor>
                <Text as="p" color="colorTextWeak">
                  PayPal
                </Text>
              </Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
            <Tr>
              <Td>
                <Anchor href="#">**** **** **** 1234</Anchor>
                <Text as="p" color="colorTextWeak">
                  Visa
                </Text>
              </Td>

              <Td>
                <Text as="p">Joe Coulson</Text>

                <Text as="p" color="colorTextWeak">
                  Beale st, 11111, US
                </Text>
              </Td>

              <Td>
                <Box display="flex" alignItems="center">
                  <Text as="p">Backup payment method</Text>
                </Box>
              </Td>
            </Tr>
          </TBody>
        </Table>
      </Box>
    );
  }
}

export default PaymentMethodTable;

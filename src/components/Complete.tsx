import * as React from "react";
import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Heading } from "@twilio-paste/heading";
import { Stack } from "@twilio-paste/stack";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Anchor } from "@twilio-paste/anchor";
import { Card, Flex } from "@twilio-paste/core";

export const Complete = ({ fundAmount }) => {
  return (
    <Box as="section">
      <Card>
        <Stack orientation="horizontal">
          <Box as="div" maxWidth="size40">
            <img
              src="https://d3k2f0s3vqqs9o.cloudfront.net/media/EAB34822-838D-4D91-B78F0F74BAE60E33/9C749462-685A-4A17-81F6159C57B740CF/webimage-2968E0B7-8F1B-4731-A95874C459569B9F.png"
              alt="celebration illustration"
              width="75%"
            ></img>
          </Box>
          <Box as="div">
            <Stack orientation="vertical" spacing="space40">
              <Box as="div">
                <Heading as="h1" variant="heading10">
                  Congratulations
                </Heading>
              </Box>
              <Text as="p">
                {fundAmount
                  ? `We've upgraded your account and charged your selected payment method $${fundAmount}`
                  : "We've upgraded your account and charged your selected payment method $20."}
              </Text>
              <Text as="p">
                The next time you'd like to add funds to your account, select{" "}
                <strong>"Add Funds"</strong> on the Billing overview page.
              </Text>
              <Box as="div" marginTop="space60">
                <Heading as="h2" variant="heading30">
                  What to do now?
                </Heading>
              </Box>

              <Box display="flex">
                <Box>
                  <Anchor href="#">Buy a phone number</Anchor>
                </Box>
                <Box>
                  <ArrowForwardIcon
                    decorative={false}
                    title="forward icon"
                    color="colorTextLink"
                  />
                </Box>
              </Box>
              <Box display="flex">
                <Box>
                  <Anchor href="#">Go to the Billing overview</Anchor>
                </Box>
                <Box>
                  <ArrowForwardIcon
                    decorative={false}
                    title="forward icon"
                    color="colorTextLink"
                  />
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

import * as React from "react";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/heading";
import { Text } from "@twilio-paste/core/text";
import { Input, Label, HelpText } from "@twilio-paste/core";
import { Stack } from "@twilio-paste/stack";

function AutoRecharge() {
  return (
    <Stack orientation="vertical" spacing="space40">
      <Box paddingTop="space20">
        <Label htmlFor="foo">When balance goes below</Label>
        <Box maxWidth="size10">
          <Input
            aria-describedby="foo_text"
            id="foo"
            name="foo"
            type="text"
            insertBefore={<div>$</div>}
            onChange={() => console.log(123)}
          />
        </Box>
        <HelpText id="foo_text">
          Enter an amount between $10 and $1,990
        </HelpText>
      </Box>
      <Box paddingTop="space20">
        <Label htmlFor="foo">Recharge the balance to</Label>
        <Box maxWidth="size10">
          <Input
            aria-describedby="foo_text"
            id="foo"
            name="foo"
            type="text"
            insertBefore={<div>$</div>}
            onChange={() => console.log(123)}
          />
        </Box>
        <HelpText id="foo_text">
          Enter an amount between $20 and $2,000
        </HelpText>
      </Box>
    </Stack>
  );
}

export default AutoRecharge;

import React from "react";

import { Theme } from "@twilio-paste/core/theme";
import { Box } from "@twilio-paste/core/box";
import { Column, Grid } from "@twilio-paste/core/grid";
import { Stack } from "@twilio-paste/core/stack";
import { Text } from "@twilio-paste/core/text";

export default (props) => {
  return (
    <Theme.Provider theme="default">
      {/* Header */}
      <Box
        as="header"
        height="sizeSquare200"
        backgroundColor="colorBackgroundPrimaryDarkest"
      >
        <Box padding="space80">
          <Text
            as="p"
            fontSize="fontSize40"
            fontWeight="fontWeightSemibold"
            color="colorTextInverse"
          >
            Twilio
          </Text>
        </Box>
      </Box>
      {/* END Header */}

      <Grid marginBottom="space70">
        {/* Navigation */}
        <Column span={[0, 2, 2]}>
          <Stack orientation="vertical">
            <Box
              as="nav"
              backgroundColor="colorBackground"
              height="100vh"
              padding="space30"
              position="relative"
              overflow="hidden"
            ></Box>
          </Stack>
        </Column>
        {/* END Navigation */}

        {/* Main container */}
        <Column span={[12, 8, 6]}>
          <Box
            marginBottom="space160"
            marginTop={["space10", "space110"]}
            marginRight="space160"
            marginLeft="space160"
          >
            {props.children}
          </Box>
        </Column>
        {/* END Main container */}
      </Grid>
    </Theme.Provider>
  );
};

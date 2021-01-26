import React from "react";

import { useUID } from "@twilio-paste/core/uid-library";
import { Theme } from "@twilio-paste/core/theme";
import { Box } from "@twilio-paste/box";
import { Column, Grid } from "@twilio-paste/core/grid";
import { Heading } from "@twilio-paste/core/heading";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Stack } from "@twilio-paste/core/stack";
import { Text } from "@twilio-paste/core/text";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Navgrid from "../components/Navgrid";

export default (props) => {
  return (
    <Theme.Provider theme="default">
      <Header />

      <Subheader />
      {/* END Header */}

      <Grid marginBottom="space70">
        {/* Navigation */}
        <Column span={[0, 2, 2]}>
          <Navgrid />
        </Column>
        {/* END Navigation */}

        {/* Main container */}
        <Column span={[12, 10, 10]}>
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

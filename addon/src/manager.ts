//@ts-ignore Temp fix to generate DTS files
import { addons, types } from "@storybook/manager-api";
import { Panel } from "./Panel";
import { ADDON_ID, PANEL_ID, PARAM_KEY } from "./constants";
import React from "react";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Design Tokens",
    paramKey: PARAM_KEY,
    //@ts-ignore
    match: ({ viewMode }) => viewMode === "story",
    //@ts-ignore
    render: ({ active }) => {
      if (!active) {
        return null;
      }
      return React.createElement(Panel, { active });
    },
  });
});

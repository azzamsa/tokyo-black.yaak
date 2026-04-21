import { PluginDefinition } from "@yaakapp/api";

export const plugin: PluginDefinition = {
  themes: [
    {
      id: "tokyo-black",
      label: "Tokyo Black",
      dark: true,
      base: {
        surface: "#000000",
        // highlighted menu buttons
        surfaceHighlight: "#292e42",
        // active selection on sidebar
        surfaceActive: "#292e42",
        border: "#3b4261",
        borderSubtle: "#232433",
        text: "#ffffff",
        textSubtle: "#a9b1d6",
        textSubtlest: "#565f89",
        selection: "#515c7e",
        primary: "#7dcfff",
        secondary: "#bb9af7",
        info: "#7aa2f7",
        success: "#9ece6a",
        notice: "#e0af68",
        warning: "#ff9e64",
        danger: "#f7768e",
      },
      components: {
        dialog: {
          surface: "#0d0d0d",
        },
        sidebar: {
          surface: "#000000",
          border: "#3b4261",
        },
        appHeader: {
          surface: "#000000",
          border: "#3b4261",
        },
        responsePane: {
          surface: "#000000",
          border: "#3b4261",
        },
        button: {
          primary: "#7dcfff",
          // icons on the menus
          secondary: "#bb9af7",
          info: "#7aa2f7",
          success: "#9ece6a",
          notice: "#e0af68",
          warning: "#ff9e64",
          danger: "#f7768e",
        },
      },
    },
  ],
};

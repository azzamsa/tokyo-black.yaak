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
        surfaceHighlight: "#2f334d",
        // active selection on sidebar
        surfaceActive: "#222436",
        border: "#3b4261",
        borderSubtle: "#222436",
        text: "#ffffff",
        textSubtle: "#c8d3f5",
        textSubtlest: "#828bb8",
        selection: "#2f334d",
        primary: "#fca7ea",
        secondary: "#c099ff",
        info: "#82aaff",
        success: "#c3e88d",
        notice: "#ffc777",
        warning: "#ff966c",
        danger: "#ff757f",
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
          primary: "#fca7ea",
          // icons on the menus
          secondary: "#c099ff",
          info: "#82aaff",
          success: "#c3e88d",
          notice: "#ffc777",
          warning: "#ff966c",
          danger: "#ff757f",
        },
      },
    },
  ],
};

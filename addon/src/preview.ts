//@ts-ignore Temp fix to generate DTS files
import { ProjectAnnotations, Renderer } from "storybook/internal/types";
import { PARAM_KEY } from "./constants";

const preview: ProjectAnnotations<Renderer> = {
  decorators: [],
  globals: {
    [PARAM_KEY]: false,
  },
};

export default preview;

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    foreground: string;
    hightlightText: string;
    regularText: string;
    logoBackground: string;
  }
}

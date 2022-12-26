import { Page2 } from "../Components/Page2/Page2";
import { UrlParameter } from "../Components/Other/UrlParameter";

export const page2Routes = [
  {
    index: true,
    exact: true,
    children: <Page2 />
  },
  {
    path: ":id/*",
    exact: false,
    children: <UrlParameter />
  }
];
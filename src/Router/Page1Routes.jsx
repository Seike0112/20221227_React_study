import { Page1 } from "../Components/Page1/Page1";
import { Page1DetailA } from "../Components/Page1/Page1DetailA";
import { Page1DetailB } from "../Components/Page1/Page1DetailB";

export const page1Routes = [
  {
    index: true,
    exact: true,
    children: <Page1 />
  },
  {
    path: "detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "detailB",
    exact: true,
    children: <Page1DetailB />
  }
];
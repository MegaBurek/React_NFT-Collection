//Custom components
import TestPage from "Views/TestPage";

//Types
import { RouteType } from "@/@types/common";


const publicRoutes: RouteType[] = [
  { path: "/", name: "Posts Page", component: TestPage }
];

export default publicRoutes;

//Custom components
import NFTPage from "@/Views/NFTPage";

//Types
import { RouteType } from "@/@types/common";

const publicRoutes: RouteType[] = [
  { path: "/test", name: "Test Page", component: NFTPage },
  { path: "/", name: "Tests Page", component: NFTPage, index: true }
];

export default publicRoutes;

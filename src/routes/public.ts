//Custom components
import PostsPage from "Views/Posts/PostsPage";
import PostDetail from "Views/Posts/PostDetail";
import PostEdit from "@/views/Posts/PostEdit";
import PostCreation from "Views/Posts/PostCreation";

//Types
import { RouteType } from "@/@types/common";

const publicRoutes: RouteType[] = [
  { path: "/create", name: "Login", component: PostCreation },
  { path: "/:id/edit", name: "Post Detail Edit", component: PostEdit },
  { path: "/:id", name: "Post Detail", component: PostDetail },
  { path: "/", name: "Posts Page", component: PostsPage },
];

export default publicRoutes;

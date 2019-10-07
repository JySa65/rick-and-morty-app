import HomePages from "../pages/homepages";
import Character from "../pages/character"

const router = [
  {
    exact: true,
    path: "/",
    component: HomePages
  },
  {
    exact: true,
    path: "/character",
    component: Character
  }
];

export default router;

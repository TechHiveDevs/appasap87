
import show from "./show.user";
import create from "./create.user";
import edit from "./edit.user";
import list from "./list.user";

export default { 
  name: "user",
  label: "user",
  hide: false,
  create,
  edit,
  list,
  show,
}
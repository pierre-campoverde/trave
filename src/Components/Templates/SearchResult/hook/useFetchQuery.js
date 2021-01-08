//import { useDispatch } from "react-redux";

export default function useFetchQuery(programs) {
  const { query } = programs;
  console.log(query);
  console.log(programs.status);
}

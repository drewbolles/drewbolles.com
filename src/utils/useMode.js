import { useContext } from "react";
import { ModeContext } from "../components/Mode";

export default function useMode() {
  return useContext(ModeContext);
}

import { Terminal } from "terminal"
import {ThemeToggle} from "@workspace/interface";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Terminal />
    </>
  )
}

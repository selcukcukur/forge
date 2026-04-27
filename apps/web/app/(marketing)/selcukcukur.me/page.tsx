import { Terminal } from "@interface/console/terminal"
import {ThemeToggle} from "@workspace/interface";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Terminal />
    </>
  )
}

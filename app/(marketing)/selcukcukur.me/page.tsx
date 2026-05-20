import { Terminal } from "@interface/console/terminal"
import {ThemeToggle} from "@interface/components";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Terminal />
    </>
  )
}

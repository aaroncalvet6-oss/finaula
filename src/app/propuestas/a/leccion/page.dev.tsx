import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource-variable/inter";
import { CuadernoLesson } from "../../_directions/Cuaderno";
import { Proposal } from "../../_shared/Proposal";

export default function Page() {
  return (
    <Proposal id="a">
      <CuadernoLesson />
    </Proposal>
  );
}

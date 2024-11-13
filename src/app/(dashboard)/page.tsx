import { cn } from "@/lib/utils";
import { styles } from "../styles";

export default function Home() {
  return (
    <div className={cn(styles.paddingY, styles.paddingX, styles.layoutML)}>
      Hello World
    </div>
  );
}

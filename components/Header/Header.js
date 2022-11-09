import Link from "next/link";

import { AtSymbolIcon } from "@heroicons/react/24/outline/AtSymbolIcon";
import { MoonIcon } from "@heroicons/react/20/solid/MoonIcon";
import { Bars2Icon } from "@heroicons/react/20/solid/Bars2Icon";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <AtSymbolIcon />
        </Link>
      </div>
      <div>
        <button>
          <MoonIcon />
        </button>
        <button>
          <Bars2Icon />
        </button>
      </div>
    </header>
  );
}

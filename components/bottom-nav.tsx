"use client";
import Link from "next/link";
import { routes } from "./routes";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathName = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <ul className="flex justify-around items-center h-16">
        {routes.map(({ path, name, icon }) => (
          <li key={path}>
            <Link
              href={path}
              className={clsx(
                "flex flex-col text-muted-foreground items-center justify-center w-16 h-16",
                {
                  "text-primary": pathName === path,
                }
              )}
            >
              {icon}
              <span className="text-xs mt-1">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;

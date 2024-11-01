import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

interface NavBarLink {
  name: string;
  href: string;
}

const navBarLinks: NavBarLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "File System",
    href: "/filesystem",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-900 ">
      <div className="py-3 max-w-screen-xl mx-auto flex justify-between px-4 xl:px-0">
        <div className="flex items-center gap-8">
          <h2 className="text-primary-foreground text-xl font-medium">
            <Link to="/">Cloud Storage</Link>
          </h2>
          <ul className="flex gap-4">
            {navBarLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "text-primary-foreground/80 transition-colors hover:text-primary-foreground",
                      { "text-primary-foreground": isActive }
                    )
                  }
                  to={link.href}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Button asChild>
            <NavLink to="/identity/signup">Sign Up</NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
};

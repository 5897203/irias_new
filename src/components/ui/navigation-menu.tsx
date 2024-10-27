import * as React from "react";

export const NavigationMenu = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <nav className={`relative ${className}`}>
      {children}
    </nav>
  );
};

export const NavigationMenuList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="flex items-center gap-1">
      {children}
    </ul>
  );
};

export const NavigationMenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="relative">
      {children}
    </li>
  );
};

export const NavigationMenuTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
      {children}
    </button>
  );
};

export const NavigationMenuContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute left-0 top-0 w-full pt-10">
      <div className="rounded-lg border bg-white p-4 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className = '', ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-blue-600 focus:bg-gray-100 focus:text-blue-600 ${className}`}
      {...props}
    />
  );
});

NavigationMenuLink.displayName = "NavigationMenuLink";
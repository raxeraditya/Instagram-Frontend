import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface LinkProps {
  href: string;
  icon: LucideIcon;
  label?: string;
  active?: boolean;
}

export function Link({ href, icon: Icon, label, active }: LinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center p-3 rounded-lg transition-colors",
        "hover:bg-gray-100",
        "lg:w-full",
        active && "font-bold"
      )}
    >
      <Icon className="w-6 h-6" />
      {label && <span className="hidden lg:block ml-4">{label}</span>}
    </a>
  );
}

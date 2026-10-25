// app/components/section/service/ServiceIcons.tsx
import React from "react";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Layout,
  Database,
  Bot,
  Sparkles,
  Layers,
  LucideProps,
} from "lucide-react";

export const iconMap = {
  Globe,
  Smartphone,
  ShoppingCart,
  Layout,
  Database,
  Bot,
  Sparkles,
  Layers,
};

export type ServiceIconName = keyof typeof iconMap;

export function ServiceIcon({
  name,
  className = "w-6 h-6",
  ...props
}: {
  name: string;
  className?: string;
} & LucideProps) {
  const IconComponent = (iconMap as Record<string, React.ElementType>)[name] || Layers;
  return <IconComponent className={className} {...props} />;
}

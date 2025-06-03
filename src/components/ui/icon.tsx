import {
  Wine,
  User,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Send,
  CircleAlert,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap = {
  Wine,
  User,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Send,
  CircleAlert,
};

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent =
    iconMap[name as keyof typeof iconMap] ||
    iconMap[fallback as keyof typeof iconMap];

  return <IconComponent size={size} className={className} />;
};

export default Icon;

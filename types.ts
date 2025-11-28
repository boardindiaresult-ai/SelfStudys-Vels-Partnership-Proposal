import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon: LucideIcon;
  trend?: string;
}

export interface ChannelProps {
  title: string;
  description: string;
  metrics: string[];
  icon: LucideIcon;
  color: string;
}

export interface CollegeResult {
  name: string;
  applications: number;
  logoColor: string;
}

import { 
  Users, 
  Clock, 
  Target, 
  Smartphone, 
  Mail, 
  MessageSquare, 
  Bell, 
  TrendingUp,
  Award,
  BookOpen,
  Monitor,
  Search,
  FileText,
  FileCheck,
  Briefcase,
  Star,
  DollarSign,
  Landmark,
  HelpCircle,
  ExternalLink,
  MessageCircle,
  Percent,
  GraduationCap
} from 'lucide-react';
import { NavItem, CollegeResult } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Audience', href: '#audience' },
  { label: 'Apps', href: '#apps' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Promotions', href: '#promotions' },
  { label: 'Results', href: '#results' },
];

export const DEMOGRAPHICS_DATA = [
  { name: '18-24', value: 51 },
  { name: '25-34', value: 16 },
  { name: '35-44', value: 13 },
  { name: '45-54', value: 9 },
  { name: '55-64', value: 6 },
  { name: '65+', value: 5 },
];

export const TRAFFIC_DATA = [
  { name: 'Feb 04', users: 420 },
  { name: 'Feb 11', users: 550 },
  { name: 'Feb 18', users: 750 },
  { name: 'Feb 25', users: 600 },
];

export const ENROLMENT_DATA = [
  { name: '12th Students', value: 40, count: '2.5 million', color: '#10b981' }, // Emerald
  { name: '10th Students', value: 32, count: '2.0 million', color: '#3b82f6' }, // Blue
  { name: '11th Students', value: 10, count: '6.5 Lakh', color: '#f59e0b' },   // Amber
  { name: '6th-9th', value: 18, count: '1.1 million', color: '#f97316' },      // Orange
];

export const COLLEGE_RESULTS: CollegeResult[] = [
  { name: "Amrita Vishwa Vidyapeetham", applications: 1483, logoColor: "bg-pink-100 text-pink-700" },
  { name: "LPU", applications: 1317, logoColor: "bg-orange-100 text-orange-600" },
  { name: "Amity University", applications: 1043, logoColor: "bg-yellow-100 text-yellow-600" },
  { name: "Manipal", applications: 677, logoColor: "bg-orange-50 text-orange-500" },
  { name: "Chandigarh University", applications: 548, logoColor: "bg-red-100 text-red-700" },
  { name: "UPES", applications: 410, logoColor: "bg-blue-100 text-blue-600" },
  { name: "Shiv Nadar", applications: 392, logoColor: "bg-blue-50 text-blue-800" },
  { name: "Woxsen University", applications: 269, logoColor: "bg-red-50 text-red-600" },
  { name: "Thapar Institute", applications: 250, logoColor: "bg-red-50 text-red-800" },
  { name: "Jain University", applications: 230, logoColor: "bg-blue-50 text-blue-900" },
  { name: "Sharda University", applications: 161, logoColor: "bg-blue-100 text-blue-700" },
  { name: "Bennett University", applications: 114, logoColor: "bg-blue-50 text-red-600" },
];

export const APPS_LIST = [
  { name: "JEE Mains & Advance 2026", color: "bg-blue-600" },
  { name: "NEET exam prep 2026", color: "bg-yellow-500" },
  { name: "Class 12 Exam app", color: "bg-green-600" },
  { name: "CUET 2026 Exam Prep", color: "bg-emerald-500" },
  { name: "ICSE ISC Books & Solutions", color: "bg-indigo-600" },
  { name: "10th 12th Board Result", color: "bg-blue-500" },
  { name: "CAT Exam 2025", color: "bg-yellow-400" },
  { name: "M Tech entrance exam", color: "bg-teal-600" },
];

// Complex Journey Steps Structure matching PPT Slide 9
export const JOURNEY_STEPS = [
  {
    id: 1,
    title: "Chooses Stream / Coaching",
    topItems: [
      { label: "Mock Tests", icon: FileText },
      { label: "Coaching", icon: Users },
      { label: "Exams", icon: FileCheck }
    ],
    bottomItems: [
      { label: "Cutoff", icon: TrendingUp }
    ]
  },
  {
    id: 2,
    title: "Gives Exam",
    topItems: [],
    bottomItems: [
      { label: "Sample Papers", icon: FileText },
      { label: "Rank Predictor", icon: Target }
    ]
  },
  {
    id: 3,
    title: "Chooses Institute",
    topItems: [
      { label: "Placement", icon: Briefcase },
      { label: "USPs", icon: Star },
      { label: "Fees", icon: DollarSign },
      { label: "Scholarship", icon: Award },
      { label: "Loan", icon: Landmark }
    ],
    bottomItems: [
      { label: "Doubts", icon: HelpCircle }
    ]
  },
  {
    id: 4,
    title: "Fills Application",
    topItems: [],
    bottomItems: [
      { label: "Redirection", icon: ExternalLink },
      { label: "Counselling", icon: MessageCircle }
    ]
  },
  {
    id: 5,
    title: "Takes Admission",
    topItems: [
       { label: "Offers / Scholarships", icon: Percent }
    ],
    bottomItems: []
  }
];

export const CHANNELS = [
  {
    id: 'seo',
    title: 'Organic Search (SEO)',
    description: 'Dominant presence for high-volume keywords like "JEE Prep", "Class 12 Solutions".',
    metrics: ['Traffic Share: 64%', 'Monthly Visits: 4M+'],
    icon: Search,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'direct',
    title: 'Direct Traffic & App',
    description: 'Strong brand recall with millions of students accessing our app directly.',
    metrics: ['Traffic Share: 32%', 'App Installs: 5M+'],
    icon: Smartphone,
    color: 'bg-green-50 text-green-600'
  },
  {
    id: 'social',
    title: 'Social & Community',
    description: 'Active student communities on Telegram, WhatsApp, and YouTube.',
    metrics: ['Community: 500K+', 'Daily Active: 50K'],
    icon: Users,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 'email',
    title: 'Email & Notifications',
    description: 'High-conversion push notifications and newsletters to registered users.',
    metrics: ['Subscribers: 2M+', 'CTR: 4.5%'],
    icon: Bell,
    color: 'bg-orange-50 text-orange-600'
  }
];

export const PROMOTION_CHANNELS = [
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    title: 'Mobile & Web Notifications',
    description: 'Direct alerts to student devices.',
    stats: 'High Engagement'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp/SMS',
    icon: MessageSquare,
    title: 'Direct Messaging',
    description: 'Personalized outreach via WhatsApp & SMS.',
    stats: 'Click Rate: 8-12%'
  },
  {
    id: 'email',
    label: 'Emailers',
    icon: Mail,
    title: 'Targeted Campaigns',
    description: 'Rich HTML emails with admission deadlines.',
    stats: 'Open Rate: 8-12%'
  },
  {
    id: 'banners',
    label: 'Banners',
    icon: Monitor,
    title: 'Website & App Banners',
    description: 'Strategic placement on high-traffic pages.',
    stats: 'Millions of Impressions'
  }
];
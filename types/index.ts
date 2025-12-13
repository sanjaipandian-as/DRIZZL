// Button Props
export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    onClick?: () => void;
    className?: string;
}

// Navigation Item
export interface NavigationItem {
    label: string;
    href: string;
}

// Countdown Timer
export interface TimeUnit {
    value: number;
    label: string;
}

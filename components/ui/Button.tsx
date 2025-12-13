import { ButtonProps } from "@/types";

export default function Button({
    children,
    variant = 'primary',
    onClick,
    className = ''
}: ButtonProps) {
    const baseStyles = "px-8 py-3 font-semibold text-sm tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95";

    const variants = {
        primary: "bg-gold-500 text-white hover:bg-gold-400 shadow-lg hover:shadow-xl",
        outline: "border-2 border-coffee-900 text-coffee-900 hover:bg-coffee-900 hover:text-white"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

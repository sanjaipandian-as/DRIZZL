import { ButtonProps } from "@/types";

export default function Button({
    children,
    variant = 'primary',
    onClick,
    className = ''
}: ButtonProps) {
    const baseStyles = "px-8 py-3 font-semibold text-sm tracking-wider transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-sm uppercase";

    const variants = {
        primary: "bg-rust-700 text-cream-100 hover:bg-rust-600 shadow-lg hover:shadow-xl shadow-rust-900/20",
        outline: "border-2 border-forest-800 text-forest-900 hover:bg-forest-800 hover:text-cream-100"
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
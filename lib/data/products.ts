export interface Product {
    id: number;
    name: string;
    price: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "VALENCIA ORANGE MOCHA",
        price: "$7.50",
        category: "Signature",
        description: "A bold fusion of dark cocoa and zesty Valencia oranges, topped with crystalized zest. The perfect balance of bitter and sweet.",
        image: "/image1.png",
        tags: ["Zesty", "Dark Cocoa", "Hot"]
    },
    {
        id: 2,
        name: "KYOTO COLD DRIP",
        price: "$8.00",
        category: "Cold Brew",
        description: "Slow-dripped over 12 hours through glass towers to extract pure, floral clarity. Served over hand-carved ice.",
        image: "/image2.png",
        tags: ["Floral", "Clear", "Drip"]
    },
    {
        id: 3,
        name: "BLACK GOLD ESPRESSO",
        price: "$4.50",
        category: "Strong",
        description: "Our darkest roast. Intense complexity with notes of smoke and black treacle. For those who take their coffee seriously.",
        image: "/image3.png",
        tags: ["Intense", "Smoky", "Short"]
    },
    {
        id: 4,
        name: "VELVET FLAT WHITE",
        price: "$5.95",
        category: "Classics",
        description: "Micro-foamed milk poured over a precision-pulled double shot of our house blend. Silky, smooth, and utterly comforting.",
        image: "/image4.png",
        tags: ["Creamy", "Balanced", "Classic"]
    },
    {
        id: 5,
        name: "TURKISH ROSE LATTE",
        price: "$6.50",
        category: "Signature",
        description: "Delicate rose water infusion with crushed pistachios and honey-drizzled foam. A taste of the exotic in every sip.",
        image: "/image5.png",
        tags: ["Floral", "Sweet", "Exotic"]
    },
    {
        id: 6,
        name: "HONEYCOMB NITRO",
        price: "$7.25",
        category: "Cold Brew",
        description: "Nitro-infused cold brew served with a shard of handmade honeycomb toffee. Creamy texture without the cream.",
        image: "/image6.png",
        tags: ["Creamy", "Sweet", "Draft"]
    }
];

export const CATEGORIES = ["All", "Signature", "Classics", "Cold Brew", "Strong"];

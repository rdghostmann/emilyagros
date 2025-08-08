import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  MilkIcon as Cow,
  Settings,
  Shield,
  Tractor,
  Heart,
  Sprout,
  Apple,
  Leaf,
  Wheat,
  DollarSign,
  Package,
  Pill,
  Gamepad2,
} from "lucide-react"
import Image from "next/image";

const categories = [
  {
    id: "trending",
    name: "Trending",
    icon: TrendingUp,
    subcategories: ["Tractors", "Shellers", "Sprayers", "Others"],
    color: "text-orange-500",
    bgColor: "bg-gray-200",
    image: "/icons/0.jpg",
    count: 45,
    href: "/marketplace?filter=trending",
  },
  {
    id: "livestock-pets",
    name: "Livestock & Pets",
    icon: Cow,
    subcategories: ["Poultry", "Cattle", "Goat", "Pig", "Rabbits", "Sheeps", "Turkey"],
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "/icons/1.jpg",
    count: 80,
    href: "/category/livestock",
  },
  {
    id: "services",
    name: "Services",
    icon: Settings,
    subcategories: ["Tractor Hiring", "Farm Setup", "Veterinary"],
    color: "text-orange-500",
    bgColor: "bg-gray-200",
    image: "/icons/2.jpg",
    count: 18,
    href: "/category/services",
  },
  {
    id: "agro-insurance",
    name: "Agro Insurance",
    icon: Shield,
    subcategories: ["Crop Insurance", "Livestock Insurance", "Farm Equipment Insurance", "Weather Insurance"],
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "/icons/3.jpg",
    count: 5,
    href: "/category/insurance",
  },
  {
    id: "tractor-farm-equipment",
    name: "Tractor / Farm Machines",
    icon: Tractor,
    subcategories: ["Tractor", "Sheller", "Sprayer", "Knapsack Sprayer", "Fish Pond", "Others"],
    color: "text-orange-500",
    bgColor: "bg-gray-200",
    image: "/icons/4.jpg",
    count: 45,
    href: "/category/equipment",
  },
  {
    id: "animal-mating",
    name: "Animal Mating",
    icon: Heart,
    subcategories: ["Dog", "Goat", "Pig", "AI Service", "Natural Mating"],
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "/icons/5.jpg",
    count: 12,
    href: "/category/mating",
  },
  {
    id: "agro-chemicals-insecticides-pesticides",
    name: "Agro Chemicals / Pesticides",
    icon: Sprout,
    subcategories: ["Herbicide", "Pesticide", "Fungicide"],
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "/icons/6.jpg",
    count: 28,
    href: "/category/chemicals",
  },
  {
    id: "food-fruits-vegetables",
    name: "Food / Fruits & Vegetables",
    icon: Apple,
    subcategories: ["Fruit", "Vegetable", "Fresh", "Dried", "Packaged"],
    color: "text-orange-500",
    bgColor: "bg-gray-200",
    image: "/icons/7.jpg",
    count: 320,
    href: "/category/fruits",
  },
  {
    id: "seedlings",
    name: "Seedlings",
    icon: Leaf,
    subcategories: ["Maize", "Soybean", "Groundnut", "Hybrid", "Open-pollination"],
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "/icons/8.jpg",
    count: 60,
    href: "/category/seedlings",
  },
  {
    id: "ornamental-crops",
    name: "Horticulture / Ornamental Crops",
    icon: Wheat,
    subcategories: ["Maize", "Tomatoes", "Cocoa", "Other"],
    color: "text-orange-500",
    bgColor: "bg-gray-200",
    image: "/icons/9.jpg",
    count: 20,
    href: "/category/horticulture",
  },
  {
    id: "animal-loan",
    name: "Animal Loan",
    icon: DollarSign,
    subcategories: ["Preventive", "Curative", "Supplement"],
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "/icons/10.jpg",
    count: 10,
    href: "/category/loan",
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    icon: Package,
    subcategories: ["NPK", "Urea", "DAP", "Soil", "Foliar"],
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "/icons/11.jpg",
    count: 30,
    href: "/category/fertilizers",
  },
  {
    id: "animal-feed",
    name: "Animal Feed",
    icon: Package,
    subcategories: ["Preventive", "Curative", "Supplement", "Powder", "Oral", "Injectable"],
    color: "text-green-600",
    bgColor: "bg-gray-200",
    image: "/icons/12.jpg",
    count: 10,
    href: "/category/feed",
  },
  {
    id: "animal-pharmacy",
    name: "Animal Pharmacy",
    icon: Pill,
    subcategories: ["Preventive", "Curative", "Supplement", "Powder", "Oral", "Injectable"],
    color: "text-orange-500",
    bgColor: "bg-gray-200",
    image: "/icons/14.jpg",
    count: 10,
    href: "/category/pharmacy",
  },
  {
    id: "animal-accessories",
    name: "Animal Accessories",
    icon: Gamepad2,
    subcategories: ["Drinkers", "Cages", "Feeding", "Transporting", "Housing"],
    color: "text-gray-700",
    bgColor: "bg-gray-200",
    image: "/icons/15.jpg",
    count: 15,
    href: "/category/accessories",
  },
];


export default function CategoriesGrid() {
  return (
  <section className="py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Categories</h2>
          <Link
            href="/categories"
            className="hidden lg:block text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
          >
            View All Categories
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href ?? `/categories/${category.id}`}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 aspect-square"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

     
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

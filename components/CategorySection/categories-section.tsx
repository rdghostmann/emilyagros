import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Wheat,
  Apple,
  Milk,
  Tractor,
  Sprout,
  Pill,
  Heart,
  Shield,
  DollarSign,
  Wrench,
  Beef,
  Handshake,
  ShieldCheck,
  HeartHandshake,
  SprayCan,
  TreePine,
  Flower,
  Leaf,
  PawPrint,
} from "lucide-react";

const categories = [
  {
    id: "trending",
    name: "Trending",
    icon: Wrench,
    subcategories: ["Tractors", "Shellers", "Sprayers", "Others"],
    color: "bg-gray-100 text-gray-600",
    image: "/icons/0.jpg",
    count: 45,
  },
  {
    id: "livestock-pets",
    name: "Livestock & Pets",
    icon: Beef,
    subcategories: ["Poultry", "Cattle", "Goat", "Pig", "Rabbits", "Sheeps", "Turkey"],
    color: "bg-purple-100 text-purple-600",
    image: "/icons/1.jpg",
    count: 80,
  },
  {
    id: "services",
    name: "Services",
    icon: Handshake,
    subcategories: ["Tractor Hiring", "Farm Setup", "Veterinary"],
    color: "bg-blue-100 text-blue-600",
    image: "/icons/2.jpg",
    count: 18,
  },
  {
    id: "agro-insurance",
    name: "Agro Insurance",
    icon: ShieldCheck,
    subcategories: ["Crop Insurance", "Livestock Insurance", "Farm Equipment Insurance", "Weather Insurance"],
    color: "bg-teal-100 text-teal-600",
    image: "/icons/3.jpg",
    count: 5,
  },
  {
    id: "tractor-farm-equipment",
    name: "Tractor / Farm Machines",
    icon: Wrench,
    subcategories: ["Tractor", "Sheller", "Sprayer", "Knapsack Sprayer", "Fish Pond", "Others"],
    color: "bg-gray-100 text-gray-600",
    image: "/icons/4.jpg",
    count: 45,
  },
  {
    id: "animal-mating",
    name: "Animal Mating",
    icon: HeartHandshake,
    subcategories: ["Dog", "Goat", "Pig", "AI Service", "Natural Mating"],
    color: "bg-pink-100 text-pink-600",
    image: "/icons/5.jpg",
    count: 12,
  },
  {
    id: "agro-chemicals-insecticides-pesticides",
    name: "Agro Chemicals / Pesticides",
    icon: SprayCan,
    subcategories: ["Herbicide", "Pesticide", "Fungicide"],
    color: "bg-yellow-100 text-yellow-600",
    image: "/icons/6.jpg",
    count: 28,
  },
  {
    id: "food-fruits-vegetables",
    name: "Food / Fruits & Vegetables",
    icon: Apple,
    subcategories: ["Fruit", "Vegetable", "Fresh", "Dried", "Packaged"],
    color: "bg-red-100 text-red-600",
    image: "/icons/7.jpg",
    count: 320,
  },
  {
    id: "seedlings",
    name: "Seedlings",
    icon: TreePine,
    subcategories: ["Maize", "Soybean", "Groundnut", "Hybrid", "Open-pollination"],
    color: "bg-green-50 text-green-500",
    image: "/icons/8.jpg",
    count: 60,
  },
  {
    id: "ornamental-crops",
    name: "Horticulture / Ornamental Crops",
    icon: Flower,
    subcategories: ["Maize", "Tomatoes", "Cocoa", "Other"],
    color: "bg-pink-50 text-pink-400",
    image: "/icons/9.jpg",
    count: 20,
  },
  {
    id: "animal-loan",
    name: "Animal Loan",
    icon: DollarSign,
    subcategories: ["Preventive", "Curative", "Supplement"],
    color: "bg-indigo-100 text-indigo-600",
    image: "/icons/10.jpg",
    count: 10,
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    icon: Leaf,
    subcategories: ["NPK", "Urea", "DAP", "Soil", "Foliar"],
    color: "bg-green-100 text-green-600",
    image: "/icons/11.jpg",
    count: 30,
  },
  {
    id: "animal-feed",
    name: "Animal Feed",
    icon: Pill,
    subcategories: ["Preventive", "Curative", "Supplement", "Powder", "Oral", "Injectable"],
    color: "bg-indigo-100 text-indigo-600",
    image: "/icons/12.jpg",
    count: 10,
  },
  {
    id: "animal-pharmacy",
    name: "Animal Pharmacy",
    icon: Pill,
    subcategories: ["Preventive", "Curative", "Supplement", "Powder", "Oral", "Injectable"],
    color: "bg-indigo-100 text-indigo-600",
    image: "/icons/14.jpg",
    count: 10,
  },
  {
    id: "animal-accessories",
    name: "Animal Accessories",
    icon: PawPrint,
    subcategories: ["Drinkers", "Cages", "Feeding", "Transporting", "Housing"],
    color: "bg-orange-100 text-orange-600",
    image: "/icons/15.jpg",
    count: 15,
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of agricultural products and services from trusted farmers and suppliers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.id} href={`/category/${category.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.map((sub) => (
                        <span key={sub} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

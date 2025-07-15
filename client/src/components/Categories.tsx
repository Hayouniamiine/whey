import { Zap, Shirt, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import supplementsImage from "@/assets/supplements-hero.jpg";
import sportswearImage from "@/assets/sportswear-hero.jpg";

const Categories = () => {
  const categories = [
    {
      id: "supplements",
      title: "Supplements",
      description: "Premium nutrition for peak performance",
      image: supplementsImage,
      icon: Zap,
      products: "150+ Products",
      color: "primary",
    },
    {
      id: "sportswear",
      title: "Sportswear",
      description: "High-performance athletic apparel",
      image: sportswearImage,
      icon: Shirt,
      products: "200+ Products",
      color: "accent",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to reach your fitness goals
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-card border border-border hover-lift cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-end min-h-[400px]">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl ${
                      category.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                      <p className={`text-sm font-medium ${
                        category.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}>
                        {category.products}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      className={`group/btn w-fit ${
                        category.color === 'primary' 
                          ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
                          : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      Shop {category.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-medium ${
                  category.color === 'primary' 
                    ? 'bg-primary/20 text-primary border border-primary/20' 
                    : 'bg-accent/20 text-accent border border-accent/20'
                }`}>
                  Popular
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
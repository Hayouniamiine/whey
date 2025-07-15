import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fitness Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                #1 Fitness Store
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Fuel Your</span>
                <br />
                <span className="text-foreground">Performance</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Premium supplements and sportswear for athletes who demand excellence. 
                Transform your training with science-backed nutrition and cutting-edge gear.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Shop Supplements
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Sportswear
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <p className="text-sm font-medium">Lab Tested</p>
              </div>
              <div className="text-center space-y-2">
                <Zap className="h-8 w-8 text-accent mx-auto" />
                <p className="text-sm font-medium">Fast Results</p>
              </div>
              <div className="text-center space-y-2">
                <Star className="h-8 w-8 text-success mx-auto" />
                <p className="text-sm font-medium">5-Star Rated</p>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="lg:flex justify-end hidden">
            <div className="card-hero space-y-6 max-w-sm">
              <h3 className="text-2xl font-bold text-gradient">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Satisfied Customers</span>
                  <span className="text-2xl font-bold text-primary">50K+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Products Available</span>
                  <span className="text-2xl font-bold text-accent">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Years Experience</span>
                  <span className="text-2xl font-bold text-success">10+</span>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: "1",
      name: "Marcus Johnson",
      role: "Professional Bodybuilder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: "FitStore's supplements have been a game-changer for my training. The quality is unmatched and results speak for themselves.",
      rating: 5,
    },
    {
      id: "2",
      name: "Sarah Williams",
      role: "Fitness Trainer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4a9?w=400&h=400&fit=crop&crop=face",
      content: "I recommend FitStore to all my clients. Their sportswear is comfortable, durable, and actually enhances performance.",
      rating: 5,
    },
    {
      id: "3",
      name: "David Chen",
      role: "CrossFit Athlete",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: "Fast shipping, premium quality, and excellent customer service. This is where serious athletes shop.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Athletes <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust FitStore for their fitness journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-6 hover-lift"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary opacity-60" />
              </div>

              {/* Content */}
              <blockquote className="text-card-foreground mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</p>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent mb-2">4.9</p>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-success mb-2">10+</p>
            <p className="text-muted-foreground">Years Trusted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
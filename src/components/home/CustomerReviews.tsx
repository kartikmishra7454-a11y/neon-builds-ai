import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    rating: 5,
    date: "2 days ago",
    comment: "Built my dream gaming PC here! Amazing selection of components and the compatibility checker saved me from making expensive mistakes. Customer service was top-notch!",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    date: "1 week ago",
    comment: "The PC builder tool is fantastic! It made selecting compatible parts so easy. My new workstation runs like a dream. Highly recommend!",
    verified: true
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 4,
    date: "2 weeks ago",
    comment: "Great prices and fast shipping. The pre-built gaming PC I bought performs excellently. Only wish there were more budget options.",
    verified: true
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    date: "3 weeks ago",
    comment: "As a first-time PC builder, the guides and recommendations were invaluable. Everything arrived perfectly packaged. Couldn't be happier!",
    verified: true
  }
];

export function CustomerReviews() {
  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              💬 Customer Reviews
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers are saying about their experience
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="gradient-border card-hover">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/30" />

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'fill-secondary text-secondary'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-muted-foreground line-clamp-4">
                  {review.comment}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  {review.verified && (
                    <span className="text-xs text-secondary">✓ Verified</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary">4.8/5</p>
              <p className="text-sm text-muted-foreground mt-1">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/10 border-secondary/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-secondary">10,000+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
            </CardContent>
          </Card>
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-accent">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfaction Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
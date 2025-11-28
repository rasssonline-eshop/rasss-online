import { Shield, Truck, HeadphonesIcon, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatUSDToPKR } from "@/lib/currency";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "SSL encrypted checkout",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: `Free shipping over ${formatUSDToPKR(50)}`,
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Expert assistance anytime",
  },
  {
    icon: Award,
    title: "Certified Products",
    description: "FDA approved & tested",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <Card
              key={badge.title}
              className="p-6 text-center hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center bg-primary/10 mb-3">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

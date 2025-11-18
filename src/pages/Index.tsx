import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showPromo, setShowPromo] = useState(false);
  useEffect(() => {
    const dismissed = localStorage.getItem("appPromoDismissed");
    if (!dismissed) setShowPromo(true);
  }, []);
  const dismissPromo = () => {
    localStorage.setItem("appPromoDismissed", "1");
    setShowPromo(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <ProductGrid />
        <TrustBadges />
      </main>
      <Footer />

      <Dialog open={showPromo} onOpenChange={setShowPromo}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Continue on App & Get 15% off</DialogTitle>
            <DialogDescription>
              Use code 'NUHDEEK15' on your first order. Scan to download our app.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="sm:col-span-2 space-y-3">
              <div className="flex gap-3">
                <div className="flex-1 rounded-xl border bg-muted/20 p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-2">iOS App</div>
                  <div className="h-32 w-full bg-muted rounded-md flex items-center justify-center">QR</div>
                </div>
                <div className="flex-1 rounded-xl border bg-muted/20 p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-2">Android App</div>
                  <div className="h-32 w-full bg-muted rounded-md flex items-center justify-center">QR</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Apply at checkout. Limited time offer.</div>
            </div>
            <div className="sm:col-span-1 flex sm:block justify-end">
              <Button className="w-full sm:w-auto" onClick={dismissPromo}>Continue on Web</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

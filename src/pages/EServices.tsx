import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
    <div className="container mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">E-Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">Online Consultation</Card>
        <Card className="p-6">Prescription Refills</Card>
        <Card className="p-6">Health Reports</Card>
      </div>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default EServices;
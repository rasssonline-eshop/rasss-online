import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Stethoscope, FileText, TestTube, PhoneCall } from "lucide-react";

const EServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
    <div className="container mx-auto px-4 py-12 space-y-10">
      <Card className="border-2 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500" />
          <div className="relative p-8 text-white flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold">E-Services</div>
              <div className="text-4xl font-black">Care at your fingertips</div>
            </div>
            <Button className="rounded-none bg-white text-teal-700">Get Started</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 space-y-3 border-2">
          <Stethoscope className="h-7 w-7 text-teal-700" />
          <div className="font-bold">Online Consultation</div>
          <p className="text-sm text-muted-foreground">Talk to certified experts from home.</p>
          <Button variant="outline" className="rounded-none">Book Now</Button>
        </Card>
        <Card className="p-6 space-y-3 border-2">
          <FileText className="h-7 w-7 text-teal-700" />
          <div className="font-bold">Prescription Refills</div>
          <p className="text-sm text-muted-foreground">Refill prescriptions and schedule delivery.</p>
          <Button variant="outline" className="rounded-none">Refill</Button>
        </Card>
        <Card className="p-6 space-y-3 border-2">
          <TestTube className="h-7 w-7 text-teal-700" />
          <div className="font-bold">Lab Tests</div>
          <p className="text-sm text-muted-foreground">Book tests with instant results online.</p>
          <Button variant="outline" className="rounded-none">Book Test</Button>
        </Card>
        <Card className="p-6 space-y-3 border-2">
          <PhoneCall className="h-7 w-7 text-teal-700" />
          <div className="font-bold">Pharmacist Support</div>
          <p className="text-sm text-muted-foreground">Get help with medications and care plans.</p>
          <Button variant="outline" className="rounded-none">Contact</Button>
        </Card>
      </div>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default EServices;
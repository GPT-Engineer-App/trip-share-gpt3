import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Company Background and Mission Statement */}
      <Card>
        <CardHeader>
          <CardTitle>About SharECar TriP</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            SharECar TriP is dedicated to providing a seamless and efficient ride-sharing experience. Our mission is to connect drivers and riders in a way that is convenient, affordable, and environmentally friendly.
          </p>
        </CardContent>
      </Card>

      {/* Team Information */}
      <Card>
        <CardHeader>
          <CardTitle>Meet Our Team</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=3" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">CEO & Founder</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=4" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-medium">Jane Smith</p>
              <p className="text-sm text-muted-foreground">CTO</p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <p>contact@sharecartrip.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <p>+1 234 567 8900</p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Details */}
      <Card>
        <CardHeader>
          <CardTitle>Our Values</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At SharECar TriP, we value safety, reliability, and sustainability. We strive to create a community where everyone can enjoy the benefits of ride-sharing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
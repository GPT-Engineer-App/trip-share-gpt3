import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Phone } from "lucide-react";

const MyRides = ({ isDriver }) => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Rides</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          {isDriver && <TabsTrigger value="ongoing">Ongoing</TabsTrigger>}
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <UpcomingRides isDriver={isDriver} />
        </TabsContent>
        {isDriver && (
          <TabsContent value="ongoing">
            <OngoingRides />
          </TabsContent>
        )}
        <TabsContent value="past">
          <PastRides isDriver={isDriver} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const UpcomingRides = ({ isDriver }) => {
  const rides = [
    {
      id: 1,
      name: isDriver ? "John Doe" : "Alice Smith",
      avatar: "https://i.pravatar.cc/150?img=1",
      car: "Toyota Camry",
      carType: "Sedan",
      pickup: "123 Main St",
      estimatedArrival: "10:30 AM",
    },
    // Add more ride objects as needed
  ];

  return (
    <div className="space-y-4">
      {rides.map((ride) => (
        <Card key={ride.id}>
          <CardContent className="flex items-center space-x-4 py-4">
            <Avatar>
              <AvatarImage src={ride.avatar} />
              <AvatarFallback>{ride.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{ride.name}</p>
              {!isDriver && (
                <div className="flex items-center">
                  <Star className="text-yellow-400 h-4 w-4 mr-1" />
                  <span className="text-sm">4.8</span>
                </div>
              )}
              {!isDriver && (
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{ride.carType}</Badge>
                  <span className="text-sm text-muted-foreground">{ride.car}</span>
                </div>
              )}
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{ride.pickup}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>{ride.estimatedArrival}</span>
              </div>
            </div>
          </CardContent>
          <CardContent className="pt-0">
            <Button variant="outline" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Contact {isDriver ? "Rider" : "Driver"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const OngoingRides = () => {
  // Implement ongoing rides for drivers
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ongoing Ride</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Add real-time information, map view, and estimated arrival time */}
        <p>Implement map view and real-time information here</p>
      </CardContent>
    </Card>
  );
};

const PastRides = ({ isDriver }) => {
  const rides = [
    {
      id: 1,
      name: isDriver ? "Jane Smith" : "Bob Johnson",
      avatar: "https://i.pravatar.cc/150?img=2",
      destination: "456 Elm St",
      date: "2023-03-15",
      time: "14:45",
      fare: "$25.00",
    },
    // Add more past ride objects as needed
  ];

  return (
    <div className="space-y-4">
      {rides.map((ride) => (
        <Card key={ride.id}>
          <CardContent className="flex items-center space-x-4 py-4">
            <Avatar>
              <AvatarImage src={ride.avatar} />
              <AvatarFallback>{ride.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{ride.name}</p>
              <p className="text-sm text-muted-foreground">{ride.destination}</p>
              <p className="text-sm text-muted-foreground">
                {ride.date} at {ride.time}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{ride.fare}</p>
              <Button variant="link" size="sm">
                {isDriver ? "Report Rider" : "Rate Driver"}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MyRides;
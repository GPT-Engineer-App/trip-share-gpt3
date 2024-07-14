import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Star, Settings, HelpCircle, Car, DollarSign, Clock, ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Index = () => {
  const [isDriver, setIsDriver] = useState(false);
  const [returnTrip, setReturnTrip] = useState(false);
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <Button variant="ghost" size="icon">
          <Settings className="h-6 w-6" />
        </Button>
        <div className="flex items-center space-x-2">
          <Label htmlFor="mode-toggle">Rider</Label>
          <Switch
            id="mode-toggle"
            checked={isDriver}
            onCheckedChange={setIsDriver}
          />
          <Label htmlFor="mode-toggle">Driver</Label>
        </div>
      </header>

      {/* Promotional Banner */}
      <div className="bg-primary text-primary-foreground p-4 rounded-lg mb-8">
        <p className="text-center">Get 50% off your first ride with code: FIRST50</p>
      </div>

      {/* Search Bar */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <form className="space-y-4">
            <Input placeholder="Enter pick-up location" />
            <Input placeholder="Enter destination" />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="return-trip"
                checked={returnTrip}
                onCheckedChange={setReturnTrip}
              />
              <Label htmlFor="return-trip">Return trip</Label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="departure-date">Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`w-full justify-start text-left font-normal ${!departureDate && "text-muted-foreground"}`}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Input type="time" placeholder="Departure Time" />
            </div>
            {returnTrip && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="return-date">Return Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`w-full justify-start text-left font-normal ${!returnDate && "text-muted-foreground"}`}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Input type="time" placeholder="Return Time" />
                </div>
                <Input placeholder="Return pick-up location (if different)" />
                <Input placeholder="Return destination (if different)" />
              </>
            )}
            {isDriver && <Input placeholder="Enter drop-off location (optional)" />}
            <Button className="w-full">
              {isDriver ? "Offer Ride" : "Find Ride"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Main Content */}
      {isDriver ? <DriverView /> : <RiderView />}

      {/* Help & Support */}
      <footer className="mt-8 text-center">
        <Button variant="link">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help & Support
        </Button>
      </footer>
    </div>
  );
};

const RiderView = () => {
  return (
    <Tabs defaultValue="available-rides">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="available-rides">Available Rides</TabsTrigger>
        <TabsTrigger value="filters">Filters</TabsTrigger>
      </TabsList>
      <TabsContent value="available-rides">
        <div className="space-y-4">
          {[1, 2, 3].map((ride) => (
            <RideCard key={ride} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="filters">
        <Card>
          <CardHeader>
            <CardTitle>Filter Rides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Car Type</Label>
              <div className="flex space-x-2">
                <Button variant="outline">Sedan</Button>
                <Button variant="outline">SUV</Button>
                <Button variant="outline">Hatchback</Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Price Range</Label>
              <Slider defaultValue={[0, 100]} max={100} step={1} />
            </div>
            <div className="space-y-2">
              <Label>Driver Rating</Label>
              <Slider defaultValue={[0, 5]} max={5} step={0.5} />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="instant-booking" />
              <Label htmlFor="instant-booking">Instant Booking</Label>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

const DriverView = () => {
  return (
    <div className="space-y-8">
      <Button className="w-full" size="lg">
        Offer a Ride
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>My Rides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2].map((ride) => (
              <Card key={ride}>
                <CardContent className="flex items-center space-x-4 py-4">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${ride}`} />
                    <AvatarFallback>RD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Rider {ride}</p>
                    <p className="text-sm text-muted-foreground">Downtown, City Center</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Clock className="inline-block mr-1 h-4 w-4" />
                    15 min
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const RideCard = () => {
  return (
    <Card>
      <CardContent className="flex items-center space-x-4 py-4">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=1" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium">John Doe</p>
          <div className="flex items-center">
            <Star className="text-yellow-400 h-4 w-4 mr-1" />
            <span className="text-sm">4.8</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">
            <DollarSign className="inline-block h-4 w-4" />
            25.00
          </p>
          <p className="text-sm text-muted-foreground">
            <Clock className="inline-block mr-1 h-4 w-4" />
            10 min
          </p>
        </div>
      </CardContent>
      <CardContent className="pt-0">
        <div className="flex items-center space-x-2">
          <Car className="h-4 w-4" />
          <span className="text-sm">Toyota Camry</span>
          <Badge>Sedan</Badge>
        </div>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          <ArrowRight className="h-4 w-4 mr-1" />
          <span>Return trip available</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;
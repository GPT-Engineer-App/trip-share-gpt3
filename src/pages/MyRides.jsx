import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Star, MapPin, Clock, Phone, CalendarIcon, Search, Plus } from "lucide-react";
import { toast } from "sonner";

const MyRides = ({ isDriver }) => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPostRideDialog, setShowPostRideDialog] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Rides</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search rides..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={() => setShowPostRideDialog(true)}>
          <Plus className="mr-2 h-4 w-4" /> Post a Ride
        </Button>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <UpcomingRides isDriver={isDriver} searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="ongoing">
          <OngoingRides isDriver={isDriver} searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="past">
          <PastRides isDriver={isDriver} searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>
      <PostRideDialog open={showPostRideDialog} onOpenChange={setShowPostRideDialog} />
    </div>
  );
};

const UpcomingRides = ({ isDriver, searchQuery }) => {
  const rides = [
    {
      id: 1,
      name: isDriver ? "John Doe" : "Alice Smith",
      avatar: "https://i.pravatar.cc/150?img=1",
      car: "Toyota Camry",
      carType: "Sedan",
      pickup: "123 Main St",
      destination: "456 Elm St",
      date: "2023-04-15",
      time: "10:30 AM",
      persons: 2,
    },
    // Add more ride objects as needed
  ];

  const filteredRides = rides.filter(ride =>
    ride.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ride.pickup.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ride.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredRides.map((ride) => (
        <RideCard key={ride.id} ride={ride} isDriver={isDriver} />
      ))}
    </div>
  );
};

const OngoingRides = ({ isDriver, searchQuery }) => {
  // Implement ongoing rides
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ongoing Ride</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Implement ongoing rides view here</p>
      </CardContent>
    </Card>
  );
};

const PastRides = ({ isDriver, searchQuery }) => {
  const rides = [
    {
      id: 1,
      name: isDriver ? "Jane Smith" : "Bob Johnson",
      avatar: "https://i.pravatar.cc/150?img=2",
      destination: "456 Elm St",
      date: "2023-03-15",
      time: "14:45",
      fare: "$25.00",
      cancellationReason: "Schedule change",
    },
    // Add more past ride objects as needed
  ];

  const filteredRides = rides.filter(ride =>
    ride.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ride.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredRides.map((ride) => (
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
              {ride.cancellationReason && (
                <p className="text-sm text-red-500">Cancelled: {ride.cancellationReason}</p>
              )}
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

const RideCard = ({ ride, isDriver }) => {
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  return (
    <Card>
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
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{ride.carType}</Badge>
            <span className="text-sm text-muted-foreground">{ride.car}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{ride.pickup} to {ride.destination}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span>{ride.date} at {ride.time}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Persons: {ride.persons}
          </div>
        </div>
      </CardContent>
      <CardContent className="pt-0 flex justify-between">
        <Button variant="outline">
          <Phone className="h-4 w-4 mr-2" />
          Contact {isDriver ? "Rider" : "Driver"}
        </Button>
        <Button variant="outline" onClick={() => setShowCancelDialog(true)}>
          Cancel Ride
        </Button>
      </CardContent>
      <CancelRideDialog open={showCancelDialog} onOpenChange={setShowCancelDialog} />
    </Card>
  );
};

const PostRideDialog = ({ open, onOpenChange }) => {
  const [date, setDate] = useState();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Post a Ride</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="pickup" className="text-right">
              Pick-up
            </Label>
            <Input id="pickup" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="destination" className="text-right">
              Destination
            </Label>
            <Input id="destination" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={`col-span-3 justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time
            </Label>
            <Input id="time" type="time" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="car-type" className="text-right">
              Car Type
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select car type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="hatchback">Hatchback</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="car-number" className="text-right">
              Car Number
            </Label>
            <Input id="car-number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="persons" className="text-right">
              Persons
            </Label>
            <Input id="persons" type="number" min="1" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notes" className="text-right">
              Notes
            </Label>
            <Textarea id="notes" className="col-span-3" />
          </div>
        </div>
        <Button onClick={() => onOpenChange(false)}>Post Ride</Button>
      </DialogContent>
    </Dialog>
  );
};

const CancelRideDialog = ({ open, onOpenChange }) => {
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

  const handleCancel = () => {
    if (!reason) {
      toast.error("Please select a reason for cancellation.");
      return;
    }
    if (reason === "other" && !details.trim()) {
      toast.error("Please provide details for the cancellation reason.");
      return;
    }
    // Here you would typically call an API to cancel the ride
    toast.success("Ride cancelled successfully.");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cancel Ride</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="cancel-reason">Reason for cancellation</Label>
            <Select onValueChange={setReason} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="schedule-change">Schedule change</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {reason === "other" && (
            <div className="space-y-2">
              <Label htmlFor="cancel-details">Please provide more details</Label>
              <Textarea 
                id="cancel-details" 
                placeholder="Please provide more details..." 
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />
            </div>
          )}
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button variant="destructive" onClick={handleCancel}>Confirm Cancellation</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MyRides;
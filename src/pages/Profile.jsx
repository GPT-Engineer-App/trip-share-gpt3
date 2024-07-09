import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CreditCard, Bell, Car, Star } from "lucide-react";

const Profile = () => {
  const [isDriver, setIsDriver] = useState(false);
  const [date, setDate] = useState();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <Tabs defaultValue="basic-info">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic-info">Basic Info</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="basic-info">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button>Change Picture</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input id="occupation" placeholder="Software Developer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="father-name">Father's Name</Label>
                  <Input id="father-name" placeholder="John Doe Sr." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
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
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="123 Main St, City, Country" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Short Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="id-upload">Upload ID</Label>
                <Input id="id-upload" type="file" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="driver-mode" checked={isDriver} onCheckedChange={setIsDriver} />
                <Label htmlFor="driver-mode">Driver Mode</Label>
              </div>
              <div className="space-y-2">
                <Label>Push Notifications</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="notify-rides" />
                    <Label htmlFor="notify-rides">Notify me about new rides</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notify-messages" />
                    <Label htmlFor="notify-messages">Notify me about new messages</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notify-promos" />
                    <Label htmlFor="notify-promos">Notify me about promotions</Label>
                  </div>
                </div>
              </div>
              {!isDriver && (
                <div className="space-y-2">
                  <Label>Trip Preferences</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="prefer-quiet" />
                      <Label htmlFor="prefer-quiet">I prefer quiet rides</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="prefer-ac" />
                      <Label htmlFor="prefer-ac">I prefer air-conditioned rides</Label>
                    </div>
                  </div>
                </div>
              )}
              {isDriver && (
                <div className="space-y-2">
                  <Label>Car Details</Label>
                  <Input placeholder="Car Make and Model" />
                  <Input placeholder="License Plate Number" />
                  <Label>Availability</Label>
                  <Textarea placeholder="Set your preferred days and times for offering rides" />
                </div>
              )}
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Visa ending in 1234</span>
                </div>
                <Button variant="outline">Remove</Button>
              </div>
              <Button>Add New Payment Method</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>{isDriver ? "Reviews You've Given" : "Your Reviews"}</CardTitle>
            </CardHeader>
            <CardContent>
              {[1, 2, 3].map((review) => (
                <div key={review} className="mb-4 p-4 border rounded">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-600">
                    "Great {isDriver ? "passenger" : "driver"}! Very {isDriver ? "respectful" : "punctual"} and friendly."
                  </p>
                  <p className="text-xs text-gray-400 mt-2">- {isDriver ? "You" : "John D."}, 2 weeks ago</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
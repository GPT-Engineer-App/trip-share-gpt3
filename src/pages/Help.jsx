import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Help & Support</h1>
      </header>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create an account?</AccordionTrigger>
              <AccordionContent>
                To create an account, click on the "Sign Up" button on the homepage and fill in the required details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I reset my password?</AccordionTrigger>
              <AccordionContent>
                To reset your password, click on "Forgot Password" on the login page and follow the instructions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I book a ride?</AccordionTrigger>
              <AccordionContent>
                To book a ride, enter your pick-up and drop-off locations in the search bar and select a ride from the available options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I contact customer support?</AccordionTrigger>
              <AccordionContent>
                You can contact customer support via email at support@sharecartrip.com or call us at +1 234 567 8900.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do I update my profile information?</AccordionTrigger>
              <AccordionContent>
                To update your profile information, go to the "Profile" section in your account settings and make the necessary changes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Help Articles Section */}
      <Card>
        <CardHeader>
          <CardTitle>Help Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="getting-started">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="account-management">Account Management</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>
            <TabsContent value="getting-started">
              <ul className="space-y-2">
                <li>
                  <h3 className="font-semibold">How to Sign Up</h3>
                  <p>Learn how to create a new account on SharECar TriP.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Getting Started with SharECar TriP</h3>
                  <p>An introduction to using our ride-sharing platform.</p>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="account-management">
              <ul className="space-y-2">
                <li>
                  <h3 className="font-semibold">Managing Your Account</h3>
                  <p>How to update your profile, change your password, and more.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Privacy Settings</h3>
                  <p>Learn how to adjust your privacy settings.</p>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="payments">
              <ul className="space-y-2">
                <li>
                  <h3 className="font-semibold">Payment Methods</h3>
                  <p>How to add, remove, and manage your payment methods.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Refund Policy</h3>
                  <p>Information about our refund policy and how to request a refund.</p>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="troubleshooting">
              <ul className="space-y-2">
                <li>
                  <h3 className="font-semibold">Troubleshooting Common Issues</h3>
                  <p>Steps to resolve common issues you might encounter.</p>
                </li>
                <li>
                  <h3 className="font-semibold">Contacting Support</h3>
                  <p>How to get in touch with our support team for further assistance.</p>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Contact Support Section */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="flex-1">Email Us</Button>
            <Button variant="outline" className="flex-1">Call Us</Button>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Input id="message" placeholder="Your Message" required />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Help;
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Camera, Upload } from "lucide-react"

export default function ProfilePage() {
  return (
    (<div>
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="password">Change Password</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 flex flex-col items-center">
              <div className="relative mb-4">
                <div
                  className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-100">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover" />
                </div>
                <button
                  className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full">
                  <Camera size={18} />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-4 text-center">
                Allowed file types: PNG, JPG, JPEG. <br />
                Maximum size: 2MB
              </p>
              <Button variant="outline" className="flex items-center gap-2">
                <Upload size={16} />
                Upload New Photo
              </Button>
            </div>

            <div className="col-span-1 md:col-span-2">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Antoni" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Jonson" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="antoni@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    rows={4}
                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    defaultValue="I'm a software developer with a passion for creating beautiful user interfaces."></textarea>
                </div>

                <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </form>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="password" className="bg-white p-6 rounded-lg shadow-sm">
          <form className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline">Cancel</Button>
              <Button>Update Password</Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>)
  );
}

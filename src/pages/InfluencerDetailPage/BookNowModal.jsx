import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function BookNowModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto overflow-x-hidden p-0">
          <DialogHeader className="sticky top-0 bg-white z-10 border-b border-text/20 p-6">
            <DialogTitle className="text-2xl font-bold text-black text-center">
              Book Influencer Campaign
            </DialogTitle>
            <DialogDescription className="text-text text-center">
              Fill in your details and we'll get back to you within 24 hours
            </DialogDescription>
          </DialogHeader>

          <div className="p-6 space-y-4 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label
                  htmlFor="name"
                  className="text-sm text-black font-medium"
                >
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-sm text-black font-medium"
                >
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label
                  htmlFor="phone"
                  className="text-sm text-black font-medium"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+92 300 1234567"
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="platform"
                  className="text-sm text-black font-medium"
                >
                  Platform <span className="text-red-500">*</span>
                </Label>
                <Select name="platform" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label
                  htmlFor="contentType"
                  className="text-sm text-black font-medium"
                >
                  Content Type <span className="text-red-500">*</span>
                </Label>
                <Select name="contentType" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="post">Post</SelectItem>
                    <SelectItem value="story">Story</SelectItem>
                    <SelectItem value="reel">Reel</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="budget"
                  className="text-sm text-black font-medium"
                >
                  Budget (PKR) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  type="number"
                  placeholder="e.g., 50000"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="campaignDetails"
                className="text-sm text-black font-medium"
              >
                Campaign Details <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="campaignDetails"
                name="campaignDetails"
                placeholder="Describe your campaign goals, target audience, and requirements..."
                rows={3}
                required
                className="w-full resize-none"
              />
            </div>

            <div className="space-y-3">
              <Label
                htmlFor="additionalNotes"
                className="text-sm text-black font-medium"
              >
                Additional Notes
              </Label>
              <Textarea
                id="additionalNotes"
                name="additionalNotes"
                placeholder="Any special requests or additional information..."
                rows={2}
                className="w-full resize-none"
              />
            </div>
          </div>

          <DialogFooter className="sticky bottom-0 bg-white border-t p-4 flex gap-3 justify-end">
            <DialogClose asChild>
              <Button variant="outline" type="button" size="sm">
                Cancel
              </Button>
            </DialogClose>
            <Button variant="secondary" type="submit" size="sm">
              Submit Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

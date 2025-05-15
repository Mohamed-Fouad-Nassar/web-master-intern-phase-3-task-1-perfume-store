import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactData() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold pb-4">Contact Information</h2>
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-main">
          <MapPin className="size-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-1">Address</h3>
          <address className="text-white/90 text-sm">
            123 Main Street, City, State ZIP
          </address>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-main">
          <Phone className="size-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-1">Phone</h3>
          <address className="text-white/90 text-sm">+1 (123) 456-7890</address>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-main">
          <Mail className="size-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold mb-1">Email</h3>
          <address className="text-white/90 text-sm">
            contact@perfumestore.com
          </address>
        </div>
      </div>
    </div>
  );
}

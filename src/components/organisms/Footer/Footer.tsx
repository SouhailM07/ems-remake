import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-20 flex justify-center">
      <div className="w-full bg-white rounded-t-3xl shadow-xl border border-gray-200 p-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Description */}
          <div className="max-w-sm">
            <div className="flex items-center w-[20rem]">
              <Image
                src="/logo-ems-algerie-site.png"
                alt="logo"
                height={480}
                width={480}
                className="select-none drop-shadow-sm"
              />
            </div>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              EMS Champion Post Algeria provides fast, secure and reliable
              national & international delivery — ensuring your parcels arrive
              safely and on time.
            </p>

            <div className="flex items-center gap-4 mt-5 text-gray-700 text-2xl">
              <FaXTwitter className=" hover:text-blue-500 transition" />
              <FaInstagram className=" hover:text-[#FF8F21] transition" />
              <FaLinkedin className=" hover:text-blue-500 transition" />
              <FaGithub className=" hover:text-[#FF8F21] transition" />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-14">
            <div>
              <h3 className="font-semibold mb-3 text-[#FF8F21]">Services</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="hover:text-blue-500 cursor-pointer">
                  Track Parcel
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Send Shipment
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Delivery Points
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Shipping Estimate
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-[#FF8F21]">Resources</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
                <li className="hover:text-blue-500 cursor-pointer">
                  Help Center
                </li>
                <li className="hover:text-blue-500 cursor-pointer">Blog</li>
                <li className="hover:text-blue-500 cursor-pointer">Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-[#FF8F21]">Company</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="hover:text-blue-500 cursor-pointer">
                  About EMS DZ
                </li>
                <li className="hover:text-blue-500 cursor-pointer">Careers</li>
                <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                <li className="hover:text-blue-500 cursor-pointer">Partners</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EMS Algeria. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-blue-500 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-500 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-blue-500 cursor-pointer">
              Cookies Settings
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

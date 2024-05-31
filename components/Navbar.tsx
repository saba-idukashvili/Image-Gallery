import {
  GalleryVerticalIcon,
  Grid3x3Icon,
  ImageIcon,
  UploadIcon,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="hidden md:flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <GalleryVerticalIcon className="h-6 w-6" />
            <span className="">Picture Gallery</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <Grid3x3Icon className="h-4 w-4" />
              Gallery
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <UploadIcon className="h-4 w-4" />
              Upload
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <ImageIcon className="h-4 w-4" />
              View
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

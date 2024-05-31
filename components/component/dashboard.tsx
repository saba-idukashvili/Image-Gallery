"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  GalleryVerticalIcon,
  Grid3x3Icon,
  ImageIcon,
  MenuIcon,
  SearchIcon,
  UploadIcon,
} from "lucide-react";
import Navbar from "../Navbar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import Images from "../Images";

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <Navbar />
      </div>
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="md:hidden flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex h-full max-h-screen flex-col gap-2">
                  <div className="flex h-[60px] items-center border-b px-1">
                    <Link
                      className="flex items-center gap-2 font-semibold"
                      href="#"
                    >
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
              </SheetContent>
            </Sheet>
          </div>
          <div className="w-full flex-1">
            <form>
              <div className="relative flex items-center">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search pictures..."
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <Avatar>
                  <AvatarImage
                    alt="@shadcn"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-xl md:text-2xl">Gallery</h1>
            <Button className="ml-auto">
              <UploadIcon className="h-4 md:w-4 mr-2" />
              <CldUploadButton
                uploadPreset="xhqwumcw"
                onUpload={() => window.location.reload()}
              />
            </Button>
          </div>
          <div>
            <Images />
          </div>
        </main>
      </div>
    </div>
  );
}

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import {
  HiOutlineBell,
  HiOutlineChatAlt2,
  HiOutlineSearch,
} from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="bg-neutral-200 h-16 px-4 w-full flex justify-between items-center border-b border-gray-400">
      <div className="relative">
        <HiOutlineSearch
          size={20}
          className="absolute top-1/2 -translate-y-1/2 left-2 text-neutral-400"
        />
        <input
          type="text "
          placeholder="Search"
          className="font-bold focus:outline-none active:outline-none h-10 w-[24rem] px-10 py-1  border-gray-200 rounded-xl text-sm"
        />
      </div>
      <div className="flex gap-3 items-center">
        <Popover>
          {({ open }) => (
            <>
              <PopoverButton className="p-1.5 rounded-lg inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
                <HiOutlineChatAlt2 fontSize={24} />
              </PopoverButton>
              <PopoverPanel anchor="bottom" className="flex flex-col">
                <a href="/insights">Insights</a>
                <a href="/automations">Automations</a>
                <a href="/reports">Reports</a>
              </PopoverPanel>
            </>
          )}
        </Popover>

        <HiOutlineBell fontSize={24} />
      </div>
    </div>
  );
}

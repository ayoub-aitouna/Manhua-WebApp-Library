"use client";
import { useModal } from "@/app/provider/modal-provider";
import Image from "next/image";
import React from "react";
import Search from "@/app/ui/modal/search";
const NavProfile = () => {
  const { OpenModal, CancelModal } = useModal();
  const OnSearsh = () => {
    OpenModal(
      <Search
        title="Are you sure you want to Clear this Chat?"
        body="The room will remain, but all messages will be deleted"
        onCancel={() => CancelModal()}
        onSearch={async () => {
          try {
            CancelModal();
            window.location.reload();
          } catch (error) {
            console.error("Error clearing chat:", error);
          }
        }}
      />
    );
  };
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <Image
        src={"/assets/Icon-discord.png"}
        alt="profile"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div
        onClick={() => OnSearsh()}
        className="w-52 h-10 rounded-xl bg-[#A1A1AA] bg-opacity-20 cursor-pointer flex flex-row justify-start items-center px-2 text-[#A1A1AA] gap-2"
      >
        <Image
          src={"/assets/Icon-search.png"}
          alt="search"
          width={20}
          height={20}
        />
        <p>Search...</p>
      </div>
      <div className="bg-gradient-to-br from-[#FFB457] to-[#FF705B] w-10 h-10  grid place-content-center rounded-full">
        <Image
          src={"/assets/Icon-user.png"}
          alt="profile"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default NavProfile;

"use client";

import { assests } from "@/lib/assests";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePicture = ({
  height = 40,
  width = 40,
}: {
  height?: number;
  width?: number;
}) => {
  const session = useSession();

  const avatar = " user?.avatar;";

  return (
    <Image
      className="rounded-full object-cover"
      src={avatar ? avatar : assests.DefaultAvatar}
      alt="default avater"
      height={height}
      width={width}
    />
  );
};

export default ProfilePicture;

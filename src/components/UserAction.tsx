"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FC } from "react";

type Props = {
  userId: string;
  role: "admin" | "user" | "instructor" | "superAdmin";
};

const UserAction: FC<Props> = ({ userId, role }) => {
  const toast = useToast();

  // const handleChangeRole = async (value: string) => {
  //   await updateUserRole({
  //     userId: userId,
  //     role: value,
  //   });

  //   await customRevalidateTag("User");
  // };

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("User Role update success");
  //   } else if (error) {
  //     const errorData = error as any;
  //     toast.error(errorData?.data?.message);
  //   }
  // }, [error, isSuccess]);

  return (
    <div>
      <div className="min-w-[100px] w-full">
        <Select
          defaultValue={role}
          // onValueChange={(value) => handleChangeRole(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Update User Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default UserAction;

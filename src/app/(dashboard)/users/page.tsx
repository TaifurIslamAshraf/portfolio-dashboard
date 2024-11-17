import NavHeader from "@/components/nav-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserAction from "@/components/UserAction";
import { userData } from "@/lib/fetch/user.fetch";
import { IUser } from "@/types/user";

const bread = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: "/users",
    text: "Users",
    last: true,
  },
];

const Users = async () => {
  const data = await userData.getUsers();
  const allUsers = data?.data as IUser[];
  console.log(allUsers);

  return (
    <>
      <NavHeader bread={bread} />
      <div className="px-4">
        <div className="mb-4">
          <h1 className="font-bold text-2xl uppercase">All Users</h1>
        </div>

        <Table className="">
          <TableHeader className="">
            <TableRow>
              <TableHead className="min-w-[140px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allUsers &&
              allUsers.map((items) => (
                <TableRow key={items?._id}>
                  <TableCell>{items?.name}</TableCell>
                  <TableCell>{items?.email}</TableCell>
                  <TableCell>
                    <UserAction role={items.role} userId={items?._id} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Users;

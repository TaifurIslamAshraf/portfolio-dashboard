export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  profile: {
    avatar?: string;
    bio?: string;
    website?: string;
    location?: string;
    social?: {
      linkedin?: string;
      github?: string;
      twitter?: string;
    };
  };
}

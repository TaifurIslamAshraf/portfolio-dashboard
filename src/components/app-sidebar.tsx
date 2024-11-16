"use client";

import { BookOpen, Frame, Map, NotepadText, PieChart, Zap } from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Portfolio",
      url: "/portfolio",
      icon: NotepadText,
      items: [
        {
          title: "All Projects",
          url: "/projects",
        },
        {
          title: "Create Project",
          url: "/projects/create",
        },
      ],
    },
    {
      title: "Blogs",
      url: "/blogs",
      icon: BookOpen,
      items: [
        {
          title: "All Blogs",
          url: "/blogs",
        },
        {
          title: "Create Blog",
          url: "/blogs/create",
        },
      ],
    },
    {
      title: "Skills",
      url: "/skill",
      icon: Zap,
      items: [
        {
          title: "All Skills",
          url: "/skill",
        },
        {
          title: "Create Skill",
          url: "/skill/create",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="border p-2 border-secondary">
          <h1 className="font-bold text-2xl">Portfolio</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

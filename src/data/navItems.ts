import { Menu } from "@/interfaces";
import {
    CheckSquare,
    FolderKanban,
    LayoutDashboard,
    MessageSquare,
    Settings,
    Users
} from "lucide-react";

export const menuItems: Menu[] = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Proyectos",
        url: "/proyectos",
        icon: FolderKanban,
    },
    {
        title: "Tareas",
        url: "/tareas",
        icon: CheckSquare,
    },
    {
        title: "Chat",
        url: "/chat",
        icon: MessageSquare,
    },
    {
        title: "Team",
        url: "/team",
        icon: Users,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]

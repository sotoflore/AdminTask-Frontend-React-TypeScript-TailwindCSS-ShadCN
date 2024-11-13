import { createBrowserRouter } from "react-router-dom";
import { LayoutAdmin } from "@/layouts/LayoutAdmin";
import {ProjectsPage} from "@/pages/ProjectsPage";
import {DashboardPage} from "@/pages/DashboardPage";
import {TaskPage} from "@/pages/TaskPage";
import {ChatPage} from "@/pages/ChatPage";
import { TeamPage } from "@/pages/TeamPage";
import { SettingsPage } from "@/pages/SettingsPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutAdmin />,
        children: [
            {
                //path: '',
                index: true,
                element: <DashboardPage />
            },
            {
                path: 'proyectos',
                element: <ProjectsPage/>
            },
            {
                path: 'tareas',
                element: <TaskPage/>
            },
            {
                path: 'chat',
                element: <ChatPage/>
            },
            {
                path: 'team',
                element: <TeamPage />
            },
            {
                path: 'settings',
                element: <SettingsPage />
            },
        ]
    }
])
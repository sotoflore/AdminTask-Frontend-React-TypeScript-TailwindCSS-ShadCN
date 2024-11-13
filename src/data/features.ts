import { DataFeature } from "@/interfaces";
import { Calendar, CheckSquare, Clock, Users } from "lucide-react";

export const dataFeature: DataFeature[] = [
    {
        id: 1,
        title: "Proyectos Activos",
        description: "Cantidad de proyectos activos.",
        quantity: 10,
        Icon: Calendar
    },
    {
        id: 2,
        quantity: 28,
        title: "Miembros del Equipo",
        description: "Cantidad de miembros del equipo.",
        Icon: Users
    },
    {
        id: 3,
        title: "Tareas Pendientes",
        description: "Cantidad de tareas por realizar.",
        quantity: 3,
        Icon: Clock
    },
    {
        id: 4,
        title: "Tareas Completadas",
        description: "Cantidad de tareas completadas.",
        quantity: 6,
        Icon: CheckSquare
    }
]
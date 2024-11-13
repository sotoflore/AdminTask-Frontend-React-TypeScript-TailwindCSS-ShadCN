import { LucideIcon } from "lucide-react";

export interface Menu{
    title: string,
    url: string,
    icon: LucideIcon;
}

export interface DataFeature {
    id: number
    quantity: number
    title: string
    description: string
    Icon: LucideIcon;
}

export interface Projects{
    id: number,
    nombre: string,
    descripcion: string,
    estado: string,
    colaboradores: string[],
    rol: string
    isActive: boolean
}
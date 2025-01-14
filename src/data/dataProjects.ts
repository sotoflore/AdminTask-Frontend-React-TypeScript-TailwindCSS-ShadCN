import { Projects } from "@/interfaces";

export const proyectos: Projects[] = [
    {
        id: 1,
        nombre: "Rediseño Portal Corporativo",
        descripcion: "Modernización completa del portal web corporativo con enfoque en experiencia de usuario y responsive design",
        estado: "En Progreso",
        colaboradores: ["Ana García", "Juan Pérez", "Carlos Ruiz"],
        rol: "Manager",
        isActive: true,
    },
    {
        id: 2,
        nombre: "App Móvil de Gestión de Inventarios",
        descripcion: "Desarrollo de aplicación móvil para control y seguimiento de inventarios en tiempo real",
        estado: "Pendiente",
        rol: "Colaborador",
        colaboradores: ["María Rodríguez", "Diego López"],
        isActive: true,
    },
    {
        id: 3,
        nombre: "Sistema de Business Intelligence",
        descripcion: "Implementación de dashboard para análisis de datos de ventas y métricas clave",
        estado: "Completado",
        colaboradores: ["Laura Martínez", "Pedro Sánchez", "Sofia Torres", "Roberto Díaz"],
        rol: "Manager",
        isActive: false,
    },
    {
        id: 4,
        nombre: "Migración a Cloud AWS",
        descripcion: "Migración de infraestructura local a servicios cloud de Amazon Web Services",
        estado: "En Progreso",
        colaboradores: ["Fernando Ruiz", "Carmen Ortiz", "José Luna"],
        rol: "Manager",
        isActive: true,
    },
    {
        id: 5,
        nombre: "Automatización de Pruebas",
        descripcion: "Implementación de framework de pruebas automatizadas para aplicaciones core",
        estado: "En Revisión",
        colaboradores: ["Patricia Vega", "Miguel Ángel Torres"],
        rol: "Colaborador",
        isActive: true,
    },
    {
        id: 6,
        nombre: "CRM Personalizado",
        descripcion: "Desarrollo de sistema CRM adaptado a necesidades específicas de la empresa",
        estado: "Pendiente",
        colaboradores: ["Ricardo Molina", "Isabel Castro", "Gabriel Flores"],
        rol: "Colaborador",
        isActive: true,
    },
    {
        id: 7,
        nombre: "Plataforma E-learning",
        descripcion: "Desarrollo de plataforma de aprendizaje en línea para capacitación interna",
        estado: "En Progreso",
        colaboradores: ["Diana Paz", "Adrián Mendoza", "Victoria Ramos"],
        rol: "Colaborador",
        isActive: true,
    },
    {
        id: 8,
        nombre: "Sistema de Gestión Documental",
        descripcion: "Implementación de sistema para manejo y control de documentos digitales",
        estado: "Completado",
        colaboradores: ["Héctor Vargas", "Elena Jiménez"],
        rol: "Colaborador",
        isActive: false,
    },
    {
        id: 9,
        nombre: "App de Seguimiento de Tiempo",
        descripcion: "Aplicación para registro y seguimiento de horas trabajadas por proyecto",
        estado: "Completado",
        colaboradores: ["Raúl Morales", "Natalia Campos", "Luis Espinoza"],
        rol: "Colaborador",
        isActive: false,
    },
    {
        id: 10,
        nombre: "Portal de Autoservicio",
        descripcion: "Portal para que clientes puedan gestionar sus servicios y soporte",
        estado: "En Revisión",
        colaboradores: ["Carla Mendez", "Andrés Silva", "Beatriz Luna"],
        rol: "Manager",
        isActive: true,
    }
];
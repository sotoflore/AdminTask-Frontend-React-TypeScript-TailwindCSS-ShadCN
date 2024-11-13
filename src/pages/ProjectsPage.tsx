import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { proyectos } from "@/data/dataProjects";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { Eye, FilePenLine, FolderGit, Plus, Trash2 } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export const ProjectsPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;

    const currentProjects = proyectos.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= Math.ceil(proyectos.length / projectsPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <section className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <Card className="mx-auto w-full px-4 md:px-8">
                <div>
                    <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl pt-5">Mis Proyectos</h1>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-gray-600 mt-2">
                            En esta sección puedes ver todos tus proyectos en el que estas trabajando.
                        </p>
                        
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>
                                    <Plus />
                                    <span>Crear nuevo proyecto</span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle className="font-bold text-xl">
                                        <FolderGit className="w-10 h-10 bg-purple-200 text-purple-600 p-2 rounded-md" />
                                        Crear un nuevo proyecto
                                    </DialogTitle>
                                    <DialogDescription>
                                        Ingresa los datos correspondientes.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className=" space-x-2">
                                    <div className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="project">Nombre del proyecto</Label>
                                            <Input
                                                id="project"
                                                type="text"
                                                placeholder="Ej. Nuevo proyecto"
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="client">Cliente</Label>
                                            <Input
                                                id="client"
                                                type="text"
                                                placeholder="Ej. Empresa XYZ"
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="description">Descripcion</Label>
                                            <Textarea placeholder="Escribe la descripcion del proyecto aqui..." />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Crear proyecto
                                        </Button>
                                    </div>
                                </div>
                                <DialogFooter className="sm:justify-start">
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <section className="container mx-auto mb-4">
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                                        <span>Nombre</span>
                                                    </button>
                                                </th>

                                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Estado
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Descripcion
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Colaboradores
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Rol
                                                </th>

                                                <th scope="col" className="relative py-3.5 px-4">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {
                                                currentProjects.map((project) => (
                                                    <tr key={project.id}>
                                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                            <h2 className="font-medium text-gray-800 dark:text-white ">{project.nombre}</h2>
                                                        </td>
                                                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                            <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${project.estado === 'Completado' ? 'bg-emerald-100/60' : 'bg-red-100/60'}  dark:bg-gray-800`}>
                                                                <span className={`h-1.5 w-1.5 rounded-full ${project.estado === 'Completado' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                                                <h2 className={`text-sm font-normal ${project.estado === 'Completado' ? 'text-emerald-500' : 'text-red-500'} `}>{project.estado}</h2>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <p className="text-gray-500 text-wrap">{project.descripcion}</p>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                                                <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                                                <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80" alt="" />
                                                                <img className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt="" />
                                                                <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">+4</p>
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <h2>{project.rol}</h2>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-3">
                                                                <Link to={'/tareas'} className="bg-slate-800 p-1.5 rounded-md text-white">
                                                                    <Eye className="w-5 h-5" />
                                                                </Link>
                                                                <Link to={'/crear-proyecto'} className="bg-indigo-600 p-1.5 rounded-md text-white">
                                                                    <FilePenLine className="w-5 h-5" />
                                                                </Link>
                                                                <AlertDialog>
                                                                    <AlertDialogTrigger className="bg-red-600 p-1.5 rounded-md text-white">
                                                                        <Trash2 className="w-5 h-5" />
                                                                    </AlertDialogTrigger>
                                                                    <AlertDialogContent>
                                                                        <AlertDialogHeader>
                                                                            <AlertDialogTitle>Estar seguro de eliminar?</AlertDialogTitle>
                                                                            <AlertDialogDescription>
                                                                                El archivo que está a punto de eliminar es irreversible. ¿Está seguro de que desea continuar?
                                                                            </AlertDialogDescription>
                                                                        </AlertDialogHeader>
                                                                        <AlertDialogFooter>
                                                                            <AlertDialogCancel>NO</AlertDialogCancel>
                                                                            <AlertDialogAction>SI</AlertDialogAction>
                                                                        </AlertDialogFooter>
                                                                    </AlertDialogContent>
                                                                </AlertDialog>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" onClick={() => paginate(currentPage - 1)} />
                                </PaginationItem>
                                {[...Array(Math.ceil(proyectos.length / projectsPerPage))].map((_, index) => (
                                    <PaginationItem key={index}>
                                        <PaginationLink
                                            href="#"
                                            onClick={() => paginate(index + 1)}
                                            isActive={index + 1 === currentPage}
                                            //disabled={currentPage === 1}
                                           

                                        >
                                            {index + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationItem>
                                    <PaginationNext
                                        href="#" onClick={() => paginate(currentPage + 1)}
                                        //disabled={currentPage === Math.ceil(proyectos.length / projectsPerPage)}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </section>
            </Card>
        </section>
    )
}
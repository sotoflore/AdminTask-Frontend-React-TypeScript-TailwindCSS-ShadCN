import { useState, FC, ReactNode } from 'react';
import { FilePenLine, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cambiosRecientes, comentariosData, tareasData } from '@/data/dataComment';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { capitalize } from '@/helpers';

interface Tarea {
    id: number;
    descripcion: string;
    estado: string;
}

interface CambioReciente {
    id: number;
    descripcion: string;
    autor: string;
    fecha: string;
}

interface EstadoTareaProps {
    id: string;
    titulo: string;
    children: ReactNode;
}

interface TareaProps {
    id: number;
    descripcion: string;
    estado: string;
    onCambiarEstado: (nuevoEstado: string) => void;
}

export const TaskPage: FC = () => {
    const [tareas, setTareas] = useState<Tarea[]>(tareasData);
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const estados = ['pendiente', 'en_proceso', 'revision', 'completado'];

    const agregarTarea = () => {
        if (nuevaTarea.trim()) {
            const nueva = { id: Date.now(), descripcion: nuevaTarea, estado: 'pendiente' };
            setTareas([...tareas, nueva]);
            setNuevaTarea('');
        }
    };

    const cambiarEstadoTarea = (id: number, nuevoEstado: string) => {
        setTareas(tareas.map(tarea => tarea.id === id ? { ...tarea, estado: nuevoEstado } : tarea));
    };

    return (
        <section className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="container mx-auto">
                <Card className="mb-6">
                    <CardHeader className="space-y-2">
                        <CardTitle className="text-2xl font-bold">Proyecto: Rediseño Portal Corporativo</CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Modernización completa del portal web corporativo con enfoque en experiencia de usuario y responsive design.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                        <div className='space-y-2'>
                            <Label htmlFor="nueva-tarea">Nueva Tarea</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="nueva-tarea"
                                    placeholder="Descripción de la tarea"
                                    value={nuevaTarea}
                                    onChange={(e) => setNuevaTarea(e.target.value)}
                                />
                                <Button onClick={agregarTarea}>Agregar Tarea</Button>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <Label htmlFor="nuevo-colaborador">Agregar Colaborador</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="nuevo-colaborador"
                                    placeholder="Buscar colaborador"
                                    
                                />
                                <Button>Agregar Colaborador</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    {estados.map(estado => (
                        <EstadoTarea key={estado} id={estado} titulo={capitalize(estado)}>
                            {tareas
                                .filter(tarea => tarea.estado === estado)
                                .map(tarea => (
                                    <Tarea
                                        key={tarea.id}
                                        {...tarea}
                                        onCambiarEstado={(nuevoEstado) => cambiarEstadoTarea(tarea.id, nuevoEstado)}
                                    />
                                ))}
                        </EstadoTarea>
                    ))}
                </div>

                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Últimos Cambios</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4" role="list">
                            {cambiosRecientes.map((cambio: CambioReciente) => (
                                <li key={cambio.id} className="flex items-start space-x-4">
                                    <Avatar>
                                        <AvatarFallback>{cambio.autor[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p><span className='font-extrabold'>Tarea:</span> {cambio.descripcion}</p>
                                        <p className="text-xs text-muted-foreground">
                                            <span className='font-semibold'>Autor:</span> {cambio.autor} - <time dateTime={cambio.fecha}>{cambio.fecha}</time>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

const EstadoTarea = ({ titulo, children }: EstadoTareaProps) => (
    <Card className="bg-gray-100">
        <h2 className="font-bold text-indigo-600 mb-4 py-2 border-b-4 border-indigo-600 rounded-t-md text-2xl uppercase text-center bg-indigo-100">{titulo}</h2>
        <div className='px-4'>
            {children}
        </div>
    </Card>
);

const Tarea = ({descripcion, estado, onCambiarEstado }: TareaProps) => {
    const [comentarios] = useState(comentariosData);

    return (
        <div className="p-3 mb-2 bg-white border rounded-lg shadow-sm cursor-pointer">
            <p>{descripcion}</p>
            <div className="flex gap-2 items-center mt-2">
                <Select onValueChange={onCambiarEstado} defaultValue={estado}>
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {['pendiente', 'en_proceso', 'revision', 'completado'].map(option => (
                            <SelectItem key={option} value={option}>
                                {capitalize(option)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button variant="outline">
                    <FilePenLine />
                </Button>
                <Button variant="destructive">
                    <Trash2 />
                </Button>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='w-full mt-3 text-sm'>Comentarios ({comentarios.length})</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className='w-full'>
                        <DialogTitle>Tarea: <span className='font-normal'>{descripcion}</span></DialogTitle>
                        <DialogDescription>Añade tus comentarios aquí.</DialogDescription>
                    </DialogHeader>
                    <Card className="mb-6 w-full pt-4">
                        <CardContent>
                            <div className="mb-4">
                                <Textarea placeholder="Escribe un comentario..." />
                                <Button className="mt-2">Agregar Comentario</Button>
                            </div>
                            <Separator className="my-4" />
                            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                {comentarios.map(com => (
                                    <div key={com.id} className="bg-muted p-3 rounded-lg mb-3">
                                        <p className="text-sm">{com.texto}</p>
                                        <div className="text-xs text-muted-foreground mt-2">
                                            <span>{com.autor}</span> - <time dateTime={com.fecha}>{com.fecha}</time>
                                        </div>
                                        <div className='flex w-full justify-end'>
                                            <Button variant="destructive">
                                                <Trash2 />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog>
        </div>
    );
};


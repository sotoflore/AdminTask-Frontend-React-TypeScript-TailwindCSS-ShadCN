import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    
    CardTitle,
} from "@/components/ui/card";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { chartData } from "@/data/charData";
import { proyectos } from "@/data/dataProjects";
import { dataFeature } from "@/data/features";

const chartConfig = {
    pendientes: {
        label: "Pendientes",
        color: "hsl(var(--chart-1))",
    },
    completados: {
        label: "Completados",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export const DashboardPage = () => {

    return (
        <section className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {
                    dataFeature.map((feature) => (
                        <Card key={feature.id}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-bold">
                                    {feature.title}
                                </CardTitle>
                                <feature.Icon className="h-8 w-8 text-indigo-600 bg-purple-200 p-2 rounded-md" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{feature.quantity }</div>
                                <p className="text-xs text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
           
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Proyectos Completados vs Pendientes</CardTitle>
                        <CardDescription>Estado de proyectos por mes en 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart data={chartData} width={500} height={300}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <YAxis />
                                <Tooltip content={<ChartTooltipContent indicator="dashed" />} />
                                <Legend />
                                <Bar dataKey="pendientes" fill="var(--color-pendientes)" radius={4} />
                                <Bar dataKey="completados" fill="var(--color-completados)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                            Tendencia positiva este mes <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Mostrando proyectos completados y pendientes por mes
                        </div>
                    </CardFooter>
                </Card>
                
                <Card className="col-span-4 md:col-span-3">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Ultimos proyectos activos</CardTitle>
                        <CardDescription>
                            Estos son los proyectos que estuviste trabajando.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {proyectos.slice(0,3).map((project) => (
                                <div key={project.id} className="p-4 border rounded-lg shadow-sm">
                                    <h3 className="text-lg font-semibold">{project.nombre}</h3>
                                    <p className="text-sm text-muted-foreground">{project.descripcion}</p>
                                    <p className={`text-xs font-semibold ${project.estado === "Completado" ? "text-green-500" : "text-indigo-500"}`}>
                                        Estado: {project.estado}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
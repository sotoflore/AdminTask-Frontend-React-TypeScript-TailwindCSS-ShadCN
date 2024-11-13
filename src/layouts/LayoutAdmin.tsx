import { Link, Outlet, useLocation } from "react-router-dom";
import { SidebarNav } from "@/components/common/SidebarNav";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const LayoutAdmin = () => {

    const location = useLocation();

    const getBreadcrumbItems = () => {
        const pathnames = location.pathname.split('/').filter((x) => x);
        return pathnames.map((value, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            return (
                <BreadcrumbItem key={index}>
                    <Link to={routeTo}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Link>
                    {index < pathnames.length - 1 && <BreadcrumbSeparator />}
                </BreadcrumbItem>
            );
        });
    };

    return (
        <SidebarProvider>
            <SidebarNav />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        AdminTask
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                {getBreadcrumbItems()}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebars/Sidebar";

interface UsersLayoutProps {
    children: ReactNode
}

export default async function UsersLayout({
    children
}: UsersLayoutProps) {
    return (
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    )
}
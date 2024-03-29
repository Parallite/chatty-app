import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebars/Sidebar";
import { getUsers } from "@/app/actions/getUsers";
import { UserList } from "@/app/users/components/UserList";

interface UsersLayoutProps {
    children: ReactNode
}

export default async function UsersLayout({
    children
}: UsersLayoutProps) {
    const users = await getUsers()

    return (
        <Sidebar>
            <div className="flex h-full gap-4">
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}
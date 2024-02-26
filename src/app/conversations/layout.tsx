import { Sidebar } from "@/components/Sidebars/Sidebar"
import { ConversationList } from "@/components/ConversationList"
import { getConversations } from "../actions/getConversations"
import { getUsers } from "../actions/getUsers";

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode
}) {
    const conversations = await getConversations();
    const users = await getUsers();

    return (
        <Sidebar>
            <div className="h-full flex justify-center gap-4">
                <ConversationList 
                    users={users}
                    initialItems={conversations}
                />
                {children}
            </div>
        </Sidebar>
    )
}
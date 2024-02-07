import { Sidebar } from "@/components/Sidebars/Sidebar"
import { ConversationList } from "@/components/ConversationList"
import { getConversations } from "../actions/getConversations"

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode
}) {
    const conversations = await getConversations();
    return (
        <Sidebar>
            <div className="h-full flex justify-center gap-4">
                <ConversationList 
                    initialItems={conversations}
                />
                {children}
            </div>
        </Sidebar>
    )
}
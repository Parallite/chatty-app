'use client'

import clsx from "clsx"
import { useConversation } from "@/app/hooks/useConversation";
import { EmptyState } from "@/components/EmptyState";
import { motion } from 'framer-motion'

const Home = () => {
    const { isOpen } = useConversation();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            exit={{ opacity: 0, scale: 0 }}
            className={clsx(
                "h-full lg:block bg-white lg:rounded-xl shadow-inner shadow-purple-middle grow",
                isOpen ? "block" : "hidden"
            )}
                    >
            <EmptyState />
        </motion.div>
    )
}

export default Home
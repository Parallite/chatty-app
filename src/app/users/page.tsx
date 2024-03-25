'use client'

import { EmptyState } from '@/components/EmptyState'
import { motion } from 'framer-motion'

const Users = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            exit={{ opacity: 0, scale: 0 }}
            className='hidden grow lg:block bg-white lg:rounded-xl shadow-inner shadow-purple-middle'>
            <EmptyState />
        </motion.div>
    )
}

export default Users
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

import { getPusherInstance } from '@/app/libs/pusher/server';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

const pusherServer = getPusherInstance();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user?.email) {
        return res.status(401);
    }

    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const data = { user_id: session.user.email };

    const authResponse = pusherServer.authorizeChannel(socketId, channel, data);

    return res.send(authResponse);
} 
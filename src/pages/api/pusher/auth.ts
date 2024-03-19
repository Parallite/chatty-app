import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getPusherInstance } from "@/app/libs/pusher/server";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const pusherServer = getPusherInstance();

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    console.log('started Handler Pusher');
    try {
        const session = await getServerSession(request, response, authOptions);

        if (!session?.user?.email) {
            return response.status(401).send({});
        }

        const socketId = request.body.socket_id;
        const channel = request.body.channel_name;
        const data = {
            user_id: session.user.email,
        };
        const authResponse = pusherServer.authorizeChannel(socketId, channel, data);

        return response.send(authResponse);

    } catch (error) {
        console.log('error', error);
        return response.status(500).send(error);
    }
};
import PusherServer from 'pusher';

let pusherInstance: PusherServer | null = null;

const getPusherInstance = () => {
    if (!pusherInstance) {
        pusherInstance = new PusherServer({
            appId: process.env.PUSHER_APP_ID! as string,
            key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY! as string,
            secret: process.env.PUSHER_SECRET! as string,
            cluster: "eu" as string,
            useTLS: true,
        });
    }
    return pusherInstance;
};

export const pusherServer = getPusherInstance();
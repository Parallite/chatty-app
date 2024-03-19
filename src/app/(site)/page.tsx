import { AuthForm } from "@/app/components/AuthForm";
import { BlobsAuthBackground } from "@/app/components/BlobsAuthBackground";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 mt-20">
      <AuthForm />
      <BlobsAuthBackground />
    </div>
  )
}

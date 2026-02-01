import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile */}
        <Card className="md:col-span-3 bg-zinc-900 rounded-2xl shadow-lg">
          <CardContent className="flex flex-col md:flex-row gap-6 p-6 items-center">
            <img
              src="/avatar.png"
              alt="avatar"
              className="w-32 h-32 rounded-2xl"
            />
            <div>
              <h1 className="text-2xl font-bold">Riski</h1>
              <p className="text-zinc-400 mt-2 max-w-xl">
                Software developer focused on building modern, scalable, and high-performance web applications.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <Badge>Frontend</Badge>
                <Badge>Web Development</Badge>
                <Badge>Open Source</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="bg-zinc-900 rounded-2xl">
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg">Freelance Developer</h2>
            <p className="text-sm text-zinc-400">2021 - Now</p>
            <p className="mt-3 text-sm text-zinc-300">
              Building responsive and scalable web applications for global clients.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 rounded-2xl">
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg">Meetzed</h2>
            <p className="text-sm text-zinc-400">2020 - 2021</p>
            <p className="mt-3 text-sm text-zinc-300">
              Frontend developer creating reusable UI components with React and TypeScript.
            </p>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card className="bg-zinc-900 rounded-2xl">
          <CardContent className="p-6">
            <h2 className="font-semibold text-lg">Tech Stack</h2>
            <div className="flex gap-2 mt-3 flex-wrap">
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Vite</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Node.js</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Education */}

        {/* Contact */}
        <Card className="bg-zinc-900 rounded-2xl md:col-span-3">
          <CardContent className="p-6 flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} /> riski.dev@gmail.com
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} /> +62 8xxxxxxxxxx
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} /> Indonesia
            </div>
            <Button className="bg-white text-black rounded-xl">
              Download Resume
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

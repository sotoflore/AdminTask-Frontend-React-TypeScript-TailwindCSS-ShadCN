import { useState } from "react";
import { Search, Paperclip, Smile, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatMessage, conversations } from "@/data/dataMessage";

export const ChatPage = () => {
    const [messages, setMessages] = useState(chatMessage);

    return (
        <section className="flex-1 p-4 md:p-8 pt-6">
            <div className="flex h-[600px] w-full rounded-xl border flex-col md:flex-row">
                <div className="w-80 border-r">
                    <div className="p-4">
                        <h2 className="mb-4 flex items-center justify-between">
                            <span className="text-lg font-semibold">Active Conversations</span>
                            <span className="rounded-md bg-primary/10 px-2 py-1 text-sm">7</span>
                        </h2>
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-8" placeholder="Search..." />
                        </div>
                    </div>
                    <ScrollArea className="h-[calc(600px-80px)]">
                        <div className="space-y-2 p-4">
                            {conversations.map((conversation) => (
                                <div
                                    key={conversation.name}
                                    className="flex items-center gap-3 rounded-lg p-2 hover:bg-accent"
                                >
                                    <div className="relative">
                                        <Avatar>
                                            <AvatarImage src={conversation.avatar} />
                                            <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                                        </Avatar>
                                        {conversation.online && (
                                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-green-500" />
                                        )}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <h3 className="font-medium">{conversation.name}</h3>
                                        <p className="truncate text-sm text-muted-foreground">
                                            {conversation.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
                <div className="flex flex-1 flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                <AvatarFallback>SF</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-medium">Soto Flores</h3>
                                <p className="text-sm text-muted-foreground">Reply to message</p>
                            </div>
                        </div>
                    </div>
                    <ScrollArea className="flex-1 p-4">
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex items-end gap-3 ${message.isMe ? "flex-row-reverse" : ""
                                        }`}
                                >
                                    {!message.isMe && (
                                        <Avatar>
                                            <AvatarImage src={message.avatar} />
                                            <AvatarFallback>{message.sender[0]}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div
                                        className={`rounded-lg px-4 py-2 ${message.isMe
                                            ? "bg-indigo-600 text-primary-foreground"
                                            : "bg-slate-300"
                                            }`}
                                    >
                                        <p>{message.content}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        {message.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="border-t p-4">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                const input = e.currentTarget.elements.namedItem(
                                    "message"
                                ) as HTMLInputElement
                                if (input.value) {
                                    setMessages((prev) => [
                                        ...prev,
                                        {
                                            id: prev.length + 1,
                                            sender: "You",
                                            content: input.value,
                                            time: "1:55pm",
                                            isMe: true,
                                        },
                                    ])
                                    input.value = ""
                                }
                            }}
                            className="flex gap-2"
                        >
                            <Button variant="outline" size="icon" type="button">
                                <Paperclip className="h-4 w-4" />
                            </Button>
                            <Input id="message" placeholder="Type something here" />
                            <Button variant="outline" size="icon" type="button">
                                <Smile className="h-4 w-4" />
                            </Button>
                            <Button type="submit" className="bg-indigo-600">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
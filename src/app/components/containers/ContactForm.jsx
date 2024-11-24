"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(5, { message: "Message must be at least 5 characters" }),
});

export default function ContactForm() {

    const [isClient, setIsClient] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const { toast } = useToast();

    const onSubmit = (data) => {
        fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (response) => {
            const data = await response.json();
            if (data?.id) {
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message!"
                });
                form.reset();
            }
        }).catch((error) => {
            console.log({ error });
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        });
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Render nothing on the first render, wait for the client-side mount
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid sm:grid-cols-2 items-center gap-4 mt-10">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            {fieldState?.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            {fieldState?.error && (
                                <FormMessage>{fieldState.error.message}</FormMessage>
                            )}
                        </FormItem>
                    )}
                />

                <div className="sm:col-span-2">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea className="textarea" placeholder="Type your message here" {...field} />
                                </FormControl>
                                {fieldState?.error && (
                                    <FormMessage>{fieldState.error.message}</FormMessage>
                                )}
                            </FormItem>
                        )}
                    />
                </div>

                <div className='p-2'>
                    <Button variant="outline" type="submit" size="sm">Submit</Button>
                </div>

            </form>
        </Form>
    );
}

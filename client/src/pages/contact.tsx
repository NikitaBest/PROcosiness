import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      form.reset();
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-['Playfair_Display'] text-4xl mb-8 text-center">
        Связаться с нами
      </h1>
      
      <div className="max-w-md mx-auto">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2">Имя</label>
            <Input {...form.register("name")} />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>
          
          <div>
            <label className="block mb-2">Email</label>
            <Input type="email" {...form.register("email")} />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          
          <div>
            <label className="block mb-2">Сообщение</label>
            <Textarea {...form.register("message")} />
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Отправка..." : "Отправить"}
          </Button>
        </form>
        
        <div className="mt-12">
          <h2 className="font-['Playfair_Display'] text-2xl mb-4">
            Наши контакты
          </h2>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:pro.uyut@example.com"
              className="text-[#4A704A] hover:underline"
            >
              pro.uyut@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

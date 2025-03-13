import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { Heart, Mail, MessageSquare, User } from "lucide-react";

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
        title: "Сообщение отправлено ✨",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      form.reset();
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF4F5] via-white to-[#FDF4F5] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="font-['Playfair_Display'] text-4xl text-[#C797A0] mb-4 flex items-center justify-center gap-2">
              <Heart className="w-8 h-8" />
              Связаться с нами
            </h1>
            <p className="font-['Lora'] text-lg text-[#D9A7B0]">
              Мы всегда рады помочь вам создать уютную атмосферу в вашем доме
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-[#D9A7B0]/10">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 mb-2 text-[#C797A0] font-['Playfair_Display']">
                  <User className="w-4 h-4" />
                  Имя
                </label>
                <Input 
                  {...form.register("name")} 
                  className="border-[#D9A7B0]/20 focus:border-[#D9A7B0] transition-colors rounded-xl"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <label className="flex items-center gap-2 mb-2 text-[#C797A0] font-['Playfair_Display']">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <Input 
                  type="email" 
                  {...form.register("email")} 
                  className="border-[#D9A7B0]/20 focus:border-[#D9A7B0] transition-colors rounded-xl"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <label className="flex items-center gap-2 mb-2 text-[#C797A0] font-['Playfair_Display']">
                  <MessageSquare className="w-4 h-4" />
                  Сообщение
                </label>
                <Textarea 
                  {...form.register("message")} 
                  className="border-[#D9A7B0]/20 focus:border-[#D9A7B0] transition-colors rounded-xl min-h-[120px]"
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#D9A7B0] hover:bg-[#C797A0] text-white font-['Lora'] text-lg rounded-full"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Отправка..." : "Отправить сообщение ✨"}
              </Button>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="font-['Playfair_Display'] text-2xl text-[#C797A0] mb-4">
              Наши контакты
            </h2>
            <a
              href="mailto:pro.uyut@example.com"
              className="font-['Lora'] text-lg text-[#D9A7B0] hover:text-[#C797A0] transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              pro.uyut@example.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

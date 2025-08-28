"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PropertyPage() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a página principal se acessar /property diretamente
    router.push('/');
  }, [router]);

  return null;
}
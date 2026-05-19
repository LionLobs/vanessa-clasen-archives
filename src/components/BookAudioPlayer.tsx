import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  bookId: string;
  label?: string;
}

/**
 * Botão minimalista de play que gera (1x) e reproduz a trilha ambiente do livro.
 * Estética literária noir — vibra como uma marca d'água viva sobre a capa.
 */
const BookAudioPlayer = ({ bookId, label = "Trilha ambiente" }: Props) => {
  const [state, setState] = useState<"idle" | "loading" | "playing" | "paused" | "error">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const urlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const ensureAudio = async () => {
    if (urlRef.current) return urlRef.current;
    setState("loading");
    const { data, error } = await supabase.functions.invoke("generate-book-music", {
      body: { bookId },
    });
    if (error || !data?.url) {
      setState("error");
      throw error ?? new Error("no url");
    }
    urlRef.current = data.url;
    return data.url as string;
  };

  const toggle = async () => {
    try {
      if (state === "playing") {
        audioRef.current?.pause();
        setState("paused");
        return;
      }
      const url = await ensureAudio();
      if (!audioRef.current) {
        const a = new Audio(url);
        a.loop = true;
        a.volume = 0.55;
        a.addEventListener("ended", () => setState("paused"));
        audioRef.current = a;
      }
      await audioRef.current.play();
      setState("playing");
    } catch (e) {
      console.error("audio player error", e);
      setState("error");
    }
  };

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={state === "playing" ? "Pausar trilha" : "Tocar trilha"}
      className="group inline-flex items-center gap-3 border border-primary/30 hover:border-primary/70 bg-ink/40 backdrop-blur-sm px-4 py-2.5 rounded-full transition-all duration-500 hover:shadow-gold"
    >
      <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-gold text-primary-foreground">
        {state === "loading" ? (
          <span className="w-3 h-3 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
        ) : state === "playing" ? (
          <span className="flex items-end gap-[2px] h-3">
            <span className="w-[2px] h-full bg-primary-foreground animate-audio-bar" style={{ animationDelay: "0ms" }} />
            <span className="w-[2px] h-full bg-primary-foreground animate-audio-bar" style={{ animationDelay: "150ms" }} />
            <span className="w-[2px] h-full bg-primary-foreground animate-audio-bar" style={{ animationDelay: "300ms" }} />
          </span>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </span>
      <span className="font-elegant text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/80 group-hover:text-primary transition-colors">
        {state === "error" ? "Indisponível" : state === "loading" ? "Compondo…" : label}
      </span>
    </button>
  );
};

export default BookAudioPlayer;
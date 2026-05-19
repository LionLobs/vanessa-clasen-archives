import { useState } from "react";

type Props = {
  spotifyId: string;
  kind?: "track" | "playlist" | "album";
  label?: string;
};

const SpotifyEmbed = ({ spotifyId, kind = "track", label = "Trilha sonora" }: Props) => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 border border-primary/40 px-4 md:px-5 py-3 font-heading text-[11px] md:text-xs font-semibold text-primary/90 tracking-wider uppercase hover:bg-primary/10 hover:border-primary/70 transition-all rounded-sm"
        aria-label={`Ouvir ${label} no Spotify`}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        ♪ Ouvir trilha
      </button>
    );
  }

  const src = `https://open.spotify.com/embed/${kind}/${spotifyId}?utm_source=generator&theme=0`;

  return (
    <div className="w-full sm:w-[320px] rounded-xl overflow-hidden border border-primary/30 shadow-gold bg-background/40 backdrop-blur-sm">
      <iframe
        title={label}
        src={src}
        width="100%"
        height="80"
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ display: "block" }}
      />
    </div>
  );
};

export default SpotifyEmbed;
import { useEffect, useRef, useState } from "react";

type Props = {
  spotifyId: string;
  kind?: "track" | "playlist" | "album";
  label?: string;
  active?: boolean;
};

let apiPromise: Promise<any> | null = null;
const loadSpotifyAPI = (): Promise<any> => {
  if (typeof window === "undefined") return Promise.reject();
  if ((window as any).SpotifyIframeApi) return Promise.resolve((window as any).SpotifyIframeApi);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    (window as any).onSpotifyIframeApiReady = (IFrameAPI: any) => {
      (window as any).SpotifyIframeApi = IFrameAPI;
      resolve(IFrameAPI);
    };
    const s = document.createElement("script");
    s.src = "https://open.spotify.com/embed/iframe-api/v1";
    s.async = true;
    document.body.appendChild(s);
  });
  return apiPromise;
};

const SpotifyEmbed = ({ spotifyId, kind = "track", label = "Trilha sonora", active = false }: Props) => {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadSpotifyAPI().then((IFrameAPI) => {
      if (cancelled || !hostRef.current || controllerRef.current) return;
      IFrameAPI.createController(
        hostRef.current,
        {
          uri: `spotify:${kind}:${spotifyId}`,
          width: "100%",
          height: 80,
          theme: "0",
        },
        (ctrl: any) => {
          controllerRef.current = ctrl;
          setReady(true);
        }
      );
    });
    return () => {
      cancelled = true;
      try { controllerRef.current?.destroy?.(); } catch {}
      controllerRef.current = null;
    };
  }, [spotifyId, kind]);

  useEffect(() => {
    if (!ready || !controllerRef.current) return;
    try {
      if (active) controllerRef.current.play();
      else controllerRef.current.pause();
    } catch {}
  }, [active, ready]);

  return (
    <div
      className="w-full sm:w-[320px] rounded-xl overflow-hidden border border-primary/30 shadow-gold bg-background/40 backdrop-blur-sm"
      aria-label={label}
    >
      <div ref={hostRef} />
    </div>
  );
};

export default SpotifyEmbed;
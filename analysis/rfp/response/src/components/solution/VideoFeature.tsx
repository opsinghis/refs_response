export default function VideoFeature({
  src,
  poster,
  caption,
  autoPlay = false,
  loop = false,
  muted = false,
}: {
  src: string;
  poster?: string;
  caption?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white p-3 shadow-[var(--shadow-soft)]">
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-white text-[8px] text-black">▶</span>
          Video
        </span>
        <video
          className="w-full rounded-xl bg-black"
          controls
          playsInline
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support embedded video.{" "}
          <a href={src} className="underline">
            Download the video
          </a>
          .
        </video>
      </div>
      {caption && (
        <figcaption className="px-2 pt-3 text-base text-[color:var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

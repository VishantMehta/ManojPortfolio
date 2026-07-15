export type ProjectCategory = "Commercial" | "Documentary" | "Music Video";
export type AspectRatio = "portrait" | "landscape" | "square";
export type WordmarkStyle = "bold-caps" | "script" | "colored-block" | "none";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  videoUrl?: string;
  aspect: AspectRatio;
  wordmarkStyle: WordmarkStyle;
  credits: {
    director?: string;
    production?: string;
    dop?: string;
    editor?: string;
    sound?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "neon-nights",
    title: "NEON NIGHTS",
    category: "Commercial",
    thumbnail: "/images/1.png",
    aspect: "square",
    wordmarkStyle: "bold-caps",
    credits: {
      director: "Manoj Ahuja",
      production: "Aura Films",
      dop: "Sarah Jenkins",
      editor: "Mike Ross",
    },
  },
  {
    slug: "silent-echoes",
    title: "Silent Echoes",
    category: "Documentary",
    thumbnail: "/images/2.png",
    aspect: "square",
    wordmarkStyle: "none",
    credits: {
      director: "Manoj Ahuja",
      production: "Independent",
      dop: "Alex Mercer",
    },
  },
  {
    slug: "rhythm-of-the-streets",
    title: "RHYTHM",
    category: "Music Video",
    thumbnail: "/images/3.png",
    aspect: "square",
    wordmarkStyle: "script",
    credits: {
      director: "Manoj Ahuja",
      production: "Beat Records",
      dop: "Chris Evans",
      editor: "Anna Lee",
    },
  },
  {
    slug: "urban-jungle",
    title: "SUZIE",
    category: "Commercial",
    thumbnail: "/images/4.png",
    aspect: "square",
    wordmarkStyle: "colored-block",
    credits: {
      director: "Manoj Ahuja",
      production: "Cityscape Media",
      dop: "Tom Hardy",
    },
  },
  {
    slug: "the-last-artisan",
    title: "THE LAST ARTISAN",
    category: "Documentary",
    thumbnail: "/images/5.png",
    aspect: "square",
    wordmarkStyle: "none",
    credits: {
      director: "Manoj Ahuja",
      dop: "Elena Rostova",
      sound: "Mark Davis",
    },
  },
  {
    slug: "electric-dreams",
    title: "Electric Dreams",
    category: "Music Video",
    thumbnail: "/images/6.png",
    aspect: "square",
    wordmarkStyle: "none",
    credits: {
      director: "Manoj Ahuja",
      production: "Synth Pop Ltd.",
    },
  },
  {
    slug: "speed-limit",
    title: "SPEED LIMIT",
    category: "Commercial",
    thumbnail: "/images/1.png",
    aspect: "square",
    wordmarkStyle: "script",
    credits: {
      director: "Manoj Ahuja",
      production: "Velocity Motors",
      dop: "James Bond",
    },
  },
  {
    slug: "faces-of-change",
    title: "FACES",
    category: "Documentary",
    thumbnail: "/images/2.png",
    aspect: "square",
    wordmarkStyle: "none",
    credits: {
      director: "Manoj Ahuja",
      editor: "Sarah Jenkins",
    },
  },
  {
    slug: "midnight-ride",
    title: "MIDNIGHT",
    category: "Music Video",
    thumbnail: "/images/3.png",
    aspect: "square",
    wordmarkStyle: "colored-block",
    credits: {
      director: "Manoj Ahuja",
      production: "Indie Label X",
      dop: "Mike Ross",
    },
  },
  {
    slug: "future-visions",
    title: "Visions",
    category: "Commercial",
    thumbnail: "/images/4.png",
    aspect: "square",
    wordmarkStyle: "bold-caps",
    credits: {
      director: "Manoj Ahuja",
      production: "Tech Corp",
    },
  },
  {
    slug: "deep-blue",
    title: "DEEP BLUE",
    category: "Documentary",
    thumbnail: "/images/5.png",
    aspect: "square",
    wordmarkStyle: "none",
    credits: {
      director: "Manoj Ahuja",
      production: "Oceania Docs",
      dop: "Marine Bio Team",
    },
  },
  {
    slug: "golden-hour",
    title: "GOLDEN",
    category: "Music Video",
    thumbnail: "/images/6.png",
    aspect: "square",
    wordmarkStyle: "none",
    credits: {
      director: "Manoj Ahuja",
      production: "Sun Records",
      editor: "Anna Lee",
    },
  },
];

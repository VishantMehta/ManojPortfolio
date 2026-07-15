"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import PlaceholderArt from "./PlaceholderArt";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

type Props = {
  project: Project;
  index: number;
};

export default function GridTile({ project, index }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const openLightbox = () => {
    // Create new search params to trigger lightbox open
    const params = new URLSearchParams(searchParams.toString());
    params.set("project", project.slug);
    // Push shallow update
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="relative group cursor-pointer overflow-hidden aspect-square"
      onClick={openLightbox}
    >
      <motion.div
        className="w-full h-full relative"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      >
        <Image 
          src={project.thumbnail} 
          alt={project.title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Conditional Wordmark Art */}
        <PlaceholderArt title={project.title} wordmarkStyle={project.wordmarkStyle} />
        
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 ease-out z-20" />
      </motion.div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { Trophy, BookOpen, ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section.jsx';
import { ACHIEVEMENTS } from '../../data/content.js';
import Carousel from '../ui/Carousel.jsx';

export function Achievements() {
  const items = ACHIEVEMENTS.map((achievement, index) => ({
    id: index,
    title: achievement.title,
    desc: achievement.desc,
    type: achievement.type,
    time: achievement.time,
    link: achievement.link,
    image: achievement.image,
    icon: achievement.type === 'Publication' ? (
      <BookOpen className="h-5 w-5 text-neon-cyan" />
    ) : (
      <Trophy className="h-5 w-5 text-neon-cyan" />
    ),
  }));

  const renderItem = (item) => (
    <div className="relative flex flex-col justify-end w-full h-full min-h-[22rem] p-5">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/15 via-white/[0.04] to-neon-violet/10" />
      <div className="absolute inset-x-5 top-5 h-55 rounded-xl overflow-hidden border border-white/10 bg-cosmic-void/70">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.24em] text-white/30">
            Image
          </div>
        )}
      </div>
      <div className="relative z-10 pt-60">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-neon-cyan/20 p-3 shrink-0">
            {item.icon}
          </div>
          <div className="min-w-0">
            <span className="text-xs px-2 py-0.5 rounded-full bg-neon-cyan/20 text-neon-cyan">
              {item.type}
            </span>
            <span className="ml-2 text-xs text-white/50">{item.time}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-white">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/60">
          {item.desc}
        </p>
        <motion.a
          href={item.link.href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 4 }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-neon-cyan hover:text-neon-violet transition-colors"
        >
          {item.link.label}
          <ExternalLink className="h-3.5 w-3.5" />
        </motion.a>
      </div>
    </div>
  );

  return (
    <Section id="achievements" title="Recognition & Awards">
      <div className="relative">
        <Carousel
          items={items}
          autoplay
          autoplayDelay={4500}
          pauseOnHover
          loop
          renderItem={renderItem}
        />
      </div>
    </Section>
  );
}

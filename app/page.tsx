"use client"

import { useState } from "react"
import { motion, type Variants } from "motion/react"

const CONTRACT_ADDRESS = "CqWwyxPvkAd7qAnLY5eEncbu1m58gMoqAYUwAm6kDoge"
const UNISWAP_URL = `https://app.uniswap.org/#/swap?outputCurrency=${CONTRACT_ADDRESS}`
const OFFICIAL_X_URL = "https://x.com/officialkabosu"

const NAV_SOCIAL_LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: "X", href: OFFICIAL_X_URL, external: true },
  { label: "TG", href: "#official-socials" },
]

const imageMap = {
  hero: "/images/kabosu/7.webp",
  mascot: "/images/kabosu/1.webp",
  logo: "/images/kabosu/1.webp",
  banner: "/images/kabosu/7.webp",
  cooking: "/images/kabosu/4.webp",
  computer: "/images/kabosu/5.webp",
  loreTogether: "/images/kabosu/kabosu-and-atsuko.png",
  lorePlushie: "/images/kabosu/lore-plushie.png",
  loreBlep: "/images/kabosu/lore-blep.png",
}

const memeTiles = [
  { label: "Chef Kabosu", image: imageMap.cooking },
  { label: "CEO of X", image: "/images/kabosu/meme-ceo-x.png" },
  { label: "Chart Mode", image: "/images/kabosu/meme-chart-rally.png" },
  { label: "Laptop & Boba", image: "/images/kabosu/meme-laptop-boba.png" },
  { label: "Side Eye", image: "/images/kabosu/3.webp" },
  { label: "BTC Couch", image: "/images/kabosu/meme-btc-couch.png" },
  { label: "Sushi Chef", image: "/images/kabosu/meme-sushi-chef-upload.png" },
  { label: "The Shepherd", image: "/images/kabosu/meme-elon-doge.png" },
  { label: "Gamer Kabosu", image: "/images/kabosu/meme-gamer.png" },
]

const sectionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 },
  },
}

const childVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

function ArtFrame({
  src,
  alt,
  label,
  className = "",
}: {
  src: string
  alt: string
  label?: string
  className?: string
}) {
  return (
    <figure
      className={[
        "relative overflow-hidden border-[4px] border-black bg-[#FDE8D7] shadow-[8px_8px_0_#000]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 z-10 pointer-events-none opacity-25 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.9)_1px,transparent_0)] [background-size:18px_18px]" />
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {label ? (
        <figcaption className="absolute bottom-3 left-3 z-20 border-[3px] border-black bg-[#F6C86A] px-3 py-1 font-['Bungee'] text-xs uppercase text-black shadow-[3px_3px_0_#000]">
          {label}
        </figcaption>
      ) : null}
    </figure>
  )
}

function ComicTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="relative mx-auto mb-12 max-w-4xl text-center">
      {eyebrow ? (
        <p className="mb-3 font-['Fredoka'] text-sm font-black uppercase tracking-[0.25em] text-[#5B392A] drop-shadow-[1px_1px_0_#fff]">
          {eyebrow}
        </p>
      ) : null}
      <div className="relative inline-block rotate-[-2deg] border-[4px] border-black bg-[#F6C86A] px-8 py-4 shadow-[8px_8px_0_#000]">
        <div className="absolute -left-8 -top-6 h-10 w-10 rotate-45 border-[4px] border-black bg-white" />
        <div className="absolute -bottom-6 -right-8 h-12 w-12 rotate-12 border-[4px] border-black bg-[#F5A9BC]" />
        <h2 className="relative font-['Bungee'] text-4xl uppercase leading-none text-[#5B392A] md:text-7xl">
          {title}
        </h2>
      </div>
    </div>
  )
}

function MarqueeTape() {
  const perLoop = 12
  const items = Array.from({ length: perLoop * 2 }, (_, i) => (
    <span key={i} className="shrink-0">
      $KABOSU
    </span>
  ))

  return (
    <div className="relative z-20 overflow-hidden border-y-[4px] border-black bg-[#F6C86A] py-3 font-['Bungee'] text-xl uppercase text-[#3F281C] shadow-[0_8px_0_rgba(91,57,42,.35)]">
      <div className="kabosu-marquee flex w-max gap-8">{items}</div>
    </div>
  )
}

function ContractStrip() {
  const [copied, setCopied] = useState(false)

  async function copyAddress() {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="mx-auto mt-8 flex max-w-3xl flex-col overflow-hidden border-[4px] border-black bg-white shadow-[8px_8px_0_#000] md:flex-row">
      <div className="flex-1 truncate px-4 py-4 font-['Fredoka'] text-sm font-black uppercase text-[#2C2C2C] md:text-base">
        CA: {CONTRACT_ADDRESS}
      </div>
      <button
        type="button"
        onClick={copyAddress}
        className="border-t-[4px] border-black bg-[#F6C86A] px-6 py-4 font-['Bungee'] text-sm uppercase text-black transition hover:bg-[#E49A43] md:border-l-[4px] md:border-t-0"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  )
}

export default function KabosuPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FCE4EC] font-['Comic_Neue'] text-[#5B392A]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bungee&family=Fredoka:wght@400;600;700;900&family=Comic+Neue:wght@400;700&display=swap");

        .kabosu-sky {
          background:
            radial-gradient(circle at 1px 1px, rgba(91, 57, 42, 0.12) 1px, transparent 0),
            linear-gradient(180deg, #fce4ec 0%, #cdefff 42%, #f9d6df 100%);
          background-size: 22px 22px, 100% 100%;
        }

        .kabosu-marquee {
          animation: kabosu-marquee 18s linear infinite;
        }

        .kabosu-float {
          animation: kabosu-float 4s ease-in-out infinite;
        }

        @keyframes kabosu-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes kabosu-float {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-12px) rotate(2deg);
          }
        }
      `}</style>

      <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border-[3px] border-black bg-[#5B392A]/88 px-4 py-3 shadow-[6px_6px_0_#000] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3">
            <img src={imageMap.logo} alt="Kabosu logo" className="h-12 w-12 rounded-full border-[3px] border-black object-cover bg-[#F6C86A]" />
            <span className="hidden font-['Bungee'] text-2xl uppercase text-[#EEC44A] [-webkit-text-stroke:1.5px_#000] [paint-order:stroke_fill] drop-shadow-[2px_3px_0_#2a1a12] md:block">
              Kabosu
            </span>
          </a>

          <div className="hidden flex-1 md:block" />

          <div className="flex items-center gap-2">
            {NAV_SOCIAL_LINKS.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="grid h-9 w-9 place-items-center rounded-full border-[3px] border-black bg-[#FFF7E7] font-['Bungee'] text-xs text-black transition hover:-translate-y-1 hover:bg-[#F6C86A]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="kabosu-sky relative flex min-h-[100dvh] min-h-screen flex-col px-5 pb-16 pt-28 sm:pt-32 lg:pb-20">
        <div className="pointer-events-none absolute -left-20 top-28 h-48 w-48 rounded-full bg-[#F6C86A]" />
        <div className="pointer-events-none absolute -right-16 top-44 h-36 w-36 rounded-full bg-[#F5A9BC]" />

        <div className="relative z-10 flex flex-1 flex-col justify-center py-6 sm:py-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]"
          >
          <div className="relative z-10 text-center lg:text-left">
            <motion.h1
              variants={childVariants}
              className="font-['Bungee'] text-[clamp(4rem,12vw,9rem)] uppercase leading-[0.85] text-[#EEC44A] [-webkit-text-stroke:clamp(3px,0.5vw,5px)_#3F281C] [paint-order:stroke_fill] drop-shadow-[6px_8px_0_#5B392A]"
            >
              Kabosu
            </motion.h1>
            <motion.p variants={childVariants} className="mx-auto mt-6 max-w-2xl font-['Comic_Neue'] text-2xl font-bold leading-tight text-[#5B392A] drop-shadow-[1px_1px_0_#fff] lg:mx-0">
              The official Kabosu coin, celebrating Doge lore, meme culture, and the anniversary of the world's most beloved dog.
            </motion.p>
            <motion.div variants={childVariants} className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href={UNISWAP_URL} target="_blank" rel="noreferrer" className="rounded-full border-[4px] border-black bg-[#F6C86A] px-10 py-4 font-['Bungee'] text-xl uppercase text-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:bg-[#E49A43]">
                Buy Kabosu
              </a>
              <a href="#about" className="rounded-full border-[4px] border-black bg-white px-10 py-4 font-['Bungee'] text-xl uppercase text-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1">
                Learn More
              </a>
            </motion.div>
            <motion.div variants={childVariants}>
              <ContractStrip />
            </motion.div>
          </div>

          <motion.div variants={childVariants} className="kabosu-float">
            <ArtFrame src={imageMap.banner} alt="Kabosu under cherry blossoms banner art" className="mx-auto aspect-[16/7] max-w-[720px] rounded-[2rem]" />
          </motion.div>
        </motion.div>
        </div>
      </section>

      <MarqueeTape />

      <section id="about" className="kabosu-sky px-5 py-20 md:py-28">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12"
        >
          <motion.div variants={childVariants} className="w-full px-2 sm:px-6">
            <ComicTitle eyebrow="Origin Story" title="Kabosu Lore" />
          </motion.div>
          <motion.div variants={childVariants} className="flex w-full flex-col items-center">
            <div className="w-full max-w-6xl space-y-6 text-center font-['Comic_Neue'] text-2xl font-bold leading-tight text-[#5B392A] drop-shadow-[1px_1px_0_#fff]">
              <p>
                Kabosu was the real dog behind one of the most recognizable memes in internet history. She became a global icon after a single photo of her captured the internet's imagination.
              </p>
              <p>
                That photo was taken by her owner, Atsuko Sato, a Japanese kindergarten teacher who adopted Kabosu from a shelter in 2008. Atsuko documented Kabosu's life on her personal blog for years, sharing the quiet, happy everyday moments that made her dog so beloved.
              </p>
              <p>
                Kabosu passed away from leukemia two years ago. This project was made to honor her, and the woman who loved her: the dog, the owner, the story, and the legacy behind the meme.
              </p>
            </div>
            <div className="mx-auto mt-10 grid w-full max-w-[20rem] grid-cols-1 justify-items-center gap-8 md:max-w-6xl md:grid-cols-[1fr_1.35fr_1fr] md:items-stretch md:gap-4 lg:gap-6">
              <ArtFrame
                src={imageMap.lorePlushie}
                alt="Kabosu sitting with bright yellow plush Doge bag"
                className="aspect-square w-full max-w-[13rem] rounded-[1.25rem] md:max-w-none [&_img]:origin-center [&_img]:clip-path-[inset(0_11%_0_11%)]"
              />
              <ArtFrame
                src={imageMap.loreTogether}
                alt="Kabosu with her owner, Atsuko Sato — a quiet everyday moment shared on her blog."
                className="aspect-[4/3] w-full max-w-[26rem] min-w-0 rounded-[1.25rem] md:max-w-none"
              />
              <ArtFrame
                src={imageMap.loreBlep}
                alt="Kabosu relaxing on bedding with playful expression"
                className="aspect-square w-full max-w-[13rem] rounded-[1.25rem] md:max-w-none"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="referral" className="relative bg-[#F8D7E3] px-5 py-20 md:py-28">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-6xl"
        >
          <ComicTitle eyebrow="Community" title="Takeover" />
          <motion.div variants={childVariants} className="grid gap-6 md:grid-cols-3">
            {[
              ["NO INSIDERS", "Kabosu is for a community that wants the dog, the art, and the community to grow", imageMap.hero],
              ["THE COMMUNITY", "One dog brought us together. Now we keep her story going, one meme, one holder.", imageMap.cooking],
              ["Doge legacy", "The story stays centered on Kabosu, Atsuko Sato, and the real dog behind internet meme history.", imageMap.computer],
            ].map(([title, copy, image]) => (
              <div key={title} className="border-[4px] border-black bg-white p-4 text-[#2C2C2C] shadow-[8px_8px_0_#000]">
                <ArtFrame src={image} alt={`${title} Kabosu art`} label={title} className="aspect-square shadow-none" />
                <h3 className="mt-5 font-['Bungee'] text-2xl uppercase">{title}</h3>
                <p className="mt-4 font-['Comic_Neue'] text-xl font-bold leading-tight">{copy}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="memes" className="bg-[#F8D7E3] px-5 py-20 md:py-28">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mx-auto max-w-7xl">
          <ComicTitle title="Memes" />
          <motion.div variants={childVariants} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {memeTiles.map((tile) => (
              <motion.div key={tile.label} whileHover={{ scale: 1.03, rotate: -1 }} className="aspect-square overflow-hidden border-[4px] border-black bg-[#FDE8D7] shadow-[8px_8px_0_#000]">
                <img src={tile.image} alt={tile.label} className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <footer className="kabosu-sky px-5 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <ArtFrame src={imageMap.hero} alt="Kabosu footer art" label="Join the Pack" className="mx-auto aspect-[16/9] max-w-3xl rounded-[2rem]" />
          <h2 className="mt-12 font-['Bungee'] text-6xl uppercase leading-none text-[#EEC44A] [-webkit-text-stroke:3px_#3F281C] [paint-order:stroke_fill] drop-shadow-[6px_8px_0_#5B392A] md:text-8xl">
            Kabosu
          </h2>
        </div>
      </footer>
    </main>
  )
}

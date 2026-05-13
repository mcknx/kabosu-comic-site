"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, type Variants } from "motion/react"

const CONTRACT_ADDRESS = "0xKABOSU000000000000000000000000000000000000"
const COUNTDOWN_TARGET = "2026-05-24T00:00:00Z"
const UNISWAP_URL = `https://app.uniswap.org/#/swap?outputCurrency=${CONTRACT_ADDRESS}`

const imageMap = {
  hero: "/images/kabosu/7.webp",
  mascot: "/images/kabosu/1.webp",
  logo: "/images/kabosu/1.webp",
  banner: "/images/kabosu/7.webp",
  cooking: "/images/kabosu/4.webp",
  computer: "/images/kabosu/5.webp",
}

const memeTiles = [
  { label: "Chef Kabosu", image: imageMap.cooking },
  { label: "Computer Kabosu", image: imageMap.computer },
  { label: "Sakura Kabosu", image: imageMap.banner },
  { label: "Pack Kabosu", image: "/images/kabosu/2.webp" },
  { label: "Kitchen Alpha", image: imageMap.cooking },
  { label: "Desk Mode", image: imageMap.computer },
  { label: "Doge Origin", image: imageMap.mascot },
  { label: "Verify Everything", image: imageMap.cooking },
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

function useCountdown(target: string) {
  const targetTime = useMemo(() => new Date(target).getTime(), [target])
  const [now, setNow] = useState(targetTime)

  useEffect(() => {
    setNow(Date.now())
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const distance = Math.max(0, targetTime - now)

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  }
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
  const text = "$KABOSU  $KABOSU  $KABOSU  $KABOSU  $KABOSU  $KABOSU"

  return (
    <div className="relative z-20 overflow-hidden border-y-[4px] border-black bg-[#F6C86A] py-3 font-['Bungee'] text-xl uppercase text-[#3F281C] shadow-[0_8px_0_rgba(91,57,42,.35)]">
      <div className="kabosu-marquee flex w-max gap-8 whitespace-nowrap">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}

function Countdown() {
  const time = useCountdown(COUNTDOWN_TARGET)
  const blocks = [
    ["DAYS", time.days],
    ["HOURS", time.hours],
    ["MINS", time.minutes],
    ["SECS", time.seconds],
  ]

  return (
    <section id="countdown" className="relative px-5 py-16">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-6xl rounded-[2rem] border-[4px] border-black bg-[#FFF7E7] p-6 shadow-[10px_10px_0_#000] md:p-10"
      >
        <motion.p variants={childVariants} className="text-center font-['Fredoka'] text-sm font-black uppercase tracking-[0.25em] text-[#9F6B3A]">
          Death Anniversary Countdown
        </motion.p>
        <motion.h2 variants={childVariants} className="mt-2 text-center font-['Bungee'] text-4xl uppercase leading-none text-[#5B392A] md:text-6xl">
          May 24, 2026
        </motion.h2>
        <motion.div variants={childVariants} className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {blocks.map(([label, value]) => (
            <div key={label} className="border-[4px] border-black bg-[#F5A9BC] p-5 text-center shadow-[6px_6px_0_#000]">
              <div className="font-['Bungee'] text-4xl text-[#FFF7E7] drop-shadow-[3px_3px_0_#5B392A] md:text-6xl">
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-2 font-['Fredoka'] text-sm font-black uppercase tracking-[0.16em] text-[#5B392A]">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
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
      <div className="flex-1 truncate px-4 py-4 font-['Fredoka'] text-sm font-black text-[#2C2C2C] md:text-base">
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
        @import url("https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Shade&family=Fredoka:wght@400;600;700;900&family=Comic+Neue:wght@400;700&display=swap");

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
            transform: translateX(-33.333%);
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
            <span className="hidden font-['Bungee_Shade'] text-2xl uppercase text-[#F6C86A] drop-shadow-[2px_2px_0_#000] md:block">
              Kabosu
            </span>
          </a>

          <div className="hidden flex-1 md:block" />

          <div className="flex items-center gap-2">
            {["X", "TG"].map((label) => (
              <a
                key={label}
                href="#official-socials"
                className="grid h-9 w-9 place-items-center rounded-full border-[3px] border-black bg-[#FFF7E7] font-['Bungee'] text-xs text-black transition hover:-translate-y-1 hover:bg-[#F6C86A]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="kabosu-sky relative min-h-screen px-5 pb-20 pt-36">
        <div className="absolute -left-20 top-28 h-48 w-48 rounded-full bg-[#F6C86A]" />
        <div className="absolute -right-16 top-44 h-36 w-36 rounded-full bg-[#F5A9BC]" />

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]"
        >
          <div className="relative z-10 text-center lg:text-left">
            <motion.p variants={childVariants} className="font-['Fredoka'] text-lg font-black uppercase tracking-[0.22em] text-[#9F6B3A] drop-shadow-[1px_1px_0_#fff]">
              The original doge spirit under sakura skies
            </motion.p>
            <motion.h1
              variants={childVariants}
              className="mt-5 font-['Bungee'] text-[clamp(4rem,12vw,9rem)] uppercase leading-[0.85] text-[#FFF7E7] drop-shadow-[6px_6px_0_#5B392A]"
            >
              Kabosu
            </motion.h1>
            <motion.p variants={childVariants} className="mx-auto mt-6 max-w-2xl font-['Comic_Neue'] text-2xl font-bold leading-tight text-[#5B392A] drop-shadow-[1px_1px_0_#fff] lg:mx-0">
              The official Kabosu coin, celebrating Doge lore, meme culture, and the death anniversary of the world's most beloved Shiba Inu.
            </motion.p>
            <motion.div variants={childVariants} className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href={UNISWAP_URL} target="_blank" rel="noreferrer" className="rounded-full border-[4px] border-black bg-[#F6C86A] px-10 py-4 font-['Bungee'] text-xl uppercase text-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1 hover:bg-[#E49A43]">
                Buy Kabosu
              </a>
              <a href="#about" className="rounded-full border-[4px] border-black bg-white px-10 py-4 font-['Bungee'] text-xl uppercase text-black shadow-[6px_6px_0_#000] transition hover:-translate-y-1">
                Learn Lore
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
      </section>

      <Countdown />
      <MarqueeTape />

      <section id="about" className="kabosu-sky px-5 py-20 md:py-28">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div variants={childVariants}>
            <ArtFrame src={imageMap.mascot} alt="Kabosu, the original Doge Shiba Inu" label="Kabosu Lore" className="aspect-square rounded-[2rem]" />
          </motion.div>
          <motion.div variants={childVariants}>
            <ComicTitle eyebrow="Origin Story" title="The Doge Lore" />
            <div className="space-y-6 font-['Comic_Neue'] text-2xl font-bold leading-tight text-[#5B392A] drop-shadow-[1px_1px_0_#fff]">
              <p>
                Kabosu is the actual Shiba Inu whose face helped define internet meme history. Her expression became the original Doge image, turning a real rescue dog into one of the most recognizable memes in the world.
              </p>
              <p>
                Kabosu was loved by her owner, Japanese kindergarten teacher Atsuko Sato. She died of leukemia two years ago, and this page honors the dog, the story, and the legacy behind the meme.
              </p>
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
          <ComicTitle eyebrow="Community" title="Pack Takeover" />
          <motion.div variants={childVariants} className="grid gap-6 md:grid-cols-3">
            {[
              ["No insiders", "Kabosu is built for a community that wants the dog, the art, and the proof up front.", imageMap.hero],
              ["Community cooked", "The kitchen scene becomes the signal: the pack is cooking for the death anniversary.", imageMap.cooking],
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
          <h2 className="mt-12 font-['Bungee_Shade'] text-6xl uppercase leading-none text-[#F6C86A] drop-shadow-[5px_5px_0_#5B392A] md:text-8xl">
            Kabosu
          </h2>
        </div>
      </footer>
    </main>
  )
}

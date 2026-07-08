"use client"

import { useState } from "react"
import { Catamaran } from "next/font/google"
import {
  Sparkles,
  Scissors,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  CheckCircle,
  Crown,
  ImageIcon,
  UserRound,
  Building2,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react"

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=5535988398143&text&type=phone_number&app_absent=0"

export default function Page() {
  const [fotoAtual, setFotoAtual] = useState(0)

  const cleideServicos = [
    "Corte feminino",
    "Progressiva",
    "Escova",
    "Hidratação",
    "Coloração",
    "Luzes e mechas",
  ]

  const angelicaServicos = [
    "Depilação",
    "Manicure",
    "Pedicure",
    "Unha pé e mão",
    "Esmaltação",
    "Cuidados femininos",
  ]

  const galeria = [
    "/galeria-1.jpg",
    "/galeria-2.jpg",
    "/galeria-3.jpg",
    "/galeria-4.jpg",
    "/galeria-5.jpg",
    "/galeria-6.jpg",
  ]

  const proximaFoto = () => {
    setFotoAtual((atual) => (atual + 1) % galeria.length)
  }

  const fotoAnterior = () => {
    setFotoAtual((atual) => (atual === 0 ? galeria.length - 1 : atual - 1))
  }

  return (
    <main
      className={`${catamaran.className} min-h-screen bg-[#fbf7ef] text-zinc-900 dark:bg-[#060606] dark:text-[#f7ead0]`}
    >
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#c9a45c]/30 bg-[#fbf7ef]/85 backdrop-blur-xl dark:bg-black/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/logoresende.png"
              alt="Espaço Resende"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-black text-[#9b6b18] dark:text-[#d8b56d]">
                Espaço Resende
              </h1>
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 dark:text-[#f7ead0]/55">
                Salão de Beleza
              </p>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#d8b56d] px-4 py-2 text-sm font-black text-black transition hover:bg-[#f3d98b]"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden border-b border-[#c9a45c]/20 px-4 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(216,181,109,0.28),_transparent_35%)]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#d8b56d]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 py-16 md:grid-cols-2">
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <span className="inline-flex items-center gap-2 rounded-xl border border-[#c9a45c]/40 bg-white/80 px-4 py-2 text-sm font-bold text-[#9b6b18] shadow-sm dark:bg-[#111] dark:text-[#d8b56d]">
              <Sparkles size={16} />
              Beleza, cuidado e autoestima
            </span>

            <h2 className="mt-7 text-5xl font-black leading-[0.95] text-zinc-950 dark:text-[#f7ead0] sm:text-6xl lg:text-8xl">
              Elegância para realçar sua beleza
            </h2>

            <p className="mt-7 max-w-xl text-xl leading-relaxed text-zinc-700 dark:text-[#f7ead0]/70">
              Um salão feminino pensado para acolher, cuidar e transformar.
              Cabelos, unhas, depilação e beleza com atendimento próximo,
              delicado e profissional.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#d8b56d] px-8 py-4 text-center text-lg font-black text-black transition hover:-translate-y-1 hover:bg-[#f3d98b]"
              >
                Agendar pelo WhatsApp
              </a>

              <a
                href="#profissionais"
                className="rounded-xl border border-[#c9a45c]/60 px-8 py-4 text-center text-lg font-black text-[#9b6b18] transition hover:bg-[#d8b56d] hover:text-black dark:text-[#d8b56d]"
              >
                Conhecer o salão
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#d8b56d]/20 blur-2xl" />
            <div className="relative overflow-hidden  bg-white  shadow-2xl dark:bg-[#111]">
              <img
                src="/logoresende.png"
                alt="Logo Espaço Resende"
                className="aspect-square w-full  object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Crown className="mx-auto text-[#9b6b18] dark:text-[#d8b56d]" size={42} />
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Beleza com cuidado em cada detalhe
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-zinc-600 dark:text-[#f7ead0]/65">
              O Espaço Resende une técnica, carinho e bom gosto para entregar
              uma experiência completa. Da transformação capilar ao cuidado com
              mãos, pés e depilação, tudo é pensado para você se sentir bem.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <Destaque titulo="Atendimento personalizado" texto="Cada cliente recebe atenção única." />
            <Destaque titulo="Ambiente elegante" texto="Um espaço bonito, confortável e acolhedor." />
            <Destaque titulo="Serviços completos" texto="Cabelos, unhas, depilação e beleza." />
          </div>
        </div>
      </section>

      <section className="border-y border-[#c9a45c]/20 bg-white py-20 dark:bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <Building2 className="text-[#9b6b18] dark:text-[#d8b56d]" size={44} />
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Conheça nosso espaço
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-[#f7ead0]/65">
              Um ambiente preparado para tornar seu momento de cuidado mais
              leve, bonito e especial. Aqui, cada cantinho foi pensado para
              receber você com conforto.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Ambiente feminino e confortável",
                "Atendimento com hora marcada",
                "Espaço para cabelos, unhas e depilação",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 font-bold">
                  <CheckCircle className="text-[#9b6b18] dark:text-[#d8b56d]" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="/salao-1.jpg"
              alt="Interior do salão"
              className="h-72 w-full rounded-2xl object-cover shadow-xl sm:h-full"
            />
            <div className="grid gap-4">
              <img
                src="/salao-2.jpg"
                alt="Espaço interno do salão"
                className="h-56 w-full rounded-2xl object-cover shadow-xl"
              />
              <img
                src="/salao-3.jpg"
                alt="Ambiente do salão"
                className="h-56 w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="profissionais" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <Scissors className="mx-auto text-[#9b6b18] dark:text-[#d8b56d]" size={42} />
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Nossas profissionais
            </h2>
            <p className="mt-4 text-xl text-zinc-600 dark:text-[#f7ead0]/60">
              Duas especialistas, um só propósito: cuidar de você.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ProfissionalCard
              foto="/cleide.png"
              nome="Cleide Resende"
              cargo="Cabelos e transformação capilar"
              descricao="Especialista em progressiva, escova, hidratação, coloração, luzes e cortes femininos."
              servicos={cleideServicos}
              icone={<Scissors size={28} />}
            />

            <ProfissionalCard
              foto="/angelica.png"
              nome="Angélica Resende"
              cargo="Unhas, depilação e cuidados femininos"
              descricao="Especialista em depilação, manicure, pedicure, unha pé e mão e esmaltação."
              servicos={angelicaServicos}
              icone={<UserRound size={28} />}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#c9a45c]/20 bg-white py-20 dark:bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <ImageIcon className="mx-auto text-[#9b6b18] dark:text-[#d8b56d]" size={42} />
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Galeria de trabalhos
            </h2>
            <p className="mt-4 text-xl text-zinc-600 dark:text-[#f7ead0]/60">
              Resultados, detalhes e momentos especiais do salão.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-[#c9a45c]/30 bg-[#fbf7ef] shadow-2xl dark:bg-[#111]">
              <img
                src={galeria[fotoAtual]}
                alt="Foto da galeria"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <button
              type="button"
              onClick={fotoAnterior}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-[#d8b56d] text-black shadow-lg"
              aria-label="Foto anterior"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              onClick={proximaFoto}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl bg-[#d8b56d] text-black shadow-lg"
              aria-label="Próxima foto"
            >
              <ChevronRight />
            </button>

            <div className="mt-5 grid grid-cols-6 gap-2">
              {galeria.map((foto, index) => (
                <button
                  key={foto}
                  type="button"
                  onClick={() => setFotoAtual(index)}
                  className={`overflow-hidden rounded-lg border ${
                    fotoAtual === index
                      ? "border-[#d8b56d]"
                      : "border-[#c9a45c]/20"
                  }`}
                >
                  <img
                    src={foto}
                    alt={`Miniatura ${index + 1}`}
                    className="h-16 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <Star className="mx-auto text-[#9b6b18] dark:text-[#d8b56d]" size={42} />
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Clientes satisfeitas
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Depoimento nome="Cliente 1" texto="Atendimento maravilhoso, ambiente lindo e resultado impecável." />
            <Depoimento nome="Cliente 2" texto="Saí me sentindo renovada. O cuidado em cada detalhe faz diferença." />
            <Depoimento nome="Cliente 3" texto="Profissionais atenciosas, caprichosas e muito cuidadosas." />
          </div>
        </div>
      </section>

      <section className="border-t border-[#c9a45c]/20 bg-white py-20 dark:bg-[#0d0d0d]">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <MessageCircle className="mx-auto text-[#9b6b18] dark:text-[#d8b56d]" size={48} />

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Agende seu horário pelo WhatsApp
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-[#f7ead0]/65">
            Fale diretamente com o Espaço Resende e escolha o melhor horário
            para seu atendimento.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-[#d8b56d] px-10 py-4 text-xl font-black text-black transition hover:-translate-y-1 hover:bg-[#f3d98b]"
          >
            Chamar no WhatsApp
          </a>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
            <Info icon={<Phone size={21} />} text="(35) 98839-8143" />
            <Info icon={<MapPin size={21} />} text="Endereço a definir" />
            <Info icon={<Clock size={21} />} text="Horário a definir" />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#c9a45c]/20 bg-[#fbf7ef] py-8 dark:bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row">
          <div>
            <h2 className="text-xl font-black text-[#9b6b18] dark:text-[#d8b56d]">
              Espaço Resende
            </h2>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-[#f7ead0]/50">
              Salão de Beleza
            </p>
          </div>

          <p className="text-sm text-zinc-500 dark:text-[#f7ead0]/45">
            © 2026 Espaço Resende. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}

function Destaque({ titulo, texto }) {
  return (
    <div className="rounded-2xl border border-[#c9a45c]/25 bg-white p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1 dark:bg-[#111] dark:shadow-black/40">
      <Star className="text-[#9b6b18] dark:text-[#d8b56d]" fill="currentColor" />
      <h3 className="mt-4 text-2xl font-black">{titulo}</h3>
      <p className="mt-2 text-lg text-zinc-600 dark:text-[#f7ead0]/60">{texto}</p>
    </div>
  )
}

function ProfissionalCard({ foto, nome, cargo, descricao, servicos, icone }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c9a45c]/30 bg-white shadow-2xl shadow-black/10 dark:bg-[#111] dark:shadow-black/40">
      <img src={foto} alt={nome} className="h-96 w-full object-cover" />

      <div className="p-7">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#d8b56d] text-black">
          {icone}
        </div>

        <h3 className="text-3xl font-black text-[#9b6b18] dark:text-[#d8b56d]">
          {nome}
        </h3>

        <p className="mt-1 text-lg font-bold text-zinc-500 dark:text-[#f7ead0]/55">
          {cargo}
        </p>

        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-[#f7ead0]/65">
          {descricao}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {servicos.map((servico) => (
            <p key={servico} className="flex items-center gap-2 font-bold">
              <CheckCircle size={18} className="shrink-0 text-[#9b6b18] dark:text-[#d8b56d]" />
              {servico}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

function Depoimento({ nome, texto }) {
  return (
    <div className="rounded-2xl border border-[#c9a45c]/25 bg-white p-7 shadow-xl shadow-black/10 dark:bg-[#111] dark:shadow-black/40">
      <Quote className="text-[#9b6b18] dark:text-[#d8b56d]" />
      <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-[#f7ead0]/65">
        “{texto}”
      </p>
      <div className="mt-5 flex gap-1 text-[#d8b56d]">
        {[1, 2, 3, 4, 5].map((item) => (
          <Star key={item} size={18} fill="currentColor" />
        ))}
      </div>
      <h3 className="mt-4 text-xl font-black text-[#9b6b18] dark:text-[#d8b56d]">
        {nome}
      </h3>
    </div>
  )
}

function Info({ icon, text }) {
  return (
    <p className="flex items-center justify-center gap-3 rounded-xl border border-[#c9a45c]/25 bg-[#fbf7ef] p-5 font-bold text-zinc-800 dark:bg-[#111] dark:text-[#f7ead0]/80">
      <span className="text-[#9b6b18] dark:text-[#d8b56d]">{icon}</span>
      {text}
    </p>
  )
}
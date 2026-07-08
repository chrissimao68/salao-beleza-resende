"use client"

import {
  Sparkles,
  Scissors,
  Heart,
  Star,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  CheckCircle,
  Flower2,
} from "lucide-react"

export default function Home() {
  const servicos = [
    "Corte feminino",
    "Escova e finalização",
    "Coloração",
    "Mechas e luzes",
    "Hidratação capilar",
    "Manicure e pedicure",
  ]

  return (
    <main className="min-h-screen bg-rose-50 text-zinc-800">
      <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-500 text-white">
              <Flower2 size={24} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-rose-700">
                Bella Rosa
              </h1>
              <p className="text-xs text-zinc-500">
                Salão de Beleza Feminino
              </p>
            </div>
          </div>

          <a
            href="#contato"
            className="rounded-full bg-rose-500 px-5 py-2 font-semibold text-white transition hover:bg-rose-600"
          >
            Agendar
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-600 shadow-sm">
            <Sparkles size={16} />
            Beleza, cuidado e autoestima
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-zinc-900 md:text-6xl">
            Realce sua beleza com carinho, estilo e sofisticação
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600">
            Um espaço feminino pensado para cuidar de você. Oferecemos serviços
            de cabelo, unhas, tratamentos e produções especiais para deixar seu
            dia mais leve, bonito e confiante.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="rounded-full bg-rose-500 px-7 py-3 text-center font-bold text-white transition hover:bg-rose-600"
            >
              Agendar horário
            </a>

            <a
              href="#servicos"
              className="rounded-full border border-rose-200 bg-white px-7 py-3 text-center font-bold text-rose-600 transition hover:bg-rose-100"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
            alt="Salão de beleza feminino"
            className="h-[480px] w-full object-cover"
          />
        </div>
      </section>

      <section id="servicos" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-zinc-900 md:text-4xl">
              Nossos serviços
            </h2>
            <p className="mt-4 text-zinc-600">
              Cuidados completos para valorizar sua beleza em cada detalhe.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <div
                key={servico}
                className="rounded-3xl border border-rose-100 bg-rose-50 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500 text-white">
                  <Scissors size={24} />
                </div>

                <h3 className="text-xl font-bold text-zinc-900">
                  {servico}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Atendimento personalizado, produtos profissionais e acabamento
                  feito com cuidado para você se sentir ainda mais linda.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
            alt="Atendimento em salão de beleza"
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-extrabold text-zinc-900 md:text-4xl">
              Um salão feito para você se sentir bem
            </h2>

            <p className="mt-5 leading-relaxed text-zinc-600">
              No Bella Rosa, cada atendimento é pensado para ser uma experiência
              acolhedora. Do primeiro contato ao resultado final, nosso objetivo
              é cuidar da sua beleza com atenção, delicadeza e profissionalismo.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Ambiente confortável e feminino",
                "Atendimento com horário marcado",
                "Produtos de qualidade profissional",
                "Serviços personalizados para cada cliente",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 font-medium">
                  <CheckCircle className="text-rose-500" size={21} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-zinc-900 md:text-4xl">
              Clientes felizes
            </h2>
            <p className="mt-4 text-zinc-600">
              Depoimentos fictícios para você trocar depois.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Atendimento maravilhoso. Saí renovada e amei o resultado.",
              "O espaço é lindo, confortável e fui muito bem atendida.",
              "Meu cabelo ficou perfeito. Já quero voltar mais vezes.",
            ].map((texto, index) => (
              <div
                key={index}
                className="rounded-3xl border border-rose-100 bg-rose-50 p-6"
              >
                <div className="flex gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-4 leading-relaxed text-zinc-600">
                  “{texto}”
                </p>

                <h3 className="mt-5 font-bold text-rose-600">
                  Cliente {index + 1}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 rounded-[2rem] bg-rose-500 p-8 text-white shadow-2xl md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                Agende seu horário
              </h2>

              <p className="mt-4 leading-relaxed text-rose-50">
                Entre em contato e escolha o melhor dia para cuidar de você.
              </p>

              <div className="mt-8 space-y-4">
                <p className="flex items-center gap-3">
                  <Phone size={20} />
                  (35) 99999-9999
                </p>

                <p className="flex items-center gap-3">
                  <MessageCircle size={20} />
                  @bellarosa.salao
                </p>

                <p className="flex items-center gap-3">
                  <MapPin size={20} />
                  Rua das Flores, 123 - Centro
                </p>

                <p className="flex items-center gap-3">
                  <Clock size={20} />
                  Segunda a sábado, das 9h às 19h
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 text-zinc-800 shadow-xl">
              <h3 className="text-2xl font-extrabold text-rose-600">
                Fale conosco
              </h3>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-rose-100 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
                />

                <input
                  type="tel"
                  placeholder="Seu telefone"
                  className="w-full rounded-xl border border-rose-100 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
                />

                <select className="w-full rounded-xl border border-rose-100 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300">
                  <option>Escolha um serviço</option>
                  {servicos.map((servico) => (
                    <option key={servico}>{servico}</option>
                  ))}
                </select>

                <button
                  type="button"
                  className="w-full rounded-xl bg-rose-500 py-3 font-bold text-white transition hover:bg-rose-600"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Heart className="text-rose-400" size={20} />
            <span className="font-bold">Bella Rosa Salão</span>
          </div>

          <p className="text-sm text-zinc-400">
            © 2026 Bella Rosa. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
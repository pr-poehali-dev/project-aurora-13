import { Globe, Heart, Sparkles, ShieldCheck, Leaf, Camera, Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Животные из каких стран живут в зоопарке?",
      answer:
        "В нашем зоопарке представлены животные с шести континентов: слоны и жирафы из Африки, тигры и панды из Азии, ягуары и ленивцы из Южной Америки, белые медведи из Арктики, кенгуру и коалы из Австралии, а также редкие птицы Европы. Всего более 200 видов.",
    },
    {
      question: "Как долго длится посещение зоопарка?",
      answer:
        "Для комфортного знакомства со всеми экспозициями рекомендуем закладывать 3–4 часа. Если вы планируете посетить кормления, мастер-классы и интерактивные программы — лучше провести у нас целый день. Зоопарк работает с 9:00 до 20:00 без выходных.",
    },
    {
      question: "Можно ли покормить животных?",
      answer:
        "Да! В зоопарке есть специальные зоны ручного кормления, где под наблюдением смотрителей вы можете покормить оленей, лам, кроликов и некоторых птиц. Кормления крупных хищников и экзотических животных проходят по расписанию — это увлекательное шоу для всей семьи.",
    },
    {
      question: "Есть ли льготы для детей и пенсионеров?",
      answer:
        "Дети до 3 лет — бесплатно. Для детей от 3 до 12 лет, пенсионеров и людей с ограниченными возможностями действует скидка 50%. Семейный билет (2 взрослых + 2 ребёнка) позволяет сэкономить до 30% по сравнению с покупкой отдельных билетов.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/62412b0c-9059-432b-8ec5-733ea5167f7d/files/22c9e6fd-562d-4c12-9d27-a31f476cdb74.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Globe className="w-5 h-5" />
            <span className="font-medium text-balance">Зоопарк Мира</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Животные", "Маршрут", "Программы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Купить билет</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Животные с шести континентов</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Весь мир в одном месте.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Познакомьтесь с более чем 200 видами животных со всех уголков Земли — от величественных африканских слонов до редких азиатских тигров — в нашем зоопарке мирового уровня.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Купить билеты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть маршрут
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Забота о животных — наш приоритет</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* 200+ видов */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">200+ видов животных</h3>
              <p className="text-white/80 leading-relaxed">Коллекция из шести континентов в одном зоопарке.</p>
            </div>

            {/* Опытные зоологи */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Забота профессионалов</h3>
              <p className="text-white/80 leading-relaxed">Ветеринары и зоологи следят за здоровьем каждого животного.</p>
            </div>

            {/* Интерактив */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Интерактивные шоу</h3>
              <p className="text-white/80 leading-relaxed">Кормления, мастер-классы и фотосессии с животными.</p>
            </div>

            {/* Экология */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Охрана природы</h3>
              <p className="text-white/80 leading-relaxed">Участвуем в программах защиты редких и исчезающих видов.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш маршрут по зоопарку</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От Африки до Арктики — откройте для себя четыре удивительных мира за один день.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Zone 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Африканская саванна</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Слоны, жирафы, зебры и львы в просторных вольерах, воссоздающих настоящую африканскую саванну.
                  </p>
                </div>
              </div>

              {/* Zone 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Азиатские джунгли</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Амурские тигры, бенгальские тигры, панды и орангутаны в тропическом тропическом лесу.
                  </p>
                </div>
              </div>

              {/* Zone 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Тропики Америки</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Ягуары, ленивцы, тапиры и яркие попугаи ара среди буйной зелени амазонских тропиков.
                  </p>
                </div>
              </div>

              {/* Zone 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Арктика и Австралия</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Белые медведи и пингвины соседствуют с кенгуру, коалами и экзотическими сумчатыми.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Купить билеты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animals Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Виды животных</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Более 200 видов со всего света — каждый со своей историей, средой обитания и характером.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Africa */}
            <div className="rounded-3xl overflow-hidden relative h-80 group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/62412b0c-9059-432b-8ec5-733ea5167f7d/files/c31ac250-bb6d-425c-a450-3c180960c97b.jpg"
                alt="Животные Африки"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Зона 01</div>
                <h3 className="text-2xl font-bold mb-2">Африканская савана</h3>
                <p className="text-white/80 text-sm leading-relaxed">Слоны, львы, зебры, жирафы — властелины бескрайних равнин.</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["Лев", "Слон", "Жираф", "Зебра", "Носорог"].map((a) => (
                    <span key={a} className="px-3 py-1 rounded-full bg-white/15 text-xs font-medium backdrop-blur">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Asia */}
            <div className="rounded-3xl overflow-hidden relative h-80 group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/62412b0c-9059-432b-8ec5-733ea5167f7d/files/087d5074-4421-40db-ae18-3a0ef7721519.jpg"
                alt="Животные Азии"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Зона 02</div>
                <h3 className="text-2xl font-bold mb-2">Джунгли Азии</h3>
                <p className="text-white/80 text-sm leading-relaxed">Тигры, панды и снежные барсы в дремучих лесах Востока.</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["Тигр", "Панда", "Снежный барс", "Орангутан"].map((a) => (
                    <span key={a} className="px-3 py-1 rounded-full bg-white/15 text-xs font-medium backdrop-blur">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Americas */}
            <div className="rounded-3xl overflow-hidden relative h-80 group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/62412b0c-9059-432b-8ec5-733ea5167f7d/files/dc00dd11-f3b5-4a06-b83d-812aa6cfcc08.jpg"
                alt="Животные Америки"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Зона 03</div>
                <h3 className="text-2xl font-bold mb-2">Тропики Америки</h3>
                <p className="text-white/80 text-sm leading-relaxed">Ягуары, ленивцы и попугаи ара в сердце Амазонии.</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["Ягуар", "Ленивец", "Тукан", "Ара", "Анаконда"].map((a) => (
                    <span key={a} className="px-3 py-1 rounded-full bg-white/15 text-xs font-medium backdrop-blur">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Arctic & Australia */}
            <div className="rounded-3xl overflow-hidden relative h-80 group cursor-pointer">
              <img
                src="https://cdn.poehali.dev/projects/62412b0c-9059-432b-8ec5-733ea5167f7d/files/92df7803-ed09-4a60-854c-84363699afac.jpg"
                alt="Арктика и Австралия"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Зона 04</div>
                <h3 className="text-2xl font-bold mb-2">Арктика и Австралия</h3>
                <p className="text-white/80 text-sm leading-relaxed">От белых медведей на льдинах до кенгуру и коал.</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["Белый медведь", "Пингвин", "Кенгуру", "Коала"].map((a) => (
                    <span key={a} className="px-3 py-1 rounded-full bg-white/15 text-xs font-medium backdrop-blur">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед визитом: от животных и расписания кормлений до цен на билеты.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Задайте вопрос или закажите экскурсию..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    По вопросам групповых экскурсий, образовательных программ или корпоративных визитов — напишите нам. Отвечаем в течение одного рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-3xl">
                      🦁
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Команда зоопарка</h4>
                      <p className="text-gray-600">Отдел по работе с посетителями</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-6 h-6" />
                  <span className="text-xl font-semibold">Зоопарк Мира</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Зоопарк мирового уровня с животными с шести континентов. Мы преданы заботе о животных, охране редких видов и незабываемым впечатлениям для всей семьи.
                </p>
              </div>

              {/* Zoo Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ЗООПАРК</h3>
                <ul className="space-y-3">
                  {["Животные", "Расписание", "Маршрут", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Команда", "Охрана природы", "Партнёры"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Купить билеты", "Контакты", "Вопросы и ответы", "Условия"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости зоопарка</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Зоопарк Мира</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
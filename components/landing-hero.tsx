"use client"

export function LandingHero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-2 w-full">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      {/* Logo */}
      <div className="mb-2">
        <img src="/logo-yellow.png" alt="Boca a Boca" className="h-60 md:h-80 w-auto" />
      </div>

      {/* Tagline */}
      <p className="text-md md:text-xl text-muted-foreground mb-4 max-w-2xl text-center">
        Encontre profissionais e serviços na sua região
      </p>

      {/* Description */}
      <div className="max-w-2xl text-center mb-0 mt-4">
        <p className="text-base md:text-lg text-foreground leading-relaxed">
          Hoje a indicação está na internet, portanto quem não está no Boca a Boca está perdendo oportunidades. Aqui você
          sempre vai encontrar os melhores <span className="font-semibold text-primary">profissionais</span> da sua região. 
          Cadastre seu e-mail ao lado para saber das próximas etapas e receber um super bonus de lançamento.
        </p>
      </div>
    </section>
  )
}

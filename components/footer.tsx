export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#FFDE07] text-foreground py-6 px-4">
      <div className="max-w-4xl mx-auto text-center text-sm">
        <p>&copy; {currentYear} Boca a Boca. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

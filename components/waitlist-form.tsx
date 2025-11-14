"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export function WaitlistForm() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (!name.trim()) {
      setError("Por favor, insira seu nome")
      setLoading(false)
      return
    }

    if (!contact.trim()) {
      setError("Por favor, insira um e-mail ou número de telefone")
      setLoading(false)
      return
    }

    const isEmail = contact.includes("@")
    const hasNumbers = /\d/.test(contact)

    if (!isEmail && !hasNumbers) {
      setError("Por favor, insira um e-mail válido ou número de telefone")
      setLoading(false)
      return
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact }),
      })

      if (!response.ok) {
        throw new Error("Erro ao enviar dados")
      }

      setSubmitted(true)
      setName("")
      setContact("")

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Ocorreu um erro. Por favor, tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative py-10 px-4 bg-gradient-to-b from-background to-secondary/5 w-full">
      <div className="max-w-md mx-auto">
        <div className="mb-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Lista de Espera</h2>
          <p className="text-muted-foreground">
            Participe da lista de espera para o lançamento do Boca a Boca e ganhe um desconto especial!
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
            <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-900 mb-2">Obrigado!</h3>
            <p className="text-green-700">Você foi adicionado à nossa lista. Em breve entraremos em contato!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="bg-white border-border"
              />
            </div>

            <div>
              <Input
                id="contact"
                type="text"
                placeholder="Digite seu e-mail ou telefone"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                disabled={loading}
                className="bg-white border-border"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded p-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg transition-all"
            >
              {loading ? "Enviando..." : "Entrar na Lista de Espera"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Seus dados estão seguros. Nunca compartilharemos com terceiros.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

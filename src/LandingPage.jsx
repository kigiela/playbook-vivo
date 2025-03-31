export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-8 sm:px-6 lg:px-8">
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Playbooks Vivos</h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto">
          Recursos, ferramentas e materiais prontos para transformar processos em rituais vivos, úteis e adaptáveis.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
        <div className="border rounded-2xl p-5 sm:p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">📄 Prompts prontos para GPT</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">Copie, adapte e cole no ChatGPT para criar agentes que respondem dúvidas sobre:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
            <li>Pessoas & Cultura</li>
            <li>Vendas B2B</li>
          </ul>
          <a href="https://content.playbookvivo.com/agente_ia_cultura.json" className="inline-block mt-4 text-blue-600 underline text-sm sm:text-base" download>Baixar prompt de Cultura</a><br />
          <a href="https://content.playbookvivo.com/agente_ia_vendas.json" className="inline-block mt-2 text-blue-600 underline text-sm sm:text-base" download>Baixar prompt de Vendas</a>
        </div>

        <div className="border rounded-2xl p-5 sm:p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">🛠️ Workflows para n8n</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">Importe no seu n8n e tenha um Agente de IA rodando em minutos:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
            <li>Agente de Cultura</li>
            <li>Agente de Vendas</li>
            <li>Agente Universal de Playbooks</li>
          </ul>
          <a href="https://content.playbookvivo.com/n8n_agente_ia_playbook.json" className="inline-block mt-4 text-blue-600 underline text-sm sm:text-base" download>Baixar workflow completo</a>
        </div>

        <div className="border rounded-2xl p-5 sm:p-6 shadow-md md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">🚀 Cadastre-se para receber atualizações</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">Conteúdos práticos, vídeos, templates e novidades sobre o mundo dos playbooks vivos.</p>
          <form action="https://formsubmit.co/mk@playbookvivo.com" method="POST" className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" name="email" placeholder="Seu melhor e-mail" className="flex-1 border px-4 py-2 rounded-xl text-sm sm:text-base" required />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm sm:text-base">Cadastrar</button>
          </form>
        </div>
      </section>

      <footer className="text-center text-xs sm:text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Playbook Vivo. Todos os direitos reservados.
      </footer>
    </div>
  );
}

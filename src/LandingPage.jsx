export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Playbooks Vivos</h1>
        <p className="text-lg max-w-xl mx-auto">
          Recursos, ferramentas e materiais prontos para transformar processos em rituais vivos, úteis e adaptáveis.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">📄 Prompts prontos para GPT</h2>
          <p className="mb-4">Copie, adapte e cole no ChatGPT para criar agentes que respondem dúvidas sobre:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pessoas & Cultura</li>
            <li>Vendas B2B</li>
          </ul>
          <a href="#" className="inline-block mt-4 text-blue-600 underline">Baixar prompts</a>
        </div>

        <div className="border rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">🛠️ Workflows para n8n</h2>
          <p className="mb-4">Importe no seu n8n e tenha um Agente de IA rodando em minutos:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Agente de Cultura</li>
            <li>Agente de Vendas</li>
            <li>Agente Universal de Playbooks</li>
          </ul>
          <a href="#" className="inline-block mt-4 text-blue-600 underline">Ver tutoriais e baixar</a>
        </div>

        <div className="border rounded-2xl p-6 shadow-md md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">🚀 Cadastre-se para receber atualizações</h2>
          <p className="mb-4">Conteúdos práticos, vídeos, templates e novidades sobre o mundo dos playbooks vivos.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Seu melhor e-mail" className="flex-1 border px-4 py-2 rounded-xl" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl">Cadastrar</button>
          </form>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Playbook Vivo. Todos os direitos reservados.
      </footer>
    </div>
  );
}

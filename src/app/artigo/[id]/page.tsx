'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';

// Dados simulados para artigos
const articles = [
  {
    id: '1',
    title: 'Como Investir na Bolsa de Valores em 2025',
    content: `
      <p>A bolsa de valores continua sendo uma das melhores opções de investimento para quem busca rentabilidade a longo prazo. Em 2025, com a economia global em recuperação após períodos de instabilidade, muitos investidores estão voltando seus olhos para o mercado de ações.</p>
      
      <h2>Por que investir na bolsa de valores?</h2>
      
      <p>Investir na bolsa de valores oferece diversas vantagens:</p>
      
      <ul>
        <li>Potencial de retornos acima da inflação e de investimentos de renda fixa</li>
        <li>Possibilidade de diversificação da carteira</li>
        <li>Participação nos lucros e crescimento das empresas</li>
        <li>Proteção patrimonial a longo prazo</li>
      </ul>
      
      <h2>Como começar a investir</h2>
      
      <p>Para quem está começando, o primeiro passo é escolher uma corretora de valores confiável. Atualmente, existem diversas opções no mercado com taxas competitivas e plataformas intuitivas para iniciantes.</p>
      
      <p>Após abrir sua conta em uma corretora, é importante estudar o mercado e entender os fundamentos básicos de análise de empresas. Você pode começar investindo em empresas sólidas, com bom histórico de pagamento de dividendos e baixa volatilidade.</p>
      
      <h2>Estratégias para 2025</h2>
      
      <p>Com base nas tendências atuais do mercado, algumas estratégias se mostram promissoras para 2025:</p>
      
      <ol>
        <li><strong>Investimento em empresas de tecnologia</strong> - O setor de tecnologia continua em expansão, com empresas inovadoras apresentando boas oportunidades de valorização.</li>
        <li><strong>Empresas do setor de energia renovável</strong> - Com a crescente preocupação com sustentabilidade, empresas deste setor têm grande potencial de crescimento.</li>
        <li><strong>Diversificação internacional</strong> - Investir em empresas de diferentes países pode reduzir riscos e aumentar oportunidades.</li>
        <li><strong>ETFs</strong> - Fundos de índice permitem exposição a diversos setores com um único investimento, ideal para iniciantes.</li>
      </ol>
      
      <h2>Riscos e cuidados</h2>
      
      <p>Todo investimento envolve riscos, e a bolsa de valores não é exceção. É fundamental:</p>
      
      <ul>
        <li>Investir apenas o dinheiro que não precisará no curto prazo</li>
        <li>Diversificar os investimentos</li>
        <li>Estudar constantemente sobre o mercado</li>
        <li>Ter paciência e visão de longo prazo</li>
        <li>Não tomar decisões baseadas em emoções</li>
      </ul>
      
      <p>Com a estratégia correta e disciplina, investir na bolsa de valores em 2025 pode ser um caminho sólido para construir patrimônio e alcançar independência financeira.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop',
    category: 'Economia',
    date: '23 Maio, 2025',
    author: 'Carlos Oliveira',
    authorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop',
    relatedArticles: ['4', '11', '13']
  },
  {
    id: '2',
    title: 'Inteligência Artificial: O Futuro do Trabalho',
    content: `
      <p>A inteligência artificial (IA) está transformando rapidamente o mercado de trabalho global. À medida que algoritmos e sistemas autônomos se tornam mais sofisticados, muitas profissões estão sendo redefinidas, enquanto novas oportunidades surgem em áreas emergentes.</p>
      
      <h2>Como a IA está mudando o mercado de trabalho</h2>
      
      <p>A automação impulsionada pela IA está afetando praticamente todos os setores da economia:</p>
      
      <ul>
        <li>Tarefas repetitivas e previsíveis estão sendo automatizadas</li>
        <li>Profissionais precisam desenvolver novas habilidades para permanecer relevantes</li>
        <li>Novas profissões estão surgindo para atender às demandas da era digital</li>
        <li>A colaboração entre humanos e máquinas está se tornando o novo padrão</li>
      </ul>
      
      <h2>Profissões em alta para os próximos anos</h2>
      
      <p>Com base nas tendências atuais, algumas áreas profissionais devem experimentar crescimento significativo:</p>
      
      <ol>
        <li><strong>Especialistas em IA e aprendizado de máquina</strong> - Profissionais que desenvolvem e aprimoram sistemas de IA continuarão em alta demanda.</li>
        <li><strong>Cientistas de dados</strong> - A capacidade de analisar grandes volumes de dados e extrair insights valiosos será cada vez mais valorizada.</li>
        <li><strong>Especialistas em cibersegurança</strong> - Com a digitalização acelerada, a proteção de dados e sistemas se torna crucial.</li>
        <li><strong>Profissionais de saúde digital</strong> - A interseção entre tecnologia e saúde está criando novas oportunidades para telemedicina e diagnósticos assistidos por IA.</li>
        <li><strong>Especialistas em sustentabilidade</strong> - Profissionais que podem ajudar empresas a reduzir seu impacto ambiental usando tecnologia.</li>
      </ol>
      
      <h2>Como se preparar para o futuro do trabalho</h2>
      
      <p>Para prosperar no mercado de trabalho do futuro, algumas estratégias são essenciais:</p>
      
      <ul>
        <li>Desenvolver habilidades que complementam a IA, como criatividade, pensamento crítico e inteligência emocional</li>
        <li>Adotar uma mentalidade de aprendizado contínuo</li>
        <li>Familiarizar-se com ferramentas digitais e conceitos básicos de programação</li>
        <li>Cultivar habilidades de comunicação e trabalho em equipe</li>
        <li>Estar aberto a mudanças e adaptações na carreira</li>
      </ul>
      
      <h2>O equilíbrio entre humanos e máquinas</h2>
      
      <p>Apesar dos avanços da IA, as habilidades exclusivamente humanas continuarão sendo valorizadas. A empatia, criatividade, julgamento ético e resolução de problemas complexos são áreas onde os humanos ainda superam as máquinas.</p>
      
      <p>O futuro do trabalho provavelmente será caracterizado por uma colaboração mais estreita entre humanos e sistemas de IA, com cada um contribuindo com seus pontos fortes únicos.</p>
      
      <p>Ao abraçar as mudanças tecnológicas e investir no desenvolvimento contínuo de habilidades relevantes, os profissionais podem se posicionar para prosperar na economia impulsionada pela IA que está se formando rapidamente.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1677442135136-760c813dce26?q=80&w=1632&auto=format&fit=crop',
    category: 'Tecnologia',
    date: '22 Maio, 2025',
    author: 'Ana Silva',
    authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop',
    relatedArticles: ['5', '8', '14']
  },
  // Artigos adicionais seriam definidos aqui
];

export default function ArticlePage() {
  const params = useParams();
  const id = params.id as string;
  
  // Encontrar o artigo com base no ID da URL
  const article = articles.find(article => article.id === id) || articles[0];
  
  // Encontrar artigos relacionados
  const relatedArticlesList = article.relatedArticles 
    ? article.relatedArticles.map(relId => articles.find(a => a.id === relId)).filter(Boolean)
    : [];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner de anúncio no topo */}
      <div className="container mx-auto px-4 py-4">
        <AdBanner position="top" className="mb-6" />
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Conteúdo principal do artigo */}
          <article className="w-full lg:w-2/3">
            <header className="mb-8">
              <div className="text-sm text-blue-600 font-medium mb-2">
                <Link href={`/${article.category.toLowerCase()}`} className="hover:underline">
                  {article.category}
                </Link>
                <span className="mx-2">•</span>
                <span className="text-gray-500">{article.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image 
                    src={article.authorImage || 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop'} 
                    alt={article.author} 
                    width={40} 
                    height={40} 
                    className="object-cover"
                  />
                </div>
                <span className="text-gray-700">Por <strong>{article.author}</strong></span>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 relative h-96 mb-6">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </header>
            
            {/* Conteúdo do artigo */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Banner de anúncio no meio do artigo */}
            <div className="my-8">
              <AdBanner position="middle" />
            </div>
            
            {/* Seção de compartilhamento */}
            <div className="border-t border-b border-gray-200 py-6 my-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Compartilhe este artigo</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </button>
                <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </button>
                <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Artigos relacionados */}
            {relatedArticlesList.length > 0 && (
              <div className="my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Artigos Relacionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticlesList.map((relatedArticle) => (
                    relatedArticle && (
                      <div key={relatedArticle.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Link href={`/artigo/${relatedArticle.id}`}>
                          <div className="aspect-w-16 aspect-h-9 relative h-40">
                            <Image
                              src={relatedArticle.imageUrl}
                              alt={relatedArticle.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-gray-900 hover:text-blue-600 transition-colors">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-gray-500 text-sm mt-1">{relatedArticle.date}</p>
                          </div>
                        </Link>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </article>
          
          {/* Barra lateral */}
          <aside className="w-full lg:w-1/3 space-y-8">
            {/* Anúncio na barra lateral */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <AdBanner position="sidebar" />
            </div>
            
            {/* Newsletter */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Receba Atualizações</h3>
              <p className="text-gray-600 text-sm mb-4">
                Inscreva-se na nossa newsletter para receber as últimas notícias diretamente na sua caixa de entrada.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
            
            {/* Outro anúncio na barra lateral */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <AdBanner position="sidebar" />
            </div>
          </aside>
        </div>
      </main>
      
      {/* Banner de anúncio no rodapé */}
      <div className="container mx-auto px-4 py-6">
        <AdBanner position="bottom" className="my-8" />
      </div>
      
      <Footer />
    </div>
  );
}

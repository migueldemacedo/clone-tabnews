function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Header decorativo */}
      <div className="bg-yellow-400 h-2"></div>
      
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Título Principal */}
        <section className="text-center mb-12 mt-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-2 mb-4">
            <h1 className="text-yellow-300 text-3xl sm:text-4xl font-bold tracking-wide">
              9º ENCONTRO
            </h1>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl font-light italic">
            ELE ESTÁ NO MEIO DE NÓS
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-1 bg-yellow-400 rounded"></div>
          </div>
        </section>

        {/* Seções */}
        <div className="space-y-8">
          {/* 1. ORAÇÃO INICIAL */}
          <section className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 border-b-2 border-yellow-400 pb-2">
              1. ORAÇÃO INICIAL
            </h3>
            <p className="text-gray-600 italic mb-4 text-sm">
              (Para todos os dias)
            </p>
            
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                <strong className="text-blue-900">D.</strong> Queridos irmãos e irmãs, aqui estamos, como
                filhos e filhas do Pai, preparando-nos para bem celebrar e viver o
                Mistério do Natal do Senhor, que desejou fazer morada em nosso
                mundo, assumindo a nossa humanidade. Ao escolher habitar em nossa
                simplicidade, o Filho de Deus elevou todos os homens e mulheres ao
                coração da Santíssima Trindade.
              </p>
              <p>Por isso, rezemos:</p>
              <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong className="text-blue-900">T.</strong> Em nome do Pai, e do Filho, e do Espírito Santo.
                Amém!
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="text-blue-900 font-bold text-lg mb-4">
                  Canto: Senhor, vem salvar teu povo!
                </h4>
                <p className="text-gray-600 italic text-sm mb-4">
                  (L. e M.: Pe. José Weber, svd)
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="mb-2">
                      <strong className="text-blue-900">1.</strong> Senhor, vem salvar teu povo / Das trevas da escravidão!
                    </p>
                    <p>Só tu és nossa esperança, / És nossa libertação!</p>
                  </div>

                  <div className="bg-white p-3 rounded-lg border-2 border-blue-300">
                    <p className="mb-1">
                      <strong className="text-blue-900">R.</strong> Vem, Senhor, vem nos salvar!
                    </p>
                    <p>Com teu povo vem caminhar! <em className="text-gray-600">(bis)</em></p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="mb-2">
                      <strong className="text-blue-900">2.</strong> Contigo o deserto é fértil, / A terra se abre em flor,
                    </p>
                    <p>Da rocha brota água viva, / Da treva nasce esplendor.</p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="mb-2">
                      <strong className="text-blue-900">3.</strong> Tu marchas à nossa frente, / És força, caminho e luz.
                    </p>
                    <p>Vem logo salvar teu povo, / Não tardes, ó Senhor Jesus!</p>
                  </div>
                </div>

                <p className="text-gray-600 italic text-sm mt-4">
                  (Outros cantos à escolha nas p. 31-32)
                </p>
              </div>
            </div>
          </section>

          {/* 2. ACOLHIDA DO TEMA */}
          <section className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 border-b-2 border-yellow-400 pb-2">
              2. ACOLHIDA DO TEMA
            </h3>
            
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                <strong className="text-blue-900">D.</strong> Chegamos ao último dia de nossa Novena!
                Percorremos um caminho de fé e esperança, preparando nosso coração
                para acolher Aquele que vem.
              </p>
              <p>
                <strong className="text-blue-900">L1.</strong> Desde antes da criação do mundo, Deus nos
                sonhou e amou. Não criou o mundo para abandoná-lo, mas para caminhar
                conosco e fazer-se presente. Assim como esteve com o povo no
                deserto, Ele peregrina conosco. Não é um Deus imóvel, mas um
                companheiro de jornada, próximo dos que sofrem.
              </p>
              <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 text-center font-semibold text-lg">
                <strong className="text-blue-900">T.</strong> Ele está no meio de nós!
              </p>
              <p>
                <strong className="text-blue-900">L2.</strong> Quando quis habitar entre nós, escolheu a
                simplicidade. Não deseja palácios, mas corações humildes, dispostos
                a acolhê-lo. Sua presença transforma o mundo. Ele veio restaurar a
                paz, derrubar muros e curar as feridas da humanidade dividida.
              </p>
            </div>
          </section>

          {/* 3. ILUMINAÇÃO BÍBLICA */}
          <section className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 border-b-2 border-yellow-400 pb-2">
              3. ILUMINAÇÃO BÍBLICA
            </h3>
            
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                <strong className="text-blue-900">D.</strong> A Palavra de Deus é presença viva do Senhor em
                nosso meio. Viva o Emanuel, Deus Conosco!
              </p>
              <p className="text-gray-600 italic text-sm">
                (Canto de acolhida da Palavra – à escolha nas p. 31-32)
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <p className="font-bold text-blue-900 mb-3">
                  Proclamação da Palavra – João 1,1-14
                </p>
                <p className="text-gray-600 italic text-sm">
                  (Após a proclamação, faz-se um tempo de silêncio para que cada um
                  leia e releia o texto em sua própria Bíblia, pelo menos três
                  vezes, sem pressa)
                </p>
              </div>
            </div>
          </section>

          {/* 4. PARTILHA */}
          <section className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 border-b-2 border-yellow-400 pb-2">
              4. PARTILHA
            </h3>
            
            <ul className="space-y-3 text-gray-800 leading-relaxed">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">•</span>
                <span>O que mais nos tocou nessa Palavra?</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">•</span>
                <span>O que significa, para nós, saber que Deus armou sua tenda no meio de nós?</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 text-xl">•</span>
                <span>Como podemos reconhecer e acolher essa presença de Deus em nossa vida?</span>
              </li>
            </ul>
          </section>

          {/* 5. FATO DA VIDA */}
          <section className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 border-b-2 border-yellow-400 pb-2">
              5. FATO DA VIDA
            </h3>
            
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                Neste último dia de Novena, interessa-nos, sobretudo, o fato
                concreto de nossas vidas. Afinal, na história de cada um de nós,
                manifesta-se um mistério de comunhão. Na nossa carne, Deus habita.
                Em nossas tendas, Ele vem morar. Com amor e ternura, Ele caminha
                pelas curvas de nossas dores, amores, quedas e superações. Nada em
                nós é indiferente para Deus, e nada é indigno de seu cuidado de Pai.
                Somos nós a manjedoura onde Ele repousa, e, como a estrela de Belém,
                o Espírito Santo ilumina os nossos rostos.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p>
                  <strong className="text-blue-900">•</strong> Hoje cada um pode partilhar brevemente o que mais
                  lhe tocou nesse percurso de oração, e que fatos da sua vida têm sido
                  transformados em expectativa para o Natal.
                </p>
              </div>
            </div>
          </section>

          {/* 6. REZAR COM A PALAVRA */}
          <section className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 border-b-2 border-yellow-400 pb-2">
              6. REZAR COM A PALAVRA
            </h3>
            
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                <strong className="text-blue-900">D.</strong> O Natal nos lembra que Deus continua vindo ao
                nosso encontro. Peçamos a graça de ser um lugar onde Ele possa
                habitar:
              </p>
              <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 text-center font-semibold">
                <strong className="text-blue-900">T.</strong> Senhor, que o nosso Natal seja tenda do teu amor
                no mundo!
              </p>
              <ol className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">1.</span>
                  <span>Para que saibamos ver tua presença no rosto dos pequenos, nós te pedimos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">2.</span>
                  <span>Para que sejamos sinais do teu amor no mundo, nós te pedimos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">3.</span>
                  <span>Para que aprendamos a abrir espaço para os irmãos em nossa vida, nós te pedimos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">4.</span>
                  <span>Para que nunca percamos a esperança de um mundo renovado, nós te pedimos.</span>
                </li>
              </ol>
              <p className="text-gray-600 italic text-sm">
                (Outras intenções podem ser acrescentadas)
              </p>
            </div>
          </section>

          {/* 7. COMPROMISSO DE IRMÃOS */}
          <section className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 border-b-2 border-yellow-400 pb-2">
              7. COMPROMISSO DE IRMÃOS
            </h3>
            
            <div className="text-gray-800 leading-relaxed">
              <p>
                <strong className="text-blue-900">D.</strong> O Natal é tempo de partilha, de acolhida e de
                comunhão verdadeiras. Por isso, como irmãos e irmãs,
                comprometemo-nos a viver esta noite santa de um modo mais simples e
                generoso: preparando uma ceia sem desperdícios, onde o essencial
                brilhe mais do que a fartura. Que nosso Natal não seja apenas festa
                familiar, mas sinal vivo do Reino de Deus, onde cada um tem lugar,
                pão e amor traduzidos em partilha.
              </p>
            </div>
          </section>

          {/* 8. ORAÇÃO FINAL */}
          <section className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-blue-900 text-xl sm:text-2xl font-bold mb-4 border-b-2 border-yellow-400 pb-2">
              8. ORAÇÃO FINAL
            </h3>
            <p className="text-gray-600 italic text-sm mb-4">
              (Para todos os dias)
            </p>
            
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                <strong className="text-blue-900">D.</strong> Querida comunidade, com o fim de mais um dia de Novena, supliquemos ao Bom Deus
                que as bênçãos alcançadas com esta nossa oração se estendam a todos os irmãos e irmãs,
                em especial àqueles em maior sofrimento e aflição.
              </p>
              <p>
                <strong className="text-blue-900">T.</strong> <em>(O canto também pode ser recitado em dois coros)</em>
              </p>
              <p className="text-gray-600 italic text-sm">
                (Outros cantos à escolha nas p. 31-32)
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h4 className="text-blue-900 font-bold text-lg mb-4">
                  Canto: Eis que veio o Senhor – Salmo 72
                </h4>
                <p className="text-gray-600 italic text-sm mb-4">
                  (V. e M.: Frei Joel Postma, ofm)
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-lg border-2 border-blue-300">
                    <p className="mb-1">
                      <strong className="text-blue-900">R.</strong> Eis que veio o Senhor dos senhores,
                    </p>
                    <p className="ml-6">em suas mãos o poder e a realeza. <em className="text-gray-600">(bis)</em></p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <p>
                      <strong className="text-blue-900">1.</strong> Dai ao rei vossos poderes, Senhor Deus,
                    </p>
                    <p className="ml-6">vossa justiça ao descendente da realeza!</p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <p>
                      <strong className="text-blue-900">2.</strong> Com justiça ele governe o vosso povo,
                    </p>
                    <p className="ml-6">com equidade ele julgue os vossos pobres.</p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <p>
                      <strong className="text-blue-900">3.</strong> Libertará o indigente que suplica,
                    </p>
                    <p className="ml-6">E o pobre ao qual ninguém quer ajudar.</p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <p>
                      <strong className="text-blue-900">4.</strong> Todos os povos serão nele abençoados,
                    </p>
                    <p className="ml-6">Todas as gentes cantarão o seu louvor!</p>
                  </div>

                  <p className="text-gray-600 italic text-sm mt-4">
                    (Faz-se uma inclinação:)
                  </p>

                  <div className="border-l-4 border-blue-400 pl-4">
                    <p>
                      <strong className="text-blue-900">5.</strong> Glória ao Pai e ao Filho e ao Santo Espírito,
                    </p>
                    <p className="ml-6">como era no princípio, agora e sempre.</p>
                  </div>

                  <p className="text-gray-600 italic text-sm mt-4">
                    (Se oportuno, aspergir água benta na casa e nas pessoas, como memória do Batismo)
                  </p>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-4">
                    <p className="font-semibold text-blue-900">Pai-Nosso, Ave-Maria e Glória ao Pai.</p>
                    <p className="text-gray-700 mt-2">
                      <strong>Abraço da paz</strong> <em className="text-gray-600">(canto à escolha: p. 31-32)</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 mb-8">
          <div className="w-24 h-1 bg-yellow-400 rounded mx-auto mb-4"></div>
          <p className="text-white/80 text-sm">
            Feliz Natal! Que o Senhor habite em nossos corações.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
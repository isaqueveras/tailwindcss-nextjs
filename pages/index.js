import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Primeira impressão com Tailwindcss no Nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-100">
        <nav class="shadow bg-white font-sans">
          <div class="max-w-7xl w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center justify-center">
                  <img class="block lg:hidden h-8 w-auto rounded-full" src="https://avatars.githubusercontent.com/u/46972789?v=4" alt="Workflow" />
                  <img class="hidden lg:block h-8 w-auto rounded-full" src="https://avatars.githubusercontent.com/u/46972789?v=4" alt="Workflow" />
                  <span className="text-2xl font-semibold px-2 text-purple-600 font-mono">/isaqueveras</span>
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">Blog</a>
                    <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">Instagram</a>
                    <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">Linkedin</a>
                    <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">GitHub</a>
                    <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">Youtube</a>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button class="flex itens-center justify-center p-1 text-gray-600 hover:text-black">
                  Contato
                </button>
              </div>
            </div>
          </div>

          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">Blog</a>
              <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">Instagram</a>
              <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">Linkedin</a>
              <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">GitHub</a>
              <a href="#" class="p-1 text-gray-600 hover:text-black font-medium">Youtube</a>
            </div>
          </div>
        </nav>

        <main>
          <div className="bg-purple-100 py-10">
            <div class="max-w-screen-xl w-full mx-auto container-xl px-2 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-semibold font-mono">Aprendendo a usar o <br/> Tailwindcss no Nextjs</h1>
              <p className="mt-2 font-medium font-sans text-gray-600">Usando as classes do Tailwindcss para fazer components <br /> e estilizar uma interface agradável</p>

              <div className="flex itens-center">
                <button class="mt-4 flex itens-center mr-2 justify-center p-2 bg-purple-800 text-purple-100 rounded-md hover:text-purple-200 hover:bg-purple-700">
                  Entrar em contato
                </button>

                <button class="mt-4 flex itens-center justify-center p-2 bg-white text-purple-800 rounded-md hover:text-purple-900">
                  Enviar um e-mail
                </button>
              </div>

            </div>
          </div>

          <div className="my-4 max-w-screen-xl w-full mx-auto container-xl px-2 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold">Alguns trabalhos</h2>
          </div>
          <div className="mb-4 flex itens-center max-w-screen-xl w-full mx-auto container-xl px-2 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-100 m-auto w-full h-64" style={{ backgroundImage: `url('/telas/site-aomercado.png')`, backgroundSize: '100%' }}>
                <div className="flex flex-row items-end h-full w-full">
                  <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                    <h3 className="text-base font-bold leading-5 uppercase">Site do aomercado, plataforma onde ajuda comerciantes e lojistas de Mombaça</h3>
                    <div className="inline-flex items-center">
                      <span className="capitalize font-base text-xs my-1 mr-1">Isaque Véras</span>
                      <svg className="stroke-current stroke-1 text-purple-600 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <div className="w-max inline-flex items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">0</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1 Hours ago</span>
                        </div>
                      </div>
                      <div className="w-max">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 m-auto w-full h-64" style={{ backgroundImage: `url('/telas/tela-aomercado-blog.png')`, backgroundSize: '100%' }}>
                <div className="flex flex-row items-end h-full w-full">
                  <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                    <h3 className="text-base font-bold leading-5 uppercase">Blog do site aomercado, com artigos de empreendedorismo e tecnologia</h3>
                    <div className="inline-flex items-center">
                      <span className="capitalize font-base text-xs my-1 mr-1">Isaque Véras</span>
                      <svg className="stroke-current stroke-1 text-purple-600 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <div className="w-max inline-flex items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">0</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1 Hours ago</span>
                        </div>
                      </div>
                      <div className="w-max">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 m-auto w-full h-64" style={{ backgroundImage: `url('/telas/tela-github.png')`, backgroundSize: '100%' }}>
                <div className="flex flex-row items-end h-full w-full">
                  <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                    <h3 className="text-base font-bold leading-5 uppercase">Meu github, com varios repositorios, onde fica boa parte dos meus codigos</h3>
                    <div className="inline-flex items-center">
                      <span className="capitalize font-base text-xs my-1 mr-1">Isaque Véras</span>
                      <svg className="stroke-current stroke-1 text-purple-600 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <div className="w-max inline-flex items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">0</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1 Hours ago</span>
                        </div>
                      </div>
                      <div className="w-max">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 m-auto w-full h-64" style={{ backgroundImage: `url('/telas/tela-linkedin.png')`, backgroundSize: '100%' }}>
                <div className="flex flex-row items-end h-full w-full">
                <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                  <h3 className="text-base font-bold leading-5 uppercase">Meu perfil na plataforma linkedin, onde compartilho meu aprendizado</h3>
                  <div className="inline-flex items-center">
                    <span className="capitalize font-base text-xs my-1 mr-1">Isaque Véras</span>
                    <svg className="stroke-current stroke-1 text-purple-600 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                      <div className="w-max inline-flex items-center">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="text-xs ml-1 antialiased">0</span>
                      </div>
                      <div className="w-max inline-flex ml-4 items-center">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-xs ml-1 antialiased">1</span>
                      </div>
                      <div className="w-max inline-flex ml-4 items-center">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs ml-1 antialiased">1 Hours ago</span>
                      </div>
                    </div>
                    <div className="w-max">
                      <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="bg-gray-100 m-auto w-full h-64" style={{ backgroundImage: `url('/telas/site-aomercado.png')`, backgroundSize: '100%' }}>
                <div className="flex flex-row items-end h-full w-full">
                  <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                    <h3 className="text-base font-bold leading-5 uppercase">Blog do site aomercado, com artigos de empreendedorismo e tecnologia</h3>
                    <div className="inline-flex items-center">
                      <span className="capitalize font-base text-xs my-1 mr-1">Isaque Véras</span>
                      <svg className="stroke-current stroke-1 text-purple-600 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <div className="w-max inline-flex items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">0</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1 Hours ago</span>
                        </div>
                      </div>
                      <div className="w-max">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 m-auto w-full h-64" style={{ backgroundImage: `url('/telas/tela-aomercado-blog.png')`, backgroundSize: '100%' }}>
                <div className="flex flex-row items-end h-full w-full">
                  <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                    <h3 className="text-base font-bold leading-5 uppercase">Meu github, com varios repositorios, onde fica boa parte dos meus codigos</h3>
                    <div className="inline-flex items-center">
                      <span className="capitalize font-base text-xs my-1 mr-1">Isaque Véras</span>
                      <svg className="stroke-current stroke-1 text-purple-600 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <div className="w-max inline-flex items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">0</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1</span>
                        </div>
                        <div className="w-max inline-flex ml-4 items-center">
                          <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs ml-1 antialiased">1 Hours ago</span>
                        </div>
                      </div>
                      <div className="w-max">
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
       
          </div>
        </main>

      </body>
    </div>
  )
}

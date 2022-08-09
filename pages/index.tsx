import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "./header";
import Link from 'next/link';

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Marrocos</title>
          <meta name="description" content="Powered by Marrocos" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Hendriw Marrocos</h1>

          <p className={styles.description}>Desenvolvedor Web<p>Front-end</p></p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Olá!</h2>
              <p>
                Tenho 21 anos de idade, sou de{" "}
                <a
                  href="https://google.com/maps/place/Sao+Paulo"
                  className={styles.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  São Paulo, Brasil
                </a>
                , e amo o que faço.
              </p>
              
              <nav className={styles.sections}>
                <Link href="#sobre"><a
                  className="text-center whitespace-nowrap rounded-xl px-4 py-2 font-semibold flex-1 border-2 border-neutral-200"
                >
                  Sobre mim
                </a></Link>
                <Link href="#comp"><a
                  className="text-center whitespace-nowrap rounded-xl px-4 py-2 font-semibold flex-1 border-2 border-neutral-200"
                >
                  Competências
                </a></Link>
                <Link href="#proj"><a
                  className="text-center whitespace-nowrap rounded-xl px-4 py-2 font-semibold flex-1 border-2 border-neutral-200"
                >
                  Projetos
                </a></Link>
                <Link href="#cont"><a
                  className="text-center whitespace-nowrap rounded-xl px-4 py-2 font-semibold flex-1 border-2 border-neutral-200"
                >
                  Contato
                </a></Link>
              </nav>
            </div>

            <div id="sobre" className={styles.card}>
              <h2>Sobre mim</h2>
              <hr className={styles.hr}/>
              <p>
                Técnico em Informática e aluno de graduação, com habilidades em
                resolução de problemas.
              </p>
              <p>
                Busco estagiar por meio da criatividade, colaboração e aceitação
                de críticas.
              </p>
              <p>Me destaco em várias ferramentas tecnológicas.</p>
            </div>

            <div className="flex w-full">
              <div className="mx-auto w-full max-w-3xl rounded-2xl py-4">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg border-2 bg-black px-4 py-3 text-left text-xl font-medium">
                        <span>Formação</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-7 w-7`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl">
                        <ul className="flex list-disc flex-col pl-6">
                          <li>
                            Bacharel em Engenharia de Biossistemas -
                            Universidade de São Paulo (2020 - 2025)
                          </li>
                          <li>
                            Técnico em Informática - Escola Técnica Estadual de
                            São Paulo (2017 - 2019)
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-8">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg border-2 bg-black px-4 py-3 text-left text-xl font-medium">
                        <span>Experiência</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-7 w-7`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl">
                        <ul className="flex list-disc flex-col pl-6">
                          <li>
                            Gerente de Marketing - Biossistec Jr (jan 2022 -
                            hoje)
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>

            <div id="comp" className={styles.card}>
              <h2>Competências</h2>
              <hr className={styles.hr} />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/nextjs.png"
                    alt="Next.js"
                  />
                  Next.js
                </div>
                <div className="flex gap-2">
                  <img
                    className="self-center h-4"
                    src="/reactjs.png"
                    alt="React.js"
                  />
                  React.js
                </div>
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/ts.png"
                    alt="TypeScript"
                  />
                  TypeScript
                </div>
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/esl.png"
                    alt="ESLint"
                  />
                  ESLint
                </div>
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/twcss.png"
                    alt="Tailwind CSS"
                  />
                  Tailwind CSS
                </div>
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/sass.png"
                    alt="SASS/SCSS"
                  />
                  SASS/SCSS
                </div>
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/seo.png"
                    alt="SEO"
                  />
                  Otimização para mecanismos de busca (SEO)
                </div>
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/mdx.png"
                    alt="MDX"
                  />
                  MultiDimensional eXpressions
                </div>
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/ga.png"
                    alt="Google Analytics"
                  />
                  Google Analytics
                </div>
                <div className="flex gap-2">
                  <img
                    className="flex self-center h-4"
                    src="/git.png"
                    alt="Git"
                  />
                  Git
                </div>
              </div>
            </div>
            <div id="proj" className={styles.card}>
              <h2>Projetos</h2>
              <hr className={styles.hr} />

              <a
                href="https://freecodecamp.org/certification/fcc872f5b52-30ee-4772-bd3f-d8ef190b0512/front-end-development-libraries"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex-col rounded-xl border-2 px-4 py-2">
                  <img
                    className="h-20 w-20 rounded-xl"
                    src="/fcc.png"
                    alt="freeCodeCamp"
                  ></img>
                  <div className="flex flex-col py-2">
                    <div className="flex">
                      <h4 className="text-lg font-medium flex-1">
                        Front End Development Libraries
                      </h4>
                    </div>
                    <p className="text-lg font-light">
                      Concluí com sucesso: Bibliotecas de Desenvolvimento
                      Front-End, do free Code Camp, representando
                      aproximadamente 300 horas de curso.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div id="cont" className={styles.card}>
              <h2>Contato</h2>
              <hr className={styles.hr} />
              <a
                href="https://www.linkedin.com/in/hendriw-marrocos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-4">
                  <img
                    className="h-8 flex self-center pl-4"
                    src="/li.png"
                    alt="LinkedIn"
                  ></img>
                  <div className="flex flex-col">
                    <div className="flex">
                      <h4 className="text-lg font-medium flex-1">LinkedIn</h4>
                    </div>
                    <p className="text-lg font-light break-all">
                      linkedin.com/in/hendriw-marrocos
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/hmarrocos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-4">
                  <img
                    className="h-8 flex self-center pl-4"
                    src="/gh.png"
                    alt="GitHub"
                  ></img>
                  <div className="flex flex-col">
                    <div className="flex">
                      <h4 className="text-lg font-medium flex-1">GitHub</h4>
                    </div>
                    <p className="text-lg font-light break-all">
                      github.com/hmarrocos
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="mailto:tendhendriw_94@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex gap-4">
                  <img
                    className="h-8 flex self-center pl-4"
                    src="/mail.png"
                    alt="E-mail"
                  ></img>
                  <div className="flex flex-col">
                    <div className="flex">
                      <h4 className="text-lg font-medium flex-1">E-mail</h4>
                    </div>
                    <p className="text-lg font-light break-all">
                      tendhendriw_94@hotmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://hmarrocos.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Distribuído por Marrocos, 2022
            {/* <span className={styles.logo}>
            <Image src="/favicon-16x16.png" alt="Marrocos Logo" width={16} height={16} />
          </span> */}
          </a>
        </footer>
      </div>
    </>
  );
}

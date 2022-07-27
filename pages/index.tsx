import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "./header";

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

          <p className={styles.description}>Desenvolvedor Web Front-end</p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Olá!</h2>
              <p>
                Sou Desenvolvedor Web de{" "}
                <a
                  href="https://google.com/maps/place/Sao+Paulo"
                  className={styles.code}
                >
                  São Paulo, Brasil
                </a>
                , e amo o que faço.
              </p>
              <nav className={styles.buttons}>
                <button className="whitespace-nowrap rounded-xl text-sky-600 px-4 py-2 font-semibold flex-1 border border-neutral-200" type="button">Sobre mim</button>
                <button className="whitespace-nowrap rounded-xl text-sky-600 px-4 py-2 font-semibold flex-1 border border-neutral-200" type="button">Competências</button>
                <button className="whitespace-nowrap rounded-xl text-sky-600 px-4 py-2 font-semibold flex-1 border border-neutral-200" type="button">Projetos</button>
                <button className="whitespace-nowrap rounded-xl text-sky-600 px-4 py-2 font-semibold flex-1 border border-neutral-200" type="button">Contato</button>
              </nav>
            </div>

            <div className={styles.card}>
              <h2>Sobre mim</h2>
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
          </div>

          <div className="flex w-full">
            <div className="mx-auto w-full max-w-3xl rounded-2xl py-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-200 px-4 py-2 text-left text-xl font-medium">
                      <span>Formação</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-7 w-7`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl">
                      <ul className="flex list-disc flex-col pl-6">
                        <li>Bacharel em Engenharia de Biossistemas - Universidade de São Paulo (2020 - 2025)</li>
                        <li>Técnico em Informática - Escola Técnica Estadual de São Paulo (2017 - 2019)</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-200 px-4 py-2 text-left text-xl font-medium">
                      <span>Experiência</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-7 w-7`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl">
                      <ul className="flex list-disc flex-col pl-6">
                        <li>Gerente de Marketing - Biossistec Jr (jan 2022 - hoje)</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Competências</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde earum praesentium facilis quibusdam recusandae corporis cupiditate voluptatibus a consectetur fuga accusamus quis reprehenderit, sunt aspernatur voluptas quasi architecto ab.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Projetos</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde earum praesentium facilis quibusdam recusandae corporis cupiditate voluptatibus a consectetur fuga accusamus quis reprehenderit, sunt aspernatur voluptas quasi architecto ab.
              </p>
            </div>
            <div className={styles.card}>
              <h2>Contato</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde earum praesentium facilis quibusdam recusandae corporis cupiditate voluptatibus a consectetur fuga accusamus quis reprehenderit, sunt aspernatur voluptas quasi architecto ab.
              </p>
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

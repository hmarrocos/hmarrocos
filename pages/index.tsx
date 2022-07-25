import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from './header'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

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
        <h1 className={styles.title}>
          Hendriw Marrocos
        </h1>

        <p className={styles.description}>
        Desenvolvedor Web Front-end
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Olá!</h2>
            <p>
              Sou Desenvolvedor Web de{' '}
              <a 
              href="https://google.com/maps/place/Sao+Paulo" 
              className={styles.code}>
                São Paulo, Brasil
              </a>
              , e amo o que faço.
            </p>
          </a>

          <a className={styles.card}>
            <h2>Sobre mim</h2>
            <p>Tenho 21 anos de idade.</p>
            <p>Gosto de conhecer pessoas novas, viajar, natureza e explorar o desconhecido.</p>
            <p>Desde criança lido com tecnologia, sempre buscando por solucionar problemas ou aprender algo novo.</p>
            <p>Programo há 5 anos, porém na área há 6 meses.</p>
          </a>
        </div>

        <div className="flex w-full">
      <div className="mx-auto w-full max-w-3xl rounded-2xl py-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-200 px-4 py-2 text-left text-lg font-medium">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-7 w-7`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque libero fugit molestias ipsa cum, vel voluptatibus ad esse soluta. Adipisci cumque beatae est similique doloribus excepturi? Odio, fugit id.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral-200 px-4 py-2 text-left text-lg font-medium">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-7 w-7`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio obcaecati sint perferendis eligendi, enim tempora voluptatum cupiditate pariatur qui voluptatibus saepe facilis asperiores fuga laboriosam voluptatem odio? Officia, quod nobis!
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
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

import Head from 'next/head'
import Image from 'next/image'
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
        {/* <h1 className={styles.title}>
          Título <a>destaque</a>
        </h1>

        <p className={styles.description}>
          Descrição
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Card 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, accusantium minima officia iusto quos eius magnam officiis cumque adipisci sit numquam possimus neque provident rem sapiente amet atque! Nemo, voluptates.</p>
          </a>

          <a className={styles.card}>
            <h2>Card 2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi harum neque consequatur qui quam, animi, sint mollitia reiciendis, esse cupiditate excepturi? Perspiciatis ab quos veniam voluptatem cumque saepe nemo hic.</p>
          </a>
        </div> */}

        <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque libero fugit molestias ipsa cum, vel voluptatibus ad esse soluta. Adipisci cumque beatae est similique doloribus excepturi? Odio, fugit id.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
          Distribuído por{''}
          <span className={styles.logo}>
            <Image src="/favicon-16x16.png" alt="Marrocos Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  );
}

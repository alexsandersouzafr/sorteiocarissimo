'use client';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaCirclePlus, FaSquareMinus } from 'react-icons/fa6';

function sortear(x: number): number {
  const numeroSorteado = Math.floor(Math.random() * x) + 1;
  return numeroSorteado;
}

export default function Home() {
  const [pessoas, setPessoas] = useState<number>(0);
  const [sorteado, setSorteado] = useState(false);
  const [vencedor, setVencedor] = useState<number>();
  const [erro, setErro] = useState(false);

  function handleSorteio() {
    if (pessoas > 1) {
      const sorteado = sortear(pessoas);
      setVencedor(sorteado);
      setSorteado(true);
      return;
    }
    setErro(true);
    return;
  }

  function handleReset() {
    setPessoas(0);
    setErro(false);
    setSorteado(false);
  }

  return (
    <main className="w-full flex-col h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2 max-w-sm items-center rounded-2xl bg-[#FFFFFF55] p-8">
        <p className="text-white text-2xl mb-8">
          SORTEIO DO{' '}
          <span className="text-4xl mix-blend-difference text-white font-black">
            MINEIRÍSSIMO
          </span>{' '}
          GRILL
        </p>
        <p className="text-center">
          Quem é que vai ganhar um almoço grátis no caríssimo?
          <br />
          😋😋😋
        </p>
        <Marquee>
          <h1 className="py-4 text-2xl font-bold font-sans uppercase bg-clip-text text-transparent bg-rainbow text-center leading-huge-text">
            NOSSA QUE DELÍCIA!!!{' '}
          </h1>
        </Marquee>
        <div className="flex flex-col mt-16 w-full items-center">
          {sorteado ? (
            <>
              <p className="bg-amber-300 py-2 px-4 text-zinc-800 rounded-2xl font-bold">
                O vencedor é:{' '}
              </p>
              <p className="bg-white m-16 h-48 w-48 flex items-center justify-center rounded-full text-8xl font-bold text-amber-600">
                {vencedor}
              </p>
              <button
                onClick={handleReset}
                className="bg-amber-300 w-fit px-4 py-2 rounded-2xl font-black text-2xl text-zinc-800"
              >
                SORTEAR DE NOVO!
              </button>
            </>
          ) : (
            <>
              <p className="bg-amber-300 py-2 px-4 text-zinc-800 rounded-2xl font-bold">
                Quantas pessoas vão participar?
              </p>
              <div className="flex gap-6 mb-16 mt-8 items-center">
                <button onClick={() => pessoas > 0 && setPessoas(pessoas - 1)}>
                  <FaSquareMinus className="h-16 w-16 text-amber-300" />
                </button>
                <input
                  type="number"
                  value={pessoas}
                  onChange={(e) => setPessoas(Number(e.target.value))}
                  className="rounded-2xl w-28 h-40 text-7xl text-center text-amber-600"
                />
                <button onClick={() => setPessoas(pessoas + +1)}>
                  <FaCirclePlus className="h-16 w-16 text-amber-300" />
                </button>
              </div>
              {erro && (
                <p className="text-red-600 mb-4">
                  É necessário no mínimo 2 pessoas!
                </p>
              )}
              <button
                onClick={handleSorteio}
                className="bg-amber-300 w-fit px-4 py-2 rounded-2xl font-black text-2xl text-zinc-800"
              >
                SORTEAR!
              </button>
            </>
          )}
        </div>{' '}
      </div>
      <p className="text-white">By Alex</p>
    </main>
  );
}

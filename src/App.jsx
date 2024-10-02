import { MdSwapHoriz } from "react-icons/md";
import iran from './assets/images/iran.webp'
import usa from './assets/images/usa.webp'
import { useState, useRef, useEffect } from "react";


function App() {

  const [swap, setSwap] = useState(true)
  const [inputValue, setInputValue] = useState(0)
  const [currencies, setCurrencies] = useState({
    Rial: '',
    Dollar: ''
  })
  const input = useRef()

  const handleSwap = (e) => {
    let img1 = e.currentTarget.previousElementSibling.children[0]
    let img2 = e.currentTarget.previousElementSibling.children[1]
    let img3 = e.currentTarget.nextElementSibling.children[0]
    let img4 = e.currentTarget.nextElementSibling.children[1]
    calcCurrencies()
    if (swap) {
      img1.classList.remove('left-0')
      img1.classList.add('left-[100%]')
      img2.classList.remove('left-[-100%]')
      img2.classList.add('left-0')
      img3.classList.remove('left-0')
      img3.classList.add('left-[-100%]')
      img4.classList.remove('left-[100%]')
      img4.classList.add('left-0')
      setSwap(!swap)
    } else {
      img1.classList.add('left-0')
      img1.classList.remove('left-[100%]')
      img2.classList.add('left-[-100%]')
      img2.classList.remove('left-0')
      img3.classList.add('left-0')
      img3.classList.remove('left-[-100%]')
      img4.classList.add('left-[100%]')
      img4.classList.remove('left-0')
      setSwap(!swap)
    }

  }

  let Dollar = 0
  let Rial = 0
  function calcCurrencies() {
    let value = input.current.value
    Dollar = value / 61000
    Dollar = Dollar.toFixed(2)
    Dollar = Dollar.toString()
    Dollar = Dollar.replace(/\B(?=(\d{3})+(?!\d))/g, "/")
    Rial = value * 61000
    Rial = Rial.toFixed(2)
    Rial = Rial.toString()
    Rial = Rial.replace(/\B(?=(\d{3})+(?!\d))/g, "/")
    console.log(Dollar);
    setCurrencies({ ...currencies, Dollar: Dollar, Rial: Rial })
  }

  useEffect(() => {
    calcCurrencies()
  }, [])
  return (
    <>
      <main className="w-full h-[100vh] flex flex-wrap items-center justify-center ">
        <div className="w-[300px] md:w-[400px] h-fit border rounded-[15px] [box-shadow:0px_0px_15px_0px_#0000003a] px-[10px]">

          <h1 className="w-full h-fit flex justify-center py-[15px] font-interb capitalize text-[24px]">currency exchange</h1>

          <div className="w-full flex flex-wrap  py-[10px] justify-center items-center">
            <figure className="w-[60px] h-[60px] overflow-hidden relative">
              <img className="w-full h-full absolute top-[50%] left-0 translate-y-[-50%] object-contain duration-[0.4s] " src={iran} alt="" />
              <img className="w-full h-full absolute top-[50%] left-[-100%] translate-y-[-50%] object-contain duration-[0.4s] " src={usa} alt="" />
            </figure>
            <div onClick={handleSwap} className="w-[40px] h-[40px] rounded-[40px] cursor-pointer hover:[box-shadow:0px_0px_15px_5px_#0000003a] duration-[0.4s] [box-shadow:0px_0px_15px_0px_#0000003a] flex items-center justify-center text-[22px] mx-[30px]"><MdSwapHoriz /></div>
            <figure className="w-[60px] h-[60px] overflow-hidden relative">
              <img className="w-full h-full absolute top-[50%] left-0 translate-y-[-50%] object-contain duration-[0.4s] " src={usa} alt="" />
              <img className="w-full h-full absolute top-[50%] left-[100%] translate-y-[-50%] object-contain duration-[0.4s] " src={iran} alt="" />
            </figure>
          </div>

          <div className="w-full h-fit py-[10px] flex flex-wrap justify-center">
            <p className="w-full flex justify-center py-[10px] font-interm">Amount:</p>
            <input ref={input} onChange={(event) => setInputValue(event.target.value)} type="number" className="w-[80%] h-fit py-[10px] duration-[0.4s] ps-[10px] outline-none border-none rounded-[10px] [box-shadow:0px_0px_15px_0px_#0000003a] focus:[box-shadow:0px_0px_15px_5px_#0000003a]" />
          </div>

          <div className="w-full h-fit py-[10px] flex flex-wrap">
            <p className="w-full h-fit flex py-[10px] font-interm justify-center" style={{ display: swap ? 'none' : 'flex' }}>1 USD = 61000 IRR</p>
            <p className="w-full h-fit flex py-[10px] font-interm justify-center" style={{ display: swap ? 'flex' : 'none' }}>1 IRR = 0.000016 USD</p>
            <p className="w-full h-fit flex py-[10px] font-interm justify-center" style={{ display: swap ? 'none' : 'flex' }}>{inputValue} USD = {currencies.Rial} IRR</p>
            <p className="w-full h-fit flex py-[10px] font-interm justify-center" style={{ display: swap ? 'flex' : 'none' }}>{inputValue} IRR = {currencies.Dollar} USD</p>
          </div>

          <div className="w-full py-[10px] flex justify-center">
            <button onClick={calcCurrencies} className="w-fit h-fit px-[25px] py-[15px] font-interm rounded-[5px] hover:[box-shadow:0px_0px_15px_5px_#0000003a] duration-[0.4s] [box-shadow:0px_0px_15px_0px_#0000003a] text-[14px]">Calculate</button>
          </div>

        </div>
      </main>
    </>
  )
}

export default App

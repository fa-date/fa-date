import AbjadAbout from '../components/AbjadAbout'
import { abjadNumber } from '../lib/helper'
import { useState } from 'react'

const HomePage = () => {
  const [value, setValue] = useState<string>('')
  const ret: any = value && abjadNumber(value)
  return (
    <>
      <div className="flex justify-center mt-20 mx-6">
        <div className="border border-gray-300 border-solid max-w-[482px] p-8 rounded">
          <label htmlFor="abjad" className="inline-block mb-2 text-gray-700">
            کلمه یا عبارت مورد نظر را در کادر زیر وارد نمایید:
          </label>
          <textarea
            className="block w-full px-3.5 py-1.5 text-base min-w-full max-w-full min-h-[80px] text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition-colors ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="abjad"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="حروف ابجد وارد کنید"
          />
          <div className="text-center mt-1 text-gray-500 overflow-auto">
            <span>
              {value
                ? ret.num +
                  ' کبیر - ' +
                  (ret.numWc + ' وسیط - ') +
                  (ret.numCgh + ' صغیر')
                : 'فقط حروف فارسی و عربی به ابجد تبدیل می شوند.'}
            </span>
            <div
              className="bg-yellow-100 rounded-lg py-5 px-6 mt-4 text-base text-yellow-700"
              role="alert"
            >
              در بعضی از نسخه های ابجد حرف ‍‍`ژ`‍‍ برابر با (۰) است.
            </div>
          </div>
        </div>
      </div>

      <AbjadAbout />
    </>
  )
}

export default HomePage

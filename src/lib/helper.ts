export const abjadNumber = (value: string) => {
  const abjadCb: any = {
    ا: '1',
    آ: '1',
    ب: '2',
    ج: '3',
    د: '4',
    ه: '5',
    و: '6',
    ز: '7',
    ح: '8',
    ط: '9',
    ی: '10',
    ک: '20',
    ل: '30',
    م: '40',
    ن: '50',
    س: '60',
    ع: '70',
    ف: '80',
    ص: '90',
    ق: '100',
    ر: '200',
    ش: '300',
    ت: '400',
    ث: '500',
    خ: '600',
    ذ: '700',
    ض: '800',
    ظ: '900',
    غ: '1000',
    گ: '20',
    چ: '3',
    پ: '2',
    ژ: '7',
    ' ': ' ',
  }
  const abjadWc: any = {
    ا: '1',
    آ: '1',
    ب: '2',
    ج: '3',
    د: '4',
    ه: '5',
    و: '6',
    ز: '7',
    ح: '8',
    ط: '9',
    ی: '10',
    ک: '8',
    ل: '6',
    م: '4',
    ن: '2',
    س: '0',
    ع: '10',
    ف: '8',
    ص: '6',
    ق: '4',
    ر: '8',
    ش: '6',
    ت: '4',
    ث: '8',
    خ: '0',
    ذ: '4',
    ض: '8',
    ظ: '0',
    غ: '4',
    گ: '8',
    چ: '3',
    پ: '2',
    ژ: '7',
    ' ': ' ',
  }
  const abjadCgh: any = {
    ا: '1',
    آ: '1',
    ب: '2',
    ج: '3',
    د: '4',
    ه: '5',
    و: '6',
    ز: '7',
    ح: '8',
    ط: '0',
    ی: '1',
    ک: '2',
    ل: '3',
    م: '4',
    ن: '5',
    س: '6',
    ع: '7',
    ف: '8',
    ص: '0',
    ق: '1',
    ر: '2',
    ش: '3',
    ت: '4',
    ث: '5',
    خ: '6',
    ذ: '7',
    ض: '8',
    ظ: '0',
    غ: '1',
    گ: '2',
    چ: '3',
    پ: '2',
    ژ: '7',
    ' ': ' ',
  }
  const num = numberToPersian(
    value
      .split('')
      .map((v: any) => abjadCb[v] || '0')
      .reduce((a, b) => Number(a) + Number(b))
  )
  const numWc = numberToPersian(
    value
      .split('')
      .map((v: any) => abjadWc[v] || '0')
      .reduce((a, b) => Number(a) + Number(b))
  )
  const numCgh = numberToPersian(
    value
      .split('')
      .map((v: any) => abjadCgh[v] || '0')
      .reduce((a, b) => Number(a) + Number(b))
  )
  return { num, numWc, numCgh }
}

const numberToPersian = (str: any) => {
  const faLang: string[] = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']
  const enLang: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const strArr = str.toString().split('')
  return strArr.map((c: string) => faLang[enLang.indexOf(c)] || c).join('')
}

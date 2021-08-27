import Keys from '@/constant/key'
import Cookies from 'js-cookie'

export const getLanguage = () => Cookies.get(Keys.languagekey)
export const setLanguage = (language:string) => Cookies.set(Keys.languagekey,language)
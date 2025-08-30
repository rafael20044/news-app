export interface ICountryData {
    error: boolean
    msg: string
    data: IData[]
}

interface IData {
    name: string
    iso2: string
    iso3: string
    unicodeFlag: string
}

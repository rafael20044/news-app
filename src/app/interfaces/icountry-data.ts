export interface ICountryData {
    error: boolean
    msg: string
    data: IData[]
}

export interface IData {
    name: string
    iso2: string
    iso3: string
    unicodeFlag: string
}

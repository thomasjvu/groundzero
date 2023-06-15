export const capitalizeFirstLetter = (str: string): string => str[0].toUpperCase() + str.slice(1)

export const lineBreakContent = (str: string) => str.replace(/\n/g, '<br>')

export const pluralize = (noun: string, count: number, suffix = "s") => {
  return `${noun}${count !== 1 ? suffix : ""}`;
}

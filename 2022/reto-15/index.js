export const decorateTree = (base) => {
    const tree = base.split(' ')
  
    const getLetter = {
      PP: 'P',
      BB: 'B',
      RR: 'R',
      BP: 'R',
      PB: 'R',
      RP: 'B',
      PR: 'B',
      BR: 'P',
      RB: 'P'
    }
  
    return tree
      .slice(1)
      .reduce(
        (acc, _, index) => {
          const prevEl = acc[index]
          const currEl = prevEl.slice(1).map((_, i) =>
            getLetter[prevEl[i] + prevEl[i + 1]])
  
          return [...acc, currEl]
        },
        [tree]
      )
      .reverse()
      .map(el => el.join(' '))
  }
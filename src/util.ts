const langList = ['Java', 'C++', 'Go', 'JavaScript', 'Python', 'C#']

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomLang():string {
    return langList[getRandomInt(0, 5)];
}

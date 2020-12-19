// Base URL
const base_url = "https://api.rawg.io/api/"

// Building Date String
// Month Setter
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if(month < 10){
        return `0${month}`
    } else {
        return month
    }
}


// Day Setter
const getCurrentDay = () => {
    const day = new Date().getDate()
    if(day < 10){
        return `0${day}`
    } else {
        return day
    }
}


// Year Setter & Date String
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`


export const popular_gamesURL = () => `${base_url}${popular_games}`
import displayDrinks from "./displayDrinks";
import setDrink from "./setDrink";

const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url)

    // display the drinks
    const section = await displayDrinks(data)
    if (section) {
        setDrink(section)
    }
}

export default showDrinks
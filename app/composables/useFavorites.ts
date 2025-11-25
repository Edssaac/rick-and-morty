export const useFavorites = () => {
    const getFavorites = (key: string) => {
        const favorites = localStorage.getItem(key);

        return favorites ? JSON.parse(favorites) : [];
    }

    const toggleFavorite = (key: string, id: number) => {
        const favorites = getFavorites(key);
        const index = favorites.indexOf(id);

        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(id);
        }

        localStorage.setItem(key, JSON.stringify(favorites));
    }

    const isFavorited = (key: string, id: number) => {
        const favorites = getFavorites(key);

        return favorites.includes(id);
    }

    return {
        getFavorites,
        toggleFavorite,
        isFavorited,
    }
}
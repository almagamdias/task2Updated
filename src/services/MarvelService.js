class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
        return await res.json();
    }
    getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=2fcc552f4318fdf465ea3fb717c47512');
    }
}
export default MarvelService;
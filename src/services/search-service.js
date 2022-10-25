import { searchActions } from '../store/search-slice';

export const search = (searchString) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`https://localhost:7185/search/${searchString}`, {
                headers: new Headers({
                    "X-CSRF": "1",
                }),
            });

            if (!response.ok) {
                throw new Error('Error happened!');
            }

            const data = await response.json();
            return data;
        };

        try {
            // todo: show loading
            const searchedData = await fetchData();
            dispatch(searchActions.search({ entities: searchedData }));
        } catch (error) {
            //todo: show error
        }
        finally {
           // todo: loading
        }
    }
}

import { searchActions } from '../store/search-slice';
import { uiActions } from '../store/ui-slice';

export const search = (searchString) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/search/${searchString}`);

            if (!response.ok) {
                throw new Error('Error happened!');
            }

            const data = await response.json();
            return data;
        };

        try {
            dispatch(uiActions.setLoading({ isLoading: true }));
            dispatch(uiActions.setNoResultFound({ notResultFound: false }));

            const searchedData = await fetchData();

            dispatch(searchActions.search({ entities: searchedData }));
            dispatch(uiActions.setNoResultFound({ 
                noResultFound: searchedData && searchedData.length !== 0 ? false : true 
            }));
        } catch (error) {
            //todo: show error
        }
        finally {
            dispatch(uiActions.setLoading({ isLoading: false }));
        }
    }
}

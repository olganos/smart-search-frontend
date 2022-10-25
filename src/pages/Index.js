import EntityList from "../components/entities/EntityList";
import Search from "../components/search/Search";

import { useSelector } from 'react-redux';

export default function Index() {
    const entities = useSelector((state) => state.search.entities);
    const isLoading = useSelector((state) => state.ui.isLoading);
    const noResultFound = useSelector((state) => state.ui.noResultFound);

    return (
        <div className="d-flex flex-column align-items-center pt-3">
            <Search />
            <div className="pt-3">
                {(isLoading) &&
                    <p>
                        Loading...
                    </p>
                }

                {(noResultFound) &&
                    <p className="fs-4">
                        Nothing was found
                    </p>
                }
                
                {(entities && entities.length !== 0) &&
                    <>
                        <p className="fs-4">
                            Your search:
                        </p>
                        <EntityList
                            data={entities}
                        />
                    </>
                }
            </div>
        </div>
    );
}

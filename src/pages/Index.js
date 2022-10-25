import EntityList from "../components/entities/EntityList";
import Search from "../components/search/Search";

export default function Index() {
    return (
        <>
            Search
            <Search />
            <EntityList />
        </>
    );
}

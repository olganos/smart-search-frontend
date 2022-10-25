import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import Entity from './Entity';

export default function EntityList({ data }) {
    return (
        <ListGroup>
            {data.map(entity =>
                <ListGroupItem
                    key={entity.Id}>
                    <Entity
                        data={entity}
                    />
                </ListGroupItem>
            )}
        </ListGroup>
    )
}

EntityList.defaultProps = {
    data: [],
};

EntityList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        fullDescription: PropTypes.string,
        weight: PropTypes.number,
    })),
};
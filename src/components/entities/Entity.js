import PropTypes from 'prop-types';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';

export default function Entity({ data }) {
    return (
        <>
            <div className="fw-semibold d-flex justify-content-between">
                {data.type}
                <Badge
                    pill
                    color="primary">
                    {data.weight}
                </Badge>
            </div>
            <ListGroup flush>
                {data.fields.map((field) =>
                    <ListGroupItem
                        disabled
                    >
                        {field}
                    </ListGroupItem>
                )}
            </ListGroup>
        </>
    )
}

Entity.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        fields: PropTypes.arrayOf(PropTypes.string),
        weight: PropTypes.number,
    }),
};
import PropTypes from 'prop-types';

export default function Entity({ data }) {
    return (
        <>
            <p>{data.fullDescription}</p>
            weight: {data.weight}
        </>
    )
}

Entity.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        fullDescription: PropTypes.string,
        weight: PropTypes.number,
    }),
};
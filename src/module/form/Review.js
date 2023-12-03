import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            // gender: '',
            slot: null,
            age: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name,slot,age } = steps;

        this.setState({ name,slot,age });
    }

    render() {
        const { name,slot,age } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        {/* <tr>
                            <td>Gender</td>
                            <td>{slot}</td>
                        </tr> */}
                        <tr>
                            <td>Age</td>
                            <td>{age}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

export default Review;
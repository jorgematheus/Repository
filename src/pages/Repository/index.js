import React, { Component } from 'react';
import api from '../../services/api';

// as funções sempre recebem como parâmentro as props
export default class Repository extends Component {
    state = {
        repository: undefined
    };

    async componentDidMount() {
        const { match } = this.props;
        const repository = decodeURIComponent(match.params.repository);
        const rest = decodeURI(match.params.repository);

        console.log(rest);
        const response = await api.get(`/repos/${repository}`);
        console.log(response.data);
    }

    render() {
        const { match } = this.props;
        return <h1>{decodeURIComponent(match.params.repository)}</h1>;
        retu;
    }
}

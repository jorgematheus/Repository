/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Loading, Owner, Issues, IssuesFilter, Pagination } from './styles';
import Container from '../../components/Container/index';

// as funções sempre recebem como parâmentro as props
export default class Repository extends Component {
    PropTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string
            })
        }).isRequired
    };

    state = {
        repository: {},
        issues: [],
        loading: true,
        issuesFilter: '',
        actualPage: 1
    };

    issuesFilters = [
        { state: 'all', text: 'Todos' },
        { state: 'open', text: 'Abertos' },
        { state: 'closed', text: 'Fechados' }
    ];

    async componentDidMount() {
        this.getRepositoryandIssues();
    }

    async getRepositoryandIssues() {
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.repository);

        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'open',
                    per_page: 5
                }
            })
        ]);

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false
        });
    }

    filterIssues = async e => {
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.repository);

        const { data } = await api.get(`repos/${repoName}/issues`, {
            params: {
                state: e.target.value
            }
        });

        console.log(data);

        this.setState({ issues: data });
    };

    pagination = async page => {
        const isPrev = page === 'prev';
        const { actualPage } = this.state;

        if (isPrev) {
            this.setState({ actualPage: actualPage - 1 });
        } else {
            this.setState({ actualPage: actualPage + 1 });
        }

        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        const { data } = await api.get(`repos/${repoName}/issues`, {
            params: {
                page: actualPage,
                per_page: 5
            }
        });

        await this.setState({ issues: data });

        console.log(actualPage);
    };

    render() {
        const { repository, issues, loading } = this.state;

        if (loading) {
            return <Loading>Carregando...</Loading>;
        }

        return (
            <Container>
                <Owner>
                    <Link to="/">
                        <FaArrowLeft> </FaArrowLeft> Repositórios
                    </Link>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                </Owner>
                <IssuesFilter>
                    <span>Filtrar</span>
                    <select onChange={this.filterIssues}>
                        {this.issuesFilters.map(issue => (
                            <option key={issue.state} value={issue.state}>
                                {issue.text}
                            </option>
                        ))}
                    </select>
                </IssuesFilter>
                <Issues>
                    {issues.map(issue => (
                        <li key={String(issue.id)}>
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                            />
                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>
                                </strong>
                            </div>
                        </li>
                    ))}
                </Issues>
                <Pagination>
                    <button onClick={() => this.pagination('prev')}>
                        Anterior
                    </button>
                    <button onClick={() => this.pagination('next')}>
                        Próximo
                    </button>
                </Pagination>
            </Container>
        );
    }
}

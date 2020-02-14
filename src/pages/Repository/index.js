/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Loading, Owner, Issues, IssuesFilter, Pagination } from './styles';
import Container from '../../components/Container/index';

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
                state: e.target.value,
                per_page: 5
            }
        });

        this.setState({ issues: data });
    };

    // falta colocar o filtro junto

    handlePagination = async page => {
        const isPrev = page === 'prev';
        const { actualPage } = this.state;

        if (isPrev) {
            await this.setState({ actualPage: actualPage - 1 });
        } else {
            await this.setState({ actualPage: actualPage + 1 });
        }

        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        const { data } = await api.get(`repos/${repoName}/issues`, {
            params: {
                page: this.state.actualPage,
                per_page: 5
            }
        });

        this.setState({ issues: data });

        console.log(actualPage);
    };

    render() {
        const { repository, issues, loading, actualPage } = this.state;

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
                                    {issue.labels.map(label => (
                                        <span key={String(label.id)}>
                                            {label.name}
                                        </span>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                </Issues>
                <Pagination>
                    <button
                        disabled={actualPage === 1}
                        onClick={() => this.handlePagination('prev')}
                    >
                        Anterior
                    </button>
                    <button onClick={() => this.handlePagination('next')}>
                        Próximo
                    </button>
                </Pagination>
            </Container>
        );
    }
}

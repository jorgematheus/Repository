import styled from 'styled-components';

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;

        svg {
            margin-right: 5px;
        }
    }

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const Issues = styled.ul`
    list-style: none;
    padding-top: 30px;
    margin-top: 30px;

    li {
        padding: 10px 25px;
        display: flex;
        border: 1px solid #eee;
        align-items: center;

        & + li {
            margin-top: 10px;
        }

        img {
            width: 50px;
            border-radius: 50%;
            margin-bottom: 5px;
            border: 2px solid #eee;
        }

        div {
            flex: 1;
            margin-left: 15px;

            a {
                text-decoration: none;
                color: #333;

                &:hover {
                    color: #71c;
                }
            }

            span {
                background: #eee;
                padding: 2px 7px;
                border-radius: 5px;
                margin-left: 20px;
                color: #333;
                font-size: 12px;
                font-weight: 600;
            }

            p {
                margin-top: 5px;
                font-size: 14px;
                color: #999;
            }
        }
    }
`;

export const IssuesFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    flex-wrap: wrap;
    margin-top: 25px;

    span {
        margin-bottom: 5px;
    }

    select {
        flex: 1px;
        width: 50%;
    }
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px 0px;

    button {
        background: transparent;
        border-radius: 5px;
        border: 1px solid #666;
        padding: 5px;
        font-size: 12px;

        &[disabled] {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;

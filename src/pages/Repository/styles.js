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
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
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

    li {
        padding: 10px 25px;

        img {
            width: 50px;
            border-radius: 50%;
            margin-bottom: 5px;
            margin-top: 10px;
        }

        a {
            text-decoration: none;
            color: #08f;
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
        width: 400px;
    }
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px 0px;
`;

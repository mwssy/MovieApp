import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <Container>
            <Cell className="left">
                <Link to="/">
                    <Img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="로고" />
                </Link>
                <Link to="/movie">서브1</Link>
                <Link to="/movie">서브2</Link>
                <Link to="/movie">서브3</Link>
            </Cell>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin: 0 2.5rem;
    padding: 0.5rem 0;
`

const Cell = styled.div`
    display: flex;
    align-items: center;
    &.left {
        gap: 3rem;
        font-size: 1.3rem;
        cursor: pointer;
    }
`

const Img = styled.img`
    width: 80px;
    cursor: pointer;
    display: block;
`
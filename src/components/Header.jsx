import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <div>
            <Link to="/">홈</Link>
            <Link to="/movie">서브</Link>
        </div>
    );
}

export default Header;

const Container = styled.h1`
    justify-content: space-between;
    display: flex;
    align-items: center;
`
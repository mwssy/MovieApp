import { data } from "../data/test";

function Movie() {
    return (
        <>
            {data.results.map((movie) => (
                <ul key={movie.id}>
                    <li>{movie.title}</li>
                </ul>
            )) }
            서브페이지
        </>
    );
}

export default Movie;
import "./App.css";
import MovieComponent from "./components/MovieComponent";
import React, { useState } from "react";
import axios from "axios";


function App() {
    const [searchQuery, updateSearchQuery] = useState();
    const [timeoutId, updateTimeoutId] = useState();
    const [movieList, updateMovieList] = useState([]);

    const fetchData = async (searchString) => {
        const response = await axios.get(
            `http://www.omdbapi.com/?i=tt3896198&apikey=3602c282`
        );
        console.log(response);
        updateMovieList(response.data.Search);
    };

    const onTextChange = (event) => {
        clearTimeout(timeoutId);
        updateSearchQuery(event.target.value);
        const timeout = setTimeout(() => fetchData(event.target.value), 500);
        updateTimeoutId(timeout);
    };

    return (
        <div className="Container">
            <header>
                <div className="head">
                    <img
                        className="movie_icon"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAe1BMVEX///8CAgIIBgcAAAAWERUgGSDn5+fIyMjs7Oy7ubqzs7PBwcFubm6FhYUeHh7w8PA0NDRnZmcRDRASEhLQz9CioqIdFR0LAAvh4eEXDRfa2toPAA+bm5v39/eqqaoiHiJQT1A+PT6Pj49XV1d9fX0qKSpGRUYzLzNfX19NFUghAAAECElEQVR4nO2aa3uiOhCAW0duEQxouCqIIOj//4UnaCbJ7na7+3BRnz15P9URmLfDZEi1Hx8Gg8FgMBgMBoPBYJiKXb7aYCDzAgD2agvKgrqDNIHq1SYRQJ5YlnW4vVjEPQ8anGT9kvzUycRPLBcmh+j5GkXsn8AVLwg8RCw4PtnCuwBvjEOPgeiAJptnesTtia8SnjYNMJSKm2NZxTNNwoPIC0REbLw5ydn99tRZKHF6Fie5TrAAsk0O9eIerOlxnXiyACd8N0iHlwdY7ZolJUoW33h/Ar5uPrEAuGLLOs8Bdn685Ki3Pf+6HsZnLgfFOcd1gpPdhq4OGF1Qg3OFQ3JvC4hFpMSbYwG2SUay350/G1SmzbHymyeuk9Im+Ns6Mm2IaUWbJCn4C3tsmhYAV+wRuzOv8f0otxLen+ATezkJyo41QJrnaorL7sTnid0BdH68bGME5/SxyQCcChSHmCX3YuzasMX7A2QBHBEpZJusMfuCa9XFa6u0V6z9UYSS9LbwTrmkTnNjrm0PNhWa5C2mvT/s8xS2V/LdZWYQaWPieaSqqmFOX3CPIR/2tM8PAGGw5CoRNB5CeFrZnZ54m0EYVctbDDiaSZHKKY7dWTjP0eAwrhDH1d1E7jHy8FnpfzLhbTI0y4f/aBM+PoM/n7iMCSH3mpzzZOjP7ugs/Hj/rYm4O9kOoL54r7AQJsimrV75dz7T1s5reUeT+BYhPnUflBcZvB0xmPnywBsRQcpaGWwLOmYIKZMKFIQ/iAZcTwsyWwQbFevEgXbZq2Dgjuk3rWMrWAt2nY1ZIxmEiGJwu5PBowi6zlqevS3GmtwHm0fc7osETJqsVxusVKycTxnq+cq5oeNMKj5Ohhlbagm6QiSgF5WgL7FU51QGA6xUATt59pidJTfh+4KKjzZC7VYluMgEK1kU1T5EK4rWPqqk40y4yH2TQnl/qqyFyEoDGUx7rInu7KNzpvTGfMCl9Qm1aat+LR9XRRGq9om/aB9g6HxUZ4+4Pdpko3wB7FQCBxPo7YP9SfU1hYXKeqwUjBgoP5pQX1+0YpK5V31NiRjbas443uQcGGNiV+RBXDkcD3YIxM4D1mhBB4MRBterXgZDPGyECe278E633Q+sJLDaI1pw/1fBUSYh/MBK46vg3x040mQ1P8bEmBiT/7kJTGUuE4g8Moka5jKJ/3z0t1xmM6mDaZznMnmfPpkTYzK7ydv0CZz9aYSzreKp331PnyefdwB8ZzOJFsSl+LWmmHxObhMpwq81yWS6yudcJjPyz5i8zd2B/XYa+7k6Fhr54cA4/NlMpk+2uUym88917JwYE2NiTIyJMXkzk+0MT75fGfGtSuksweYt/ufeYDAYDAaDwWAwGJ7Jfwj/fMIdquIoAAAAAElFTkSuQmCC"
                        alt=""
                    />
                    Search your favourite movie...
                </div>

                <div className="searchbox">
                    <img
                        className="search_icon"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0VwARPjOqk1V-y_GD_eCwWTn-o2gSaakdA&usqp=CAU"
                        alt=""
                    />
                    <input
                        className="movie_input"
                        type="text"
                        placeholder="Enter movie name.."
                        value={searchQuery}
                        onChange={onTextChange}
                    />
                </div>
            </header>

            <div className="movieListContainer">
                {movieList?.length
                    ? movieList.map((movie, index) => (
                          <MovieComponent key={index} movie={movie}/>
                      ))
                    : "No Movie Search"}
            </div>
        </div>
    );
}

export default App;

import React, { useEffect } from 'react';
import MovieListing from "../MoveListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import { useDispatch } from "react-redux"
import { addMovies } from "../../features/movies/movieSlice"
import { APIKey } from "../../common/apis/movieApiKey"
import "./Home.scss"

const Home = () => {
    const dispatch = useDispatch()
    const movieText = "Tom"
    useEffect(() => {


        const fetchMovie = async () => {
            const res = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => {
                console.log("Errors : ", err)
            });
            console.log("data: ", res.data)
            dispatch(addMovies(res.data))
        };

        fetchMovie()
    }, [])


    return (
        <div className="home">
            <div className="banner-img"></div>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;

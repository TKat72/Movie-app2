import React, { useEffect } from 'react';
import MovieListing from "../MoveListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"
import "./Home.scss"

const Home = () => {
    useEffect(() => {
        const movieText = "Tom"
        
        const fetchMovie = async () => {
            const res = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => {
                console.log("Errors : ", err)
            });
            console.log("Movie response from api:", res)
        }

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

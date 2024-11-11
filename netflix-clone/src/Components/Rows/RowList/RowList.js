import React from 'react'
import Row from "../Row/Row"
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <>
       <Row title= "NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
       <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
       <Row title="Horor Movies" fetchUrl={requests.fetchHorrorMovies}/>
       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="TV Shows" fetchUrl={requests.fetchTVShow}/>
       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </>
    
  )
}

export default RowList
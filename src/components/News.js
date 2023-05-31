import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const update = async (page) => {
        props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0837154fd2af44f9b07b1f6b0bfcae98&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `LaZEE News-${props.category !== "general" ? props.category : "Home"}`;
        update();
        //eslint-disable-next-line
    }, [])

    const handlePreviousClicked = async () => {
        update(page - 1);
        setPage(page - 1);
    }

    const handleNextClicked = async () => {
        update(page + 1);
        setPage(page + 1);
    }
    return (
        <div className='container my-4'>
            <h1 className='text-center' style={{ margin: "60px 0px" }}>LaZEE News- Top Headlines trending now</h1>
            {loading && <Spinner />}
            <div className="row">
                {!loading && articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 100) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/vectors/world-news-flat-vector-icon-news-symbol-logo-illustration-business-vector-id929047972"} newsurl={element.url} date={element.publishedAt} />
                    </div>
                })}
            </div>
            <div className="d-flex justify-content-between">
                <button disabled={page === 1} type="button" className="btn btn-primary" onClick={handlePreviousClicked}>&larr;Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={handleNextClicked}>Next&rarr;</button>
            </div>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;
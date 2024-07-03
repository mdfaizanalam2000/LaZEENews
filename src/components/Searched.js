import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

const Searched = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const update = async () => {
        let url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(props.category)}&apikey=b96948dc872709ab064f0987b5361479&lang=en&country=in`
        setLoading(true);
        props.setProgress(20);
        let data = await fetch(url);
        // let data = await fetch("./sample_data.json");
        props.setProgress(50);
        let parsedData = await data.json();
        if (parsedData.errors) {
            setLoading(false);
            props.setProgress(100);
            alert("Avoid using special characters!");
            return;
        }
        props.setProgress(70);
        setArticles(parsedData.articles);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        update();
        //eslint-disable-next-line
    }, [])

    return (
        <div className='app'>
            <h2 className='text-center'>Top 10 Headlines trending now in "{props.category}" category</h2>
            <div className='container'>
                {loading && <Spinner />}
                <div className="row">
                    {!loading && (articles.length > 0 ? articles.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imgurl={element.image} newsurl={element.url} date={element.publishedAt} />
                        </div>
                    }) : <div className='text-center'><b>No news found!</b></div>)}
                </div>
            </div>
        </div>
    )
}

export default Searched;
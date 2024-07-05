import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgurl, newsurl, date } = props;
    if (!imgurl) {
        imgurl = "./no_image.jpg";
    }

    return (
        <div className="card">
            <img src={imgurl} className="card-img-top" alt="news_image" />
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{description.length > 80 ? description.slice(0, 80) + "....." : description}</p>
                <p className="card-text"><small className="text-muted">Published on {new Date(date).toLocaleString()}</small></p>
                <p className="card-text"><small className="text-muted">Source: <span className="badge text-bg-warning">{props.source}</span></small></p>
                <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">Read in detail</a>
            </div>
        </div>
    )
}

export default NewsItem;
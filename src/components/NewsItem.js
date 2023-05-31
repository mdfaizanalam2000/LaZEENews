import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgurl, newsurl, date } = props;
    return (
        <div className='my-2'>
            <div className="card">
                <img src={imgurl} className="card-img-top" alt="error" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">Last updated on {new Date(date).toLocaleString()}</small></p>
                    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;
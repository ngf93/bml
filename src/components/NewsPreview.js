import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NewsPreview(props) {
    return (
        <article className="news-preview">
            <img src={props.imgUrl} alt={props.title} />
            <div className="time">
                <div className="lh_1">15 - 20</div>
                <div className="lh_1 gray">мин</div>
            </div>
            <div className="px-2 py-3">
                <p className="title">{props.title}</p>
                <p className="text">{props.text}</p>
                <NavLink to={`${props.url}`} className="more">Подробнее</NavLink>
            </div>
        </article>
    );
}
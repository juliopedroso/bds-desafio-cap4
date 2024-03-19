import { Review } from 'types/review';
import './styles.css';

import {ReactComponent as Star} from 'assets/images/star.svg'

type Props = {
    review: Review;
}

const ReviewCard = ({review} : Props) => {
    return (
        <div className="review-card">
            <div className="card-top-container">
                <Star/> 
                <h2>{review.user.name}</h2>
            </div>
            <div className="card-bottom-container">
                <p>{review.text}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
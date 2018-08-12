import { combineReducers } from 'redux';
import {createReduce} from './utils';
import { routerReducer as route } from 'react-router-redux'
import * as FeedbackActions from '../actions/feedback'

const feedbackExample = createReduce(FeedbackActions.EXAMPLE)

const rootReducers = combineReducers({
    feedbackExample,
    route
});

export default rootReducers;

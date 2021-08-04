import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComments, createComment } from '../actions/commentActions';

class Comments extends Component {
    componentDidMount(){
        console.log("fetch comments!!");
        this.props.fetchComments();
    }

    mapComments(){
        console.log("comments items", this.props.comments);
        return this.props.comments.map(comment => (
            <div key={comment.id}>
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
            </div>
        ));
    }

    render() {
        return (
            <div>
                <h1>Comments</h1>
                {this.mapComments()}
            </div>
        )
    }
}

Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
};

//state.comments comes from the rootReducer in which it has a property called 'comments' that represents the commentReducer's returned state
//state.comments.items refers to the 'items' property that is equal to the payload
//this.props.comments can be used inside this component to refer to state.comments.items
const mapStateToProps = state => ({
    comments: state.comments.items
});

//connect this component to the redux store
//first parentheses maps state to props and passes in action
//second parentheses is component being exported
export default connect(mapStateToProps, { fetchComments })(Comments);

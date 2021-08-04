import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            author: '',
            body: ''
        };
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const comment = {
            author: this.state.author,
            body: this.state.body
        }
        this.props.createComment(comment);
    }

    render() {
        return (
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div>
                        <label>
                            Author:
                        </label>
                        <br/>
                        <input type="text" name="author" value={this.state.author} onChange={(e) => this.onChange(e)}/>
                    </div>
                    <br />
                    <div>
                        <label>
                            Comment:
                        </label>
                        <br/>
                        <textarea name="body" value={this.state.body} onChange={(e) => this.onChange(e)}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

CommentForm.propTypes = {
    createComment: PropTypes.func.isRequired
};

export default connect(null, { createComment })(CommentForm);

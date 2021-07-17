import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function EmptyTextarea(props) {
  return <TextareaAutosize aria-label="empty textarea" name="comment" placeholder="Comment here..." 
  onChange={props.commentChangeHandler}/>;
}

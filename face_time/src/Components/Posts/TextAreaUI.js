import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function MinHeightTextarea(props) {
  return <TextareaAutosize aria-label="minimum height" name="comment" minRows={3} placeholder="Post here..." 
  onChange={props.textChangeHandler}/>;
}

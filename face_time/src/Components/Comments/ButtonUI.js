import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextAreaUI from './commentTextAreaUI';

export default function DisableElevation(props) {
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <TextAreaUI commentChangeHandler={props.commentChangeHandler}/>
      <Button onClick={props.submitCommentHandler}>Comment</Button>
    </ButtonGroup>
  );
}

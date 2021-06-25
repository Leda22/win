import React from 'react';
import { Popconfirm, message } from 'antd';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from '../firebase';


function confirm(e) {
  e.preventDefault()
  db.collection('Clubs').doc({clubName}).delete();
  message.success('Click on Yes')
}

function cancel(e) {
  e.preventDefault()
  message.error('Click on No');
}
class Confirm extends React.Component 
{
    render(){
    return(
  <Popconfirm
    title="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button><DeleteIcon color="Error" /></Button>
  </Popconfirm>
);
}
}
export default Confirm;
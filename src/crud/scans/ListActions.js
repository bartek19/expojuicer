import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import { ListButton } from 'admin-on-rest';

const style = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const Actions = ({ resource, filters, displayedFilters, filterValues, basePath, showFilter, refresh }) => (
  <CardActions style={style}>
    {filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' }) }

       <FlatButton primary label="refresh" onClick={refresh} icon={<NavigationRefresh />} />
       {
          /*
            <FlatButton primary label="Custom Action" onClick={()=> console.log()} />

          */
       }

  </CardActions>
);

export default Actions;

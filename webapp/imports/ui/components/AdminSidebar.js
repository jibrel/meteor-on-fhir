import { IndexLinkContainer } from 'react-router-bootstrap';
import { List, ListItem } from 'material-ui/List';
import React from 'react';
import ReactMixin from 'react-mixin';

import { ReactMeteorData } from 'meteor/react-meteor-data';

export class AdminSidebar extends React.Component {
  getMeteorData() {
    let data = {
      style: {
        position: 'fixed',
        top: '0px',
        width: '100%',
        display: 'flex',
        // height: '6.4rem',
        alignItems: 'center',
        padding: '0 2.4rem',
        opacity: Session.get('globalOpacity')
      },
      listItem: {
        display: 'inline-block',
        position: 'relative'
      }
    };

    return data;
  }
  handleLogout() {
    Meteor.logout();
  }

  render () {
    return(
      <div id="adminSidebar">
        <List style={{paddingLeft: '20px', position: 'absolute', width: '100%'}}>

          <IndexLinkContainer to='/'>
             <ListItem primaryText='Admin Index' href='/' />
          </IndexLinkContainer>

          <IndexLinkContainer to='/dashboard'>
             <ListItem primaryText='Dashboard' href='/dashboard' />
          </IndexLinkContainer>

          <IndexLinkContainer to='/users'>
             <ListItem primaryText='Users' href='/users' />
          </IndexLinkContainer>

          <IndexLinkContainer to='/patients'>
             <ListItem primaryText='Patients' href='/patients' />
          </IndexLinkContainer>

          <IndexLinkContainer to='/practitioners'>
             <ListItem primaryText='Practitioners' href='/practitioners' />
          </IndexLinkContainer>

          <IndexLinkContainer to='/login'>
             <ListItem className='logoutMenuItem' primaryText='Logout' href='/login' onClick={this.handleLogout} />
          </IndexLinkContainer>
        </List>
      </div>
    );
  }
}
AdminSidebar.propTypes = {};
AdminSidebar.defaultProps = {};
ReactMixin(AdminSidebar.prototype, ReactMeteorData);

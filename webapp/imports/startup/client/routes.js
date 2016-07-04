import React  from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '/imports/ui/layouts/App';
import { AboutPage } from '/imports/ui/pages/AboutPage';
import { PrivacyPage } from '/imports/ui/pages/PrivacyPage';
import { DashboardPage } from '/imports/ui/pages/DashboardPage';
import { Documents } from '../../ui/pages/Documents';
import { ForumPage } from '/imports/ui/pages/ForumPage';
import { Index } from '../../ui/pages/Index';
import { Login } from '../../ui/pages/Login';
import { MyProfilePage } from '../../ui/pages/MyProfilePage';
import { PatientsPage } from '../../ui/pages/PatientsPage';
import { PractitionersPage } from '../../ui/pages/PractitionersPage';
import { Signup } from '../../ui/pages/Signup';
import { ThemePage } from '../../ui/pages/ThemePage';
import { UsersPage } from '../../ui/pages/UsersPage';
import { Weblog } from '../../ui/pages/Weblog';
import { NotFound } from '../../ui/pages/NotFound';
import { RecoverPassword } from '../../ui/pages/RecoverPassword';
import { ResetPassword } from '../../ui/pages/ResetPassword';

import { ConversationsPage } from '/imports/ui/pages/ConversationsPage';
import { NewTopicPage } from '/imports/ui/pages/NewTopicPage';


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />

        <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />

        <Route name="about" path="/about" component={ AboutPage } />
        <Route name="privacy" path="/privacy" component={ PrivacyPage } />

        <Route name="dashboard" path="/dashboard" component={ DashboardPage } onEnter={ requireAuth } />
        <Route name="theming" path="/theming" component={ ThemePage } onEnter={ requireAuth } />
        <Route name="myprofile" path="/myprofile" component={ MyProfilePage } onEnter={ requireAuth } />

        <Route name="practitioners" path="/practitioners" component={ PractitionersPage } />
        <Route name="patients" path="/patients" component={ PatientsPage } onEnter={ requireAuth } />
        <Route name="users" path="/users" component={ UsersPage } onEnter={ requireAuth } />

        <Route name="support" path="/support" component={ ForumPage } />
        <Route name="forum" path="/forum" component={ ForumPage } onEnter={ requireAuth } />

        <Route name="topicById" path="/topic/:topicId" component={ ConversationsPage } onEnter={ requireAuth } />
        <Route name="newTopic" path="/new/topic" component={ NewTopicPage } onEnter={ requireAuth } />

        <Route name="weblog" path="/weblog" component={ Weblog } />
        <Route name="weblogByUserId" path="/weblog/:userId" component={ Weblog } />

        <Route path="*" component={ NotFound } />

      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});

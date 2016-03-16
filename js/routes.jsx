import React from 'react';
import Router, {Route, Redirect, IndexRoute} from 'react-router';

import App from './views/App.jsx';
import About from './views/about/About.jsx';
import BlogList from './views/blogs/BlogList.jsx';
import BlogDetail from './views/blogs/BlogDetail.jsx';
import NotFound from './views/NotFound.jsx';

export default [
    <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="blogs" component={BlogList}/>
        <Route path="blogs/:id" component={BlogDetail}/>
        <Route path="*" component={NotFound}/>
    </Route>
];

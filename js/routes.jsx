import React from 'react';
import Router, {Route, Redirect, IndexRoute} from 'react-router';

import App from './views/App.jsx';
import About from './views/about/About.jsx';
import BlogList from './views/blogs/BlogList.jsx';
import BlogDetail from './views/blogs/BlogDetail.jsx';
import NotFound from './views/NotFound.jsx';

export default [
    <Route key="/" path="/" component={App}>
        <IndexRoute component={About}/>
        <Route key="about" path="about" title="About" component={About}/>
        <Route key="blogs" path="blogs" title="Blog List" component={BlogList}/>
        <Route key="blogs/:id" path="blogs/:id" title="Blog Detail" component={BlogDetail}/>
        <Route key="*" path="*" title="Not Found" component={NotFound}/>
    </Route>
];

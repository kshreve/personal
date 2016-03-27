import React from 'react';
import Router, { Route, Redirect, IndexRoute } from 'react-router';

import App from './views/App.jsx';
import About from './views/about/About.jsx';
import Blog from './views/blogs/Blog.jsx';
import BlogPost from './views/blogs/BlogPost.jsx';
import NotFound from './views/NotFound.jsx';
import WhiteLabelContainer from './views/whitelabel/WhiteLabelContainer.jsx';

export default [
    <Route key="/" path="/" component={App}>
        <IndexRoute title="About" component={About}/>
        <Route key="about" path="about" title="About" component={About}/>
        <Route key="blog" path="blog" title="Blog" component={Blog}/>
        <Route key="whitelabel" path="whitelabel" title="White Labeling" component={WhiteLabelContainer}/>
        <Route key="blog/:id" path="blog/:id" title="Blog Post" component={BlogPost}/>
        <Route key="*" path="*" title="Not Found" component={NotFound}/>
    </Route>
];

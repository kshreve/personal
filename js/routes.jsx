import React from 'react';
import Router, { Route, Redirect, IndexRoute } from 'react-router';

import AppContainer from './views/AppContainer.jsx';
import About from './views/about/About.jsx';
import Blog from './views/blogs/Blog.jsx';
import Crankings from './views/combinedRankings/rename.jsx';
import BlogPost from './views/blogs/BlogPost.jsx';
import NotFound from './views/NotFound.jsx';
import WhiteLabelContainer from './views/whitelabel/WhiteLabelContainer.jsx';

export default [
    <Route key="/" path="/" component={AppContainer}>
        <IndexRoute title="About" component={About}/>
        <Route nav="true" key="about" path="about" title="About" component={About}/>
        <Route nav="true" key="blog" path="blog" title="Blog" component={Blog}/>
        <Route nav="true" key="whitelabel" path="whitelabel" title="White Labeling" component={WhiteLabelContainer}/>
        <Route nav="true" key="crankings" path="crankings" title="Combined Rankings" component={Crankings}/>
        <Route key="blog/:id" path="blog/:id" title="Blog Post" component={BlogPost}/>
        <Route key="*" path="*" title="Not Found" component={NotFound}/>
    </Route>
];

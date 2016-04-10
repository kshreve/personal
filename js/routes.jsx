import React from 'react';
import Router, { Route, Redirect, IndexRoute } from 'react-router';

import AppContainer from './views/AppContainer.jsx';
import About from './views/about/About.jsx';
import Blog from './views/blog/Blog.jsx';
import BlogPost from './views/blog/BlogPost.jsx';
import CrankingsContainer from './views/combinedRankings/CrankingsContainer.jsx';
import CrankingsDataImportContainer from './views/combinedRankings/CrankingsDataImportContainer.jsx';
import DidItContainer from './views/didIt/DidItContainer.jsx';
import NotFound from './views/NotFound.jsx';
import WhiteLabelContainer from './views/whitelabel/WhiteLabelContainer.jsx';
import Xkcd from './views/xkcd1335/Xkcd.jsx';

export default [
    <Route key="/" path="/" component={AppContainer}>
        <IndexRoute title="About" component={About}/>
        <Route nav="true" key="about" path="about" title="About" component={About}/>
        <Route nav="true" key="blog" path="blog" title="Blog" component={Blog}/>
        <Route key="blog/:id" path="blog/:id" title="Blog Post" component={BlogPost}/>
        <Route key="experiment" path="experiment" title="Experiments" hasChildren="true" nav="true">
            <Route nav="true" key="crankings" path="crankings" title="Combined Rankings" component={CrankingsContainer}/>
            <Route key="crankingsData" path="crankingsData" title="Create Data - Combined Rankings" component={CrankingsDataImportContainer}/>
            <Route nav="true" key="didIt" path="didIt" title="I did it!" component={DidItContainer}/>
            <Route nav="true" key="whitelabel" path="whitelabel" title="White Labeling" component={WhiteLabelContainer}/>
            <Route nav="true" key="xkcd1335" path="xkcd1335" title="XKCD - 1335" component={Xkcd}/>
        </Route>

        <Route key="*" path="*" title="Not Found" component={NotFound}/>
    </Route>
];

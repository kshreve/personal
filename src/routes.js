import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppContainer from './views/AppContainer';
import About from './views/about/About';
import Blog from './views/blog/Blog';
import BlogPost from './views/blog/BlogPost';
import CrankingsContainer from './views/combinedRankings/CrankingsContainer';
import CrankingsDataImportContainer from './views/combinedRankings/CrankingsDataImportContainer';
import DidItContainer from './views/didIt/DidItContainer';
import NotFound from './views/NotFound';
import WhiteLabelContainer from './views/whitelabel/WhiteLabelContainer';
import Xkcd from './views/xkcd1335/Xkcd';

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

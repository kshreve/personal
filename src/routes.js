import React from 'react';
import { Route, IndexRoute } from 'react-router';

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
        <IndexRoute component={About}/>
        <Route key="about" path="about" component={About}/>
        <Route key="blog" path="blog" component={Blog}/>
        <Route key="blog/:id" path="blog/:id" component={BlogPost}/>
        <Route key="experiment" path="experiment">
            <Route nav="true" key="crankings" path="crankings" component={CrankingsContainer}/>
            <Route key="crankingsData" path="crankingsData" component={CrankingsDataImportContainer}/>
            <Route key="didIt" path="didIt" component={DidItContainer}/>
            <Route key="whitelabel" path="whitelabel" component={WhiteLabelContainer}/>
            <Route key="xkcd1335" path="xkcd1335" component={Xkcd}/>
        </Route>

        <Route key="*" path="*" component={NotFound}/>
    </Route>
];

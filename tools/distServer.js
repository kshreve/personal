// This file configures a web server for testing the production build
// on your local machine.

import browserSync from "browser-sync";
import historyApiFallback from "connect-history-api-fallback";

// Run Browsersync
browserSync({
    port:      3000,
    ui:        {
        port: 3001
    },
    server:    {
        baseDir: 'dist'
    },
    notify:    false,
    ghostMode: {
        clicks: false,
        scroll: false
    },

    files: [
        'src/*.html'
    ],

    middleware: [historyApiFallback()]
});

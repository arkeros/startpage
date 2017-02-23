'use strict';

var config = {
    categories: [
        { name: "Learn", commands: [
            { key: 'w', name: 'Wikipedia', url: 'https://en.wikipedia.org', search: '/w/index.php?search=' },
            { key: 'wa', name: 'WolframAlpha', url: 'https://www.wolframalpha.com', search: '/input/?i=' },
            { key: 'rae', name: 'Real Academia Española', url: 'http://dle.rae.es', search: '/?w=' },
            { key: 'wr', name: 'WordReference', url: 'http://www.wordreference.com', search: '/definition/' },
            { key: 'ub', name: 'Universitat de Barcelona', url: 'https://www.ub.edu', search: '/dyn/cms/continguts_ca/Resultats.html?q=' },
            { key: 'gu', name: 'University of Gothenburg', url: 'https://gu.se/english', search: '/?siteSearch=true&searchText=', favicon: 'http://www.gu.se/digitalAssets/1479/1479536_goteborgsuniversitet_16px.ico' },
            { key: 'cth', name: 'Chalmers University of Technology', url: 'https://chalmers.se/en', search: '/search/Pages/default.aspx?q=', favicon: 'http://www.chalmers.se/_layouts/Chalmers.Core.UI/Images/favicon.ico' },
        ] },
        { name: "dev", commands: [
            { key: 'gh', name: 'GitHub', url: 'https://github.com', search: '/search?q=' },
            { key: 'so', name: 'StackOverflow', url: 'http://stackoverflow.com', search: '/search?q=' },
            { key: 'jl', name: 'Julia', url: 'http://docs.julialang.org', search: '/en/stable/search/?q=', dash: '/en/stable/manual/', favicon: 'http://julialang.org/favicon.ico' },
            { key: 'py', name: 'Python', url: 'https://docs.python.org', search: '/2/search.html?q=', dash: '/2/library/' },
            { key: 'np', name: 'Numpy', url: 'http://numpy.readthedocs.io', search: '/en/latest/search.html?q=' },
            { key: 'pd', name: 'pandas', url: 'http://pandas.pydata.org', search: '/pandas-docs/stable/search.html?q=' },
        ] },

        { name: "Google", commands: [
            { key: 'g', name: 'Google', url: 'https://google.com', search: '/search?q=' },
            { key: 'd', name: 'Google Drive', url: 'https://drive.google.com', search: '/drive/u/0/search?q=' },
            { key: 't', name: 'Translate', url: 'https://translate.google.com', search: '/#en/es/' },
            { key: 'm', name: 'Google Maps', url: 'https://google.com/maps', search: '/search/', favicon: 'https://www.google.com/images/branding/product/ico/maps_32dp.ico' },
        ] },
        { name: "Social", commands: [
            { key: 'r', name: 'Reddit', url: 'https://www.reddit.com', search: '/search?q=', dash: '/r/' },
            { key: 'M', name: 'Menéame', url: 'https://www.meneame.net', search: '/search?q=' },
            { key: 'fb', name: 'FaceBook', url: 'https://www.facebook.com', search: '/' },
            { key: 'i', name: 'Instagram', url: 'https://www.instagram.com', search: '/', favicon: 'https://www.instagram.com/static/images/ico/favicon.ico/dfa85bb1fd63.ico' },
        ] },
        { name: "TV/Media", commands: [
            { key: 'yt', name: 'YouTube', url: 'https://www.youtube.com', search: '/results?search_query=' },
            { key: 'n', name: 'Netflix', url: 'https://www.netflix.com', search: '/search?q=' },
        ] },
        { name: "Download", commands: [
            { key: 'a', name: 'Amazon', url: 'https://amazon.es', search: '/s/ref=nb_sb_noss?field-keywords=' },
            { key: 'T', name: 'The Pirate Bay', url: 'https://thepiratebay.se', search: '/search/' },

        ] },
    ],

    // if none of the keys are matched, this is used for searching.
    defaultSearch: 'https://start.duckduckgo.com/?q=',

    // the delimiter between the key and your search query.
    // e.g. to search GitHub for potatoes you'd type "g:potatoes".
    searchDelimiter: '?',

    // the delimiter between the key and a path.
    // e.g. type "r/unixporn" to go to "reddit.com/r/unixporn".
    pathDelimiter: '/',

    // set to true to instantly redirect when a key is matched.
    // put a space before any search queries to prevent unwanted redirects.
    instantRedirect: false,

    // suggest your most popular queries as you type.
    suggestions: true,

    // max amount of suggestions to display.
    suggestionsLimit: 4,

    // open queries in a new tab.
    newTab: false,

    // the delimiter between the hours and minutes in the clock.
    clockDelimiter: '&nbsp;',

    // used for determining when to redirect directly to a url.
    urlRegex: /^(?:(http|https)?:\/\/)?(?:[\w-]+\.)+([a-z]|[A-Z]|[0-9]){2,6}/i,

    // if "urlRegex" matches but this doesn't, "http://" will be
    // prepended to the beginning of the query before redirecting.
    protocolRegex: /^[a-zA-Z]+:\/\//i
};
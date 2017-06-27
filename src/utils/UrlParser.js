function parseUrl(url) {
    const splited = url.split('/');
    return {
        category: splited[1],
        country: splited[2]
    };
}

export default parseUrl;

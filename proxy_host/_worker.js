const hostname = "snippets.cm.edu.kg";
export default {
    async fetch(request, env, ctx) {
        if (request.headers.get('Upgrade') !== 'websocket') {
            return new Response('Access Denied', { status: 403 });
        }
        let url = new URL(request.url);
        return fetch(new Request("https://" + hostname + url.pathname + url.search, request));
    }
};

// KI的snip项目：snippet.danfeng.site

export default {
  async fetch(req: Request, env): Promise<Response> {
    const u = new URL(req.url);
    const path = u.pathname;
    if (path === "/leaderboard") {
      const requestOptions = {
        method: req.method,
        headers: req.headers,
        body: req.method !== "GET" && req.method !== "HEAD" ? req.body : null,
      };
      return fetch(env.LEADERBOARD, requestOptions);
    } else {
      return env.ASSETS.fetch(req);
    }
  },
};

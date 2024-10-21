export default {
  async fetch(req: Request, env): Promise<Response> {
    const u = new URL(req.url);
    const path = u.pathname;
    if (path === "/leaderboard") {
      return fetch(env.LEADERBOARD);
    }
    else {
      return env.ASSETS.fetch(req);
    }
  }
};

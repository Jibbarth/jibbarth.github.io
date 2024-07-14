import controller_0 from "../ux-lazy-image/controller.js";
import controller_1 from "../ux-turbo/turbo_controller.js";
export const eagerControllers = {"symfony--ux-lazy-image--lazy-image": controller_0, "symfony--ux-turbo--turbo-core": controller_1};
export const lazyControllers = {"gist-file": () => import("../../controllers/gist_file_controller.js"), "tweet-embed": () => import("../../controllers/tweet_embed_controller.js"), "code-highlight": () => import("../../controllers/code_highlight_controller.js"), "share": () => import("../../controllers/share_controller.js")};
export const isApplicationDebug = false;
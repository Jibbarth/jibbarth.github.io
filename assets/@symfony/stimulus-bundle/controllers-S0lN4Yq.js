import controller_0 from "../ux-lazy-image/controller.js";
import controller_1 from "../ux-turbo/turbo_controller.js";
import controller_2 from "../../controllers/theme_controller.js";
import controller_3 from "../../controllers/mobile_menu_controller.js";
export const eagerControllers = {"symfony--ux-lazy-image--lazy-image": controller_0, "symfony--ux-turbo--turbo-core": controller_1, "theme": controller_2, "mobile-menu": controller_3};
export const lazyControllers = {"debug-bar": () => import("../../controllers/debug_bar_controller.js"), "share": () => import("../../controllers/share_controller.js"), "tweet-embed": () => import("../../controllers/tweet_embed_controller.js"), "code-highlight": () => import("../../controllers/code_highlight_controller.js"), "gist-file": () => import("../../controllers/gist_file_controller.js"), "csrf-protection": () => import("../../controllers/csrf_protection_controller.js")};
export const isApplicationDebug = false;
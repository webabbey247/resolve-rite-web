/**
 * Where the site sends people to sign in or sign up: the ResolveRite console's
 * auth pages. Set per environment (SIGNIN_URL / SIGNUP_URL); read on the
 * server and handed to the header as props, so they're never baked into the
 * client bundle.
 */

const CONSOLE = (process.env.CONSOLE_URL ?? "https://console.resolverite.app").replace(/\/+$/, "");

/** "Sign in" — an organization's administrator signing in to the console. */
export const SIGNIN_URL = process.env.SIGNIN_URL || `${CONSOLE}/auth/login`;

/** "Get started" / "Start onboarding" / a plan's "Start trial" — registering an organization. */
export const SIGNUP_URL = process.env.SIGNUP_URL || `${CONSOLE}/auth/register`;

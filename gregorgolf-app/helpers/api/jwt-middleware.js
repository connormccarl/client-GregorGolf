import { expressjwt } from 'express-jwt';
import util from 'util';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
//const secret = process.env.NEXT_PUBLIC_SECRET || serverRuntimeConfig.secret;
const secret = '566a178f-21cb-4869-ad69-aa1688ad25e7a6004de2-1bbc-42db-a73f-d47a778bcd18';

export { jwtMiddleware };

function jwtMiddleware(req, res) {
    const middleware = expressjwt({ secret: secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/register',
            '/api/users/authenticate',
            /^\/api\/users\/password\/.*/,
            /^\/api\/users\/id\/.*/,
            /^\/api\/users\/.*/
        ]
    });

    return util.promisify(middleware)(req, res);
}
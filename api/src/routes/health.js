import Health from '../controllers/health';
import { wrapAsync } from '../utils/controllers';
import basicAuth from '../utils/basicAuth';

module.exports = (api) => {
	api.route('/health').get(wrapAsync(Health.health));
	api.route('/status').get(wrapAsync(Health.status));
	api.route('/queue').get(wrapAsync(Health.queue));
	api.route('/sentry/log').get(wrapAsync(Health.sentryLog));
	api.route('/sentry/throw').get(wrapAsync(Health.sentryThrow));
	api.use('/bull', basicAuth, Health.bullArena);
};

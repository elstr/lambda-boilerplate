const Sentry = require('@sentry/serverless')

module.exports = () => {
	const environment = process.env.NODE_ENV

  Sentry.AWSLambda.init({
    dsn: process.env.SENTRY_DSN_SERVICE,
    environment,
    // Only enable Sentry monitoring on certain environments
    enabled: ['staging', 'production'].includes(environment),
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0
  })

  return Sentry
}

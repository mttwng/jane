var c = module.exports = {}

// LTC settings
c.selector = 'gdax.LTC-USD'
c.strategy = 'combo_trend'
c.period = '10m'
c.trend_ema = 40
c.neutral_rate = 0.1
c.oversold_rsi_periods = 5

// for combo_trend
c.overbought_rsi_periods = 5

// Optimize
c.enable_profit_stop_pct = 10
c.profit_stop_pct = 4
c.sell_rate = -0.006


// Simulation
c.currency_capital = 1000

// Actual Rules

// avoid trading at a slippage above this pct
c.max_slippage_pct = 5
// buy with this % of currency balance
c.buy_pct = 10
// sell with this % of asset balance
c.sell_pct = 10
// ms to adjust non-filled order after
c.order_adjust_time = 30000
// avoid selling at a loss below this pct
c.max_sell_loss_pct = 25
// ms to poll order status
c.order_poll_time = 5000
// ms to wait for settlement (after an order cancel)
c.wait_for_settlement = 5000
// % to mark up or down price for orders
c.markup_pct = 0

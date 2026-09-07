from datetime import datetime
import math

def asof_record(records, decision_at):
    """Select the latest already available snapshot for ONE entity; ISO datetimes required."""
    decision = datetime.fromisoformat(decision_at)
    eligible = [r for r in records if datetime.fromisoformat(r['available_at']) <= decision]
    return max(eligible, key=lambda r: datetime.fromisoformat(r['available_at'])) if eligible else None

def compounded_return(returns):
    values = list(returns)
    if not values or any(not math.isfinite(r) or r < -1 for r in values):
        raise ValueError('Returns must be finite, >= -1, and nonempty')
    return math.prod(1+r for r in values)-1

def intraday_overnight(previous_close, open_price, close_price):
    if any(not math.isfinite(x) or x<=0 for x in [previous_close,open_price,close_price]):
        raise ValueError('Finite positive prices required')
    return {'intraday':close_price/open_price-1,'overnight':open_price/previous_close-1}

def tug_of_war(intraday_returns, overnight_returns):
    if len(intraday_returns)!=len(overnight_returns):
        raise ValueError('Aligned periods required')
    return compounded_return(intraday_returns)-compounded_return(overnight_returns)

def at_proxy(amount, orders, trades, cancellations):
    if not math.isfinite(amount) or amount<0 or any(not isinstance(x,int) or isinstance(x,bool) or x<0 for x in [orders,trades,cancellations]):
        raise ValueError('Nonnegative amount and integer counts required')
    messages=orders+trades+cancellations
    if messages==0: raise ValueError('No messages')
    return -amount/messages/100

def realized_variance(log_returns):
    if not log_returns or any(not math.isfinite(r) for r in log_returns):
        raise ValueError('Finite nonempty returns required')
    return sum(r*r for r in log_returns)

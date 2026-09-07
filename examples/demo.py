import sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from src.factors import *

# Synthetic teaching inputs, not market data.
print(intraday_overnight(100,99,101))
print('AT proxy:',at_proxy(10000,200,50,50))

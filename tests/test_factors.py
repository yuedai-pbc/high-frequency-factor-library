import sys, unittest, math
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from src.factors import *

class TestFactors(unittest.TestCase):
    def test_asof_blocks_future(self):
        records=[{'available_at':'2024-04-30','value':2},{'available_at':'2024-08-30','value':99}]
        self.assertIsNone(asof_record(records,'2024-03-01'))
        self.assertEqual(asof_record(records,'2024-05-01')['value'],2)
        self.assertEqual(asof_record(records,'2024-08-30')['value'],99)

    def test_compounding(self):
        self.assertAlmostEqual(compounded_return([.1,-.1]),-.01)
        with self.assertRaises(ValueError): compounded_return([])

    def test_session_identity(self):
        r=intraday_overnight(100,99,101)
        self.assertAlmostEqual((1+r['intraday'])*(1+r['overnight'])-1,.01)
    def test_proxy_direction(self):
        self.assertGreater(at_proxy(10000,200,50,50),at_proxy(10000,100,25,25))
        with self.assertRaises(ValueError): at_proxy(1,0,0,0)
    def test_variance_not_volatility(self):
        self.assertAlmostEqual(realized_variance([.01,-.02]),.0005)
    def test_monthly_gap(self):
        self.assertAlmostEqual(tug_of_war([.1,.1],[0,0]),.21)

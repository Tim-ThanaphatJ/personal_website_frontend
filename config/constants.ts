// 📂 config/constants.ts

// Introduction images
export const INTRO_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjcAAAG4CAYAAAC5JsY+AAAcGUlEQVR4nO3d63LbuLIGUHpX3v+VfX5kfGLLkkiQANHdWKsqNbN3Jgru+AiS8sfn5+cGAFDF/2YXAACgJ+EGAChFuAEAShFuAIBShBsAoBThBgAoRbgBAEoRbgCAUoQbAKAU4aavz/9+AQCT/JldgCIEGgAIQri5RqgBgGCEm3PehZqP20oBAPzimZt2TmsAIDAnN232go1TGwCueNxn7CsnOLk5TrABYKRn+4y3cE8Qbo4xsACYyT7UwG2p11oGklMbAEb73Ow3hzi5uc5AA6CHI/uJE5wDhJvnjg4ewQaAuwk4O4Sb3wwaAGY5etFsr3pDuPmp5cTGqQ0AIwg4Fwk3/xgkAGRj73pCuPnL4AAgkpY7BPawB14F98o3AJSy+smNtAtAZE5vTlg93LRwagNAZALOf1YON25HAVCNgLOtHW4gg6sL1aiF7nPzA/3gLq0X2MvPy1UfKF6+43kr2viIGnDu+vzvHhf50X+3U1uyWvrnUK14ctO6GC47OCAB85NVGOsNVgs3gg0AWbk9ddBq4QYAMnPRfcBK4capDQCrWfL0ZpVws2TnAsCKVgk3rZzaABCVZ292CDe/CTYAkNgK4Wa5xApAeU5v3lgh3AAACwWc6uFmmY4EAP6qHG7OBBvP20AuLmBYmT3rhcrhppVBAkA2nr15omq4WaLzAIDfqoYbAOC58gcAwg0AUErFcONBYq762H6PiZXGyMfDP6OIVh6I4szcKH1682d2ATor3VncLmrAuWOcRw04ALsqntwA6xC+4LyyBwLCDQBQSqVwUzaBAsAgJffOSuHmLMfaAGRnL/tGuAEAShFuAIBSVg83jvEAoJjVww0AVOGC/T/CDQCsrdwbU1XCTbmOAQDOqRJuAAC2basRbs6e2rg3CQB/lboDUiHcAAD8v+zhplTSBACuyx5ugLW5wAF+EW4AgFKEGwCgFOEGyMxbj9BPmdu8wg0AUErmcFMmYQIA/WQON1cJRwBQ0MrhBgAoSLgBAEoRbgCAUoQbAKAU4QYAKGXlcOPLvwDgpxJvEmcNNyUaHwDoL2u4AQB4SrgBAL5Lf3dEuAEASvkzuwA8TcgedoZj0l9hAv0JN3NZmAFy+76OuzANwm0pAOjDBWsQTm7uZ/AD1PW1xjvFmWjlk5sZIePI32lCAOT3ubmYnWblcHM3gxwAbiDc3ONosHFqA1CLE5wJVg43dwWJo7eiBBuAfI6u3wLOjVYON3cMNIMZAG62crgZqeUY0okNQH5HT29c9N5AuOmvZeAKNgB1HF3TBZzBhJu+DFiAtQk4AawebnoOrtbPcmoDUNOsgCMw/Wf1cNMrYAg2AHznBGei1cNNj0El2ADwjPV+ktXDzd0MdIC1+A6cCYSbawxIAPbc8Zq4/egb4eb8gHA7CoDehJQOhJtzWr/LRrABWFvLPiDgXCTctPMlfQCcIeDcRLhpI9gAcIWAcwPh5jjBBoAe7BGDCTd/9UzHBu05n5sfKgfwyJp4gnBzjME1lvYFVtPz9pQ19IFws8/tKABGiPr8Tfq9TLh5TxoGgGSyhpsRqfLxeQ9f0ncPARJY2dXTm95raIm9LGu4GenMQ60lBgPACV4EuK414Hx++3eeEG4AOOvKaTc/tV4ka+83hBtmMjmhFnOaEISb69yS6kt7Aquy/nUi3FxjIJ7nCg+AIYSb8wQbgN9cuFxjb+lAuDnH4AOAoIQbZnBlB7WZ49e4gL4oc7jR+QDAL5nDDQBzucgkJOGmnckMAIEJN9zNvXiAfTMupMtcvAs3RFJmYgEwj3ADAJQi3LRzW2UMpzZQi7XyGu13gXADAJSSPdy42gcAfsgebmZxXHiOdgN473Obs1aWOiwQbgAYxQUNU1QIN7PSpkkLQE/2lU4qhJuZDEQAerCfdFQl3My8V2hAHqOdYE3mfnylnrfZtjrhZjaTF4Cz7CGdVQo3s5OnwQlAK3vHAJXCDQDQZvbBwBDCTV8SOABH2TMGqRZuIiRQgxWAPRH2igh75hDVwg0ARBch2JRWMdxESKIGLgCRRdgrh6kYbrateKcBkFaEi9/ye2TVcLNt8ztv1g8/AyCmCHvC7L3xFpXDzbYt0okJRJjQwDzWgBhtsMyeWD3cbNv8zowwoAFY2+y98FYrhJttW6xTAQhl9kXucnvgKuFmttkDe6aV6w4w23LBZtvWCjdLdjDTfG4eKgfmrgHL7nsrhZttm9vRNrl16Gtg26wF06wWbrZNwGEsfQxEsOypzbatGW62TcBhjGd9u/QCAwtzO2qiVcPNtgk4UMHyizg8MCe2tcPNthkEkWQPfNnLn5V2J6JZ49Ke9p/Vw822zRsMFuU69CUtPjdv01Um2AQg3MxlYavNYsMR1gGustY8EG7+8vxNDBnbImOZOebOdcE4qkE/BiHc/CP50spCBnxxOyoQ4eYnz98As2RcBzKWeQTBJhjhBvIZuaBZLOcSFvIRbAL6M7sAAX1scwbr52awcpyxMnaejg6QQgxXmP87nNw85/YUe/b6yuID9VmzgxJu4jFZYG3WAN5x4XSAcPOa18MhLnOE2WaMQcHmIOHmPQMJ1mPeH7NywBRsghNu9nn+5l6r1pvjjBHgLeHmGIkZgG1zapOCcHPcjMHlChV+Gj0nbCK8I9gkIdxAO6FzDsGGmQSbRISbNk5v7rFineG76HMgevlYnHDTTsCBe31u5gBzObVJRrjJw+LOiu4a9zYSXrH2JiTcnGMhBFZlsx/PHnORcHOe21NjrVRXfrvzVtTdc9nYzsPtqKSEm3wsjFR29/M1NhJeEWwSE26uMRB5RQhtM+OhYfMXivozuwCc8rUJVF+cP7fcdcxe/qMEuXWs0tdObZJzcnOdAcnKMm52H5ufGcdrgk0Bwk0fFkqgp4ibnfWGNISbfgScMarXj3tFDA3E4dTmp8+HX2kIN9Au8mLEczNvRX1JtTl0Nrvto4rcLqnHq3DTV+SByhypF4gizMvrVhjHK9TxqPRtIdzUEHkg9thYItfviOzlzyxKsDEGYnM76q90t59eyfoq+GPjRxokH1uRwQGJRVoTsqu+nlWv31F77ZBqTmU8uXnWAQZn7DZwepO//JlEW4Rb+z5a+ekvWh+XW58yhptXIh2neXNqjOr147pomwZx+yTSnjHTkTaI2ocvZb0t9U6Ub++ddXtqlW/FhS+Rx3v2zTN7+V+ZWa8o4/VoG0Qpb5OK4eZLlJAzQ+W6Zw5vmcseUcW2jFSnqsFmptn9u8wt0oy3pVobW0KPoWdbRFh0z9YnQtmz+nj4FZ2+jtlPq/bLMsFm2/Ke3LTe8vn+36busEZOCsjO+J2jagBY7WL3bH3Tz7uMJzdfrlw5V524z0Sqa7XTm7Myl/1R70Uw2+nMK5n7uFfZo/Vf5j5pdWWfi9Zvp2Q9ufly5aHdu041InzvTdUTnNn1itC3EVQcW1csvakEZZ4eU2YMZj65+XKlM+4a8BEGTJTJHaEtevLsDd/p13gi9Mmd655wveU/ufly9QTn++dUNvukY4QIdTo7/iKUnX6ubKIRxkGEENBTtfo8U/UW4mUVTm6+9PoW3FHP5EQZPBEmfO+2iFCnszKXnTp6j8PZ612keTViveu5T83uqyEqhZtt6//AaqQJ0lPlumWkL/LLfGpTafxVX9uqhdBhqoWbbYudkqMNpEqvRc5e0K7WZ3b5WVOlU+qIcyjyHYVo+1FXFcPNto3rtM9t3ECbpVrAydwvmcu+sqynNiM2y9Ib5s1Grmfl+6nKA8XPfHXeyA2jyo85mFkPr1OTWdaxm7Xcr0Ssz5n1dHQ9su9Vh318fkYcE93NqOSrQRS9wTN9i+aerHVZZgFK7mpfV7t9k3W+jfSuTe4u+1Lryirh5stSlb2g0iJ1d128wbCGrCG2yjz7Yk3ft+RaUvWZm1eW7OQTIp10ZdOrHhbtuASbn2bVxRzZV2VdbbZauNm2hTu7UZXFY0Y9BJy6svZJ1nI/qrIujbb8w90rhpttq/GD+e5y50Iysj8EHK7Kestx5BjK8GMFVmNf29YNN98ZCPsEnLmylpv5KgQbpzX7XLA/EG7+MiD23bnAVAk4xlUdGU9tqgQbXhNoXhBu/jFIjhFw2rg9lV/GthdsarNf7RBufjNo9lVYdDLWIWOZs+vZ5kLBcRXqMIr96QDh5jUD6L07blON7oMKp1CMI9j8dsecFGxes5YctNqX+F2hoV7LHkLuWDD80Lt8sj1nk32eWGN/M89PcnJznKfRX3O1ta/aT0GvTrD5SbC5l73mIuHmHEHnuazfgHpXODNechBsfhJs7mNf6cRtqf406LjJWSGAuD0Vm2DzU5W3FqMxbwcTbsbSuDlvx2QKOBbJfrL1S8Zgs/KaaK7eSLiZ52rDP06U6B2Z8ftesoQci2YfmfojW7DJsj71XpeZRLipJUNn9pj8VQJOtpOCyrIEm4wnl9HXJXOnIA8U15JhkvZ4eNdX2LOi6CHhUYa3KM3BooSberJMVgGnrwxljCrDqU2mL5zMEGq2Lc9ayQnCTU1ZJq2Ak6evqsqwCWcLNhmYd8UJN3VlmbyfD79aCTj/ZNlYKsr89QdXXZm/M2RZG7nAA8VryNjJrQtQ9oeMPVx8v+i3oyKf2KywppCYk5s1ZJzUrVeDd5/g+DI+RooabDKd0Hxnfi3Gyc1aKnT2q0VqVt2ivjZrMd/Xo62jn+LteVf+CuvFtpkLS/ozuwDc6mPLv2BFK//nZvHMKGKwmTG2o82nnszLhbkttR4Tvr+Iz8tU3rQq0l99WecWJ9ysyU+e7c/mlEe0vopWnsysbWzbJtysziLQl01qHU7YYhFq+EG4waLQV8RnOYhJsOnDfOEX4YYvFoh+ogQcm+dv+qYW6xZPCTd85xSnH5sXrxgbfVireEm44RmLRh82MR4ZE9e5CGOXcMMrFpA+rmxm2j+eK30i2FxjTeIw4YY9FpPrZm5qNtR/9ENe1iGaCDcc4YrpOptbfmfngL4/z9rDKcINLSwy19jk1qPPzxFquMTPlqLV9wXHwt2u9WdRVfh5YBH4uU3xCTN04+SGK1xdnXP3pmeTvZ82b2MdoSvhhh6EnHY2v7r07XHWDoZwW4qe3LJqc+QWlXbMRX8dI9AwlJMbRrF4HWMzHO+uNtaXx1gbGE64YSSL2DGvNsWem6WN97p3bah997kFxW3clmI0t6qO+Wqbj4f/TXz66jVhhimEG+5k496nbWJ7fE5Kfz0n1DCVcMMMjwufDYJRRowt4/U1oYYQhBsicKIDeQk0hCPcEImQA3kINYQl3BCRkANxCTWEJ9wQmZDTV+vPtYIvxg2pCDdk4O2UPmxQtDBeSEu4IRunOTCOQEMJwg1ZOc1p57YUrxgXlCLcUIGgA+0EGsoSbqhG0OGL/v9NoGEJwg2V+SZk+EuoYSnCDStxquO5m5XoZ5Yl3LAqb11RkUADm3ADQg7ZCTTwQLiBvzyfQxbCDOwQbuA5z+cQiUADDf43uwCQgI2FWT424w+aObmBY9y24k4CDVwg3MA5blvRkzADHQk3cJ03rjhLqIEBhBvox2kORwk1MJBwA2M4zeEZoQZu4G0pGMtmxrZ56wluJdzAeNE2thVOk6LUMVrfwxLcloL7uFW1DoEGJnJyA/ez8dWmf2Ey4QbmcLuiJn0KAQg3MJfNsA59CUEINzCfTTE3p3AQjHADMdggc9JnEJBwA7HYLPPQVxCUcAPx2DTj00cQmHADMdk849I3EJxwA3HZRM8Z+SWJ+gQSEG4gtlGbqW9JbifYQBLCDcRnU51PH0Aiwg3kYHOdR9tDMsIN5GGTvZ82h4SEG8jFZnsfbQ1JCTeQj28zfq3Xg9LaFxITbiAvG/AY2hWSE24gtysbsdfBfxNsoADhBuAvwQaKEG4gP5vyddoQChFuoAab83naDooRbqCOM5v06s/dCDZQkHADtay8WbcGtZXbCkoTbqAem/Y+bQSFCTdQk837NW0DxQk3UNdKm/jRW1IrtQksS7iB2mzm/2gLWIRwA/XZ1LUBLEW4Aaq/Di7YwGKEG1jDqhv8qvWGpQk3sA4bPbAE4QbWslLAWamuwDfCDaxnhU1/hToCLwg3sKaP7V8AqBAEPl78O7CgP7MLAExVKQhErsvXG2mRywhlCDcw1uNr1ittbs9eMV+p/tv2uw0+t/XaAG4n3MC9VrmCf/XdOSts7u++N6h63SEEz9zAHJ9b3S/P26tX1Xpvm2ADIQg3MNbehlZtoz9an2r13jbBBsIQbmC8IwGn4ma/p0qdV+0/CEu4gXscuXLPvkFmL/8ZR+rs1AZuJtzAfVYIOK0y13ev7N+/Swi4kXAD96oacK6UebX6AoMJNxBTpuc4epQzU13dioLghBu4X8vGF33T71m+KnUVbGAy4QbmaA040Tb+UWWKVs9ta6urYAMBCDcwT+tGGHHjHyFSPSOVBThIuAFa3bHhRwgVrWVwagNBCDcw15nTm1kb/91/98yAEyFcAScJNzCfK/7XZoSMM3+nPoRAhBuIIfrzN05RXhNsIBjhBvKKvulnc+a2m2ADAQk3EMeZjVLA6cOtKChEuAEAShFuIBanN/dzagPFCDcQT8SAM3MzH/l3C4ZQkHADddio25xtL6c2EJxwAzGd3UBHBhybOpCCcANENipQObWBwoQbiCvi6c2dogUbIAnhBmoatYHfdXIR8YQkYpmAJ4QbqMsJxW/aBBYg3EBsTgti0A+QiHADtY04qci60Tu1gUUIN1Bftk19RHi60gZZwxwsS7iB+CJurhHLBLBtm3ADWVwNE9lOb3paue6wJOEGOGvE6Y0TIeAy4QbWseIJxop1huUJN7CW3pt9z5OW3qc2PerqJAkSEm4AgFKEG8ij1ylCxNMbpzZAN8INUI3nbGBxwg0wmxMSoCvhBtYU8dYUQBfCDeQSOUScKVvEZ222LXY7AzuEG1iXZ1OAkoQbAKAU4Qby6XnLxOkNUI5wA1QhqAHbtgk3QF8tp0pRH9qNWi7gIOEGcnJr6qcKdQA6EW4AgFKEG6C3u2/rOLUBfhBugG27PyB4rgUYRriBvAQEP0YCeEK4Ae4mQABDCTfAl56nIAIMMI1wAwCUItwA341+sDjy9/M4bYIihBvILduG7LVtYDjhBng0MoD0CmNCEvCScAOMkulUKVNZgR3CDeSXZWN2agPcQrgBAEoRbqCGqKc3Ucv1XYYyAg2EG+CZqLd+vP4N7BJuoI6oG/XHFrdsQEHCDfBK1NObXgQuKEq4gVps2MDyhBuoR8DZp42gMOEGarJ5v6ZtoDjhBurqsYlHeu6mR1kEG1iAcAO12cz/0RawCOEG6rOpawNYinADa1h5c1+57rAk4QbWsdom78sDYVHCDazlzIYf6aHio4QaWJhwA2vKdqrRErAy1QsYQLiBtVULAtXqA5wg3AAVAkG2kyhgIOEG2LbcwSBz2YEB/swuABDGV0jI8gCxUAM85eQGiO5Z2BJsgJeEG+CR4ACk5rYU8EykgPOx/Tu9iVQuICjhBshAqAEOc1sKAChFuAEAShFuAIBShBsAoBThBgAoRbgBAEoRbgCAUoQbAKAU4QYAKEW4AQBKEW4AgFKEGwCgFOEGAChFuAEAShFuAIBShBsAoBThBgAoRbgBAEoRbgCAUoQbAKAU4QYAKEW4AQBKEW4AgFKEGwCgFOEGAChFuAEAShFuAIBS/swuQDCfL/7/j1tLAXW9mmN77pqDVdaAz+15mR/rd6ReX38mWxuwsI/Pz7NrTSktjWCCw3lXFpxRc6+1TJHXgGd1+Xjze99/v+WzILSVb0t9fvt15s8BuZ2dy1Hn/6ty9Sxv1LrDDyuHm6tMcujr2anAx7dfPV2dv9Xnf/X6Udyqz9z0OJ79+v8d08J1Hw//HOndxt2yBlSe/x+bgENiK57cnHlgsOoCBvxzZg2IFACsU/CfFcPNWRYOyK/K21CvPNbjyi29np8Ft1r1thSQQ6Q3drLcqunZPsIMKa12cjPiqi3DYgeVRJtz0crTU+W6UZiTm3F6Bqm9BWbveyzO/P1Hr5jP1vP7n2t9nqF3G559nqK1HL0/b+9ze5TPlfs1V9r0zHweMWdav/iv1zgaMV/OrAMtn2O+BCHcjPFuArV+2+fRK6fW/+7Mht7rm0r3ynr091u+XbVFr7Zs/cwRn3f1s3w77TlX27RlDEbpmyN13rZz4ejdf2e+8Itw01fLRnolZFz5b3t8xveyv3oO4eyi21qOHhtErz/TcrK193m93s7pVbbRi/aZet29gRy5Wu/Rphna4vHvb/3ve7591nMd6DlfBJyJVnvm5pUeXwl/9rjzVTB491mPv478N2cn/53hoefnvduIXrXL0Xa/WrYjn9f7WYfHz7uzz0eJVJZtG9emrfP5Tlfq3DImj3xey/+/p8d8iTY+l+Lk5rgzm/LHw7/3CFFH/u5XVw0tZXgs+6u/q/VzX/09R+9hH6lvz/vhLe149Grt2Su2vet1pnwtfV7NqCvt1jZtae/Ib299PPzz6vrw+L/vmC97jqzvTnAmcXLzT+8ThVeb4t7nj16sWk4rnv3ZRy3t1lq3lja86q5N4lX5z9br6Od97/erdY2yofYeC++u/vc2yme/3+uU78gJ4Aw9LyJGn1TuaT0VunNt4gQnNz+dmRCzF/p3Vwxfv3/mM+/Q83Tg6wpp9KnN9997d6V2x2K9V6eWOr8LSXeM8daj/Qgh90ogbT0FHf3MUy+zx9GeoyeXX3rsCU5vJhBuztsbrGc2oxEL+ZlF8bEcR8q9t3j1eJ5mxQXiroXx1XiNsCFF1/K8x9W+/P6ZEefD2bXjDj3/nlf1NF+CEG7a9QgavR3ZhK5c+V0p97vnf+4sRwQRNqPWNz74LcoaMPNE4Gg9Rjxn+PV7kcZnpLKweebmy95962hvKDxztGwjJ2Hk9omg0gJYqS7bdnx+jxzj3y9AIsxnSEu4+enZ65aZNuyj5b17QbQA/xVhLPUqQ4S6jLA3h+68OOgdcHr22axbpXCI21LjzFz8e79+2dvRz6+2gUZ+sDBquWZpeeX41S2SHm169s3GWSKPo57zL3I92Zzc9BB5kM84eYrcHq3u+HqAKzJsdvQzaj5HHUcR1pIIZeAE4WacSAtG6wS9+7mcCAtI66vIZ4z6Esder9LTV6Y27VXW6HVepZ7LE276uGNjfGdvg9v7ErDWP7On13fK9Nq4r7r6ZYR36PH9LBG/zyaLnuFz1kP/rWUdHbivuFrPI6/cz64jb3jmZrwzweLs5195xubdF4e9+jNn/p4zRrfh989q+c6SaPbKeOQ5kbva+pkMbfzOmfHz2KafD/8c4ch3UrU8F3e1zqOM+O6tls+IcCK9LCc3/cx6s6pXyOhd9jvCz4j2HtmHVz87Qh/1+nurLvwz+vjOC43Rn9VbzweIWz4rcpsswclNf0feVJq5qRz5/ZllP/J2yF1l2GuHGScNZ96E2/sOp73PG9XeV9/qi+quNu0VpHq0/4g693q7qXWuRp0vNPj4/Ky2rrDF+or22d+ievf3ccyo66jXkCOIULfZr/DPHl/VRBhTDCbcAACleOYGAChFuAEAShFuAIBShBsAoBThBgAoRbgBAEoRbgCAUv4PzMDb8J+/4aQAAAAASUVORK5CYII=";

// Animation speed
export const ANIMATION_TYPING_SPEED = 25;

// Navigation menu links
export const NAV_LINKS = [
  { displayName: "Home", refID: "home-section", sectionButton: "home-section-button" },
  { displayName: "Skills", refID: "skills-section", sectionButton: "skills-section-button" },
  { displayName: "Projects", refID: "projects-section", sectionButton: "projects-section-button" },
  { displayName: "Experience", refID: "experience-section", sectionButton: "experience-section-button" },
  { displayName: "Contact", refID: "contact-section", sectionButton: "contact-section-button" },
];

// Home section intro
export const HOME_INTRO = {
  greeting: "Hi, my name is",
  name: "Tim Thanaphat",
  description:
    "I’m an Engineer, Software Developer, and AWS Cloud enthusiast who loves turning complex data into meaningful insights and building scalable solutions. \
    With a passion for automation, problem-solving, and clean design, I enjoy crafting efficient systems that make life easier. Always curious, always learning—let’s build something awesome!",
};

// Particle animation config
export const PARTICLES_CONFIG = {
  particles: {
    color: { value: "#808080" },
    links: {
      color: "#808080",
      distance: 150,
      enable: true,
      opacity: 0.25,
      width: 1,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "bounce" as const },
      random: false,
      speed: 1,
      straight: false,
    },
    number: { value: 50 },
    opacity: { value: 0.25 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

// Skills section
export const SKILL_INTRO = "Mastery comes with dedication, and I take pride in every step of my learning journey. The more I grow, the more I achieve. 💪";

export const SKILL_SET = [
  {
    category: "🔌 Programming",
    skills: ["Python", "HTML/CSS/JavaScript", "SQL", "Bash", "C/C++/C#"],
  },
  {
    category: "🤖 AI / Machine Learning",
    skills: ["TensorFlow", "scikit-learn"],
  },
  {
    category: "🕸️ Frontend Web Development",
    skills: ["ReactJS", "HTML/CSS/JavaScript", "Bootstrap", "Material UI", "Three.js", "Canvas"],
  },
  {
    category: "🖥️ Backend Web Development",
    skills: ["Flask", "Node.js"],
  },
  {
    category: "🤖 Robotics",
    skills: ["ROS", "ROS2"],
  },
  {
    category: "👨‍💻 DevOps",
    skills: ["Agile", "Scrum", "Git"],
  },
  {
    category: "👍 Other Skills",
    skills: ["Embedded Systems", "Jetson Nano / Raspberry Pi / Arduino", "3D CAD", "Circuit Design", "Ladder Logic"],
  },
];

// Personal Info
export const PERSONAL_INFO = {
  linkedin: "https://www.linkedin.com/in/thanaphat-jiamcharoendet/",
  github: "https://github.com/Tim-ThanaphatJ",
};

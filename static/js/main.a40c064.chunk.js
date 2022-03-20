(this.webpackJsonpmaticfury = this.webpackJsonpmaticfury || []).push([
    [0], {
        366: function(e, t, a) {},
        367: function(e, t, a) {},
        399: function(e, t) {},
        403: function(e, t) {},
        405: function(e, t) {},
        409: function(e, t) {},
        410: function(e, t) {},
        435: function(e, t) {},
        437: function(e, t) {},
        446: function(e, t) {},
        448: function(e, t) {},
        459: function(e, t) {},
        461: function(e, t) {},
        475: function(e, t) {},
        508: function(e, t) {},
        509: function(e, t) {},
        577: function(e, t) {},
        582: function(e, t) {},
        584: function(e, t) {},
        591: function(e, t) {},
        592: function(e, t) {},
        617: function(e, t) {},
        624: function(e, t) {},
        678: function(e, t) {},
        821: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(2),
                s = a(137),
                i = a.n(s),
                r = (a(366), a(367), a(5)),
                c = a(12),
                o = a(1),
                l = a.n(o),
                u = a(94),
                d = a.n(u),
                m = a(0),
                p = function() {
                    var e = Object(n.useState)(),
                        t = Object(c.a)(e, 2),
                        a = t[0],
                        s = t[1];
                    Object(n.useEffect)((function() {
                        i()
                    }), []);
                    var i = function() {
                        var e = Object(r.a)(l.a.mark((function e() {
                            var t;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, d.a.get("/config.json");
                                    case 2:
                                        t = e.sent, s(t.data.urls);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(m.jsxs)("footer", {
                        children: [Object(m.jsxs)("div", {
                            className: "footer-top",
                            children: [Object(m.jsx)("a", {
                                target: "_blank",
                                href: a && a.telegram,
                                rel: "noreferrer",
                                children: Object(m.jsx)("img", {
                                    src: "/assets/img/telegram.png",
                                    alt: "telegram",
                                    className: "footer-bottom-img social"
                                })
                            }), Object(m.jsx)("a", {
                                target: "_blank",
                                href: a && a.dappradar,
                                rel: "noreferrer",
                                children: Object(m.jsx)("img", {
                                    src: "/assets/img/dappradar.png",
                                    alt: "dapp radar",
                                    className: "footer-bottom-img"
                                })
                            }), Object(m.jsx)("a", {
                                className: "footer-bsc",
                                target: "_blank",
                                href: "https://cronoscan.com/address/0x273349465c08017694a33673c67ef1c3baeef7c3",
                                rel: "noreferrer",
                                children: Object(m.jsx)("img", {
                                    src: "/assets/img/cronos.png",
                                    alt: "cronos",
                                    className: "footer-bottom-img bsc"
                                })
                            }), Object(m.jsx)("a", {
                                target: "_blank",
                                href: a && a.dapp,
                                rel: "noreferrer",
                                children: Object(m.jsx)("img", {
                                    src: "/assets/img/dapp-logo.png",
                                    alt: "dapp",
                                    className: "footer-bottom-img dapp-img"
                                })
                            }), Object(m.jsx)("a", {
                                target: "_blank",
                                href: a && a.audit,
                                rel: "noreferrer",
                                children: Object(m.jsx)("img", {
                                    src: "/assets/img/solidikey.png",
                                    alt: "haze crypto",
                                    className: "footer-bottom-img haze"
                                })
                            })]
                        }), Object(m.jsx)("div", {
                            className: "footer-bottom p-2",
                            children: Object(m.jsxs)("p", {
                                children: ["cronosmatrix", " BLOCKCHAIN INVESTMENT PLATFORM", " ", "cronosmatrix.com", ", 2022"]
                            })
                        })]
                    })
                },
                j = {
                    matic: {
                        contract: "0x273349465c08017694a33673c67ef1c3baeef7c3", // TODO // "0xc8ec134F901a87694a0Ff04277196464153C4c48",
                        color: "FFC435",
                        fullName: "CRONOS",
                        ABI: [
                                {
                                    "inputs":[
                                        {
                                            "internalType":"address payable",
                                            "name":"_walletProject",
                                            "type":"address"
                                        },
                                        {
                                            "internalType":"address payable",
                                            "name":"_walletProject2",
                                            "type":"address"
                                        },
                                        {
                                            "internalType":"address payable",
                                            "name":"_walletDev",
                                            "type":"address"
                                        }
                                    ],
                                    "stateMutability":"nonpayable",
                                    "type":"constructor"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"address",
                                            "name":"user",
                                            "type":"address"
                                        },
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"amount",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"Claimed",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"amount",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"DevFeePaid",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"high",
                                            "type":"uint256"
                                        },
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"current",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"InitiateInsurance",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"amount",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"InsuranseFeePaid",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"address",
                                            "name":"user",
                                            "type":"address"
                                        },
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"planIdx",
                                            "type":"uint256"
                                        },
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"amount",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"NewDeposit",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"address",
                                            "name":"user",
                                            "type":"address"
                                        }
                                    ],
                                    "name":"Newcomer",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"amount",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"ProjectFeePaid",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"address",
                                            "name":"referrer",
                                            "type":"address"
                                        },
                                        {
                                            "indexed":false,
                                            "internalType":"address",
                                            "name":"user",
                                            "type":"address"
                                        },
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"refLevel",
                                            "type":"uint256"
                                        },
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"amount",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"RefDividends",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"address",
                                            "name":"referrer",
                                            "type":"address"
                                        },
                                        {
                                            "indexed":false,
                                            "internalType":"address",
                                            "name":"user",
                                            "type":"address"
                                        }
                                    ],
                                    "name":"RefInvited",
                                    "type":"event"
                                },
                                {
                                    "anonymous":false,
                                    "inputs":[
                                        {
                                            "indexed":false,
                                            "internalType":"uint256",
                                            "name":"amount",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"Reinvested",
                                    "type":"event"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"AMOUNT_FEE_INS",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"DEPOSIT_HISTORY",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"timestamp",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"duration",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"amount",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"DEV_FEE",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"INSURANCE_CONTRACT",
                                    "outputs":[
                                        {
                                            "internalType":"address payable",
                                            "name":"",
                                            "type":"address"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"INSURANCE_LOWBALANCE_PERCENT",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"INSURANCE_MAXBALANCE",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"INSURANCE_PERCENT",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"INSURANCE_TRIGGER_BALANCE",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"INVEST_MIN_AMOUNT",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"LAUNCHED",
                                    "outputs":[
                                        {
                                            "internalType":"bool",
                                            "name":"",
                                            "type":"bool"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"MAX_WITHDRAW_AMOUNT",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"PERCENTS_DIVIDER",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"PLANS",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"durationDays",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"percent",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"PROJECT2_FEE",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"PROJECT_FEE",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"REFERRAL_PERCENTS",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"REINVEST_PERCENT",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"TIME_STEP",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"TOTAL_CLAIMED",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"TOTAL_DEPOSITS",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"TOTAL_INVESTED",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"TOTAL_REFDIVIDENDS",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"address",
                                            "name":"",
                                            "type":"address"
                                        }
                                    ],
                                    "name":"USERS",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"checkpoint",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"address",
                                            "name":"referrer",
                                            "type":"address"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"refDividends",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"debtBuffer",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"totalInvested",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"totalRefDividends",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"totalClaimed",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"WALLET_DEV",
                                    "outputs":[
                                        {
                                            "internalType":"address payable",
                                            "name":"",
                                            "type":"address"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"WALLET_PROJECT",
                                    "outputs":[
                                        {
                                            "internalType":"address payable",
                                            "name":"",
                                            "type":"address"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"WALLET_PROJECT2",
                                    "outputs":[
                                        {
                                            "internalType":"address payable",
                                            "name":"",
                                            "type":"address"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"WITHDRAW_COOLDOWN",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"claim",
                                    "outputs":[
                                        
                                    ],
                                    "stateMutability":"nonpayable",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"getContractBalance",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"getDepositHistory",
                                    "outputs":[
                                        {
                                            "components":[
                                            {
                                                "internalType":"uint256",
                                                "name":"timestamp",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"duration",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"amount",
                                                "type":"uint256"
                                            }
                                            ],
                                            "internalType":"struct CronosMatrix.THistoryDeposit[20]",
                                            "name":"o_historyDeposits",
                                            "type":"tuple[20]"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_timestamp",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"getProjectInfo",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"o_totDeposits",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_totInvested",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_totRefDividends",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_totClaimed",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_ensBalance",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_ensTriggerBalance",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_timestamp",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"address",
                                            "name":"_user",
                                            "type":"address"
                                        }
                                    ],
                                    "name":"getUserAvailable",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"address",
                                            "name":"_user",
                                            "type":"address"
                                        }
                                    ],
                                    "name":"getUserCheckpoint",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"address",
                                            "name":"_user",
                                            "type":"address"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"_numBack",
                                            "type":"uint256"
                                        }
                                    ],
                                    "name":"getUserDepositHistory",
                                    "outputs":[
                                        {
                                            "components":[
                                            {
                                                "internalType":"uint256",
                                                "name":"planIdx",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"amount",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"timeStart",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"timeEnd",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"bool",
                                                "name":"isReinvest",
                                                "type":"bool"
                                            }
                                            ],
                                            "internalType":"struct CronosMatrix.TDeposit[5]",
                                            "name":"o_deposits",
                                            "type":"tuple[5]"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_total",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_idxFrom",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_idxTo",
                                            "type":"uint256"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_timestamp",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"address",
                                            "name":"_user",
                                            "type":"address"
                                        }
                                    ],
                                    "name":"getUserInfo",
                                    "outputs":[
                                        {
                                            "components":[
                                            {
                                                "internalType":"uint256",
                                                "name":"dividends",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"mActive",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"rActive",
                                                "type":"uint256"
                                            }
                                            ],
                                            "internalType":"struct CronosMatrix.TPlanInfo",
                                            "name":"o_planInfo",
                                            "type":"tuple"
                                        },
                                        {
                                            "components":[
                                            {
                                                "internalType":"uint256[5]",
                                                "name":"count",
                                                "type":"uint256[5]"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"dividends",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"totalEarned",
                                                "type":"uint256"
                                            }
                                            ],
                                            "internalType":"struct CronosMatrix.TRefInfo",
                                            "name":"o_refInfo",
                                            "type":"tuple"
                                        },
                                        {
                                            "components":[
                                            {
                                                "internalType":"uint256",
                                                "name":"claimable",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"checkpoint",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"totalDepositCount",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"totalInvested",
                                                "type":"uint256"
                                            },
                                            {
                                                "internalType":"uint256",
                                                "name":"totalClaimed",
                                                "type":"uint256"
                                            }
                                            ],
                                            "internalType":"struct CronosMatrix.TUserInfo",
                                            "name":"o_userInfo",
                                            "type":"tuple"
                                        },
                                        {
                                            "internalType":"uint256",
                                            "name":"o_timestamp",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        {
                                            "internalType":"address",
                                            "name":"_referrer",
                                            "type":"address"
                                        },
                                        {
                                            "internalType":"uint8",
                                            "name":"_planIdx",
                                            "type":"uint8"
                                        }
                                    ],
                                    "name":"invest",
                                    "outputs":[
                                        
                                    ],
                                    "stateMutability":"payable",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"launch",
                                    "outputs":[
                                        
                                    ],
                                    "stateMutability":"nonpayable",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"stat_depositsReusedCounter",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"stat_maxDepositArrayLength",
                                    "outputs":[
                                        {
                                            "internalType":"uint256",
                                            "name":"",
                                            "type":"uint256"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"stat_maxDepositArrayUser",
                                    "outputs":[
                                        {
                                            "internalType":"address",
                                            "name":"",
                                            "type":"address"
                                        }
                                    ],
                                    "stateMutability":"view",
                                    "type":"function"
                                },
                                {
                                    "inputs":[
                                        
                                    ],
                                    "name":"withdraw",
                                    "outputs":[
                                        
                                    ],
                                    "stateMutability":"nonpayable",
                                    "type":"function"
                                },
                                {
                                    "stateMutability":"payable",
                                    "type":"receive"
                                }
                                ],
                        title: "cronos",
                        zeroCount: 2,
                        tokenId: "crypto-com-chain",
                        unit: "CRONOS",
                        min: "5",
                        max: "6000"
                    }
                },
                b = function(e) {
                    var t = new Date(1e3 * e).toLocaleTimeString([], {
                            hourCycle: "h23"
                        }),
                        a = new Date(1e3 * e).toLocaleDateString().split("/"),
                        n = [a[2], ("0" + a[0]).slice(-2), ("0" + a[1]).slice(-2)].join("/");
                    return "".concat(n, " - ").concat(t)
                },
                f = function(e) {
                    var t = 6e4,
                        a = 36e5,
                        n = 864e5,
                        s = 2592e6,
                        i = 31536e6,
                        r = new Date - 1e3 * e;
                    return r < t ? Math.round(r / 1e3) + "s ago" : r < a ? Math.round(r / t) + "m ago" : r < n ? Math.round(r / a) + "h ago" : r < s ? "~ " + Math.round(r / n) + "D ago" : r < i ? "~ " + Math.round(r / s) + "M ago" : "~ " + Math.round(r / i) + "Y ago"
                },
                h = function(e) {
                    if ("string" === typeof e) return e.substring(0, 5) + "..." + e.substring(e.length - 5, e.length)
                },
                O = function(e, t) {
                    t && (e = Number(e).toFixed(t));
                    var a = e.toString().split(".");
                    return a[0] = a[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"), a.join(".")
                },
                _ = a(115),
                x = a(41),
                y = a(22),
                v = a(193),
                N = a.n(v),
                g = a(192),
                w = a.n(g),
                T = a(196),
                k = (a.p, a.p, a.p, a.p, {
                    walletconnect: {
                        package: T.a,
                        options: {
                            rpc: {
                                //1: "https://polygon-rpc.com/",
                                //56: "https://polygon-rpc.com/",
                                //137: "https://polygon-rpc.com/",
                                80001: "https://matic-mumbai.chainstacklabs.com"
                            }
                        }
                    }
                }),
                S = {
                    walletconnect: {
                        package: T.a,
                        options: {
                            rpc: {
                                //1: "https://polygon-rpc.com/",
                                //56: "https://polygon-rpc.com/",
                                //137: "https://polygon-rpc.com/",
                                80001: "https://matic-mumbai.chainstacklabs.com"
                            }
                        }
                    }
                },
                C = a(358),
                I = a(26),
                A = function(e) {
                    var t = e.receipt;
                    e.type;
                    return Object(m.jsxs)(m.Fragment, {
                        children: [Object(m.jsx)("p", {
                            className: "rec big",
                            children: Object(m.jsx)("span", {
                                className: "key",
                                children: "Your Receipt"
                            })
                        }), Object(m.jsxs)("p", {
                            className: " rec small",
                            children: [Object(m.jsx)("span", {
                                className: "key",
                                children: "TransactionHash: "
                            }), " ", Object(m.jsx)("a", {
                                href: "https://cronos.org/explorer/tx/".concat(t.blockHash),
                                target: "_blank",
                                children: Object(m.jsxs)("b", {
                                    className: "value",
                                    children: [" ", h(t.blockHash)]
                                })
                            })]
                        }), Object(m.jsxs)("p", {
                            className: "rec small",
                            children: [Object(m.jsx)("span", {
                                className: "key",
                                children: "Status:"
                            }), " ", Object(m.jsx)("b", {
                                className: "value",
                                children: t.status && "Success"
                            })]
                        }), Object(m.jsxs)("p", {
                            className: "rec small",
                            children: [Object(m.jsx)("span", {
                                className: "key",
                                children: "BlockNumber:"
                            }), " ", Object(m.jsx)("b", {
                                className: "value",
                                children: t.blockNumber
                            })]
                        }), Object(m.jsx)("br", {}), Object(m.jsx)("a", {
                            className: "receipt-btn",
                            href: "https://cronos.org/explorer/tx/".concat(t.transactionHash),
                            target: "_blank",
                            children: "Show More"
                        })]
                    })
                },
                D = Object(n.createContext)({
                    notification: null,
                    showModal: function() {},
                    hideModal: function() {}
                }),
                E = {
                    matic: "0000.000"
                },
                B = function(e) {
                    var t, a, s = Object(n.useState)(),
                        i = Object(c.a)(s, 2),
                        o = i[0],
                        u = i[1],
                        p = Object(n.useState)(),
                        f = Object(c.a)(p, 2),
                        v = f[0],
                        g = f[1],
                        T = Object(n.useState)(),
                        B = Object(c.a)(T, 2),
                        R = (B[0], B[1]),
                        M = Object(n.useState)(),
                        L = Object(c.a)(M, 2),
                        W = L[0],
                        P = L[1],
                        U = Object(n.useState)(),
                        F = Object(c.a)(U, 2),
                        H = F[0],
                        z = F[1],
                        V = Object(n.useState)(0),
                        Y = Object(c.a)(V, 2),
                        G = Y[0],
                        K = Y[1],
                        J = Object(n.useState)(0),
                        q = Object(c.a)(J, 2),
                        X = q[0],
                        $ = q[1],
                        Q = Object(n.useState)(0),
                        Z = Object(c.a)(Q, 2),
                        ee = Z[0],
                        te = Z[1],
                        ae = Object(n.useState)(0),
                        ne = Object(c.a)(ae, 2),
                        se = ne[0],
                        ie = ne[1],
                        re = Object(n.useState)(0),
                        ce = Object(c.a)(re, 2),
                        oe = ce[0],
                        le = ce[1],
                        ue = Object(n.useState)(0),
                        de = Object(c.a)(ue, 2),
                        me = de[0],
                        pe = de[1],
                        je = Object(n.useState)(0),
                        be = Object(c.a)(je, 2),
                        fe = be[0],
                        he = be[1],
                        Oe = Object(n.useState)([]),
                        _e = Object(c.a)(Oe, 2),
                        xe = _e[0],
                        ye = _e[1],
                        ve = Object(n.useState)(0),
                        Ne = Object(c.a)(ve, 2),
                        ge = Ne[0],
                        we = Ne[1],
                        Te = Object(n.useState)({
                            dividends: 0,
                            mActive: 0,
                            rActive: 0
                        }),
                        ke = Object(c.a)(Te, 2),
                        Se = ke[0],
                        Ce = ke[1],
                        Ie = Object(n.useState)({
                            count: [0, 0, 0, 0, 0],
                            dividends: 0,
                            totalEarn: 0
                        }),
                        Ae = Object(c.a)(Ie, 2),
                        De = Ae[0],
                        Ee = Ae[1],
                        Be = Object(n.useState)({
                            claimable: 0,
                            checkpoint: 0,
                            totalInvested: 0,
                            totalDepositCount: 0,
                            totalClaimed: 0
                        }),
                        Re = Object(c.a)(Be, 2),
                        Me = Re[0],
                        Le = Re[1],
                        We = Object(n.useState)(0),
                        Pe = Object(c.a)(We, 2),
                        Ue = Pe[0],
                        Fe = Pe[1],
                        He = Object(n.useState)(E),
                        ze = Object(c.a)(He, 2),
                        Ve = ze[0],
                        Ye = (ze[1], Object(n.useState)(E)),
                        Ge = Object(c.a)(Ye, 2),
                        Ke = Ge[0],
                        Je = Ge[1],
                        qe = Object(n.useState)(E),
                        Xe = Object(c.a)(qe, 2),
                        $e = Xe[0],
                        Qe = Xe[1],
                        Ze = Object(n.useState)([]),
                        et = Object(c.a)(Ze, 2),
                        tt = et[0],
                        at = et[1],
                        nt = Object(n.useState)([]),
                        st = Object(c.a)(nt, 2),
                        it = st[0],
                        rt = st[1],
                        ct = Object(n.useState)(["0.000", "0.000"]),
                        ot = Object(c.a)(ct, 2),
                        lt = ot[0],
                        ut = (ot[1], Object(n.useState)([])),
                        dt = Object(c.a)(ut, 2),
                        mt = dt[0],
                        pt = dt[1],
                        jt = Object(n.useState)(["0", "0"]),
                        bt = Object(c.a)(jt, 2),
                        ft = bt[0],
                        ht = (bt[1], Object(n.useState)()),
                        Ot = Object(c.a)(ht, 2),
                        _t = Ot[0],
                        xt = (Ot[1], Object(n.useState)()),
                        yt = Object(c.a)(xt, 2),
                        vt = yt[0],
                        Nt = yt[1],
                        gt = Object(n.useState)(),
                        wt = Object(c.a)(gt, 2),
                        Tt = (wt[0], wt[1]),
                        kt = Object(n.useState)(!0),
                        St = Object(c.a)(kt, 2),
                        Ct = St[0],
                        It = St[1],
                        At = Object(n.useState)("Enable to Stake"),
                        Dt = Object(c.a)(At, 2),
                        Et = Dt[0],
                        Bt = (Dt[1], Object(n.useState)()),
                        Rt = Object(c.a)(Bt, 2),
                        Mt = (Rt[0], Rt[1], Object(n.useState)(!1)),
                        Lt = Object(c.a)(Mt, 2),
                        Wt = Lt[0],
                        Pt = Lt[1],
                        Ut = Object(n.useState)(!1),
                        Ft = Object(c.a)(Ut, 2),
                        Ht = Ft[0],
                        zt = Ft[1],
                        Vt = Object(n.useState)(!1),
                        Yt = Object(c.a)(Vt, 2),
                        Gt = Yt[0],
                        Kt = Yt[1],
                        Jt = Object(n.useState)(),
                        qt = Object(c.a)(Jt, 2),
                        Xt = qt[0],
                        $t = qt[1],
                        Qt = Object(n.useState)(E),
                        Zt = Object(c.a)(Qt, 2),
                        ea = Zt[0],
                        ta = (Zt[1], Object(n.useState)(E)),
                        aa = Object(c.a)(ta, 2),
                        na = aa[0],
                        sa = (aa[1], Object(n.useState)("0.000")),
                        ia = Object(c.a)(sa, 2),
                        ra = ia[0],
                        ca = (ia[1], Object(n.useState)([])),
                        oa = Object(c.a)(ca, 2),
                        la = oa[0],
                        ua = (oa[1], Object(n.useState)(localStorage.getItem("activeNetwork") ? j[localStorage.getItem("activeNetwork")] : j.matic)),
                        da = Object(c.a)(ua, 2),
                        ma = da[0],
                        pa = da[1],
                        ja = [{
                            chainId: "0x19",
                            chainName: "Cronos Mainnet",
                            rpcUrls: ["https://evm-cronos.crypto.org"],
                            nativeCurrency: {
                                name: "CRO",
                                symbol: "CRO",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://cronoscan.com/"]
                        }];
                        /*
                        ja = [{
                            chainId: "0x89",
                            chainName: "Matic Mainnet",
                            rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
                            nativeCurrency: {
                                name: "MATIC",
                                symbol: "MATIC",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://mumbai.polygonscan.com"]
                        }];
                        
                        ja = [{
                            chainId: "0x89",
                            chainName: "Matic Mainnet",
                            rpcUrls: ["testina/"],
                            nativeCurrency: {
                                name: "MATIC",
                                symbol: "MATIC",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://polygonscan.com/"]
                        }]; */
                    Object(n.useEffect)((function() {
                        localStorage.getItem("activeNetwork") ? (pa(j[localStorage.getItem("activeNetwork")]), xa(localStorage.getItem("activeNetwork"))) : xa(ma.title), localStorage.getItem("account") && "undefined" !== localStorage.getItem("account") ? Oa("wallet") : Oa("noWallet")
                    }), []), Object(n.useEffect)((function() {
                        o && H && !0 === v.currentProvider.isMetaMask && Ct && (It(!1), o.on("accountsChanged", (function(e) {
                            pt([]), $t("0"), ba(W, v, e[0])
                        }))), o && H && !0 === v.currentProvider.isMetaMask && Ct && (It(!1), o.on("networkChanged", (function(e) {
                            z(""), Qe(""), Je(E), Oa()
                        })))
                    }));
                    var ba = function() {
                            var e = Object(r.a)(l.a.mark((function e(t, a, n) {
                                var s, i, c, o, u, d, m, p;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return localStorage.getItem("activeNetwork") ? (s = j[localStorage.getItem("activeNetwork")], xa(localStorage.getItem("activeNetwork"))) : s = ma, e.next = 3, t.methods.getProjectInfo().call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, n) {
                                                    var s, i, r, c, o, u;
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || (s = Number(n[0]), te(s), i = Number(a.utils.fromWei(n[1])), $(i), r = Number(a.utils.fromWei(n[2])), ie(r), c = Number(a.utils.fromWei(n[3])), le(c), o = Number(a.utils.fromWei(n[4])), pe(o), u = Number(a.utils.fromWei(n[5])), he(u));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 3:
                                            return e.next = 5, t.methods.getDepositHistory().call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || ye(a[0]);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 5:
                                            if (!n) {
                                                e.next = 54;
                                                break
                                            }
                                            return i = 0, e.next = 9, t.methods.getUserInfo(n).call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, n) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || (i = n[2][2], Le((function(e) {
                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                        claimable: Number(a.utils.fromWei(n[2][0])),
                                                                        checkpoint: n[2][1],
                                                                        totalDepositCount: n[2][2],
                                                                        totalInvested: Number(a.utils.fromWei(n[2][3])),
                                                                        totalClaimed: Number(a.utils.fromWei(n[2][4]))
                                                                    })
                                                                })), Ee((function(e) {
                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                        count: n[1][0],
                                                                        dividends: Number(a.utils.fromWei(n[1][1])),
                                                                        totalEarn: Number(a.utils.fromWei(n[1][2]))
                                                                    })
                                                                })), Ce((function(e) {
                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                        dividends: Number(a.utils.fromWei(n[0][0])),
                                                                        mActive: n[0][1],
                                                                        rActive: n[0][2]
                                                                    })
                                                                })));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 9:
                                            c = [], u = (o = i < 5 ? 1 : i) < 5 ? o : Math.ceil(o / 5), d = 1;
                                        case 13:
                                            if (!(d <= u)) {
                                                e.next = 45;
                                                break
                                            }
                                            return m = [0, 0, 0, 0, 0], e.next = 17, t.methods.getUserDepositHistory(n, d).call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || (m = a);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 17:
                                            if (0 != m.o_deposits[0].amount) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.abrupt("break", 45);
                                        case 21:
                                            c.push(m.o_deposits[0]);
                                        case 22:
                                            if (0 != m.o_deposits[1].amount) {
                                                e.next = 26;
                                                break
                                            }
                                            return e.abrupt("break", 45);
                                        case 26:
                                            c.push(m.o_deposits[1]);
                                        case 27:
                                            if (0 != m.o_deposits[2].amount) {
                                                e.next = 31;
                                                break
                                            }
                                            return e.abrupt("break", 45);
                                        case 31:
                                            c.push(m.o_deposits[2]);
                                        case 32:
                                            if (0 != m.o_deposits[3].amount) {
                                                e.next = 36;
                                                break
                                            }
                                            return e.abrupt("break", 45);
                                        case 36:
                                            c.push(m.o_deposits[3]);
                                        case 37:
                                            if (0 != m.o_deposits[4].amount) {
                                                e.next = 41;
                                                break
                                            }
                                            return e.abrupt("break", 45);
                                        case 41:
                                            c.push(m.o_deposits[4]);
                                        case 42:
                                            d++, e.next = 13;
                                            break;
                                        case 45:
                                            return rt(c), e.next = 48, a.eth.getBalance(n);
                                        case 48:
                                            p = e.sent, Je((function(e) {
                                                return Object(y.a)(Object(y.a)({}, e), {}, Object(x.a)({}, "cronos", a.utils.fromWei(p)))
                                            })), z(n), Ta(t, n, a, s.title), e.next = 56;
                                            break;
                                        case 54:
                                            localStorage.removeItem("account"), z("");
                                        case 56:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, a, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        fa = function() {
                            var e = Object(r.a)(l.a.mark((function e(a, n, s) {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t = setInterval(Object(r.a)(l.a.mark((function e() {
                                                var t, s, i, c, o, u, d, m, p;
                                                return l.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (v || n, !v) {
                                                                e.next = 7;
                                                                break
                                                            }
                                                            return e.next = 4, v.eth.getAccounts();
                                                        case 4:
                                                            t = e.sent, e.next = 10;
                                                            break;
                                                        case 7:
                                                            return e.next = 9, n.eth.getAccounts();
                                                        case 9:
                                                            t = e.sent;
                                                        case 10:
                                                            return s = new n.eth.Contract(j.matic.ABI, j.matic.contract), e.next = 13, s.methods.getProjectInfo().call(function() {
                                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                                    var s, i, r, c, o, u;
                                                                    return l.a.wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                t || (s = Number(a[0]), te(s), i = Number(n.utils.fromWei(a[1])), $(i), r = Number(n.utils.fromWei(a[2])), ie(r), c = Number(n.utils.fromWei(a[3])), le(c), o = Number(n.utils.fromWei(a[4])), pe(o), u = Number(n.utils.fromWei(a[5])), he(u));
                                                                            case 1:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function(t, a) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }());
                                                        case 13:
                                                            return e.next = 15, s.methods.getDepositHistory().call(function() {
                                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                                    return l.a.wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                t || ye(a[0]);
                                                                            case 1:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function(t, a) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }());
                                                        case 15:
                                                            if (!t[0]) {
                                                                e.next = 62;
                                                                break
                                                            }
                                                            return i = 0, e.next = 19, s.methods.getUserInfo(t[0]).call(function() {
                                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                                    return l.a.wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                t || (i = a[2][2], Le((function(e) {
                                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                                        claimable: Number(n.utils.fromWei(a[2][0])),
                                                                                        checkpoint: a[2][1],
                                                                                        totalDepositCount: a[2][2],
                                                                                        totalInvested: Number(n.utils.fromWei(a[2][3])),
                                                                                        totalClaimed: Number(n.utils.fromWei(a[2][4]))
                                                                                    })
                                                                                })), Ee((function(e) {
                                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                                        count: a[1][0],
                                                                                        dividends: Number(n.utils.fromWei(a[1][1])),
                                                                                        totalEarn: Number(n.utils.fromWei(a[1][2]))
                                                                                    })
                                                                                })), Ce((function(e) {
                                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                                        dividends: Number(n.utils.fromWei(a[0][0])),
                                                                                        mActive: a[0][1],
                                                                                        rActive: a[0][2]
                                                                                    })
                                                                                })));
                                                                            case 1:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function(t, a) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }());
                                                        case 19:
                                                            c = [], u = (o = i < 5 ? 1 : i) < 5 ? o : Math.ceil(o / 5), d = 1;
                                                        case 23:
                                                            if (!(d <= u)) {
                                                                e.next = 55;
                                                                break
                                                            }
                                                            return m = [0, 0, 0, 0, 0], e.next = 27, a.methods.getUserDepositHistory(t, d).call(function() {
                                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                                    return l.a.wrap((function(e) {
                                                                        for (;;) switch (e.prev = e.next) {
                                                                            case 0:
                                                                                t || (m = a);
                                                                            case 1:
                                                                            case "end":
                                                                                return e.stop()
                                                                        }
                                                                    }), e)
                                                                })));
                                                                return function(t, a) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }());
                                                        case 27:
                                                            if (0 != m.o_deposits[0].amount) {
                                                                e.next = 31;
                                                                break
                                                            }
                                                            return e.abrupt("break", 55);
                                                        case 31:
                                                            c.push(m.o_deposits[0]);
                                                        case 32:
                                                            if (0 != m.o_deposits[1].amount) {
                                                                e.next = 36;
                                                                break
                                                            }
                                                            return e.abrupt("break", 55);
                                                        case 36:
                                                            c.push(m.o_deposits[1]);
                                                        case 37:
                                                            if (0 != m.o_deposits[2].amount) {
                                                                e.next = 41;
                                                                break
                                                            }
                                                            return e.abrupt("break", 55);
                                                        case 41:
                                                            c.push(m.o_deposits[2]);
                                                        case 42:
                                                            if (0 != m.o_deposits[3].amount) {
                                                                e.next = 46;
                                                                break
                                                            }
                                                            return e.abrupt("break", 55);
                                                        case 46:
                                                            c.push(m.o_deposits[3]);
                                                        case 47:
                                                            if (0 != m.o_deposits[4].amount) {
                                                                e.next = 51;
                                                                break
                                                            }
                                                            return e.abrupt("break", 55);
                                                        case 51:
                                                            c.push(m.o_deposits[4]);
                                                        case 52:
                                                            d++, e.next = 23;
                                                            break;
                                                        case 55:
                                                            return rt(c), e.next = 58, n.eth.getBalance(t[0]);
                                                        case 58:
                                                            p = e.sent, Je((function(e) {
                                                                return Object(y.a)(Object(y.a)({}, e), {}, Object(x.a)({}, "cronos", n.utils.fromWei(p)))
                                                            })), e.next = 64;
                                                            break;
                                                        case 62:
                                                            Qe(E), Je(E);
                                                        case 64:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), 5e3), Nt(t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, a, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ha = function(e) {
                            a = setInterval((function() {
                                xa(e)
                            }), 15e3), Tt(a)
                        },
                        Oa = function() {
                            var e = Object(r.a)(l.a.mark((function e(t) {
                                var a, n, s, i, r, c, d;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("noWallet" !== t) {
                                                e.next = 9;
                                                break
                                            }
                                            a = new N.a("https://evm-cronos.crypto.org"), n = new a.eth.Contract(ma.ABI, ma.contract), P(n), g(a), u(o), _a(n, a, null), e.next = 25;
                                            break;
                                        case 9:
                                            // return a = new N.a("https://evm-cronos.crypto.org"), n = new a.eth.Contract(ma.ABI, ma.contract), P(n), g(a), u(o), _a(n, a, null), e.next = 25;
                                            // TODO
                                            return s = new w.a({
                                                cacheProvider: !0,
                                                providerOptions: C.isMobile ? S : k,
                                                theme: "dark"
                                            }), e.next = 12, s.connect(s).then((function(e) {
                                                i = e
                                            })).catch((function(e) {
                                                i = "https://evm-cronos.crypto.org"
                                            }));
                                            
                                        case 12:
                                            return r = new N.a(i), e.next = 15, r.eth.getAccounts();
                                        case 15:
                                            c = e.sent, window.ethereum && !0 === r.currentProvider.isMetaMask && window.ethereum.request({
                                                method: "wallet_addEthereumChain",
                                                params: ja
                                            }), d = new r.eth.Contract(ma.ABI, ma.contract), P(d), c.length > 0 && z(c[0]), g(r), u(i), R(s), _a(d, r, c[0]), localStorage.setItem("account", c[0]);
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        _a = function() {
                            var e = Object(r.a)(l.a.mark((function e(t, a, n) {
                                var s, i, c, o, u, m, p, j;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.a.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(ma.tokenId, "&vs_currencies=usd"));
                                        case 2:
                                            if (s = e.sent, K(s.data[ma.tokenId].usd), !t) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 7, t.methods.getProjectInfo().call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, n) {
                                                    var s, i, r, c, o, u;
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || (s = Number(n[0]), te(s), i = Number(a.utils.fromWei(n[1])), $(i), r = Number(a.utils.fromWei(n[2])), ie(r), c = Number(a.utils.fromWei(n[3])), le(c), o = Number(a.utils.fromWei(n[4])), pe(o), u = Number(a.utils.fromWei(n[5])), he(u));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 7:
                                            return e.next = 9, t.methods.getDepositHistory().call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || ye(a[0]);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 9:
                                            return e.next = 11, t.methods.TIME_STEP().call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || we(a);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 11:
                                            if (!n) {
                                                e.next = 56;
                                                break
                                            }
                                            return i = 0, e.next = 15, t.methods.getUserInfo(n).call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, n) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || (i = n[2][2], Le((function(e) {
                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                        claimable: Number(a.utils.fromWei(n[2][0])),
                                                                        checkpoint: n[2][1],
                                                                        totalDepositCount: n[2][2],
                                                                        totalInvested: Number(a.utils.fromWei(n[2][3])),
                                                                        totalClaimed: Number(a.utils.fromWei(n[2][4]))
                                                                    })
                                                                })), Ee((function(e) {
                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                        count: n[1][0],
                                                                        dividends: Number(a.utils.fromWei(n[1][1])),
                                                                        totalEarn: Number(a.utils.fromWei(n[1][2]))
                                                                    })
                                                                })), Fe(n[1][0].reduce((function(e, t) {
                                                                    return +e + +t
                                                                }))), Ce((function(e) {
                                                                    return Object(y.a)(Object(y.a)({}, e), {}, {
                                                                        dividends: Number(a.utils.fromWei(n[0][0])),
                                                                        mActive: n[0][1],
                                                                        rActive: n[0][2]
                                                                    })
                                                                })));
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 15:
                                            c = [], u = (o = i < 5 ? 1 : i) < 5 ? o : Math.ceil(o / 5), m = 1;
                                        case 19:
                                            if (!(m <= u)) {
                                                e.next = 51;
                                                break
                                            }
                                            return p = [0, 0, 0, 0, 0], e.next = 23, t.methods.getUserDepositHistory(n, m).call(function() {
                                                var e = Object(r.a)(l.a.mark((function e(t, a) {
                                                    return l.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                t || (p = a);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 23:
                                            if (0 != p.o_deposits[0].amount) {
                                                e.next = 27;
                                                break
                                            }
                                            return e.abrupt("break", 51);
                                        case 27:
                                            c.push(p.o_deposits[0]);
                                        case 28:
                                            if (0 != p.o_deposits[1].amount) {
                                                e.next = 32;
                                                break
                                            }
                                            return e.abrupt("break", 51);
                                        case 32:
                                            c.push(p.o_deposits[1]);
                                        case 33:
                                            if (0 != p.o_deposits[2].amount) {
                                                e.next = 37;
                                                break
                                            }
                                            return e.abrupt("break", 51);
                                        case 37:
                                            c.push(p.o_deposits[2]);
                                        case 38:
                                            if (0 != p.o_deposits[3].amount) {
                                                e.next = 42;
                                                break
                                            }
                                            return e.abrupt("break", 51);
                                        case 42:
                                            c.push(p.o_deposits[3]);
                                        case 43:
                                            if (0 != p.o_deposits[4].amount) {
                                                e.next = 47;
                                                break
                                            }
                                            return e.abrupt("break", 51);
                                        case 47:
                                            c.push(p.o_deposits[4]);
                                        case 48:
                                            m++, e.next = 19;
                                            break;
                                        case 51:
                                            return rt(c), e.next = 54, a.eth.getBalance(n);
                                        case 54:
                                            j = e.sent, Je((function(e) {
                                                return Object(y.a)(Object(y.a)({}, e), {}, Object(x.a)({}, "cronos", a.utils.fromWei(j)))
                                            }));
                                        case 56:
                                            W || ha(ma.title), n && t && fa(t, a, ma.title);
                                        case 58:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, a, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        xa = function() {
                            var e = Object(r.a)(l.a.mark((function e(t) {
                                var a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if(!(0).data == undefined) // TODO
                                                a = [7, 90], 0, at([]), (0).data.map((function(e) {
                                                    at((function(t) {
                                                        return [].concat(Object(_.a)(t), [{
                                                            txHash: h(e.txId),
                                                            time: b(e.time),
                                                            user: h(e.user),
                                                            amount: O(e.amount / Math.pow(10, 18), j.matic.zeroCount),
                                                            plan: a[e.plan],
                                                            txUrl: "https://cronos.org/explorer/testnet3/tx/".concat(e.txId)
                                                        }])
                                                    }))
                                                }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ya = function() {
                            var e = Object(r.a)(l.a.mark((function e(t, a, n) {
                                var s, i;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!H) {
                                                e.next = 7;
                                                break
                                            }
                                            return s = localStorage.getItem("baseRef") ? localStorage.getItem("baseRef") : H, i = new v.eth.Contract(ma.ABI, ma.contract), e.next = 5, i.methods.invest(s, t).send({
                                                from: H,
                                                value: v.utils.toWei(a.toString())
                                            }, (function(e, t) {
                                                e || Pt(!0)
                                            })).on("receipt", (function(e) {
                                                Pt(!1), ba(W, v, H), I.b.success(Object(m.jsx)(A, {
                                                    receipt: e,
                                                    type: "invest"
                                                }), {
                                                    position: "bottom-right"
                                                })
                                            })).catch((function(e) {
                                                I.b.error("Transaction Rejected", {
                                                    position: "bottom-right"
                                                }), Pt(!1)
                                            }));
                                        case 5:
                                            e.next = 8;
                                            break;
                                        case 7:
                                            I.b.error("Connect to your wallet", {
                                                position: "bottom-right"
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, a, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        va = function() {
                            var e = Object(r.a)(l.a.mark((function e(t) {
                                var a;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = new v.eth.Contract(ma.ABI, ma.contract), e.next = 3, a.methods.reinvest(t).send({
                                                from: H
                                            }, (function(e, t) {
                                                e || Kt(!0)
                                            })).on("receipt", (function(e) {
                                                return Kt(!1), I.b.success("Reinvest Successfully", {
                                                    position: "bottom-right"
                                                }), ba(a, v, H), "done"
                                            })).catch((function(e) {
                                                return I.b.error("Transaction Failed", {
                                                    position: "bottom-right"
                                                }), Kt(!1), "done"
                                            }));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Na = function() {
                            var e = Object(r.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!H) {
                                                e.next = 6;
                                                break
                                            }
                                            return t = new v.eth.Contract(ma.ABI, ma.contract), e.next = 4, t.methods.withdraw().send({
                                                from: H
                                            }, (function(e, t) {
                                                e || zt(!0)
                                            })).on("receipt", (function(e) {
                                                zt(!1), ba(t, v, H), I.b.success(Object(m.jsx)(A, {
                                                    receipt: e,
                                                    type: "withdrawn"
                                                }), {
                                                    position: "bottom-right"
                                                })
                                            })).catch((function(e) {
                                                I.b.error("Transaction Rejected", {
                                                    position: "bottom-right"
                                                }), zt(!1)
                                            }));
                                        case 4:
                                            e.next = 7;
                                            break;
                                        case 6:
                                            I.b.error("Connect to your wallet", {
                                                position: "bottom-right"
                                            });
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ga = function() {
                            var e = Object(r.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!H) {
                                                e.next = 7;
                                                break
                                            }
                                            return t = new v.eth.Contract(ma.ABI, ma.contract), zt(!0), e.next = 5, t.methods.claim().send({
                                                from: H
                                            }, (function(e, t) {
                                                e || zt(!0)
                                            })).on("receipt", (function(e) {
                                                zt(!1), ba(t, v, H), I.b.success(Object(m.jsx)(A, {
                                                    receipt: e,
                                                    type: "withdrawn"
                                                }), {
                                                    position: "bottom-right"
                                                })
                                            })).catch((function(e) {
                                                I.b.error("Transaction Rejected", {
                                                    position: "bottom-right"
                                                }), zt(!1)
                                            }));
                                        case 5:
                                            e.next = 8;
                                            break;
                                        case 7:
                                            I.b.error("Connect to your wallet", {
                                                position: "bottom-right"
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        wa = function() {
                            var e = Object(r.a)(l.a.mark((function e() {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            z(null), localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER"), localStorage.removeItem("walletconnect"), localStorage.removeItem("account"), u(null), pt([]), clearInterval(vt);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        Ta = function() {
                            var e = Object(r.a)(l.a.mark((function e(t, a, n, s) {
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, a, n, s) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ka = {
                            provider: o,
                            web3Instance: v,
                            Contract: W,
                            account: H,
                            usdPrice: G,
                            totalDeposit: X,
                            depositCount: ee,
                            totalRef: se,
                            totalClaimed: oe,
                            insurancePool: me,
                            insurancePoolTriggerBalance: fe,
                            userInfo: Me,
                            userRefInfo: De,
                            userPlanInfo: Se,
                            handleClaim: ga,
                            lastDepositsGlobal: xe,
                            lastUserDeposits: it,
                            timeStep: ge,
                            referralCount: Ue,
                            totalRefEarn: Ve,
                            walletBalance: Ke,
                            harvestValue: $e,
                            lastDeposits: tt,
                            historyTotalInfo: lt,
                            userTransactions: mt,
                            userInvitedInfo: ft,
                            userTotalDeposits: _t,
                            activeNetwork: ma,
                            shibaBtnText: Et,
                            handleConnectToWallet: Oa,
                            handleDisconnectWallet: wa,
                            handleInvest: ya,
                            handleWithdraw: Na,
                            handleGetHistoryInfo: Ta,
                            pending: Wt,
                            reInvest: va,
                            changeUserCheckPoint: function() {
                                $t(0)
                            },
                            userCheckPoint: Xt,
                            withdrawPending: Ht,
                            reInvestPending: Gt,
                            totalSeed: ea,
                            contractBalance: na,
                            userTotalSeed: ra,
                            userSeeds: la
                        };
                    return Object(m.jsx)(D.Provider, {
                        value: ka,
                        children: e.children
                    })
                },
                R = D,
                M = a(359),
                L = a.p + "static/media/black-spin.0f24faa9.svg",
                W = a(195),
                P = ["20", "18.4", "17.1", "16.1", "15.2", "14.5", "14.0", "13.5", "13.0", "13.6", "13.3", "12.0", "11.7", "11.5", "11.3", "11.1", "10.9", "10.7", "10.6", "10.4", "10.3", "10.2", "10.1", "10.0"],
                U = ["140.0", "146.9", "153.8", "160.7", "167.6", "174.5", "181.4", "188.3", "195.2", "202.1", "209.0", "215.9", "222.8", "229.7", "236.6", "243.5", "250.4", "257.3", "264.2", "271.1", "278.0", "284.9", "291.8", "298.7"];
            var F = function() {
                    var e = Object(n.useContext)(R),
                        t = e.handleConnectToWallet,
                        a = e.handleClaim,
                        s = e.account,
                        i = e.handleDisconnectWallet,
                        o = e.walletBalance,
                        u = e.activeNetwork,
                        p = e.usdPrice,
                        _ = e.totalDeposit,
                        x = e.depositCount,
                        y = e.totalRef,
                        v = e.totalClaimed,
                        N = e.insurancePool,
                        g = e.insurancePoolTriggerBalance,
                        w = e.userInfo,
                        T = e.userRefInfo,
                        k = e.userPlanInfo,
                        S = e.withdrawPending,
                        C = e.handleInvest,
                        A = e.pending,
                        D = e.lastDepositsGlobal,
                        E = e.lastUserDeposits,
                        B = e.timeStep,
                        F = e.referralCount,
                        H = Object(n.useState)(),
                        z = Object(c.a)(H, 2),
                        V = z[0],
                        Y = z[1],
                        G = Object(n.useState)(15),
                        K = Object(c.a)(G, 2),
                        J = K[0],
                        q = K[1],
                        X = Object(n.useState)(15),
                        $ = Object(c.a)(X, 2),
                        Q = $[0],
                        Z = $[1],
                        ee = Object(n.useState)(j.matic.min),
                        te = Object(c.a)(ee, 2),
                        ae = te[0],
                        ne = te[1],
                        se = Object(n.useState)(!1),
                        ie = Object(c.a)(se, 2),
                        re = (ie[0], ie[1]),
                        ce = function() {
                            var e = Object(r.a)(l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.a.get("/config.json");
                                        case 2:
                                            t = e.sent, Y(t.data.urls);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(n.useEffect)((function() {
                        ce()
                    }), []), Object(n.useEffect)((function() {
                        Z(Number(J) + 7)
                    }), [J]);
                    var oe = function() {
                        var e = Object(r.a)(l.a.mark((function e(t) {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.preventDefault(), s ? ae >= +j.matic.min ? C(J, ae) : I.b.error("Min amount is " + j.matic.min) : I.b.error("Connect to your wallet", {
                                            position: "bottom-right"
                                        });
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(m.jsxs)(m.Fragment, {
                        children: [Object(m.jsx)("div", {
                            className: "modal",
                            id: "exampleModalCenter",
                            role: "dialog",
                            "aria-labelledby": "exampleModalCenterTitle",
                            "aria-hidden": "true",
                            children: Object(m.jsx)("div", {
                                className: "modal-dialog modal-dialog-centered",
                                role: "document",
                                children: Object(m.jsxs)("div", {
                                    className: "modal-content",
                                    children: [Object(m.jsxs)("div", {
                                        className: "modal-header",
                                        children: [Object(m.jsx)("h5", {
                                            className: "modal-title",
                                            id: "exampleModalLongTitle",
                                            children: "Modal title"
                                        }), Object(m.jsx)("button", {
                                            type: "button",
                                            className: "close",
                                            "data-dismiss": "modal",
                                            "aria-label": "Close",
                                            children: Object(m.jsx)("span", {
                                                "aria-hidden": "true",
                                                children: "\xd7"
                                            })
                                        })]
                                    }), Object(m.jsx)("div", {
                                        className: "modal-body",
                                        children: Object(m.jsx)("div", {
                                            className: "deposit-history__content",
                                            id: "depositHistoryLog",
                                            children: E && E.map((function(e, t) {
                                                return Object(m.jsxs)("div", {
                                                    className: "deposit-history__row",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "deposit-history__item item-deposit-history",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "item-deposit-history__name",
                                                            children: "Amount"
                                                        }), Object(m.jsxs)("div", {
                                                            className: "item-deposit-history__value",
                                                            children: [O(e.amount / 1e18, j.matic.zeroCount), " ", j.matic.unit]
                                                        })]
                                                    }), Object(m.jsxs)("div", {
                                                        className: "deposit-history__item item-deposit-history",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "item-deposit-history__name",
                                                            children: "Plan"
                                                        }), Object(m.jsxs)("div", {
                                                            className: "item-deposit-history__value",
                                                            children: [O(+e.planIdx + 7), " DAYS"]
                                                        })]
                                                    }), Object(m.jsxs)("div", {
                                                        className: "deposit-history__item item-deposit-history",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "item-deposit-history__name",
                                                            children: "Date"
                                                        }), Object(m.jsx)("div", {
                                                            className: "item-deposit-history__value",
                                                            children: b(+e.timeStart)
                                                        })]
                                                    })]
                                                }, t)
                                            }))
                                        })
                                    })]
                                })
                            })
                        }), Object(m.jsx)("div", {
                            id: "blurredPreloadOverlay",
                            style: {
                                display: "none"
                            },
                            children: Object(m.jsxs)("div", {
                                className: "cell notSelectableText",
                                children: [Object(m.jsx)("div", {
                                    className: "spinner"
                                }), Object(m.jsx)("br", {}), "LOADING", Object(m.jsx)("br", {}), Object(m.jsx)("small", {
                                    id: "mainLoadingProgress",
                                    children: "fetching history"
                                })]
                            })
                        }), Object(m.jsx)("div", {
                            id: "overlayDialog",
                            className: "modal fade",
                            tabIndex: -1,
                            role: "dialog",
                            style: {
                                display: "none"
                            },
                            "aria-hidden": "true",
                            children: Object(m.jsx)("div", {
                                className: "modal-dialog modal-dialog-centered",
                                role: "document",
                                children: Object(m.jsxs)("div", {
                                    className: "modal-content",
                                    children: [Object(m.jsx)("div", {
                                        className: "modal-header",
                                        children: Object(m.jsx)("h5", {
                                            className: "modal-title",
                                            children: "Welcome to BNBFire!"
                                        })
                                    }), Object(m.jsx)("div", {
                                        className: "modal-body",
                                        style: {
                                            textAlign: "left"
                                        },
                                        children: Object(m.jsxs)("div", {
                                            className: "welcomePopupText",
                                            children: [Object(m.jsx)("b", {
                                                children: "Let us introduce the main Project advantages"
                                            }), Object(m.jsx)("br", {}), Object(m.jsx)("br", {}), "Generous and flexible financial model: From 10% up to 20% Daily ROI depending on the chosen Plan: you can Invest today and start Claiming your rewards immediately!", Object(m.jsx)("br", {}), Object(m.jsx)("br", {}), "Standalone Insurance contract that automatically balances the Project and protects our Users: the project is Reliable and your investments are Safe!", Object(m.jsx)("br", {}), Object(m.jsx)("br", {}), "Smart Referral Program with 5 Levels, named referral links and 24-hour referral bound: the algorithm makes sure you will benefit from the people you invite and their referrals as well!", Object(m.jsx)("br", {}), Object(m.jsx)("br", {}), "We have also successfully passed the Solidikey security audit: everything has been checked and tested: the Project is fair, transparent and now proudly certified!", Object(m.jsx)("br", {}), Object(m.jsx)("br", {}), "Please feel free to join our community, participate and ask any questions!"]
                                        })
                                    })]
                                })
                            })
                        }), Object(m.jsxs)("div", {
                            id: "mainContentWrapper",
                            className: "wrapper",
                            style: {
                                opacity: 0
                            },
                            children: [Object(m.jsx)("header", {
                                className: "header",
                                children: Object(m.jsxs)("div", {
                                    className: "header__wrapper",
                                    children: [Object(m.jsxs)("a", {
                                        className: "header__logo logo-header",
                                        children: [Object(m.jsx)("div", {
                                            className: "logo-header__image",
                                            children: Object(m.jsx)("picture", {
                                                children: Object(m.jsx)("img", {
                                                    src: "/assets/img/icons/logo.png"
                                                })
                                            })
                                        }), Object(m.jsxs)("div", {
                                            className: "logo-header__text",
                                            children: [j.matic.unit, Object(m.jsx)("span", {
                                                children: "Matrix"
                                            })]
                                        })]
                                    }), Object(m.jsxs)("div", {
                                        className: "header__container",
                                        children: [Object(m.jsx)("div", {
                                            className: "headerCellCenter mobileHide",
                                            children: "" /* Object(m.jsx)("a", {
                                                href: "about.pdf",
                                                target: "_blank",
                                                className: "header__button button",
                                                children: "HOW TO START?"
                                            }) */
                                        }), Object(m.jsx)("div", {
                                            className: "headerCellRight",
                                            children: [Object(m.jsx)("a", {
                                                href: "about.pdf",
                                                target: "_blank",
                                                className: "header__button button",
                                                id: "connect_wallet_button",
                                                children: "HOW TO START?"
                                            }), s ? Object(m.jsxs)("button", {
                                                id: "b_wallet_disconnect",
                                                className: "header__button button",
                                                onClick: function() {
                                                    return i("wallet")
                                                },
                                                children: ["Online: ", h(s)]
                                            }) : Object(m.jsx)("button", {
                                                id: "b_wallet_connect",
                                                className: "header__button button",
                                                onClick: function() {
                                                    return t()
                                                },
                                                children: "Connect Wallet"
                                            })]
                                        })]
                                    })]
                                })
                            }), Object(m.jsxs)("main", {
                                className: "page",
                                children: [Object(m.jsx)("section", {
                                    className: "offer",
                                    children: Object(m.jsxs)("div", {
                                        className: "offer__container",
                                        children: [Object(m.jsxs)("div", {
                                            className: "offer__top",
                                            children: [Object(m.jsx)("a", {
                                                href: "about.pdf",
                                                target: "_blank",
                                                className: "header__button button",
                                                children: "HOW TO START?"
                                            }), s ? Object(m.jsxs)("button", {
                                                id: "b_wallet_disconnect",
                                                className: "header__button button",
                                                onClick: function() {
                                                    return i("wallet")
                                                },
                                                children: ["Online: ", h(s)]
                                            }) : Object(m.jsx)("button", {
                                                id: "b_wallet_connect",
                                                className: "header__button button",
                                                onClick: function() {
                                                    return t()
                                                },
                                                children: "Connect Wallet"
                                            })]
                                        }), Object(m.jsxs)("div", {
                                            className: "offer__content",
                                            children: [Object(m.jsxs)("div", {
                                                className: "offer__text text-offer",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "text-offer__title",
                                                    children: ["Stable & Profitable Yield Farming Dapp With", " ", Object(m.jsxs)("span", {
                                                        children: ["Automated Users Insurance"
                                                        /*
                                                        , Object(m.jsx)("div", {
                                                            id: "headerInsuranceHint",
                                                            className: "mobileHide",
                                                            children: "?"
                                                        })
                                                        */
                                                        ]
                                                    })]
                                                }), Object(m.jsxs)("div", {
                                                    id: "timer",
                                                    className: "col-md-9_timer",
                                                    children: [Object(m.jsxs)("time", {
                                                        id: "count-down",
                                                        datetime: "2014-01-06T00:00:00"

                                                    })]
                                                }), Object(m.jsxs)("div", {
                                                    className: "text-offer__subtitle",
                                                    children: [Object(m.jsxs)("div", {
                                                        children: ["From ", Object(m.jsx)("span", {
                                                            children: "10% up to 20%"
                                                        }), " Daily ROI"]
                                                    }), Object(m.jsx)("div", {
                                                        children: "5 Levels of Referral Rewards"
                                                    })]
                                                }), Object(m.jsxs)("div", {
                                                    className: "text-offer__buttons",
                                                    children: [Object(m.jsx)("a", {
                                                        href: "#anchor_yourAccount",
                                                        className: "text-offer__button button",
                                                        children: "Deposit"
                                                    }), Object(m.jsx)("a", {
                                                        href: V && V.telegram,
                                                        target: "_blank",
                                                        className: "text-offer__button button-blue",
                                                        rel: "noreferrer",
                                                        children: "Telegram"
                                                    }), Object(m.jsx)("a", {
                                                        href: V && V.audit,
                                                        target: "_blank",
                                                        className: "text-offer__button button-blue",
                                                        rel: "noreferrer",
                                                        children: "Audit"
                                                    }), Object(m.jsx)("a", {
                                                        href: "https://cronoscan.com/address/0x273349465c08017694a33673c67ef1c3baeef7c3",
                                                        target: "_blank",
                                                        className: "text-offer__button button-blue",
                                                        rel: "noreferrer",
                                                        children: "Contract"
                                                    })]
                                                })]
                                            }), Object(m.jsx)("div", {
                                                className: "offer__image",
                                                children: Object(m.jsxs)("picture", {
                                                    children: [Object(m.jsx)("source", {
                                                        srcSet: "/assets/img/mainScreenImg.webp",
                                                        type: "image/webp"
                                                    }), Object(m.jsx)("img", {
                                                        src: "/assets/img/mainScreenImg.png"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                }), Object(m.jsx)("section", {
                                    className: "totals",
                                    children: Object(m.jsx)("div", {
                                        className: "totals__container",
                                        children: Object(m.jsxs)("ul", {
                                            className: "totals__list",
                                            children: [Object(m.jsxs)("li", {
                                                className: "totals__object",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "totals__item item-totals glowing",
                                                    id: "TOTAL_STACKED_VOLUME",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-totals__title",
                                                        children: "Total Staked Volume"
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__BNB _BNB BNB",
                                                        children: O(_, j.matic.zeroCount)
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__USD _USD USD",
                                                        children: O(_ * p, 2)
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__bg",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/totalsBg/01.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/totalsBg/01.png"
                                                            })]
                                                        })
                                                    })]
                                                }), Object(m.jsxs)("div", {
                                                    className: "totals__text",
                                                    children: ["AVG", " ", Object(m.jsx)("span", {
                                                        id: "AVG_DEPOSIT",
                                                        children: O(_ / x, j.matic.zeroCount)
                                                    }), " ", j.matic.unit, " in", " ", Object(m.jsx)("span", {
                                                        id: "TOTAL_DEPOSITS",
                                                        children: O(x)
                                                    }), " ", "Deposits"]
                                                })]
                                            }), Object(m.jsxs)("li", {
                                                className: "totals__object",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "totals__item item-totals glowing",
                                                    id: "INSURANCE_POOL",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "item-totals__title",
                                                        children: ["Insurance Pool", Object(m.jsx)("div", {
                                                            id: "headerInsuranceHintTotals",
                                                            children: "?"
                                                        })]
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__BNB _BNB BNB",
                                                        children: O(N, j.matic.zeroCount)
                                                    }), Object(m.jsxs)("div", {
                                                        className: "item-totals__USD _USD USD",
                                                        children: [" ", O(N * p, 2)]
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__bg",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/totalsBg/01.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/totalsBg/012.png"
                                                            })]
                                                        })
                                                    })]
                                                }), Object(m.jsxs)("div", {
                                                    className: "totals__text",
                                                    children: ["TRIGGER BALANCE:", " ", Object(m.jsx)("span", {
                                                        id: "TRIGGER_BALANCE",
                                                        children: O(g, j.matic.zeroCount)
                                                    }), " ", j.matic.unit]
                                                })]
                                            }), Object(m.jsxs)("li", {
                                                className: "totals__object",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "totals__item item-totals glowing",
                                                    id: "TOTAL_CLAIMED",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-totals__title",
                                                        children: "Total Claimed Rewards"
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__BNB _BNB BNB",
                                                        children: O(v, j.matic.zeroCount)
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__USD _USD USD",
                                                        children: O(v * p, 2)
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__bg",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/totalsBg/01.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/totalsBg/03.png"
                                                            })]
                                                        })
                                                    })]
                                                }), Object(m.jsxs)("div", {
                                                    className: "totals__text",
                                                    children: ["REFERRAL REWARDS:", " ", Object(m.jsx)("span", {
                                                        id: "EARNED_REFERRAL_REWARDS",
                                                        children: O(y, j.matic.zeroCount)
                                                    }), " ", j.matic.unit]
                                                })]
                                            })]
                                        })
                                    })
                                }), Object(m.jsx)("section", {
                                    className: "trade-offer mobileHide",
                                    children: Object(m.jsxs)("div", {
                                        className: "trade-offer__container",
                                        children: [Object(m.jsxs)("div", {
                                            className: "trade-offer__title",
                                            children: [Object(m.jsx)("span", {
                                                children: "The Best Way"
                                            }), " to Earn ", j.matic.unit]
                                        }), Object(m.jsxs)("ul", {
                                            className: "trade-offer__list",
                                            children: [Object(m.jsxs)("li", {
                                                className: "trade-offer__item item-trade-offer",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-trade-offer__image",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/icons/tradeOffer/01.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/icons/tradeOffer/01.png"
                                                            })]
                                                        })
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-trade-offer__title",
                                                        children: "Audited smartcontract"
                                                    })]
                                                }), Object(m.jsx)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: Object(m.jsx)("div", {
                                                        className: "item-trade-offer__text",
                                                        children: "Tested and verified by Solidikey: fair, stable and reliable Project you can trust to"
                                                    })
                                                })]
                                            }), Object(m.jsxs)("li", {
                                                className: "trade-offer__item item-trade-offer",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-trade-offer__image",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/icons/tradeOffer/02.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/icons/tradeOffer/02.png"
                                                            })]
                                                        })
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-trade-offer__title",
                                                        children: "Income start from 10% per day"
                                                    })]
                                                }), Object(m.jsx)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: Object(m.jsx)("div", {
                                                        className: "item-trade-offer__text",
                                                        children: "Flexible architecture will be profitable for any investor: just choose your plan and Claim the profits!"
                                                    })
                                                })]
                                            }), Object(m.jsxs)("li", {
                                                className: "trade-offer__item item-trade-offer",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-trade-offer__image",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/icons/tradeOffer/03.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/icons/tradeOffer/03.png"
                                                            })]
                                                        })
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-trade-offer__title",
                                                        children: "Anti-Whale Features"
                                                    })]
                                                }), Object(m.jsx)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: Object(m.jsxs)("div", {
                                                        className: "item-trade-offer__text",
                                                        children: ["Generosity is balanced by two simple rules: max 4 Claims per day, max ", j.matic.max, " ", Object(m.jsx)("small", {
                                                            children: j.matic.unit
                                                        }), " at once"]
                                                    })
                                                })]
                                            }), Object(m.jsxs)("li", {
                                                className: "trade-offer__item item-trade-offer",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-trade-offer__image",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/icons/tradeOffer/04.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/icons/tradeOffer/04.png"
                                                            })]
                                                        })
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-trade-offer__title",
                                                        children: "5-level referral program"
                                                    })]
                                                }), Object(m.jsx)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: Object(m.jsx)("div", {
                                                        className: "item-trade-offer__text",
                                                        children: "Earn when people invited by you make deposits. You also benefit from their Referrals!"
                                                    })
                                                })]
                                            }), Object(m.jsxs)("li", {
                                                className: "trade-offer__item item-trade-offer",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-trade-offer__image",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/icons/tradeOffer/05.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/icons/tradeOffer/05.png"
                                                            })]
                                                        })
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-trade-offer__title",
                                                        children: "24/7 Support help"
                                                    })]
                                                }), Object(m.jsx)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: Object(m.jsx)("div", {
                                                        className: "item-trade-offer__text",
                                                        children: "Feel free to ask any question in our group any time, we will be glad to help you!"
                                                    })
                                                })]
                                            }), Object(m.jsxs)("li", {
                                                className: "trade-offer__item item-trade-offer",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-trade-offer__image",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/icons/tradeOffer/06.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/icons/tradeOffer/06.png"
                                                            })]
                                                        })
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-trade-offer__title",
                                                        children: "Automatic user insurance"
                                                    })]
                                                }), Object(m.jsx)("div", {
                                                    className: "item-trade-offer__row",
                                                    children: Object(m.jsx)("div", {
                                                        className: "item-trade-offer__text",
                                                        children: "A special standalone contract guards the Project against balance draining and keeps it alive"
                                                    })
                                                })]
                                            })]
                                        }), Object(m.jsxs)("div", {
                                            className: "trade-offer__start start-trade-offer mobileHide",
                                            children: [Object(m.jsxs)("div", {
                                                className: "start-trade-offer__text",
                                                children: [Object(m.jsx)("p", {
                                                    children: "You stake"
                                                }), Object(m.jsx)("p", {
                                                    children: "We pay"
                                                })]
                                            }), Object(m.jsx)("a", {
                                                href: "about.pdf",
                                                target: "_blank",
                                                className: "start-trade-offer__button button-cursor",
                                                children: "HOW TO START?"
                                            })]
                                        })]
                                    })
                                }), Object(m.jsx)("section", {
                                    className: "totals totals_second",
                                    children: Object(m.jsx)("div", {
                                        className: "totals__container mobileHide",
                                        children: Object(m.jsxs)("ul", {

                                            className: "totals__list",
                                            children: [Object(m.jsx)("li", {
                                                className: "totals__object",
                                                children: Object(m.jsxs)("div", {
                                                    className: "totals__item item-totals",
                                                    id: "TOTAL_STACKED_VOLUME",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-totals__title",
                                                        children: "Total Staked Volume"
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__BNB _BNB BNB",
                                                        children: O(_, j.matic.zeroCount)
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__USD _USD USD",
                                                        children: O(_ * p, 2)
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__bg",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                srcSet: "/assets/img/totalsBg/01.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/totalsBg/01.png"
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }), Object(m.jsx)("li", {
                                                className: "totals__object",
                                                children: Object(m.jsxs)("div", {
                                                    className: "totals__item item-totals",
                                                    id: "TOTAL_CLAIMED",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-totals__title",
                                                        children: "Total Claimed Rewards"
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__BNB _BNB BNB",
                                                        children: O(v, j.matic.zeroCount)
                                                    }), Object(m.jsxs)("div", {
                                                        className: "item-totals__USD _USD USD",
                                                        children: [" ", O(v * p, 2)]
                                                    }), Object(m.jsx)("div", {
                                                        className: "item-totals__bg",
                                                        children: Object(m.jsxs)("picture", {
                                                            children: [Object(m.jsx)("source", {
                                                                className: "item-totals__bg__filtered",
                                                                srcSet: "/assets/img/totalsBg/01.webp",
                                                                type: "image/webp"
                                                            }), Object(m.jsx)("img", {
                                                                src: "/assets/img/totalsBg/02.png"
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }), Object(m.jsx)("li", {
                                                className: "totals__object totals__object_restrictions",
                                                children: Object(m.jsxs)("div", {
                                                    className: "totals__item item-totals item-totals_restrictions",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "item-totals__title",
                                                        children: "Restrictions"
                                                    }), Object(m.jsxs)("div", {
                                                        className: "item-totals__text",
                                                        children: [Object(m.jsxs)("p", {
                                                            children: ["Claim: ", Object(m.jsx)("span", {
                                                                children: "every 6 hours"
                                                            })]
                                                        }), Object(m.jsxs)("p", {
                                                            children: ["Max Claim: ", j.matic.max, " ", Object(m.jsx)("span", {
                                                                children: j.matic.unit
                                                            })]
                                                        }), Object(m.jsx)("p", {
                                                            children: "Excess dividends are sent back to the user's account available for the next withdrawal."
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                }), Object(m.jsxs)("section", {
                                    className: "main",
                                    children: [Object(m.jsx)("div", {
                                        id: "anchor_yourAccount"
                                    }), Object(m.jsxs)("div", {
                                        className: "main__container",
                                        children: [Object(m.jsxs)("div", {
                                            className: "main__column",
                                            id: "main__column__left",
                                            children: [Object(m.jsxs)("div", {
                                                className: "main__your-account your-account",
                                                children: [Object(m.jsx)("div", {
                                                    className: "your-account__title",
                                                    children: "YOUR ACCOUNT"
                                                }), Object(m.jsxs)("div", {
                                                    className: "your-account__row",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "your-account__item item-your-account",
                                                        id: "USER_BALANCE",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "item-your-account__title",
                                                            children: "WALLET BALANCE"
                                                        }), Object(m.jsx)("div", {
                                                            className: "item-your-account__BNB _BNB BNB",
                                                            children: O(o.matic, u.zeroCount)
                                                        }), Object(m.jsx)("div", {
                                                            className: "item-your-account__USD _USD USD",
                                                            children: O(o.matic * p, 2)
                                                        })]
                                                    }), Object(m.jsxs)("div", {
                                                        className: "your-account__item item-your-account",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "item-your-account__title",
                                                            children: "ACTUAL INFO"
                                                        }), Object(m.jsxs)("div", {
                                                            className: "item-your-account__table table-item-your-account",
                                                            id: "USER_ACTUAL",
                                                            children: [Object(m.jsxs)("div", {
                                                                className: "table-item-your-account__row",
                                                                children: [Object(m.jsx)("div", {
                                                                    className: "table-item-your-account__cell-name",
                                                                    children: "Active Plans:"
                                                                }), Object(m.jsx)("div", {
                                                                    className: "table-item-your-account__cell-value ACTIVE",
                                                                    children: O(+k.mActive)
                                                                })]
                                                            }), Object(m.jsxs)("div", {
                                                                className: "table-item-your-account__row",
                                                                children: [Object(m.jsx)("div", {
                                                                    className: "table-item-your-account__cell-name",
                                                                    children: "Referrals count:"
                                                                }), Object(m.jsx)("div", {
                                                                    className: "table-item-your-account__cell-value REFCOUNT",
                                                                    children: O(F)
                                                                })]
                                                            }), Object(m.jsxs)("div", {
                                                                className: "table-item-your-account__row",
                                                                children: [Object(m.jsx)("div", {
                                                                    className: "table-item-your-account__cell-name",
                                                                    children: "Claim Cooldown:"
                                                                }), Object(m.jsx)("div", {
                                                                    className: "table-item-your-account__cell-value COOLDOWN",
                                                                    children: 1e3 * (Number(w.checkpoint) + B / 4) > +new Date ? Object(m.jsx)(M.a, {
                                                                        date: 1e3 * (Number(w.checkpoint) + B / 4),
                                                                        renderer: function(e) {
                                                                            e.days;
                                                                            var t = e.hours,
                                                                                a = e.minutes,
                                                                                n = e.seconds;
                                                                            return e.completed ? (re(!1), "") : (re(!0), Object(m.jsx)("div", {
                                                                                id: "clockdiv",
                                                                                children: Object(m.jsxs)("div", {
                                                                                    children: [Object(m.jsx)("span", {
                                                                                        children: String(t).padStart(2, "0")
                                                                                    }), ":", Object(m.jsx)("span", {
                                                                                        children: String(a).padStart(2, "0")
                                                                                    }), ":", Object(m.jsx)("span", {
                                                                                        children: String(n).padStart(2, "0")
                                                                                    })]
                                                                                })
                                                                            }))
                                                                        }
                                                                    }) : s ? Object(m.jsx)(m.Fragment, {
                                                                        children: "Claimable"
                                                                    }) : Object(m.jsx)(m.Fragment, {
                                                                        children: "No Data"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })]
                                                }), Object(m.jsxs)("div", {
                                                    className: "your-account__row",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "your-account__item item-your-account",
                                                        id: "USER_CLAIMABLE",
                                                        children: [Object(m.jsxs)("div", {
                                                            className: "item-your-account__title",
                                                            children: [j.matic.unit, " TO CLAIM"]
                                                        }), Object(m.jsx)("div", {
                                                            className: "item-your-account__BNB _BNB BNB",
                                                            children: O(w.claimable, j.matic.zeroCount)
                                                        }), Object(m.jsx)("div", {
                                                            className: "item-your-account__USD _USD USD",
                                                            children: O(w.claimable * p, 2)
                                                        }), Object(m.jsx)("button", {
                                                            className: "item-your-account__button button offlineDisabled",
                                                            id: "b_claim",
                                                            disabled: !!(S || 1e3 * (Number(w.checkpoint) + B / 4) > +new Date) || "",
                                                            onClick: function() {
                                                                return a()
                                                            },
                                                            children: S ? Object(m.jsxs)(m.Fragment, {
                                                                children: [Object(m.jsx)("img", {
                                                                    src: L,
                                                                    className: "farm-spinner"
                                                                }), " ", "Pending..."]
                                                            }) : Object(m.jsx)(m.Fragment, {
                                                                children: "CLAIM"
                                                            })
                                                        })]
                                                    }), Object(m.jsxs)("div", {
                                                        className: "your-account__item item-your-account",
                                                        id: "USER_TOTAL_INVESTED",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "item-your-account__title",
                                                            children: "TOTAL STAKED"
                                                        }), Object(m.jsx)("div", {
                                                            className: "item-your-account__BNB _BNB BNB",
                                                            children: O(w.totalInvested, j.matic.zeroCount)
                                                        }), Object(m.jsx)("div", {
                                                            className: "item-your-account__USD _USD USD",
                                                            children: O(w.totalInvested * p, 2)
                                                        }), Object(m.jsx)("button", {
                                                            className: "item-your-account__button button offlineDisabled",
                                                            id: "b_userHistory",
                                                            "data-numback": 1,
                                                            type: "button",
                                                            "data-toggle": "modal",
                                                            "data-target": "#exampleModalCenter",
                                                            children: "HISTORY"
                                                        })]
                                                    })]
                                                })]
                                            }), Object(m.jsxs)("div", {
                                                className: "main__stake stake",
                                                id: "panel_stake",
                                                children: [Object(m.jsxs)("div", {
                                                    className: "stake__title",
                                                    children: ["STAKE ", j.matic.unit]
                                                }), Object(m.jsx)("div", {
                                                    className: "stake__subtitle",
                                                    children: "Stable & Profitable Yield Farming"
                                                }), Object(m.jsxs)("div", {
                                                    className: "stake__deposit-period deposit-period-stake",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "deposit-period-stake__title",
                                                        children: "Deposit period(days):"
                                                    }), Object(m.jsxs)("div", {
                                                        className: "deposit-period-stake__range range",
                                                        children: [Object(m.jsxs)("div", {
                                                            className: "range__wrap",
                                                            children: [Object(m.jsx)("div", {
                                                                className: "range__value",
                                                                id: "rangeValue",
                                                                style: {
                                                                    left: "calc(".concat(J / 23 * 100, "% - 5px)")
                                                                },
                                                                children: Object(m.jsx)("span", {
                                                                    children: Q
                                                                })
                                                            }), Object(m.jsx)("div", {
                                                                className: "range__value-lower",
                                                                id: "rangeValueLower",
                                                                style: {
                                                                    width: "calc(".concat(J / 23 * 100, "% - 5px)")
                                                                }
                                                            }), Object(m.jsx)("input", {
                                                                type: "range",
                                                                min: 0,
                                                                max: 23,
                                                                step: 1,
                                                                className: "range__input _more",
                                                                id: "range",
                                                                value: J,
                                                                onChange: function(e) {
                                                                    return q(e.target.value)
                                                                }
                                                            })]
                                                        }), Object(m.jsx)("span", {
                                                            className: "range__min",
                                                            children: "7"
                                                        }), Object(m.jsx)("span", {
                                                            className: "range__max",
                                                            children: "30"
                                                        })]
                                                    }), Object(m.jsxs)("div", {
                                                        className: "deposit-period-stake__info",
                                                        children: [Object(m.jsxs)("div", {
                                                            className: "deposit-period-stake__daily-ROI",
                                                            children: [Object(m.jsx)("div", {
                                                                className: "deposit-period-stake__daily-ROI-text",
                                                                children: "Daily ROI:"
                                                            }), Object(m.jsxs)("div", {
                                                                className: "deposit-period-stake__daily-ROI-value",
                                                                id: "ROI",
                                                                children: [P[Q - 7], "%"]
                                                            })]
                                                        }), Object(m.jsxs)("div", {
                                                            className: "deposit-period-stake__total-profit",
                                                            children: [Object(m.jsx)("div", {
                                                                className: "deposit-period-stake__total-profit-text",
                                                                children: "Total Profit:"
                                                            }), Object(m.jsxs)("div", {
                                                                className: "deposit-period-stake__total-profit-value",
                                                                id: "total-profit",
                                                                children: [U[Q - 7], "%"]
                                                            })]
                                                        }), Object(m.jsxs)("div", {
                                                            className: "deposit-period-stake__earnings",
                                                            children: [Object(m.jsx)("div", {
                                                                className: "deposit-period-stake__earnings-text",
                                                                children: "In"
                                                            }), Object(m.jsx)("div", {
                                                                className: "deposit-period-stake__earnings-days",
                                                                id: "day",
                                                                children: Q
                                                            }), Object(m.jsx)("div", {
                                                                className: "deposit-period-stake__earnings-text",
                                                                children: "days you will earn:"
                                                            }), Object(m.jsx)("div", {
                                                                className: "deposit-period-stake__earnings-value",
                                                                id: "earnings",
                                                                children: O(ae * Number(U[Q - 7]) / 100, 4)
                                                            })]
                                                        })]
                                                    })]
                                                }), Object(m.jsxs)("div", {
                                                    className: "stake__deposit-amount deposit-amount-stake",
                                                    children: [Object(m.jsx)("div", {
                                                        className: "deposit-amount-stake__title",
                                                        children: "Deposit amount:"
                                                    }), Object(m.jsxs)("div", {
                                                        className: "deposit-amount-stake__body",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "deposit-amount-stake__input input-deposit-amount-stake",
                                                            children: [Object(m.jsx)("input", {
                                                                autoComplete: "off",
                                                                type: "text",
                                                                name: "form[]",
                                                                id: "stakeAmount",
                                                                value: ae,
                                                                onChange: function(e) {
                                                                    return ne(e.target.value)
                                                                }
                                                            })]
                                                        }), Object(m.jsx)("button", {
                                                            className: "deposit-amount-stake__button button offlineDisabled",
                                                            id: "b_stake",
                                                            disabled: !!A || "",
                                                            onClick: oe,
                                                            children: A ? Object(m.jsx)(m.Fragment, {
                                                                children: Object(m.jsx)("img", {
                                                                    src: L,
                                                                    className: "spinner"
                                                                })
                                                            }) : Object(m.jsx)(m.Fragment, {
                                                                children: "STAKE"
                                                            })
                                                        }), Object(m.jsxs)("div", {
                                                            className: "deposit-amount-stake__text",
                                                            children: ["Minimum:", Object(m.jsx)("span", {
                                                                children: j.matic.min
                                                            }), Object(m.jsx)("span", {
                                                                children: j.matic.unit
                                                            })]
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        }), Object(m.jsx)("div", {
                                            className: "main__column",
                                            id: "main__column__right",
                                            children: Object(m.jsxs)("div", {
                                                className: "main__deposit-history deposit-history",
                                                children: [Object(m.jsx)("div", {
                                                    className: "deposit-history__title",
                                                    children: "DEPOSIT HISTORY"
                                                }), Object(m.jsxs)("div", {
                                                    className: "deposit-history__subtitle",
                                                    children: ["Total deposit count:", " ", Object(m.jsx)("span", {
                                                        id: "depositHistoryCount",
                                                        children: O(x)
                                                    })]
                                                }), Object(m.jsx)("div", {
                                                    className: "deposit-history__content",
                                                    id: "depositHistoryLog",
                                                    children: D && D.slice(0).reverse().map((function(e, t) {
                                                        return Number(e.amount) > 0 && Object(m.jsxs)("div", {
                                                            className: "deposit-history__row",
                                                            children: [Object(m.jsxs)("div", {
                                                                className: "deposit-history__item item-deposit-history",
                                                                children: [Object(m.jsx)("div", {
                                                                    className: "item-deposit-history__name",
                                                                    children: "Invested"
                                                                }), Object(m.jsx)("div", {
                                                                    className: "item-deposit-history__value",
                                                                    children: f(e.timestamp)
                                                                })]
                                                            }), Object(m.jsxs)("div", {
                                                                className: "deposit-history__item item-deposit-history",
                                                                children: [Object(m.jsx)("div", {
                                                                    className: "item-deposit-history__name",
                                                                    children: "Plan"
                                                                }), Object(m.jsxs)("div", {
                                                                    className: "item-deposit-history__value",
                                                                    children: [O(e.duration / B), " ", "DAYS"]
                                                                })]
                                                            }), Object(m.jsxs)("div", {
                                                                className: "deposit-history__item item-deposit-history",
                                                                children: [Object(m.jsx)("div", {
                                                                    className: "item-deposit-history__name",
                                                                    children: "Amount"
                                                                }), Object(m.jsxs)("div", {
                                                                    className: "item-deposit-history__value",
                                                                    children: [O(e.amount / 1e18, j.matic.zeroCount), " ", j.matic.unit]
                                                                })]
                                                            })]
                                                        }, t)
                                                    }))
                                                })]
                                            })
                                        })]
                                    })]
                                }), Object(m.jsx)("section", {
                                    className: "referral",
                                    children: Object(m.jsxs)("div", {
                                        className: "referral__container",
                                        children: [Object(m.jsxs)("div", {
                                            className: "referral__program referral-program",
                                            id: "USER_TOTAL_REF_EARNED",
                                            children: [Object(m.jsx)("div", {
                                                className: "referral-program__title",
                                                children: "REFERRAL PROGRAM"
                                            }), Object(m.jsx)("div", {
                                                className: "referral-program__subtitle",
                                                children: "Stake atleast once to receive referral rewards!"
                                            }), Object(m.jsxs)("ul", {
                                                className: "referral-program__levels levels-referral-program",
                                                children: [Object(m.jsxs)("li", {
                                                    className: "levels-referral-program__item",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "levels-referral-program__info",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "levels-referral-program__title",
                                                            children: "Level 1"
                                                        }), Object(m.jsx)("div", {
                                                            className: "levels-referral-program__percent",
                                                            children: "7%"
                                                        })]
                                                    }), Object(m.jsx)("div", {
                                                        className: "levels-referral-program__referrals",
                                                        id: "refCount0",
                                                        children: O(T.count[0])
                                                    })]
                                                }), Object(m.jsxs)("li", {
                                                    className: "levels-referral-program__item",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "levels-referral-program__info levels-referral-program__info_30",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "levels-referral-program__title",
                                                            children: "Level 2"
                                                        }), Object(m.jsx)("div", {
                                                            className: "levels-referral-program__percent",
                                                            children: "3%"
                                                        })]
                                                    }), Object(m.jsx)("div", {
                                                        className: "levels-referral-program__referrals",
                                                        id: "refCount1",
                                                        children: O(T.count[1])
                                                    })]
                                                }), Object(m.jsxs)("li", {
                                                    className: "levels-referral-program__item",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "levels-referral-program__info levels-referral-program__info_20",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "levels-referral-program__title",
                                                            children: "Level 3"
                                                        }), Object(m.jsx)("div", {
                                                            className: "levels-referral-program__percent",
                                                            children: "2%"
                                                        })]
                                                    }), Object(m.jsx)("div", {
                                                        className: "levels-referral-program__referrals",
                                                        id: "refCount2",
                                                        children: O(T.count[2])
                                                    })]
                                                }), Object(m.jsxs)("li", {
                                                    className: "levels-referral-program__item",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "levels-referral-program__info levels-referral-program__info_10",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "levels-referral-program__title",
                                                            children: "Level 4"
                                                        }), Object(m.jsx)("div", {
                                                            className: "levels-referral-program__percent",
                                                            children: "1%"
                                                        })]
                                                    }), Object(m.jsx)("div", {
                                                        className: "levels-referral-program__referrals",
                                                        id: "refCount3",
                                                        children: O(T.count[3])
                                                    })]
                                                }), Object(m.jsxs)("li", {
                                                    className: "levels-referral-program__item",
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "levels-referral-program__info levels-referral-program__info_5",
                                                        children: [Object(m.jsx)("div", {
                                                            className: "levels-referral-program__title",
                                                            children: "Level 5"
                                                        }), Object(m.jsx)("div", {
                                                            className: "levels-referral-program__percent",
                                                            children: "0.5%"
                                                        })]
                                                    }), Object(m.jsx)("div", {
                                                        className: "levels-referral-program__referrals",
                                                        id: "refCount4",
                                                        children: O(T.count[4])
                                                    })]
                                                })]
                                            }), Object(m.jsx)("div", {
                                                className: "referral-program__subtitle",
                                                children: "TOTAL REWARDS"
                                            }), Object(m.jsx)("div", {
                                                className: "referral-program__BNB _BNB BNB",
                                                children: O(T.totalEarn, j.matic.zeroCount)
                                            }), Object(m.jsx)("div", {
                                                className: "referral-program__USD _USD USD",
                                                children: O(T.totalEarn * p, 2)
                                            }), Object(m.jsxs)("div", {
                                                className: "referral-program__referal-link referal-link-referral-program",
                                                children: [s && w.totalInvested > 0 ? Object(m.jsxs)(m.Fragment, {
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "referal-link-referral-program__title",
                                                        children: [Object(m.jsx)("br", {}), "Your referal link"]
                                                    }), Object(m.jsx)("small", {
                                                        children: "Note: reflink will not function until you make your first investment"
                                                    }), Object(m.jsx)("input", {
                                                        id: "referralLinkInput",
                                                        type: "text",
                                                        readOnly: !0,
                                                        placeholder: "https://".concat(window.location.host, "/?ref=").concat(s),
                                                        autoComplete: "off",
                                                        className: "referal-link-referral-program__link offlineDisabled",
                                                        disabled: ""
                                                    }), Object(m.jsx)(W.CopyToClipboard, {
                                                        text: "https://".concat(window.location.host, "/?ref=").concat(s),
                                                        onCopy: function() {
                                                            I.b.success("personal link Copied Successfully")
                                                        },
                                                        children: Object(m.jsx)("button", {
                                                            className: "referal-link-referral-program__button button",
                                                            id: "b_copyLink",
                                                            disabled: "",
                                                            children: "COPY"
                                                        })
                                                    })]
                                                }) : Object(m.jsxs)(m.Fragment, {
                                                    children: [Object(m.jsxs)("div", {
                                                        className: "referal-link-referral-program__title",
                                                        children: [Object(m.jsx)("br", {}), "Your referal link"]
                                                    }), Object(m.jsx)("small", {
                                                        children: "Note: reflink will not function until you make your first investment"
                                                    }), Object(m.jsx)("input", {
                                                        id: "referralLinkInput",
                                                        type: "text",
                                                        readOnly: !0,
                                                        placeholder: "You will get your ref link after investing",
                                                        autoComplete: "off",
                                                        className: "referal-link-referral-program__link offlineDisabled",
                                                        disabled: "disabled"
                                                    }), Object(m.jsx)(W.CopyToClipboard, {
                                                        text: "https://".concat(window.location.host),
                                                        onCopy: function() {
                                                            I.b.success("personal link Copied Successfully")
                                                        },
                                                        children: Object(m.jsx)("button", {
                                                            className: "referal-link-referral-program__button button offlineDisabled",
                                                            id: "b_copyLink",
                                                            disabled: "disabled",
                                                            children: "COPY"
                                                        })
                                                    })]
                                                }), Object(m.jsx)("br", {})]
                                            })]
                                        }), Object(m.jsx)("div", {
                                            className: "referral__system referral-system mobileHide",
                                            children: Object(m.jsxs)("ul", {
                                                className: "referral-system__steps",
                                                children: [Object(m.jsxs)("li", {
                                                    className: "referral-system__step",
                                                    children: [Object(m.jsx)("p", {
                                                        children: "Make a minimum deposit"
                                                    }), Object(m.jsx)("img", {
                                                        src: "/assets/img/icons/arrowRed.svg"
                                                    })]
                                                }), Object(m.jsxs)("li", {
                                                    className: "referral-system__step",
                                                    children: [Object(m.jsx)("p", {
                                                        children: "Get your referral link"
                                                    }), Object(m.jsx)("img", {
                                                        src: "/assets/img/icons/arrowBlue.svg"
                                                    })]
                                                }), Object(m.jsxs)("li", {
                                                    className: "referral-system__step",
                                                    children: [Object(m.jsx)("p", {
                                                        children: "Send it to your friends"
                                                    }), Object(m.jsx)("img", {
                                                        src: "/assets/img/icons/arrowRed.svg"
                                                    })]
                                                }), Object(m.jsx)("li", {
                                                    className: "referral-system__step",
                                                    children: Object(m.jsx)("p", {
                                                        children: "Enjoy your profit"
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                },
                H = function() {
                    return Object(n.useEffect)((function() {
                        if (window.location.href.includes("?ref=")) {
                            var e = window.location.href.split("?ref=")[1];
                            localStorage.setItem("baseRef", e)
                        }
                    }), []), Object(m.jsxs)(m.Fragment, {
                        children: [Object(m.jsx)(F, {}), Object(m.jsx)(p, {})]
                    })
                };
            a(820);
            i.a.render(Object(m.jsxs)(B, {
                children: [Object(m.jsx)(H, {}), Object(m.jsx)(I.a, {})]
            }), document.getElementById("root"))
        }
    },
    [
        [821, 1, 2]
    ]
]);
//# sourceMappingURL=main.a40c064e.chunk.js.map
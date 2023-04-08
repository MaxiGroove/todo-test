export const AppRoute = {
    TASKSLIST: '/',
    TASKSARCHIVE: '/tasks-archive',
    TASK: '/task/:id?',
    EMPLOYEESLIST: '/employees-list',
    EMPLOYEE: '/employee/:id?',
};



export const Tasks = [
    {
        id: '1',
        idEmpl: '1',
        employye: 'Люк',
        taskTitle: 'Ремонт',
        taskText: 'ремонт',
        archive: true,

    },
    {
        id: '2',
        idEmpl: '1',
        employye: 'Люк',
        taskTitle: 'Ремонт-2',
        taskText: 'ремонт-2',
        archive: false,

    },
    {
        id: '3',
        idEmpl: '1',
        employye: 'Люк',
        taskTitle: 'Сломать',
        taskText: 'Сломать',
        archive: false,

    },
    {
        id: '4',
        idEmpl: '1',
        employye: 'Люк',
        taskTitle: 'Разрушить',
        taskText: 'Разрушить',
        archive: true,

    },
    {
        id: '5',
        idEmpl: '1',
        employye: 'Люк',
        taskTitle: 'Починить',
        taskText: 'Починить',
        archive: false,

    },
    {
        id: '6',
        idEmpl: '4',
        employye: 'Малыш',
        taskTitle: 'Починить',
        taskText: 'Починить',
        archive: false,

    },
]

export const emplList = [
    {
       id: `1`,
       emplname: 'Ванька',
       birthday: '25.07.2357',
       photo : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBISEBAVFhUVFRUVEBUVFRAWFRUVFRUWFhYVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAP8AxQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIDBQUGBAQFBQEAAAABAAIRAwQSITEFQVFhcQYTIoGRBzJCobHBFFJi0SNy4fAkM4KS8TRTY7LCFf/EABoBAAIDAQEAAAAAAAAAAAAAAAACAQMEBQb/xAAyEQACAgECBAQFAwQDAQAAAAAAAQIRAxIhBDFBUROBkfAiYXGhscHR4RQyQlIjJPIF/9oADAMBAAIRAxEAPwDxVCEK8UEIQgBUJEsIAEKW4omm4tdEiMQBmDrhPMKFS1WzAEISqAESkIQEACAlQEAIr+xquCq081RhS0TDgUNWqFyR1Rce59WdkKn4nZjGuOZY5hPAyfpIXz92vtCx7suvqV7H7Gr/ALy3qUydMLm+YM/ZcX7Vtm4bitA3yOjhi+8eSwRdOL+qONqqPD5H0uD8v/L9TyIhNT6jYJSLoHbTEQlUxpBvvkz+RsT/AKjo3pmVKVgQJcJ4H0Kc+6PwgN6a/wC45qJ1Rx1cfUqHQD0KFCAHIQhQAu7n9kQhOdw4fX+49EAMWnsikAKlw73aIGH9VV+VNvlm4/yrPDfMyAAN8/2PVbG3QKLaVo0j+GMdcjfXeBI54Ww0eashs9Xb89PfYh9jHcSczmTmTxPFMTy3IHjPyj9/kkhVkiFKEqFICAJUAJ0IASEoCISoCxE5EJSeSkg9l9h9/FQM/MHN9GyPmAum9rNjiDHR7zXA9WwfofkvMfZbf91cNM+6R6SJXunbm07y0efykE9CQD9vRc3Kq1pdHZw86fgcRC/7Gpr6c/vpl6nynf08LyFVK2u09tgrO6rKoU8Tmt4kAnlvK3wepI7GCanjjJdiVn8Jgf8AG73P0t0xdTuVaizFJTr+vjqOI00aODRkB6KS390K6KTlXRFnQhr0oUSmuHyVCknV7EghCEgCpQhKpAlt6WLEZgMbiM78wA3qSR81E46zrvVyzqM8DHmGuqB1YwT4W5NHTN3+7ku22hTpU7bvnsY5zGzTMAkuJ8MHgXEFaceDXBu6r37+ewkp0zibah4XvMwwRpkXHcTu3BVMyeJJ9SVt3tI07c03RDXNwxq6s4FznOdvhuUc2qs7Zpo0WXD3AYwe6b8UmYceQHi9Essbr7slSM+prAOQyB6b/WT5pBpz3ff7JoUlQQY4ZHrv+apGoYlQlAQAkJ0K/ZbKq1RLWw38zjDf6+Svs2FTH+ZdMB3gRl6laIcNkkrS27ul6XVlTywTq/1/BggJwC137Gaf8u5pvO4e6frCoXVq+k6HtIP16HeoninDdr8NeqsmM1LkVkJQhVjm/wBja+G4bz/cL6gsni4tG8HsjzGX1C+T9i18FZp5r6Z9nt6H22H8h/8AaT9lhyqsu/Vfg5zqPHaXynBrzW/4bPCfaBaYXzHH7riw6JPI/PJex+1vZcPqwN8joRP3XjVYR6p+Fl8FdiP/AJTawvE+cG4+joiUjHwE6hb4szohtOStUYyW507IEqdVbCZCVqtgFQhCUB6RKlATAAC27a4ijQp1XnAahqYfysZLW8xLsRjkFk02SQOJWxRcypcUy/KnTDQcMA4aY48Z3q3Fs/fcHGyHapaa4Y90NaR3hzyLoLyAN4EN/wBKdt/aYqVmOonw02ju8tDkdCN0AeSh7sFlaqSCZAaHSXOL3SXcJAB9VmlPPI0ml19duQmnlZuHalB7HPfQa2u0HA5ohrnERiLdJEznwWGEoCUBVTm5cyUkuQQtrY9g2O9qZj4G8Y1J5LMt6WNzW8TH7/JbO1LwNaKbIGQH8rRoArsKjFPJLkvz/BXkttRj1K+0b9zifFlw/bgqljQFR0SAqtR4O/L+9VYtagDhwWPLkeSTk+ZqhFRjpWxbudjuaMQk8Mt3FSMruDe7r+Jgwkg6gHSCMwVuWG0J1iMhh1gc1U2hTbVumAGA9snlwVePNKD2299TH4snJrItlbsy9rbLFIY6ZlhMayWk6SeCyivS62yKdSm9jcg4d2QNzwcj5FecVqJY5zXatJDuoMLQs0crbSr5fsJw3ERyppc135hbuhzTwIX0J7Jr7EHNn3mNI6gEr54C9X9ke0sFRknIEjyjNZuJVaZdmZ+O+CeLN/rLf6PZ/k7v2o2IcwOj3mu9WwPofkvnDaFLDULeBK+rO3NtjtXH8pHo4wfqPRfNPa+z7qq5w3lLhenLKL67i434XH5Mf+yUl+H90Yz6wAgKFtYhRoWx5JNnVoc6pOqRIkS2AqEiFAEwCeAgBOUgLSyMq0w4WnnkeigayDB81I9yujsIxld/hDfM9Sq0KR5TWhVvcYITgE+EoCkgt7OhrnPPwMc7ziB8yFl1axcSScyrdxVw0sI1eRP8rd3r9E3ZdMEuJjIb1GaXwqK+vvyHxQuV+9v5IG0XRMZcT9k5srSG0IIJpteBpLTHQLZ2Y6ldnCLWCJJDXGDHJUGrw4vZM5+wrlpGvTquk21sasLWnetyGItIHwwPeneJxDyUlHtBQoODaVlRBG97Q53UuK7qyva19aPYW0i3DmxoIc0bjh4c0aFYngJS1NnKdmtod+9rgc3D+IP/ACNgH1bmOi5XtVSDbytG95Kt9m3GhcR8JeWHk9viB9JVXtX/ANZWP6vsEuFVk27HIji8Pi2ly0v7P2vIySut7B3hZVA5/suSWz2ZrYao6q3PHVBonj8ficPOPyPqdrRcW0HR7IPXT6hfO3b+0gkEaSD5SveexVfHaM/Tl9/3Xl3th2dD6jgNYI9MSwt7wl5GHPLV/TcT32fmr+zT9TxRIlcM05jZXQW7O4MQFL4U0jgigGAoSoUAWgFYFEthzm5DMTocxHzIUCu9+Q1pmS2InloPIk+iugl1FZXbxOu9McU99SQMhzO89VCUMKETmhIFbscIcHPEtb4iPzEe608iYnkoStgwuaeCGR4oDn8QXCQ3yBHmTwUACe9xcXOcZJMk8STJ+6GhM93sBWu25g8lp9m6QdjDuQj1Vd7JEFSbFcWPLT1Coyxrc0cNL/kVm1VtTuDfdwyR8MR9PNa/s6tMd4/DpgcJ3A4SJWaXFzXRwMKXshtataO/hUMRcYBdxIiNREzvVKbs6GSCr4V39aOi232LdRcyrSZjY4NxjxYmuadQQZE8t67XY2xW4m3JAa/AGw2WgNAiC2czG85qtsTbZrObTqUnU8YdLHZ4KjTEBwyIIgroaFQYSBuGasbaRjzTnFP4Um+vyZ4Pf1BSvLymNO+xs5QDp5OhVO1zf8TzNOkX8n4YcPkEyvezeVbgtECq80+DvH4T5ABUbuu6q9z3auMlTCHx6um5z8uP/suceW/q6/FX9SuGq1Y1MLw78uZUATK0xA36/sr6HatUfR3sn2j3lFzZ3NI+ai9rllipNdHwu+X/ACFy3sdvSKzGzqCD6L1DtlY99aVBGYEj1C5Ti9DXZnGjjlPgp4usJbeT1L7HyPd04e4c1CtntFbhlYwsYjNblvFM7GGeuCl3QIGQTxT3lMcZTVRYCEISgXg3NLUOcJG8U1XdBQKaU5EKCTZsNnU6zXOLyA3IERk1o+IHjBPmq9Wh4WMaDLn5A6mQMPIQCPMngobMkNeQCZhhAOuIzBG/JpHmrTrvBVLw2cMtbnEOIOfP4vktKcWlarv6/tsVuyjWZhOExLfejjv9NPJKArFpeFgghrhqA4TDvzA7s1EGpEl0JsIQyoGuaToTHqlLSFVvCIhLNfC0TCWmSaOlFfCwECTwmPmrOza11iBpUqbswRieyJHMkZLnNmX8ju3nP4Tx5Hmuk2XQsQWi4ZWeSc3Mc4Bo6BYUmmdqOTWrTPR9l7VqvcwXVg6m4nw1Kb6VSnPElrpHop9vbTFpRuajjHg8HNzsmgeZCp7MtGWgOC5c6gQO7D8JOe4Rr5LivadfvfcUqRkBrO8LebpazFzADvVXR50Y8jjFN/L73ZxlR09BkEyFIQkIWlRpUjnLZUiIhJhUkJrgooc67sHtcUK7XGfDmAIz3QvXLrti+pSfDGtAb4t5jzXz1b1iwyFv0r51YBjrljA4OLsRJhrRmSfdnksGfBO7g/qcjiuH4hTvDJpS5pfwr5fyY3aSv3lZ7xxygAfILFpHNT3lyC44ZjnE/IkKo1xGi0RqNLsdbDDRjUeyQ6q+dNExLPFEjh9UN2WAhE8kKKAuFAQnAKwgSEpHBOAShqYgkoAiCNxkddxSVXzA4TJ3kk6k71Yfk1Q21EvcB69FbodqK5iatm2Lb0i45CVfbax7xAU3eNpiMgOuahq1qbhBqnzA/ZbY4YQW7t/WkZZZZSdpbeo5xpN95wP98lkbUc1xxN9EXVhmTTeHDll8is5wIMFYs/EWnDSkvfUvxQV2pX77CEq1Qv3t+Ix8/VVSmrCzWpNcmewezN9KpNWoS5zficScIAmADouK7VbX/EXVW5Pu1KpazlSYMDT8ifNL2U2x+Hs77OCQwM5l4c0/Jqx9rCO7YPgY2epGf2UN01QvES1Sh8+f0X8mp+DJEtIIOirVKZbkQqWzdpmlkc28OHRbNS8pVWxizOh4FdeKw5YXF1Ls3+5jbyQlUla7meQoKlZo3qpXLg4hxzBgqJYpZOhpUS2bkbldpMpBs3FGtLXtLwIZ4CYgSN+efFQ9nbptG4Y9zZjSQDBG+DvW7tejb1qnfODyXajEId1G7ySXezi3fbbfy9TJnzOORQ0uudrv2+nmUjbG+qYbWiKVCmXYHVCXFjZJGOrqTBGQylYFxSwPc0ODsJIxN0Mbwtzau0nBgoshrd7WZDoRvWK6A0gjMmQd/TolePTade+n197lmBTTcmkk+SX3bfVv0+pAhCFBpBCEIAvNCeAkaE9XJCigKSg3NMbG9S0xATxW4rG13SpKNYMa7OJ37/JRESVUvDDiOibxND1CuOpULVrMn43ecKNtdn/an/W9V5UzK5Gio8S309Ex3H3bX4LdETpbP8n1B9VaGycYJa2s08HsxDyczRZgq1Hb1qbO2e52Zrvb/KSPnKtjDxNop/ZGbKpRWpSr1f5b/BjXFu6mYc1w4SCJ9VCuuudksc0CrcVnRpLmn6hc5c2bmEkAlo+KN3PgqcmFw36fgt4fiFlXz868rI7b3hPuyC7nH9/NS16mJxJ1JJKqtKklUtFslvbFDAo9CpA5R1CglBKcpKFAEjG7A0/GWuI+Wq23U/w9FpbQtrhjpxVoqvj9PwmmeoVkeRTn4hY2o023y6fd7X8ufyM202dVcO8bTcWjf+3FXa9VrWCHSdCN46q6/tHFECjUqBwiadTA5sfoeBJH8y566u3VHFzok6xknjk08uX39+bKsTzZW3kjpSbr+fl806EqOzkqEmUhchI5WbEhEshIhQAodyQkQpsDUhInEIhaBBGiSpXFFNquUq5azC0DMy8wCTwEnQck8YiNlRjVS2kPGOg+61GMWfthvib0KjJGoEwfxGfCUFEpYWauxaOZVhXaO03DJZ0ITRyzg9nQsscZczbZtqNQrlHbRdk2jI34yAPouboETn89FNWunOyGQV8eKnVt+i3M8+FhLoa16KNUjGaVMjM920yeRI1UX/5lJzXOp1D4QTLxAyVGmwUxifmdw/dOdcucMM+8c+g0CrlT5pX2IWKUVUJOvKvn0/UdS2Y5zA/EIynWRPJbmydlUWeJ5D3b8Wg6BZ5rBo7vcQPkqlW7doCnljhC65+vT9xJrJlTV0v0Os2zte37g0g0HLLIZHiuHZVcwuwOInIwYkcCkfUTAVl0xjsizheEhgg4re93e4iEK7smi19SH5gAkjjoPvPkijYk26QmzrV76jBSY97ifda0EjdvkeZXT3PYSr3Tqr69JlUmRQc7EehqjLFyiOaLauy3P+GMufkWNHzn7LTs7Y4hVvahAGbWMzdIzzO4cgjoaYcPH/J+h5zCVaW37QUq7g0yx0VKZOuF+YkcdQs5MjK1TpiISoQQawansahoT2LWkUNjsCVoTg5CspC2OAWftluTTzI+X9FoKptZv8OeBH7fdRl/sZMf7kY6ahKVgZpCUmFCJUXfMB0JspcSFOz5AD3k6rRsX0zBPvAZcOKzk0JoZNErqxZQ1KuRaua8vkblXc5CRLKTk7ZKikCRBKGpCTQsbNpaalUkMmABq48uStXl7TYWNosDRq/eTO4nUrLq3DnAA6DQKEmVdKcdOmK8+pWoPUpt8uS6G1Z1HNqB1MgHUHhK6Rgb79eoX78IIaOi4uzrQRLiOBWsyvSkGpUkakTr6KpG7HPYf2wuadSpSLKeBwpw4TIwg+DzifkueWjtm5bVrF1NuFsBrRJOg1zVCFbuUZHc20IkTsKEUV2bAWpsbY77iXYmspt9+o6YB4AfEVlgrZvbwtoUqTDAwNJje5wkn1K2QSdt9DPJ1yC82dRZlTucZ508IPQ4is4tIMFNaJUhCbUn0Ip9QCi2g2aT+k+malCZeD+E/wDlP0Q1cX9CFzRzwQgJCuaa2KUiEKGAJEIUAKiUiUKbAJSAJ8gKW3ZicAiK1OiLK7mEIWt+FUbtmzoSFfLhpdBfERmpWtJ0WizZXEn6K5SsgNAphws3z2IeWKMYWzlqbMoUGuq9+x7x3Z7jDA/iyCMYJ93UE59FZbaqRtryWmPBoreUyBQO/wA04Wy2m2Z4KRuzzwVq4UXxTD/DIXQjZjvylCb+mI8UxaYU+OQAd2nRIykpm0lRGLGb3BsJYlPbSUraatjiFlPYiaxPq0/A7m0/RWG00tVnhPQ/RXrFsVORxTUFI0p0rhRex0BEiUpEMAQhCgBUBCRAChamw6GOoTwb9T/ysxoXc+z7ZzalKq864w3yDQf/AKK08LXipy5e/wBRMibi0iu2yPBTM2cTuXZM2ewblM23aNy6zzY1yVmdYJvmzjqeyXHcrNLYbjuXVeEJO84BK+I7RHXDrqzBp7A4q1T2IwarSNQ8gm95+pI883yHWGCIWbMpjcFK23YNwQXhNNZK5TfNjKMVyQ/A3glUJuEiimNscM2kpG0laZbngrFOycdy3rCjmuZRFNPbTWrS2W47lcpbH4qbxx5slQnLkjCFNSNongujp7KaNVkdq9qNsmsDGNL3zGLRobEkjfmR81XLi8UNx1w0+p55tW37qtUYNAcuhAd91VVjaFy6rUdVeZc6MWQGgjQdFVlefyNa213+xujyVjkJJRKQkEoRKAJ0UoBUkKVtvOrmj/cfoCpTZHDia5jv0h3j64TBI6IIckuZWC9M7A2xpWpc7LvHF7R+mAAfOJ9F5iSvUtn3J7ikHGXCmyeuEStHDLVJhdG665AKifdBZnfJHVCt2kjUaBujuUTrg8VnuuOYUJqzvP0TaRdRpm5A1KjdeDcqDCN6bVuANFNC6i66ueKj77mqDrgphrKaF1Gia6RZprIQGo62nYsG5TtptG5VDcFMdW5pHKUubLUorkjQxgJhrjcs810x1yk0jajQdVPReX9uLp1S8eHaUw1jekYifVxXdOrnKT18l5ftK472tUqfme4jpOXyhZ+K2ikCdlciEAJE9qxEjSEYc4QU1ADgFYphQMGatMCaBDJGtSPMAp2IDUqrXrTkE7aRBDmcgF6LbXQwNhwIgacgvPGOgyFs7E2jD8DjAdpOmL+qt4WajKn1IyXVo6z8WoX3PNVy9McV1NJm1DnVSlY9QlMxKaFstGoml6ryjEiibJi9IXKLEiUURY/EhMlCKCzozWTTVVUvTTUSaC7WWTVTTVVU1E01E2gXWO2lWcKNTBOLA7DGsxuXni7i/uMFN7hqGmOu5cQufxySlEtxO0xAnhNSysSLQQhCABCEIAEIQgAQhCAN7ZW0AWhjneIZCd43Z8VoYlyIWxs7aJcQx+vwnjyK6PD8T/hLyM+TH1Rq4ksqKU9q22UBKWU8tTMKAETSU9NKSwGyhLCFFjH/2Q==',
       position: 'Джедай',
    },
    {
       id: `2`,
       emplname: 'Люк',
       birthday: '05.12.2373',
       photo : '/',
       position: 'Джедай',
    },
    {
       id: `3`,
       emplname: 'Джаба Хат',
       birthday: '05.12.2273',
       photo : '/',
       position: 'Огр',
    },
    {
       id: `4`,
       emplname: 'Грогу',
       birthday: '05.12.2273',
       photo : 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/280px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg',
       position: 'Мастер',
    },
 ]
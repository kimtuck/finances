function retirement() {
  const data = [
    /*
    {
      Date: '1/1/2018',
      savings: '0',
      _401K: '74273',
      esop: 3516,
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '4/1/2018',
      savings: '0',
      _401K: '75050',
      esop: 3516,
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '7/1/2018',
      savings: '0',
      _401K: '77083',
      esop: 3516,
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '10/30/2018',
      savings: '0',
      _401K: '81178',
      esop: 3516,
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '12/31/2018',
      savings: '0',
      _401K: '74874',
      hsa: '0',
      esop: '11440.35',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '1/20/2019',
      savings: '0',
      _401K: '79175',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '4/24/2019',
      savings: '0',
      _401K: '85498',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '7/15/2019',
      savings: '0',
      _401K: '84216',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '8/15/2019',
      savings: '0',
      _401K: '84342.40',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '9/21/2019',
      savings: '0',
      _401K: '86789.07',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '10/27/2019',
      savings: '0',
      _401K: '88008.07',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '12/15/2019',
      savings: '0',
      _401K: '91175',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '2/12/2020',
      savings: '0',
      _401K: '95029',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '4/1/2020',
      savings: '0',
      _401K: '84890',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '4/19/2020',
      savings: '0',
      _401K: '90362',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '5/14/2020',
      savings: '0',
      _401K: '90114',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '6/14/2020',
      savings: '0',
      _401K: '95999',
      esop: '11440.35',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '7/16/2020',
      savings: '0',
      _401K: '100085',
      esop: '22340.46',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '8/16/2020',
      savings: '0',
      _401K: '103286',
      esop: '22340.46',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '9/13/2020',
      savings: '0',
      _401K: '103463',
      esop: '22340.46',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '10/14/2020',
      savings: '0',
      _401K: '106992',
      esop: '22340.46',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '11/15/2020',
      savings: '0',
      _401K: '109912',
      hsa: '0',
      esop: '22340.46',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '12/15/2020',
      savings: '0',
      _401K: '113382',
      hsa: '0',
      esop: '22340.46',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '01/15/2021',
      savings: '0',
      _401K: '117176',
      esop: '22340.46',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '02/13/2021',
      savings: '0',
      _401K: '121085',
      esop: '22340.46',
      hsa: '60.13',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '03/16/2021',
      savings: '0',
      _401K: '121259',
      esop: '22340.46',
      hsa: '710.13',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '04/17/2021',
      savings: '0',
      _401K: '124839',
      esop: '22340.46',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '06/11/2021',
      savings: '0',
      _401K: '127911',
      esop: '22340.46',
      hsa: '0',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '07/12/2021',
      savings: '0',
      _401K: '129337',
      esop: '22340.46',
      hsa: '132.32',
      checking: '0',
      marcus: '0'
    },

    {
      Date: '07/12/2021',
      savings: '0',
      _401K: '129337',
      esop: '22340.46',
      hsa: '132.32',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '08/01/2021',
      savings: '0',
      _401K: '129334',
      esop: '32603.46',
      hsa: '282.32',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '08/16/2021',
      savings: '0',
      _401K: '130525',
      esop: '32603.46',
      hsa: '532.32',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '09/01/2021',
      savings: '0',
      _401K: '131931',
      esop: '32603.46',
      hsa: '682.32',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '09/17/2021',
      savings: '0',
      _401K: '132259',
      esop: '32603.46',
      hsa: '932.32',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '09/26/2021',
      savings: '0',
      _401K: '131851',
      esop: '32603.46',
      hsa: '932.32',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '10/11/2021',
      savings: '0',
      _401K: '131630',
      esop: '32603.46',
      hsa: '1082.33',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '10/20/2021',
      savings: '0',
      _401K: '133903',
      esop: '32603.46',
      hsa: '1332.33',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '11/07/2021',
      savings: '0',
      _401K: '135891',
      esop: '32603.46',
      hsa: '1016.33',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '12/12/2021',
      savings: '0',
      _401K: '135894',
      esop: '32603.46',
      hsa: '1066.33',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '12/30/2021',
      savings: '0',
      _401K: '136936',
      esop: '32603.46',
      hsa: '1431.63',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '2/10/2022',
      _401K: '136575',
      esop: '32603.46',
      hsa: '1229.89',
      savings: '3000',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '3/2/2022',
      _401K: '134185',
      esop: '32603.46',
      hsa: '1629',
      savings: '3000.02',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '3/19/2022',
      _401K: '134698',
      esop: '32603.46',
      hsa: '1979',
      savings: '5500.02',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '4/23/2022',
      _401K: '133174',
      esop: '32603.46',
      hsa: '2126',
      savings: '11500.06',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '5/13/2022',
      _401K: '128665',
      esop: '32603.46',
      hsa: '2226',
      savings: '13500.14',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '5/28/2022',
      _401K: '133545',
      esop: '32603.46',
      hsa: '2476',
      savings: '13500.14',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '6/17/2022',
      _401K: '127421',
      esop: '32603.46',
      hsa: '2476',
      savings: '17500.25',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '7/1/2022',
      _401K: '128875',
      esop: '32603.46',
      hsa: '2476',
      savings: '14500.39',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '7/8/2022',
      _401K: '131289',
      esop: '32603.46',
      hsa: '2925',
      savings: '14500.39',
      checking: '0',
      marcus: '0'
    },
    {
      Date: '8/11/2022',
      _401K: '138201',
      esop: '50632.65',
      hsa: '3050',
      savings: '13500.54',
      checking: '13152.99',
      marcus: '0'
    },
    {
      Date: '8/31/2022',
      _401K: '134697',
      esop: '50632.65',
      hsa: '3053',
      savings: '18000.54',
      checking: '12808',
      marcus: '20000'
    },
    {
      Date: '9/26/2022',
      _401K: '130075',
      esop: '50632.65',
      hsa: '3453',
      savings: '15000.70',
      checking: '6217',
      marcus: '30000.92'
    },
    {
      Date: '10/04/2022',
      _401K: '130789',
      esop: '50632.65',
      hsa: '3603',
      savings: '15000.84',
      checking: '2432',
      marcus: '30040.57'
    },

    {
      Date: '11/2/2022',
      _401K: '135816',
      esop: '50632.65',
      hsa: '3620',
      savings: '16500.97',
      checking: '6068',
      marcus: '30098.28'
    },

    {
      Date: '11/15/2022',
      _401K: '138762',
      esop: '50632.65',
      hsa: '3214',
      savings: '5000',
      checking: '6062',
      marcus: '41599.25'
    },
    {
      Date: '11/19/2022',
      _401K: '140078',
      esop: '50632.65',
      hsa: '3464',
      savings: '30000',
      checking: '8513',
      marcus: '116599.25'
    },
    {
      Date: '12/5/2022',
      _401K: '144171',
      esop: '50632.65',
      hsa: '3614',
      savings: '30002',
      checking: '6440',
      marcus: '116746.25'
    },
    {
      Date: '12/12/2022',
      _401K: '142124',
      esop: '50632.65',
      hsa: '3614',
      savings: '20002',
      checking: '4515',
      marcus: '166746.25'
    },
    {
      Date: '1/1/2023',
      _401K: '141567',
      esop: '50632.65',
      hsa: '3858',
      savings: '10105',
      checking: '9966',
      marcus: '182042.045'
    },
    {
      Date: '1/16/2023',
      _401K: '147961',
      esop: '50632.65',
      hsa: '3969',
      savings: '10105',
      checking: '6419',
      marcus: '182042.45'
    },
    {
      Date: '2/4/2023',
      _401K: '152501',
      esop: '50632.65',
      hsa: '4369',
      savings: '7211',
      checking: '18107',
      marcus: '182544.72'
    },
    {
      Date: '2/23/2023',
      _401K: '149545',
      esop: '50632.65',
      hsa: '2401',
      savings: '20107',
      checking: '5081',
      marcus: '182544.72'
    },
    {
      Date: '4/11/2023',
      _401K: '155201',
      esop: '50632.65',
      hsa: '2318',
      savings: '4511',
      checking: '4736',
      marcus: '200628.72'
    },
    {
      Date: '4/28/2023',
      _401K: '156550',
      esop: '50632.65',
      hsa: '2718',
      savings: '4511',
      checking: '6318',
      marcus: '200628.56'
    },
    {
      Date: '5/01/2023',
      _401K: '157378',
      esop: '50632.65',
      hsa: '3019',
      savings: '1511',
      checking: '6687',
      marcus: '206250'
    },
    {
      Date: '5/22/2023',
      _401K: '159173',
      esop: '50632.65',
      hsa: '3294',
      savings: '1511',
      checking: '5679',
      marcus: '206250'
    },
    {
      Date: '6/2/2023',
      _401K: '160464',
      esop: '50632.65',
      hsa: '3594',
      savings: '1512',
      checking: '5026',
      marcus: '206952'
    },
    {
      Date: '6/15/2023',
      _401K: '164554',
      esop: '50632.65',
      hsa: '3501',
      savings: '1512',
      checking: '5382',
      marcus: '206952'
    },
    {
      Date: '6/30/2023',
      _401K: '164490',
      esop: '50632.65',
      hsa: '3910',
      savings: '512',
      checking: '1531',
      marcus: '211952'
    },
    {
      Date: '7/15/2023',
      _401K: '168286',
      esop: '50632.65',
      hsa: '4210',
      savings: '512',
      checking: '6563',
      marcus: '212645'
    },
    {
      Date: '8/01/2023',
      _401K: '170968',
      esop: '61214.65',
      hsa: '4611',
      savings: '512',
      checking: '5401',
      marcus: '213387'
    },
    {
      Date: '9/03/2023',
      _401K: '171637',
      esop: '61214.65',
      hsa: '5248',
      savings: '512',
      checking: '7127',
      marcus: '214143'
    },

    {
      Date: '10/02/2023',
      _401K: '168287',
      esop: '61214.65',
      hsa: '5641',
      savings: '512',
      checking: '6017',
      marcus: '220905'
    },

    {
      Date: '10/17/2023',
      _401K: '170452',
      esop: '61214.65',
      hsa: '6014',
      savings: '512',
      checking: '4503',
      marcus: '220905'
    },

    {
      Date: '11/03/2023',
      _401K: '171192',
      esop: '61214.65',
      hsa: '6314',
      savings: '3456',
      checking: '300',
      marcus: '221715'
    },
    {
      Date: '11/15/2023',
      _401K: '174538',
      esop: '61214.65',
      hsa: '6714',
      savings: '1800',
      checking: '5399',
      marcus: '221715'
    },
    {
      Date: '12/01/2023',
      _401K: '179491',
      esop: '61214.65',
      hsa: '7015',
      savings: '3300',
      checking: '2048',
      marcus: '222501'
    },
    {
      Date: '12/19/2023',
      _401K: '183690',
      esop: '61214.65',
      hsa: '7015',
      savings: '300',
      checking: '2427',
      marcus: '225501'
    },
    */
    {
      Date: '01/01/2024',
      _401K: '185226',
      esop: '61214.65',
      hsa: '5382',
      savings: '300.82',
      checking: '3557',
      marcus: '229334'
    },
    {
      Date: '02/03/2024',
      _401K: '189099',
      esop: '61214.65',
      hsa: '5591',
      savings: '300.82',
      checking: '2168',
      marcus: '230191'
    },
    {
      Date: '02/08/2024',
      _401K: '189454',
      esop: '61214.65',
      hsa: '5591',
      savings: '300.82',
      checking: '2641',
      marcus: '230191',
      cc: '-3855'
    },
    {
      Date: '02/24/2024',
      _401K: '195181',
      esop: '61214.65',
      hsa: '5691',
      savings: '300.82',
      checking: '8713',
      marcus: '195191',
      cc: '-3428'
    },
    {
      Date: '03/1/2024',
      _401K: '192380',
      esop: '61214.65',
      hsa: '5610',
      savings: '5300.82',
      checking: '6365',
      marcus: '195960',
      cc: '0'
    },
    {
      Date: '03/19/2024',
      _401K: '195287',
      esop: '61214.65',
      hsa: '5710',
      savings: '300.86',
      checking: '4908',
      marcus: '205961',
      cc: '-1846'
    },
    {
      Date: '04/3/2024',
      _401K: '196998',
      esop: '61214.65',
      hsa: '5710',
      savings: '300.86',
      checking: '4239',
      marcus: '206726',
      cc: '-4871'
    },
    {
      Date: '05/3/2024',
      _401K: '197949',
      esop: '61214.65',
      hsa: '6080',
      savings: '2600.86',
      checking: '3824',
      marcus: '207458',
      cc: '-5091'
    },
    {
      Date: '05/17/2024',
      _401K: '202763',
      esop: '61214.65',
      hsa: '5525',
      savings: '2600.87',
      checking: '5470',
      marcus: '207458',
      cc: '-2333'
    },
    {
      Date: '06/05/2024',
      _401K: '203029',
      esop: '61214.65',
      hsa: '6368',
      savings: '600.87',
      checking: '4660',
      marcus: '211221',
      cc: '-6887'
    },
    {
      Date: '06/15/2024',
      _401K: '204130',
      esop: '61214.65',
      hsa: '5000',
      savings: '600.87',
      checking: '8011',
      marcus: '211221',
      cc: '-5181'
    },
    {
      Date: '07/04/2024',
      _401K: '207672',
      esop: '61214.65',
      hsa: '5000',
      savings: '2600.89',
      checking: '3121',
      marcus: '217975',
      cc: '-4583'
    },
    {
      Date: '07/27/2024',
      _401K: '209784',
      esop: '60131.51',
      hsa: '6434',
      savings: '3100.89',
      checking: '933',
      marcus: '220475',
      cc: '-5245'
    },
    {
      Date: '07/27/2024',
      _401K: '209784',
      esop: '60131.51',
      hsa: '6434',
      savings: '3100.89',
      checking: '933',
      marcus: '220475',
      cc: '-5245'
    },
    {
      Date: '08/03/2024',
      _401K: '209526',
      esop: '60131.51',
      hsa: '6313',
      savings: '95',
      checking: '2378',
      marcus: '224280',
      cc: '-2978'
    },
    {
      Date: '9/03/2024',
      _401K: '215254',
      esop: '60131.51',
      hsa: 2000+5268,
      savings: '82',
      checking: '6219',
      marcus: '223095',
      cc: '-6159'
    },
    {
      Date: '9/25/2024',
      _401K: '220215',
      esop: '60131.51',
      hsa: 8215,
      savings: '13',
      checking: '3275',
      marcus: '118095',
      cc: '-2884'
    },
    {
      Date: '10/07/2024',
      _401K: '221429',
      esop: '60131.51',
      hsa: 8586,
      savings: '48',
      checking: '1717',
      marcus: '118708',
      cc: '-7990'
    },
    {
      Date: '10/21/2024',
      _401K: '223287',
      esop: '60131.51',
      hsa: 9118,
      savings: '548',
      checking: '1860',
      marcus: '115708',
      cc: '-3658'
    },
    {
      Date: '11/2/2024',
      _401K: '221491',
      esop: '60131.51',
      hsa: 8982,
      savings: '543',
      checking: '4978',
      marcus: '114110',
      cc: '-2631'
    },
    {
      Date: '11/9/2024',
      _401K: '225356',
      esop: '60131.51',
      hsa: 9335,
      savings: '243',
      checking: '4077',
      marcus: '112610',
      cc: '-7218'
    },
    {
      Date: '11/15/2024',
      _401K: '223691',
      esop: '60131.51',
      hsa: 9918,
      savings: '243',
      checking: '4168',
      marcus: '112610',
      cc: '-6874'
    },
    {
      Date: '11/19/2024',
      _401K: '224278',
      esop: '60131.51',
      hsa: 9238,
      savings: '243',
      checking: '4168',
      marcus: '112610',
      cc: '-6367'
    },
    {
      Date: '12/1/2024',
      _401K: '227309',
      esop: '60131.51',
      hsa: 9757,
      savings: '238',
      checking: '4494',
      marcus: '72938',
      cc: '-6930'
    },
    {
      Date: '12/14/2024',
      _401K: '227662',
      esop: '60131.51',
      hsa: 9403,
      savings: '238',
      checking: '9094',
      marcus: '72938',
      cc: '-501'
    },
    {
      Date: '12/17/2024',
      _401K: '228967',
      esop: '60131.51',
      hsa: 9040,
      savings: '238',
      checking: '5792',
      marcus: '72938',
      cc: '-807'
    },
    {
      Date: '1/4/2025',
      _401K: '227294',
      esop: '60131.51',
      hsa: 9407,
      savings: '233',
      checking: '1236',
      marcus: '82186',
      cc: '-3829'
    },
    {
      Date: '1/16/2025',
      _401K: '228446',
      esop: '60131.51',
      hsa: 9803,
      savings: '233',
      checking: '4916',
      marcus: '82186',
      cc: '-1157'
    },
    {
      Date: '2/3/2025',
      _401K: '232104',
      esop: '60131.51',
      hsa: 10334,
      savings: '328',
      checking: '5194',
      marcus: '82453',
      cc: -3155 + -4025 + -2100 + -9000
    },
    {
      Date: '2/16/2025',
      _401K: '234770',
      esop: '60131.51',
      hsa: 5138+2427,
      savings: '1328',
      checking: '3074',
      marcus: '90453',
      cc: -3928 + -5751 + -1518
    },
    {
      Date: '3/4/2025',
      _401K: '233256',
      esop: '60131.51',
      hsa: 3993+2347,
      savings: '353',
      checking: '3888',
      marcus: '91715',
      cc: -2863 + -5751 + -1518 + -4000
    },
    {
      Date: '3/18/2025',
      _401K: '233126',
      esop: '60131.51',
      hsa: 3656+2351,
      savings: '353',
      checking: '3205',
      marcus: '92715',
      cc: -1194 + -5751 + -1518 + -(4037 - 224)
    },
    {
      Date: '4/2/2025',
      _401K: '233321',
      esop: '60131.51',
      hsa: 5518+2338,
      savings: '378',
      checking: '6947',
      marcus: '93014',
      cc: -2775 + -5751 + -1518 + -(4037 - 224) /* 3-4 */
    },
    {
      Date: '4/13/2025',
      _401K: '227194',
      esop: '60131.51',
      hsa: 5518+2259,
      savings: '378',
      checking: '8931',
      marcus: 43014+50000,
      cc: -3495 /*cc*/+ -5751 /*fed*/ + -(4037 - (224 *2)) /* 2nd payment on 4/2 */
    }
  ];

  const lines = ['_401K', 'esop', 'hsa', 'savings', 'checking', 'marcus', 'cc', 'Sum'];
  const labels = ['401k', 'ESOP', 'hsa', 'savings', 'checking', 'marcus', 'Debts', 'TOTAL'];
  const colors = ['blue', 'green', 'orange', 'teal', 'purple', 'deeppink', 'yellow', 'red'];

  const layout = {
    height: 600,
    width: 960,
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };

  multiline_chart(data, lines, labels, colors, true, false, layout);
}

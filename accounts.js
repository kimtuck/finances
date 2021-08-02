function accounts() {
  const data = [
    {
      Date: '10/15/2018',
      LOCFloat: '60992',
      LOCFixed: '19942',
      RobertsCar: '7726',
      LauriesCar: '21694',
      StudentLoan: '2261'
    },
    {
      Date: '11/15/2018',
      LOCFloat: '61427',
      LOCFixed: '19905',
      RobertsCar: '7431',
      LauriesCar: '21208 ',
      StudentLoan: '2261'
    },
    {
      Date: '12/15/2018',
      LOCFloat: '63419',
      LOCFixed: '19865',
      RobertsCar: '7136',
      LauriesCar: '20722',
      StudentLoan: '2261'
    },
    {
      Date: '1/15/2019',
      LOCFloat: '62440',
      LOCFixed: '19827',
      RobertsCar: '6841',
      LauriesCar: '20236',
      StudentLoan: '2261'
    },
    {
      Date: '2/15/2019',
      LOCFloat: '59851',
      LOCFixed: '19788',
      RobertsCar: '6546',
      LauriesCar: '19750',
      StudentLoan: '2261'
    },
    {
      Date: '3/15/2019',
      LOCFloat: '57753',
      LOCFixed: '19745',
      RobertsCar: '6251',
      LauriesCar: '19264',
      StudentLoan: '2261'
    },
    {
      Date: '4/24/2019',
      LOCFloat: '57992',
      LOCFixed: '19705',
      RobertsCar: '5951',
      LauriesCar: '18864',
      StudentLoan: '2261'
    },
    {
      Date: '5/12/2019',
      LOCFloat: '57928', // td
      LOCFixed: '19666', // td
      RobertsCar: '5526.94',
      LauriesCar: '18943',
      StudentLoan: '2261'
    },
    {
      Date: '6/16/2019',
      LOCFloat: '58736',
      LOCFixed: '19627',
      RobertsCar: '5231', // 295
      LauriesCar: '18543', //400
      StudentLoan: '2261'
    },
    {
      Date: '7/14/2019',
      LOCFloat: '57715',
      LOCFixed: '19587',
      RobertsCar: '4936', // 295
      LauriesCar: '18143', //400
      StudentLoan: '2261'
    },
    {
      Date: '8/18/2019',
      LOCFloat: '76278',
      LOCFixed: '0',
      RobertsCar: '4641', // 295
      LauriesCar: '17743', //400
      StudentLoan: '1261'
    },
    {
      Date: '9/21/2019',
      LOCFloat: '76162',
      LOCFixed: '0',
      RobertsCar: '4346', // 295
      LauriesCar: '17343', //400
      StudentLoan: '1261'
    },
    {
      Date: '10/27/2019',
      LOCFloat: '76748',
      LOCFixed: '0',
      RobertsCar: '4051', // 295
      LauriesCar: '16943', //400
      StudentLoan: '1261'
    },
    {
      Date: '12/15/2019',
      LOCFloat: '72804',
      LOCFixed: '0',
      RobertsCar: '3756', // 295
      LauriesCar: '16543', //400
      StudentLoan: '1261'
    },
    {
      Date: '02/12/2020',
      LOCFloat: '67980',
      LOCFixed: '0',
      RobertsCar: '3166', // 295
      LauriesCar: '14865', //416
      StudentLoan: '1261'
    },
    {
      Date: '04/1/2020',
      LOCFloat: '63451',
      LOCFixed: '0',
      RobertsCar: '2871', // 295
      LauriesCar: '14499', //416
      StudentLoan: '1261'
    },
    {
      Date: '04/19/2020',
      LOCFloat: '61491',
      LOCFixed: '0',
      RobertsCar: '2576', // 295
      LauriesCar: '14023', //416
      StudentLoan: '1261'
    },
    {
      Date: '05/14/2020',
      LOCFloat: '57966',
      LOCFixed: '0',
      RobertsCar: '2281', // 295
      LauriesCar: '13607', //416
      StudentLoan: '1261'
    },
    {
      Date: '06/14/2020',
      LOCFloat: '54326',
      LOCFixed: '0',
      RobertsCar: '1966', // 295
      LauriesCar: '13191', //416
      StudentLoan: '1261'
    },
    {
      Date: '07/16/2020',
      LOCFloat: '49815',
      LOCFixed: '0',
      RobertsCar: '991', // 295
      LauriesCar: '12749', //416
      StudentLoan: '1261'
    },
    {
      Date: '08/16/2020',
      LOCFloat: '47106',
      LOCFixed: '0',
      RobertsCar: '696', // 295
      LauriesCar: '12333', //416
      StudentLoan: '1261'
    },
    {
      Date: '09/13/2020',
      LOCFloat: '46518',
      LOCFixed: '0',
      RobertsCar: '401', // 295
      LauriesCar: '11917', //416
      StudentLoan: '1261'
    },
    {
      Date: '10/14/2020',
      LOCFloat: '46430',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '11501', //416
      StudentLoan: '1261'
    },
    {
      Date: '11/15/2020',
      LOCFloat: '44826',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '11085', //416
      StudentLoan: '1261'
    },
    {
      Date: '12/15/2020',
      LOCFloat: '42233',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '10590', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    },
    {
      Date: '01/15/2021',
      LOCFloat: '37353',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '10000', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    },
    {
      Date: '02/13/2021',
      LOCFloat: '32633',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '9713', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    },
    {
      Date: '03/16/2021',
      LOCFloat: '30357',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '9276', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    },
    {
      Date: '04/17/2021',
      LOCFloat: '20901',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '8830', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    },
    {
      Date: '05/20/2021',
      LOCFloat: '21366',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '8397', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    },
    {
      Date: '06/11/2021',
      LOCFloat: '18321',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '7964', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    },
    {
      Date: '07/12/2021',
      LOCFloat: '15286',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '7470', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    }, 
    {
      Date: '08/01/2021',
      LOCFloat: '11586',
      LOCFixed: '0',
      RobertsCar: '0', // 295
      LauriesCar: '7470', //433 https://myaccount.chryslercapital.com/Account/AccountSummary
      StudentLoan: '1261'
    }
  ];

  const lines = ['LOCFloat', 'LOCFixed', 'RobertsCar', 'LauriesCar', 'StudentLoan', 'Sum'];
  const labels = ['LOC', 'LOC Loan', "Robert' Car", "Laurie's Car", 'Student Loan', 'Total'];
  const colors = ['green', 'orange', 'teal', 'blue', 'pink', 'red'];

  const layout = {
    height: 500,
    width: 960,
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };

  multiline_chart(data, lines, labels, colors, true, true, layout);
}

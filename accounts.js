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
    { Date: '01/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { Date: '06/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { Date: '03/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' }
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

  multiline_chart(data, lines, labels, colors, layout);
}

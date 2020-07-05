function creditCard() {
  const data = [
    {
      Date: '10/15/2018',
      CreditCard: '3713'
    },
    {
      Date: '11/15/2018',
      CreditCard: '5404'
    },
    {
      Date: '12/15/2018',
      CreditCard: '5008'
    },
    {
      Date: '01/02/2019',
      CreditCard: '2286'
    },
    {
      Date: '02/05/2019',
      CreditCard: '3119'
    },
    {
      Date: '03/05/2019',
      CreditCard: '3747'
    },
    {
      Date: '04/25/2019',
      CreditCard: '5590'
    },
    {
      Date: '05/15/2019',
      CreditCard: '6677'
    },
    {
      Date: '06/16/2019',
      CreditCard: '5665.09'
    },
    {
      Date: '07/14/2019',
      CreditCard: '2911.09'
    },
    {
      Date: '08/18/2019',
      CreditCard: '6694.92'
    },
    {
      Date: '09/21/2019',
      CreditCard: '3839'
    },
    {
      Date: '10/27/2019',
      CreditCard: '6062'
    },
    {
      Date: '12/15/2019',
      CreditCard: '4718'
    },
    {
      Date: '01/15/2020',
      CreditCard: '5855'
    },
    {
      Date: '02/15/2020',
      CreditCard: '5098'
    },
    {
      Date: '04/19/2020',
      CreditCard: '2629'
    },
    {
      Date: '05/14/2020',
      CreditCard: '2262'
    }
  ];

  const lines = ['CreditCard'];
  const labels = ['Credit Card'];
  const colors = ['red'];

  const layout = {
    height: 200,
    width: 960,
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };

  multiline_chart(data, lines, labels, colors, false, false, layout);
}

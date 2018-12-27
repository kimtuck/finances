function creditCard() {
  const data = [
    {
      Date: '10/15/2018',
      CreditCard: '3000'
    },
    {
      Date: '11/15/2018',
      CreditCard: '3000'
    },
    {
      Date: '12/15/2018',
      CreditCard: '3000'
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

  multiline_chart(data, lines, labels, colors, layout);
}

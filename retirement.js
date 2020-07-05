function retirement() {
  const data = [
    {
      Date: '1/1/2018',
      _401K: '74273',
      esop: 3516
    },
    {
      Date: '4/1/2018',
      _401K: '75050',
      esop: 3516
    },
    {
      Date: '7/1/2018',
      _401K: '77083',
      esop: 3516
    },
    {
      Date: '10/30/2018',
      _401K: '81178',
      esop: 3516
    },
    {
      Date: '12/31/2018',
      _401K: '74874',
      esop: '11440.35'
    },
    {
      Date: '1/20/2019',
      _401K: '79175',
      esop: '11440.35'
    },
    {
      Date: '4/24/2019',
      _401K: '85498',
      esop: '11440.35'
    },
    {
      Date: '7/15/2019',
      _401K: '84216',
      esop: '11440.35'
    },
    {
      Date: '8/15/2019',
      _401K: '84342.40',
      esop: '11440.35'
    },
    {
      Date: '9/21/2019',
      _401K: '86789.07',
      esop: '11440.35'
    },
    {
      Date: '10/27/2019',
      _401K: '88008.07',
      esop: '11440.35'
    },
    {
      Date: '12/15/2019',
      _401K: '91175',
      esop: '11440.35'
    },
    {
      Date: '2/12/2020',
      _401K: '95029',
      esop: '11440.35'
    },
    {
      Date: '4/1/2020',
      _401K: '84890',
      esop: '11440.35'
    },
    {
      Date: '4/19/2020',
      _401K: '90362',
      esop: '11440.35'
    },
    {
      Date: '5/14/2020',
      _401K: '90114',
      esop: '11440.35'
    },
    {
      Date: '6/14/2020',
      _401K: '95999',
      esop: '11440.35'
    }
  ];

  const lines = ['_401K', 'esop', 'Sum'];
  const labels = ['401k', 'ESOP', 'TOTAL'];
  const colors = ['blue', 'green', 'red'];

  const layout = {
    height: 200,
    width: 960,
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };

  multiline_chart(data, lines, labels, colors, true, false, layout);
}

function retirement() {
  const data = [
    {
      Date: '10/02/2018',
      value: '81482'
    },
    {
      Date: '12/31/2018',
      value: '74874'
    }
  ];

  const lines = ['value'];
  const labels = ['401k'];
  const colors = ['blue'];

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

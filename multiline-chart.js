function multiline_chart() {
  const data = [
    { Date: '10/15/2018', LOCFloat: '60992', LOCFixed: '19942', RobertsCar: '7726', LauriesCar: '21694', StudentLoan: '2261' },
    { Date: '11/15/2018', LOCFloat: '61427', LOCFixed: '19905', RobertsCar: '7431', LauriesCar: '20918 ', StudentLoan: '2261' },
    { Date: '12/15/2018', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { Date: '01/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { Date: '06/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { Date: '03/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' }
  ];
  const lines = ['LOCFloat', 'LOCFixed', 'RobertsCar', 'LauriesCar', 'StudentLoan', 'Sum'];

  const margin = { top: 20, right: 20, bottom: 30, left: 50 };

  const width = 960 - margin.left - margin.right;

  const height = 500 - margin.top - margin.bottom;
  // parse the date / time
  const parseTime = d3.timeParse('%m/%d/%Y');
  // set the ranges
  const x = d3.scaleTime().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);
  // define the line

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  function draw(data) {
    // format the data
    data.forEach(d => {
      d.Date = parseTime(d.Date);
      lines.forEach(x => {
        d[x] = +d[x];
      });
    });

    data.forEach(d => {
      d['Sum'] = 0;
      d.Sum = lines.reduce((accum, val) => {
        accum += d[val];
        return accum;
      }, 0);
    });

    // sort years ascending
    data.sort((a, b) => a.Date - b.Date);

    // Scale the range of the data
    x.domain(d3.extent(data, d => d.Date));
    y.domain([0, d3.max(data, d => Math.max(...lines.map(x => d[x])))]);

    lines.forEach(line => {
      const valueline = d3
        .line()
        .x(d => x(d.Date))
        .y(d => y(d[line]));
      // Add the valueline path.
      svg
        .append('path')
        .data([data])
        .attr('class', 'line')
        .attr('d', valueline);
    });
    // Add the X Axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));
    // Add the Y Axis

    svg.append('g').call(d3.axisLeft(y));
  }

  draw(data);

  /*
  // Get the data
  d3.json('data.json', function(error, data) {
    if (error) throw error;

    // trigger render
    draw(data, 'Afghanistan');
  });
  */
}

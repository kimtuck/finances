function multiline_chart() {
  const target = { Date: '12/15/2019', Sum: 80000 };
  const lastRealData = 1;
  const data = [
    { Date: '10/15/2018', LOCFloat: '60992', LOCFixed: '19942', RobertsCar: '7726', LauriesCar: '21694', StudentLoan: '2261' },
    { Date: '11/15/2018', LOCFloat: '61427', LOCFixed: '19905', RobertsCar: '7431', LauriesCar: '21208 ', StudentLoan: '2261' },
    { Date: '12/15/2018', LOCFloat: '63419', LOCFixed: '19865', RobertsCar: '7136', LauriesCar: '20722', StudentLoan: '2261' },
    { Date: '01/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { Date: '06/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { Date: '03/15/2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' }
  ];
  const lines = ['LOCFloat', 'LOCFixed', 'RobertsCar', 'LauriesCar', 'StudentLoan', 'Sum'];
  const labels = ['LOC', 'LOC Loan', "Robert' Car", "Laurie's Car", 'Student Loan', 'Total'];
  const colors = ['green', 'orange', 'teal', 'blue', 'pink', 'red'];

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

  // gridlines in y axis function
  function make_y_gridlines() {
    return d3.axisLeft(y).ticks(10);
  }

  function draw(data) {
    // format the data
    data.forEach(d => {
      d.Date = parseTime(d.Date);
      lines.forEach(x => {
        d[x] = +d[x];
      });
    });
    target.Date = parseTime(target.Date);

    data.forEach(d => {
      d.Sum = 0;
      d.Sum = lines.reduce((accum, val) => {
        accum += d[val];
        return accum;
      }, 0);
    });

    data.forEach((d, ind) => {
      d.color = colors[ind];
    });
    data.forEach((d, ind) => {
      d.label = labels[ind];
    });

    // sort years ascending
    data.sort((a, b) => a.Date - b.Date);

    // Scale the range of the data
    const dates = data.map(x => x.Date);
    dates.push(target.Date);
    x.domain(d3.extent(dates, d => d));
    y.domain([0, d3.max(data, d => Math.max(...lines.map(x => d[x])))]);

    // add the Y gridlines
    svg
      .append('g')
      .attr('class', 'grid')
      .call(
        make_y_gridlines()
          .tickSize(-width)
          .tickFormat('')
      );

    lines.forEach((line, ind) => {
      const valueline = d3
        .line()
        .x(d => x(d.Date))
        .y(d => y(d[line]));
      // Add the valueline path.
      svg
        .append('path')
        .data([data])
        .attr('class', 'line')
        .attr('d', valueline)
        .attr('stroke', colors[ind]);
    });

    targetList = [target];
    targetList.push({ Date: data[0].Date, Sum: data[0].Sum });
    console.log(targetList);
    const targetLine = d3
      .line()
      .x(d => x(d.Date))
      .y(d => y(d.Sum));
    svg
      .append('path')
      .data([targetList])
      .attr('class', 'line')
      .attr('d', targetLine)
      .attr('stroke', 'purple');

    // Add the X Axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));
    // Add the Y Axis

    svg.append('g').call(d3.axisLeft(y));

    // Draw legend
    const legend = svg
      .selectAll('.legend')
      .data(colors)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(-120,${i * 19})`);

    legend
      .append('rect')
      .attr('x', width - 18)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', (d, i) => colors.slice().reverse()[i]);

    legend
      .append('text')
      .attr('x', width + 5)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'start')
      .text((d, i) => {
        console.log(d, i);
        return `${labels[labels.length - i - 1]}  $${data[lastRealData][lines[lines.length - i - 1]]} `;
      });
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

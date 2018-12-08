function graph() {
  /* Data in strings like it would be if imported from a csv */

  const data = [
    { date: '10-15-2018', LOCFloat: '60992', LOCFixed: '19942', RobertsCar: '7726', LauriesCar: '21694', StudentLoan: '2261' },
    { date: '11-15-2018', LOCFloat: '61427', LOCFixed: '19905', RobertsCar: '7431', LauriesCar: '20918 ', StudentLoan: '2261' },
    { date: '12-15-2018', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { date: '01-15-2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { date: '02-15-2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' },
    { date: '03-15-2019', LOCFloat: '0', LOCFixed: '0', RobertsCar: '0', LauriesCar: '0', StudentLoan: '0' }
  ];

  // Transpose the data into layers
  const dataset = d3.layout.stack()(
    ['LOCFloat', 'LOCFixed', 'RobertsCar', 'LauriesCar', 'StudentLoan'].map(fruit => data.map(d => ({ x: d.date, y: parseFloat(d[fruit]) })))
  );

  // Setup svg using Bostock's margin convention

  const margin = { top: 20, right: 160, bottom: 35, left: 30 };

  const width = 960 - margin.left - margin.right;

  const height = 500 - margin.top - margin.bottom;

  const svg = d3
    .select('#graph')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Set x, y and colors
  const x = d3.scale
    .ordinal()
    .domain(dataset[0].map(d => d.x))
    .rangeRoundBands([10, width - 10], 0.02);

  const y = d3.scale
    .linear()
    .domain([0, d3.max(dataset, d => d3.max(d, d => d.y0 + d.y))])
    .range([height, 0]);

  const colors = ['b33040', '#d25c4d', '#f2b447', '#d9d574', 'green'];

  // Define and draw axes
  const yAxis = d3.svg
    .axis()
    .scale(y)
    .orient('left')
    .ticks(5)
    .tickSize(-width, 0, 0)
    .tickFormat(d => d);

  const xAxis = d3.svg
    .axis()
    .scale(x)
    .orient('bottom')
    .tickFormat(d => d);

  svg
    .append('g')
    .attr('class', 'y axis')
    .call(yAxis);

  svg
    .append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0,${height})`)
    .call(xAxis);

  // Create groups for each series, rects for each segment
  const groups = svg
    .selectAll('g.cost')
    .data(dataset)
    .enter()
    .append('g')
    .attr('class', 'cost')
    .style('fill', (d, i) => colors[i]);

  const rect = groups
    .selectAll('rect')
    .data(d => d)
    .enter()
    .append('rect')
    .attr('x', d => x(d.x))
    .attr('y', d => y(d.y0 + d.y))
    .attr('height', d => y(d.y0) - y(d.y0 + d.y))
    .attr('width', x.rangeBand())
    .on('mouseover', () => {
      tooltip.style('display', null);
    })
    .on('mouseout', () => {
      tooltip.style('display', 'none');
    })
    .on('mousemove', function(d) {
      const xPosition = d3.mouse(this)[0] - 15;
      const yPosition = d3.mouse(this)[1] - 25;
      tooltip.attr('transform', `translate(${xPosition},${yPosition})`);
      tooltip.select('text').text(d.y);
    });

  // Draw legend
  const legend = svg
    .selectAll('.legend')
    .data(colors)
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => `translate(30,${i * 19})`);

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
      switch (i) {
        case 4:
          return 'Line of Credit flex';
        case 3:
          return 'Line of Credit fixed';
        case 2:
          return "Robert's Car (2.89%)";
        case 1:
          return "Laurie's Car";
        case 0:
          return 'Student Loan';
      }
    });

  // Prep the tooltip bits, initial display is hidden
  var tooltip = svg
    .append('g')
    .attr('class', 'tooltip')
    .style('display', 'none');

  tooltip
    .append('rect')
    .attr('width', 30)
    .attr('height', 20)
    .attr('fill', 'white')
    .style('opacity', 0.5);

  tooltip
    .append('text')
    .attr('x', 15)
    .attr('dy', '1.2em')
    .style('text-anchor', 'middle')
    .attr('font-size', '12px')
    .attr('font-weight', 'bold');
}

//////////////////////////////
// dnajs-node-jsdom-starter //
//////////////////////////////

// Run:
//    $ cd dnajs-node-jsdom-starter
//    $ npm update
//    $ node app.js

const html = `
<!doctype html>
<html lang=en>
   <head>
      <meta charset=utf-8>
      <title>Tasks</title>
   </head>
   <body>
      <p id=task class=dna-template>~~title~~</p>
   </body>
</html>
`;

const { JSDOM } = require('jsdom');
const window =    new JSDOM(html).window;
const $ =         require('jquery')(window);
const dna =       require('dna.js')(window, $);

// To Do Application
function app() {
   dna.clone('task', { title: 'Order bulgogi' });
   dna.clone('task', { title: 'Eat bulgogi' });
   }
app();

// Output
console.log('Data model:');
console.log(dna.getModel('task'));
console.log('Task elements:');
function printNode(i, elem) { console.log(elem.outerHTML); }
$('.task').each(printNode);

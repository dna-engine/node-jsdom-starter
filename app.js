//////////////////////
// dnajs-node-jsdom //
//////////////////////

// Run:
//    $ cd dnajs-node-jsdom
//    $ npm update
//    $ node spec.js

var html = `
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
var document = require('jsdom').jsdom(html, { url: 'http://example.com' });
var window =   document.defaultView;
var $ =        require('jquery')(window);
var dna =      require('dna.js')(window, $);

function app() {
   dna.clone('task', { title: 'Order bulgogi' });
   dna.clone('task', { title: 'Eat bulgogi' });
   }
app();

// Output
console.log('Data model:');
console.log(dna.getModel('task'));
console.log();
console.log('Task elements:');
function printNode() { console.log(this.outerHTML); }
$('.task').each(printNode);

//////////////////////////////
// node-jsdom-starter //
//////////////////////////////

// Run:
//    $ cd node-jsdom-starter
//    $ npm install
//    $ node app.js

// Imports
import { JSDOM } from 'jsdom';
import { dna } from 'dna-engine';
import jQuery from 'jquery';

// Setup
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
const dom = new JSDOM(html);
const $ = jQuery(dom.window);
dna.initGlobal(dom.window, $);

// To Do Application
const app = () => {
   dna.clone('task', { title: 'Order bulgogi' });
   dna.clone('task', { title: 'Eat bulgogi' });
   };
app();

// Output
console.log('Data model:');
console.log(dna.getModel('task'));
console.log('Task elements:');
const printNode = (node) => console.log(node.outerHTML);
$('.task').toArray().forEach(printNode);

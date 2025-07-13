//////////////////////////////
// node-jsdom-starter //
//////////////////////////////

// Run:
//    $ cd node-jsdom-starter
//    $ npm install
//    $ node app

// Imports
import { JSDOM } from 'jsdom';
import { dna } from 'dna-engine';

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
dna.initGlobal(dom.window);

// To Do Application
const app = () => {
   dna.clone('task', { title: 'Order bulgogi' });
   dna.clone('task', { title: 'Eat bulgogi' });
   };
app();

// Output
console.info();
console.info('Data model:');
console.info(dna.getModels('task'));
console.info();
console.info('Task elements:');
const elems = [...dom.window.document.getElementsByClassName('task')];
elems.forEach(elem => console.info(elem.outerHTML));

/**
 * Prior ES6, you use single quotes (‘) or double quotes (“) to wrap a string literal. 
 * And the strings have a very limited functionality.
 * In ES6, template literals provide the syntax that allows you to work with string in a safer and cleaner way.
 * 
 * Template literal provides features: multiline string, string format, HTML escape
 */

// Template literal is wrapped around backticks
let str = `Template literal in ES6`;
console.log(str);// Template literal in ES6
console.log(str.length); // 23
console.log(typeof str);// string
// ------------------------------------------------------------------------------------------------
/**
 * Prior ES6, a multiline string is created by manually including the newline character (\n)
 * backslash (\) placed after the newline character (\n) indicates 
 * the continuation of the string rather than a new line
 * However, this technique is not consistent across JS engines
 */
let multilineStr = 'Multiline \n\
string';
console.log(multilineStr);

// Another way to create multiline string
let multilineStr2 = ['This text',
'can',
'span multiple lines'].join('\n');
console.log(multilineStr2);

// Multiline string in template literal syntax
// Note that the whitespace is a part of the string, therefore, you are responsible for making sure the text line up with proper indentation
let multilineStr3 =
`This text
can
span multiple lines`;
console.log(multilineStr3);
// ------------------------------------------------------------------------------------------------
/**
 * Template literal allows HTML escaping, i.e. transform a string so that it is safe to include in HTML.
 */
var post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};

var {title, exceprt, body, tags} = post;
 
var postHtml = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${exceprt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
    </ul>
</footer>`;
console.log(postHtml);

// ------------------------------------------------------------------------------------------------
/**
 * Template literal allows string formatting 
 */
// Variable substitution
let firstName = 'John',
lastName = 'Doe';

let greeting = `Hi ${firstName}, ${lastName}`;
console.log(greeting); // Hi John, Doe
// Expression substitution
let price = 8.99,
    tax = 0.1;
var netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;
console.log(netPrice); // netPrice:$9.89
// ------------------------------------------------------------------------------------------------
/**
 * Define format as a tagged template
 * result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`
 * This means the passed arguments to format are as follows:
 * literals array = ["", ' item cost ', '.']
 * substituitions array = [`${quantity}`, `$${(quantity * priceEach).toFixed(2)}`]
 */
function format(literals, ...substitutions) {
    let result = '';
 
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    // add the last literal
    result += literals[literals.length - 1];
    return result;
}
 // 
 // 
let quantity = 9,
    priceEach = 8.99,
    result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`;
 
console.log(result); // 9 items cost $80.91.
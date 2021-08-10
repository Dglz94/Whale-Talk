let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to', 'Program')

const index = secretMessage.indexOf('easily')
secretMessage[index] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming')


const index1 = secretMessage.indexOf('get')

secretMessage.splice(index1,5, 'know')
console.log(secretMessage.join(' '))
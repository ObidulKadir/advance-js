let letters = new Set(['a','b']);
letters.add('d');
letters.add('e')
console.log(letters)
console.log(letters.has('e'));
letters.clear();
console.log(letters)
letters.add('a');
console.log(letters.values())
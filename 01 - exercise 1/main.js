function reverseWords(str) {
  console.log(str.split(' ').reverse(' ').join(' '));
}

reverseWords('Desde Argelia Buenas tardes')

function noSpace(x){
  console.log(x.replace(/\s/g, ''));
}

noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')
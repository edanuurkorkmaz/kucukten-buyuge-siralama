/* Bir dizi sayıyı küçükten büyüğe sıralayan bir fonksiyon yazın.

Adımlar:  

sort ile diziyi sıralayın.

Sayı sıralaması için bir karşılaştırma fonksiyonu kullanın. */


const numbers = [2,6,92,4,7,0,345,676,23,425,67];
console.log(numbers);

function fromSmallToLarge(){
    return numbers.sort((a,b) => a - b);
}

const sortedNumbers = fromSmallToLarge(numbers);

console.log(sortedNumbers);

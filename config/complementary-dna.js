// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// My Solutions





function DNAStrand(dna){
  const dnaArray = dna.split('')
  const complementaryStrand = dnaArray.map(x => {
    switch (x) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'G':
        return 'C';
      case 'C':
        return 'G';
    }
  })

  return complementaryStrand.join('')
  
}





var pairs = {'A':'T','T':'A','C':'G','G':'C'};
const DNAStrand = (dna) => dna.split('').map((v) => pairs[v]).join('');
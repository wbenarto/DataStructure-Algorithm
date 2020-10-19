// without repititions
function getPermutations(options) {
    const permutations = []

    if (options.length === 1) {
        return [options];
    }

    // Run recursively until one left
    const partialPermutations = getPermutations(options.slice(1))

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i];
        
        const firstOption = options[0]

        for (let j = 0; j <= partialPermutation.length; j++) {
            const permutationInFront = partialPermutation.slice(0,j);
            const permutationAfter = partialPermutation.slice(j);
            permutations.push(permutationInFront.concat([firstOption], permutationAfter));
        }
    }

    return permutations;
}

const todoListItems = ['Walk the dog', 'clean the toilet', 'buy groceries', 'order food']

console.log(getPermutations(todoListItems))
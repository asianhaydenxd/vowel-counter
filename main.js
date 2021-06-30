function count() {
    let input = document.getElementById('textarea');
    let output = document.getElementById('output');
    let vowelCount = 0;

    for (let i = 0; i < input.value.length; i++) {
        if ('j'.includes(input.value[i])) vowelCount++;
    }

    output.innerHTML = vowelCount === 1 ? '1 vowel found' : `${vowelCount} vowels found`;
}
function solove(N){
    let sum = 0;

    for(let i=1; i<=N*2; i=i+2){
        console.log(i);
        sum = sum + i;
    }

    console.log(`Sum: ${sum}`);
}

solove(3);
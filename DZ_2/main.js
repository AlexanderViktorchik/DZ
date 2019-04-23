// цикл for
for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

// цикл while
let i = 1;
while (i < 8) {
    if (i == 6) {
        i++;
    }
    console.log(i);
    i++;
}

// цикл do...while
let num = 1;
do {
    if (num == 6) {
        num++;
    }
    console.log(num);
    num++;
}
while (num < 8) 
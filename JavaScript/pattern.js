function rightAngleTriangle(row){
    for(let i = 1; i<=row; i++){
        let str ="";

        for(let j =1; j<=i; j++){
            if(j===1 || j===i || i === row){
                str +="*";
            } else{
                str +=" ";
            }
        }
        console.log(str);
    }
}


// rightAngleTriangle(5);




// hollow sqaure
function square(row){
    for(let i=1; i<=row; i++){
        let str = "";

        for(let j=1; j<=row; j++){
            if(i===1 || i=== row){
                str+="*";
            } else{
                if(j===row || j===1){
                    str+="*";
                } else{
                    str+=" ";
                }
            }
        }
        console.log(str);
    }
}


// square(5);




// Ai written code

function hollowDiamond(row) {
    // 1. Top half of the diamond (including the middle row)
    for (let i = 1; i <= row; i++) {
        let str = "";

        // Add leading spaces
        for (let j = 1; j <= row - i; j++) {
            str += " ";
        }

        // Add the stars and hollow spaces
        for (let k = 1; k <= 2 * i - 1; k++) {
            // Print star only at the first and last position of the row
            if (k === 1 || k === 2 * i - 1) {
                str += "*";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }

    // 2. Bottom half of the diamond
    for (let i = row - 1; i >= 1; i--) {
        let str = "";

        // Add leading spaces
        for (let j = 1; j <= row - i; j++) {
            str += " ";
        }

        // Add the stars and hollow spaces
        for (let k = 1; k <= 2 * i - 1; k++) {
            // Print star only at the first and last position of the row
            if (k === 1 || k === 2 * i - 1) {
                str += "*";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
}

// hollowDiamond(4);





// my hand written code

function diamond (rows){
    for(let i =1; i<= rows; i++){
        let str ="";

        for(let j =1; j<=rows-i; j++){
            str +=" ";
        }

        for(let k=1; k<=2*i-1; k++){
            if(k===1 || k===2*i-1){
                str +="*";
            } else{
                str +=" ";
            }
        }
        console.log(str);
    }

    for(let i = rows-1; i>=1; i--){
        let str="";

        for(let j=1; j<=rows-i; j++){
            str += " ";
        }

        for(let k=1; k<= 2*i-1; k++){
            if(k===1 || k===2*i-1){
                str +="*";
            } else{
                str += " ";
            }
        }
        console.log(str);
    }
}

// diamond(4);


function hollowSquare(rows){
    for(let i =1; i<=rows; i++){
        let str = "";

        for(let j = 1; j<=rows; j++){
            if(j===1 || j===rows || i===rows){
                str +="*";
            } else{
                str += " ";
            }
        }
        console.log(str);
    }
}


hollowSquare(5);
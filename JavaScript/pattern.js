function rightAngleTriangle(rows){
    for(let i=1; i<=rows; i++){
        let rowStr = "";

        for(let j = 1; j<=i; j++){
            rowStr +="*"
        }
        console.log(rowStr);
    }
}


// rightAngleTriangle(5);


function square(rows){
    for(let i=0; i<rows; i++){
        let str = "";

        for(let j=rows; j>0; j--){
            if(i===0 || i=== rows-1){
                str+="*";
            } else{
                if(j===rows || j===1){
                    str+="*";
                } else{
                    str+=" ";
                }
            }
        }
        console.log(str);
    }
}


square(5);
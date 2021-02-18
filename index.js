
const stringToNumber=(str='')=>{
    if( str&& typeof str==='string'){
        let splitStringIntoArray=str.split(""); //split all string in array
        let numberArray=splitStringIntoArray.map(item=>Number(item)); //coverted array's element mapped as Number
        let hasMinus=splitStringIntoArray[0]==='-'; //in converted array check minues is exists or not
        numberArray= hasMinus?numberArray.filter((_item,index)=>index!==0):numberArray; //minus exists we will cut array withoutminues otherwise normal converted will be in count
        let temp=[];
       for (let x of numberArray){    
           if(isNaN(x)){
               //if element's of array is not a number then will break loop
             break;
           }
           else{
              temp.push(x) //if elements is number will push in temp
           }
       }
       const finalArray=Number( temp.join('',","));//final array which we got after loop should be convert from array to string
       return hasMinus?`-${finalArray}`: finalArray;  //if final array has minus initial then we return with minus ,otherwise simply return final array
    }
    else{
        return 'Enter string only'
    }
};

let testCase1=stringToNumber('42');//42
let testCase2=stringToNumber('0');//0
let testCase3=stringToNumber('42a');//42
let testCase4=stringToNumber('42a35');//42
let testCase5=stringToNumber('abc42');//0
let testCase6=stringToNumber('-42')//-42
let testCase7=stringToNumber('-42-42-36');//-42
let testCase8=stringToNumber('42-');//42
console.log(testCase1,testCase2,testCase3,testCase4,testCase5,testCase6,testCase7,testCase8)



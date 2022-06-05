
export const AddCount = "AddCount";
export const SubCount = "SubCount";

export const AddCounter = (count)=>{
    // console.log(count);
    return {type:AddCount, payload:count}
}

export const SubCounter = (count)=>{
    // console.log(count);
    return {type:SubCount, payload:count}
}
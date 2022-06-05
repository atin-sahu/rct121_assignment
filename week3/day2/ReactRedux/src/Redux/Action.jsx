
export const Action = {
    inc:"INC",
    dec:"DEC"
}

export const IncCount = (count)=>{
    return {
        type:Action.inc,
        paylod:count
    }
}

export const DecCount = (count)=>{
    return {
        type:Action.dec,
        paylod:count
    }
}




export const convertTaskColor = (type:string | undefined) => {
    switch (type) {
        case 'работа':
            return '#6CCCA9';
        case 'обучение':
            return '#BF6CCC';
        case 'хобби':
            return '#6C76CC';
        case 'другое':
            return '#CC6C6C';
    }
}
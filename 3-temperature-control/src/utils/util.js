export const bgChange = (e) => {
    let className;
  
    switch(e) {
        case -30:
            className = 'minus-thirty';
            break;
        case -20:
            className = 'minus-twenty';
            break;
        case -10:
            className = 'minus-ten';
            break;
        case 0:
            className = 'zero';
            break;
        case 10:
            className = 'ten';
            break;
        case 20:
            className = 'twenty';
            break;
        case 30:
            className = 'thirty';
            break;
        case 40:
            className = 'forty';
            break;
        default:
            className = 'none';
            break;
    }
  
    return className;
}
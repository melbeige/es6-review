import logger, {appName, smartyFunction} from './tools'
const addressees= ["John Uzo", "Mary Smart","Paul Umoh"];
addressees.map(addressee =>{
    let message = `Dear ${addressee},
    It is my pleasure to infrom you that I am very confused which is making me lost`;
    logger(message);
})
logger("Welcome! She said she" + appName + ".There is a function that returns," + smartyFunction());
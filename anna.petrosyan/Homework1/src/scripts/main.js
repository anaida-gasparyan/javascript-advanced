var myFunc= function ( op1, op2, operator)
{
    "use strict";
    switch(operator)
    {
        case "+" :return parseFloat(op1)+parseFloat(op2);
        case "-" :return parseFloat(op1)-parseFloat(op2);
        case "*" :return parseFloat(op1)*parseFloat(op2);
        case "/" :return parseFloat(op1)/parseFloat(op2);
        default : return 0;
    }

};

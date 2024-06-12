export class CustomRegularExpressions {
    // General
    static standardCharacters: RegExp = /^[A-Za-z0-9\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\\\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~\s]*$/;
    static hasUpper: RegExp = /[A-Z]/;
    static hasLower: RegExp = /[a-z]/;
    static hasSpace: RegExp = /[ ]/;
    static hasNumber: RegExp = /[0-9]/;
    static hasLetter: RegExp = /[a-zA-Z]/;
    static hasSpecialCharacter: RegExp = /[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\\\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~]/;
    // Name
    static firstName: RegExp = /^[a-z ,.'-]*$/i;
    static lastName: RegExp = /^[a-z ,.'-]*$/i;
    // Dates
    static year: RegExp = /^(181[2-9]|18[2-9]\d|19\d\d|2\d{3}|30[0-3]\d|304[0-8])$/;
    static dateOfBirth: RegExp = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    // Private
    static accountNumber: RegExp = /^\w{1,17}$/;
    static routingNumber: RegExp = /^((0[0-9])|(1[0-2])|(2[1-9])|(3[0-2])|(6[1-9])|(7[0-2])|80)([0-9]{7})$/;
    static ssn: RegExp = /^\d{3}-\d{2}-\d{4}$/;
    // Addres
    static address: RegExp = /^[a-zA-Z0-9\s,.'-]*$/i;
    static city: RegExp = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']*$/i;
    static state: RegExp = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']*$/i;
    static stateShort: RegExp = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/i;
    static zip: RegExp = /^\d{5}$|^\d{5}-\d{4}$/i;

    static usdCurrency: RegExp = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/;
}
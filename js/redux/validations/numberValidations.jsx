export const PHONE_NUMBER = /(\d{3})-?(\d{3})-?(\d{4})/;
export const ZIP = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
export const EMAIL = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
export const NUMERIC = /^\d+\.\d{0,2}$/;
export const INTEGER = /^\d{1,3}$/;
export const ALPHA_NUMERIC = /^[a-z0-9]+$/i;
export const PERCENT = /^\d{0,3}(\.\d{1,4})?$/; // allow up to three digits (for 100%), and optional 4 digits after decimal

export function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function isAlphaNumeric(n) {
    return ALPHA_NUMERIC.test(n);
}

export function isInteger(n) {
    return INTEGER.test(n);
}

export function isPercent(n) {
    return PERCENT.test(n);
}

export function isDecimal(n) {
    return NUMERIC.test(n);
}

export function isPhoneNumber(n) {
    return PHONE_NUMBER.test(n);
}

export function isZip(n) {
    return ZIP.test(n);
}

export function isEmail(email) {
    return EMAIL.test(email);
}

export function formatDate(date) {
    if (!isNaN(date) && Date.parse(date)) {
        return moment(date).format('l');
    }
}

export const DEBIT = "Débito";
export const CREDIT = "Crédito";

/**
 * @param amount A numeric value.
 * @returns Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
 */
export const isNotANumber = (amount = 0) => {
    return !amount || isNaN(Number(amount));
}
import { CREDIT, DEBIT, isNotANumber } from "./model/bank.js"

/**
 * [DEBIT]: transaction to subtract from the current balance,
 * [CREDIT]: transaction to add to the current balance.
 * @param {*} transaction
 * @param {number} currentBalance
 * @returns {number} A numeric value with updated balance.
 */
export const updateBalance = (transaction = {}, currentBalance = 0) => {
    if(isNotANumber(transaction.monto) || DEBIT !== transaction.tipo && CREDIT !== transaction.tipo) {
        console.warn(`[UPDATE BALANCE] Invalid value transaction: id: ${transaction.id} `);
        return currentBalance;
    }
    if(DEBIT === transaction.tipo) {
        return currentBalance -= Number(transaction.monto);
    } else {
        return currentBalance += Number(transaction.monto);
    }
}
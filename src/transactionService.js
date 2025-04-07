import { CREDIT, DEBIT, isNotANumber } from "./model/bank.js"

/**
 * @param {*} transaction
 * @param {*} currentTransactionNumber 
 * @returns {{debit: number, credit: number}} A Object value with updated number of transactions.
 */
export const countNumberTransaction = (transaction = {}, currentTransactionNumber = {}) => {
    if(DEBIT !== transaction.tipo && CREDIT !== transaction.tipo) {
        console.warn(`[COUNT - TRANSACTION] Invalid value transaction: id: ${transaction.id} `);
        return currentTransactionNumber;
    }

    if(DEBIT === transaction.tipo) {
        currentTransactionNumber.debit ++;
    } else {
        currentTransactionNumber.credit ++;
    }
    
    return currentTransactionNumber;
}

/**
 * @param {*} transaction
 * @param {*} currentTransactionHighestAmount
 * @returns {{amount: number, id: string}} A Object value with higher transaction amount compared to the current transaction.
 */
export const getTransactionHigherAmount = (transaction = {}, currentTransactionHighestAmount = {}) => {
    if(isNotANumber(transaction.monto)) {
        console.warn(`[TRANSACTION HIGHER] Invalid value transaction: id: ${transaction.id} `);
    }
    return Number(transaction.monto) > currentTransactionHighestAmount.amount ? {id: transaction.id, amount: Number(transaction.monto)} : currentTransactionHighestAmount;
}
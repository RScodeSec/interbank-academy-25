import * as readline from 'readline';
import fs from "fs";
import csv from "csv-parser";
import { updateBalance } from "./src/accountingService.js";
import { countNumberTransaction, getTransactionHigherAmount } from "./src/transactionService.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let finalBalance = 0;
let numberTransactions = {
    debit: 0,
    credit: 0
};
let higherAmountTransaction = {
    id: "",
    amount: 0
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function printMenu() {
    console.log("MAINFRAME CODESAT 2024 ::::: TRANSACTION IBK \nWELCOME su!!");
    console.log("============ CODESAT ======================");
    console.log(`\nOpciones disponibles: \n1 -> Obtener Reporte de Transacciones. \n2 -> Salir.`)
    console.log("===========================================");

    rl.question("Por favor ingrese una opcion(1-2): ", handleMenu)
}

function handleMenu(input = "") {
    if (input.trim() === "1") {
        generateReport();
    } else if (input.trim() === "2") {
        rl.close();
    } else {
        console.error("[❌] Por favor ingrese una opcion valida!")
        printMenu();
    }
}

function generateReport() {
    fs.createReadStream(`${__dirname}/data.csv`, "utf-8")
        .pipe(csv())
        .on("data", (row) => {
            processTransaction(row);
        })
        .on("error", (err) => {
            console.error(`OPERATION ERROR]  ${err.message}`);
        })
        .on("end", () => {
            console.log(buildSummary());
        });
}

function processTransaction(transaction) {
    finalBalance = updateBalance(transaction, finalBalance);
    numberTransactions = countNumberTransaction(transaction, numberTransactions);
    higherAmountTransaction = getTransactionHigherAmount(transaction, higherAmountTransaction);
}

function buildSummary() {
    return ` \n
Reporte de Transacciones
---------------------------------------------
Balance Final: ${finalBalance}
Conteo de Transacciones: Crédito: ${numberTransactions.credit} Débito: ${numberTransactions.debit}
Transacción de Mayor Monto: ID ${higherAmountTransaction.id} - ${higherAmountTransaction.amount}`

}
import type { Scope, Span } from "@sentry/vue";
import * as Sentry from "@sentry/vue";

export function sendMessage(message: string, messageCount: number) {
  for (let i = 0; i < messageCount; i++) {
    Sentry.captureMessage(message);
  }
}

export function sendError(errorType: string, errorMessage: string, errorCount: number) {
  let e: Error;

  switch (errorType) {
    case "EvalError":
      e = new EvalError(errorMessage);
      break;
    case "RangeError":
      e = new RangeError(errorMessage);
      break;
    case "ReferenceError":
      e = new ReferenceError(errorMessage);
      break;
    case "SyntaxError":
      e = new SyntaxError(errorMessage);
      break;
    case "TypeError":
      e = new TypeError(errorMessage);
      break;
    case "URIError":
      e = new URIError(errorMessage);
      break;
    default:
      e = new Error(errorMessage);
  }

  for (let i = 0; i < errorCount; i++) {
    Sentry.captureException(e);
  }
}

export function sendTransactions(txns: number = 1, spansPerTxn: number = 1) {
  const timestamp = new Date().toISOString();

  for (let i = 0; i < txns; i++) {
    const txnName = `txn_${timestamp}_${i}`;

    Sentry.withScope((scope: Scope) => {
      scope.setTransactionName(txnName);

      // start "transaction"
      Sentry.startSpan(
        {
          name: txnName,
          scope: scope,
          op: txnName,
          forceTransaction: true,
          attributes: {
            transaction: i,
            timestamp: timestamp,
          },
        },
        (span1: Span) => {
          for (let j = 0; j < spansPerTxn; j++) {
            const spanName = `span_${timestamp}_${i}_${j}`;

            // start span
            Sentry.startSpan(
              {
                name: spanName,
                scope: scope,
                op: spanName,
                forceTransaction: false,
                attributes: {
                  transaction: i,
                  span: j,
                  timestamp: timestamp,
                },
              },
              (span2: Span) => {
                // do nothing span
              }
            );
          }
        }
      );
    });
  }
}

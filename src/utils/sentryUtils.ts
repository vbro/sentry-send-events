import { ref, type Ref } from "vue";
import * as Sentry from "@sentry/vue";

const defaultDsn: string = import.meta.env.VITE_DEFAULT_SENTRY_DSN;
const dsn: Ref<string | null> = ref<string | null>(null);
const isDefaultDsn: Ref<boolean | null> = ref<boolean | null>(null);

function initSentry(app: any, newDsn: string = defaultDsn) {
  dsn.value = newDsn;
  isDefaultDsn.value = defaultDsn === dsn.value;
  Sentry.init({
    app: app,
    dsn: newDsn,
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost"],
    // Session Replay
    replaysSessionSampleRate: 1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

export { initSentry, dsn, defaultDsn, isDefaultDsn };

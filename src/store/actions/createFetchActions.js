import { createActions } from 'redux-actions';
import { identity, camelCase, upperFirst } from 'lodash';

function createFetchActions(resource, options = {}) {
  const actions = createActions({
    [`FETCH_${resource}`]: options.request_payload || identity,
    [`CANCEL_FETCH_${resource}`]: options.cancel_payload || identity,
    [`FETCH_${resource}_TRIGGERED`]: options.trigger_payload || identity,
    [`FETCH_${resource}_SUCCEEDED`]: options.success_payload || identity,
    [`FETCH_${resource}_FAILED`]: options.failure_payload || identity,
    [`FETCH_${resource}_CANCELLED`]: options.cancelled_payload || identity
  });

  const camelResource = upperFirst(camelCase(resource));

  return {
    request: actions[`fetch${camelResource}`],
    cancel: actions[`cancelFetch${camelResource}`],
    triggered: actions[`fetch${camelResource}Triggered`],
    succeeded: actions[`fetch${camelResource}Succeeded`],
    failed: actions[`fetch${camelResource}Failed`],
    cancelled: actions[`fetch${camelResource}Cancelled`]
  };
}

export default createFetchActions;

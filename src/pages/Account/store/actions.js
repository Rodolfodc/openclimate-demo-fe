export const ACCOUNT_DASHBOARD = "ACCOUNT_DASHBOARD";
export const ACCOUNT_DASHBOARD_SUCCESS = "ACCOUNT_DASHBOARD_SUCCESS";
export const ACCOUNT_DASHBOARD_FAILURE = "ACCOUNT_DASHBOARD_FAILURE";
export const ACCOUNT_VIEW = "ACCOUNT_VIEW";
export const ACCOUNT_VIEW_SUCCESS = "ACCOUNT_VIEW_SUCCESS";
export const ACCOUNT_VIEW_FAILURE = "ACCOUNT_VIEW_FAILURE";

export const fetchAccountDashboard = payload => ({
    type: ACCOUNT_DASHBOARD,
    payload
});


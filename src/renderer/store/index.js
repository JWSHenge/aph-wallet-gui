import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

const pjson = require('../../../package.json');

const state = {
  activeTransaction: null,
  contacts: [],
  currency: null,
  currencySymbol: null,
  currentEditContact: null,
  currentLoginToWallet: null,
  currentNetwork: null,
  currentWallet: null,
  gasClaim: null,
  holdings: [],
  lastReceivedBlock: null,
  lastSuccessfulRequest: null,
  latestVersion: null,
  portfolio: null,
  recentTransactions: [],
  requests: {},
  searchTransactionFromDate: moment().startOf('day').subtract(7, 'days'),
  searchTransactionToDate: null,
  searchTransactions: [],
  sendInProgress: false,
  showAddContactModal: false,
  showAddTokenModal: false,
  showClaimGasModal: false,
  showImportAWalletModal: false,
  showLoginToWalletModal: false,
  showPortfolioHeader: true,
  showPriceTile: true,
  showSendAddressModal: false,
  showSendRequestLedgerSignature: false,
  showSendWithLedgerModal: false,
  showWalletBackupModal: false,
  statsToken: null,
  version: pjson.version,
  wallets: [],
  transactionDetails: [],
  nep5Balances: [],
};

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
});

export {
  actions,
  getters,
  mutations,
  state,
  store,
};

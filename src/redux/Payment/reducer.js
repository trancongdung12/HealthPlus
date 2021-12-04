/* eslint-disable prettier/prettier */
import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { PaymentTypes } from './actions';

export const INITIAL_STATE = Immutable({
  merchantcode: "MOMOIQXQ20210323",
  merchantname: "App Health+",
  merchantNameLabel: "Thanh Toán của Health+ App",
  billdescription: "Nâng cấp Gói MOMO",
  paymentStatus: false,
  paymentSever: false,
  errorPayment: null,
  PaymentResponse: null,
  dataConfirmPaymentUser: null,
  PackOfData: 'Free',

});

export const confirmPaymentUser = (state) =>
  state.merge({ paymentStatus: true, errorPayment: null });

export const confirmPaymentUserSuccess = (state, { data }) =>
  state.merge({
    dataConfirmPaymentUser: data,
    });

export const confirmPaymentServer = (state) =>
  state.merge({
    paymentSever: true,
    });
export const paymentSuccess = (state, { pack }) =>
  state.merge({
    paymentStatus: false,
    PackOfData: pack,
  });

export const paymentFailure = (state, { error }) =>
  state.merge({ paymentStatus: false, errorPayment: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [PaymentTypes.CONFIRM_PAYMENT_USER]: confirmPaymentUser,
  [PaymentTypes.CONFIRM_PAYMENT_USER_SUCCESS]: confirmPaymentUserSuccess,
  [PaymentTypes.CONFIRM_PAYMENT_SERVER]: confirmPaymentServer,
  [PaymentTypes.PAYMENT_FAILURE]: paymentSuccess,
  [PaymentTypes.PAYMENT_SUCCESS]: paymentSuccess,
});

export default reducer;

import { makeActionCreator, makeConstantCreator } from "../../utils/ReduxUtils";

export const PaymentTypes = makeConstantCreator(
    'CONFIRM_PAYMENT_USER',
    'CONFIRM_PAYMENT_USER_SUCCESS',
    'CONFIRM_PAYMENT_SERVER',
    'PAYMENT_FAILURE',
    'PAYMENT_SUCCESS'
)

const confirmPaymentUser = (jsonData) => makeActionCreator(PaymentTypes.CONFIRM_PAYMENT_USER, {jsonData});
const confirmPaymentUserSuccess = (data) => makeActionCreator(PaymentTypes.CONFIRM_PAYMENT_USER_SUCCESS, {data});
const confirmPaymentServer = (data) => makeActionCreator(PaymentTypes.CONFIRM_PAYMENT_SERVER,  {data});
const paymentSuccess = ( pack ) => makeActionCreator(PaymentTypes.PAYMENT_SUCCESS, { response, pack });
const paymentFailure = (error) => makeActionCreator(PaymentTypes.PAYMENT_FAILURE, { error });

export default {
  confirmPaymentUser,
  confirmPaymentUserSuccess,
  confirmPaymentServer,
  paymentSuccess,
  paymentFailure,
};
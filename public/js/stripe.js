/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = require('stripe')(
    'pk_test_51KvcQvEmMqCxQIRAwkZloqkqRPtyIsa1hHCuFho8TntJyD200qRNn8KazKomHtnKLriKmVOmVDaqh7i6acG5Mrko00zKj35hKQ'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

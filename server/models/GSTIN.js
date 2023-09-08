const mongoose = require('mongoose');

const gstinSchema = new mongoose.Schema({
  stjCd: String,
  lgnm: String,
  stj: String,
  dty: String,
  cxdt: String,
  gstin: String,
  einvoiceStatus: String,
  nba: [String],
  lstupdt: String,
  rgdt: String,
  ctb: String,
  sts: String,
  ctjCd: String,
  ctj: String,
  tradeNam: String,
  adadr: [
    {
      addr: {
        bnm: String,
        st: String,
        loc: String,
        bno: String,
        stcd: String,
        flno: String,
        lt: String,
        lg: String,
        pncd: String,
      },
      ntr: [String],
    },
  ],
  pradr: {
    addr: {
      bnm: String,
      st: String,
      loc: String,
      bno: String,
      stcd: String,
      flno: String,
      lt: String,
      lg: String,
      pncd: String,
    },
    ntr: [String],
  },
});

module.exports = mongoose.model('GSTIN', gstinSchema);

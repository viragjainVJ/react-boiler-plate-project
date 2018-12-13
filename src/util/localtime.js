import moment from 'moment';
import defaults from 'lodash/defaults';
const DATE_FORMAT = 'MM/DD/YYYY';
const TIME_FORMAT = 'hh:mm a';
const TIME_FORMAT_CAPS = 'hh:mm A';
const DATE_TIME_FORMAT = `${DATE_FORMAT} - ${TIME_FORMAT}`;
const DATE_TIME_FORMAT_CAPS = `${DATE_FORMAT} - ${TIME_FORMAT_CAPS}`;

const localtime = {
  DATE_TIME_FORMAT,
  DATE_TIME_FORMAT_CAPS,
  DATE_FORMAT,
  TIME_FORMAT,
  defaultOptions: {
    offset: 0,
    stringDateFormat: DATE_TIME_FORMAT,
    dateFormat: DATE_TIME_FORMAT,
    invalid: '-'
  },
  START_DATE_FIELD: 'startDate',
  END_DATE_FIELD: 'endDate',

  getLocalTime: function(options) {
    options = defaults(options, this.defaultOptions);
    var parsedTime;
    if (options.dateString) {
      parsedTime = moment.utc(options.dateString, options.dateFormat);
    } else if (options.date) {
      parsedTime = moment.utc(options.date);
    }

    return parsedTime && parsedTime.isValid() ? parsedTime.utcOffset(options.offset).format(options.stringDateFormat) : options.invalid;
  },

  getUTCTime: function(options) {
    options = defaults(options, this.defaultOptions);
    var parsedTime;
    if (options.dateString) {
      parsedTime = moment.utc(options.dateString, options.dateFormat);
    } else if (options.date) {
      parsedTime = moment.utc(options.date.format(options.dateFormat), options.dateFormat);
    }
    return parsedTime && parsedTime.isValid() ? parsedTime.utcOffset(options.offset * -1).format(options.stringDateFormat) : options.invalid;
  },

  getStartDate: offset =>
    moment()
      .utc()
      .utcOffset(offset)
      .hour('00')
      .minute('00')
      .format(DATE_TIME_FORMAT),

  getEndDate: offset =>
    moment()
      .utc()
      .utcOffset(offset)
      .hour('23')
      .minute('59')
      .format(DATE_TIME_FORMAT),

  stampToLocalString: epochValue => moment(epochValue).format(DATE_TIME_FORMAT)
};

export default localtime;

import flatten from 'flat';
import shared from './shared.json';
import validation from './validation.json';

const locale = {
  shared: flatten(shared, {
    delimiter: '_',
  }),
  validation: flatten(validation, {
    delimiter: '_',
  }),
};

export default locale;

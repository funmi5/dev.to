import { h } from 'preact';
import PropTypes from 'prop-types';
import { Button } from '@crayons';
import { defaultChildrenPropTypes } from '../src/components/common-prop-types';

export const snackbarItemProps = {
  children: defaultChildrenPropTypes.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      handler: PropTypes.func.isRequired,
      lifespan: PropTypes.number.isRequired,
    }),
  ),
};

export const SnackbarItem = ({ message, actions = [] }) => (
  <div className="crayons-snackbar__item flex">
    <div className="crayons-snackbar__body">{message}</div>
    <div className="crayons-snackbar__actions">
      {actions.map(({ text, handler }) => (
        <Button variant="ghost-success" inverted onClick={handler} key={text}>
          {text}
        </Button>
      ))}
    </div>
  </div>
);

SnackbarItem.displayName = 'SnackbarItem';

SnackbarItem.propTypes = snackbarItemProps.isRequired;

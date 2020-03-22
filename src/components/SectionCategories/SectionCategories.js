import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '..';

import css from './SectionCategories.css';

import babysitterImage from './images/babysitters.jpg';
import childminderImage from './images/childminders.jpg';
import nannyImage from './images/nannies.jpg';
import maternityNurseImage from './images/maternity-nurses.jpg';
import vouchersImage from './images/vouchers.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const categoryLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>{nameText}</div>
    </NamedLink>
  );
};

const vouchersLink = () => {
  return (
    <a href="https://mailchi.mp/ff51d27655af/oogo-vouchers" className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={vouchersImage} alt={'Vouchers'} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <span className={css.locationName}>Vouchers</span>
      </div>
    </a>
  );
};

const SectionCategories = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.homeInfoBoxes}>
        <div className={`${css.homeInfoBox} ${css.homeInfoBoxOne}`}>
          <p>
            As the Covid-19 situation unfolds around us globally, it often feels like the worst of
            times - but it is also bringing out the best in many of us.
          </p>
          <p>
            We are working to support those working to help us all. Our medical professionals,
            pharmacy staff, supply chain workers, delivery drivers, shop workers, scientists,
            technicians, social workers, IT professionals, social workers, customer care reps ...
            the list goes on.
          </p>
          <p>
            There are many of us who can help the families of these front-line workers with
            childcare. If we've got immunity or have tested negative and have been stringently
            socially distancing, we are well placed to help. If you think you can help a local
            family to get to work to help us all, get in touch.
          </p>
        </div>
        <div className={`${css.homeInfoBox} ${css.homeInfoBoxTwo}`}>
          <p>
            Our team of "Minder Finders" will be Sourcing, Validating and Managing minders across
            jurisdictions for as many months as is needed.
          </p>
          <p>
            Our team of Minder Finders are all Volunteers. They are multi-lingual and cross
            disciplinarian.
          </p>
          <p>
            We have a 24-hour helpline to assist people so that they can make informed decisions
            with daily access to healthcare professionals for the most up-to-date guidance on a
            country by country basis.
          </p>
          <p>
            If you think you can volunteer your time to help us find incredible Minders for our
            front-line workers, get in touch.
          </p>
        </div>
      </div>
      <div className={css.title}>
        <FormattedMessage id="SectionCategories.title" />
      </div>
      <div className={css.locations}>
        {categoryLink('Babysitters', babysitterImage, 'pub_category=babysitter')}
        {categoryLink('Childminders', childminderImage, 'pub_category=childminder')}
        {categoryLink('Nannies', nannyImage, 'pub_category=nanny')}
        {categoryLink('Maternity Nurses', maternityNurseImage, 'pub_category=maternity_nurse')}
        {vouchersLink()}
      </div>
      <div className={css.locationRequest}>
        Can't find what you're looking for? We'll find it for you -{' '}
        <a
          href="https://mailchi.mp/5a03ac4aab1a/nr7802vc1c"
          className={css.locationRequestLink}
          title="Request your area"
          target="_blank"
        >
          Click Here
        </a>
      </div>
    </div>
  );
};

SectionCategories.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCategories.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionCategories;

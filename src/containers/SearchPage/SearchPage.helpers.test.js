import {
  validURLParamForExtendedData,
  validFilterParams,
  validURLParamsForExtendedData,
  pickSearchParamsOnly,
} from './SearchPage.helpers.js';

const urlParams = {
  pub_category: 'maternity_nurse',
  pub_filters: 'first_aid,own_transport',
};

const filters = {
  categoryFilter: {
    paramName: 'pub_category',
    options: [{ key: 'nanny' }, { key: 'maternity_nurse' }],
  },
  filtersFilter: {
    paramName: 'pub_filters',
    options: [{ key: 'first_aid' }, { key: 'own_transport' }],
  },
};

describe('SearchPage.helpers', () => {
  describe('validURLParamForExtendedData', () => {
    it('returns a valid parameter', () => {
      const validParam = validURLParamForExtendedData('pub_category', 'nanny', filters);
      expect(validParam).toEqual({ pub_category: 'nanny' });
    });

    it('takes empty params', () => {
      const validParam = validURLParamForExtendedData('pub_category', '', filters);
      expect(validParam).toEqual({});
    });

    it('drops an invalid param value', () => {
      const validParam = validURLParamForExtendedData('pub_category', 'invalid', filters);
      expect(validParam).toEqual({});
    });

    it('drops a param with invalid name', () => {
      const validParam = validURLParamForExtendedData('pub_invalid', 'first_aid', filters);
      expect(validParam).toEqual({});
    });
  });

  describe('validFilterParams', () => {
    it('returns valid parameters', () => {
      const validParams = validFilterParams(urlParams, filters);
      expect(validParams).toEqual(urlParams);
    });

    it('takes empty params', () => {
      const validParams = validFilterParams({}, filters);
      expect(validParams).toEqual({});
    });

    it('drops an invalid filter param value', () => {
      const params = { pub_category: 'nanny', pub_filters: 'invalid1,invalid2' };
      const validParams = validFilterParams(params, filters);
      expect(validParams).toEqual({ pub_category: 'nanny' });
    });

    it('drops non-filter params', () => {
      const params = { pub_category: 'nanny', other_param: 'somevalue' };
      const validParams = validFilterParams(params, filters);
      expect(validParams).toEqual({ pub_category: 'nanny' });
    });
  });

  describe('validURLParamsForExtendedData', () => {
    it('returns valid parameters', () => {
      const validParams = validURLParamsForExtendedData(urlParams, filters);
      expect(validParams).toEqual(urlParams);
    });

    it('takes empty params', () => {
      const validParams = validURLParamsForExtendedData({}, filters);
      expect(validParams).toEqual({});
    });

    it('drops an invalid filter param value', () => {
      const params = { pub_category: 'nanny', pub_filters: 'invalid1,invalid2' };
      const validParams = validURLParamsForExtendedData(params, filters);
      expect(validParams).toEqual({ pub_category: 'nanny' });
    });

    it('returns non-filter params', () => {
      const params = { pub_category: 'nanny', other_param: 'somevalue' };
      const validParams = validURLParamsForExtendedData(params, filters);
      expect(validParams).toEqual(params);
    });
  });

  describe('pickSearchParamsOnly', () => {
    it('returns search parameters', () => {
      const params = {
        address: 'address value',
        origin: 'origin value',
        bounds: 'bounds value',
      };
      const validParams = pickSearchParamsOnly(params, filters);
      expect(validParams).toEqual({ bounds: 'bounds value' });
    });

    it('returns filter parameters', () => {
      const validParams = pickSearchParamsOnly(urlParams, filters);
      expect(validParams).toEqual(urlParams);
    });

    it('drops an invalid filter param value', () => {
      const params = { pub_category: 'nanny', pub_filters: 'invalid1,invalid2' };
      const validParams = pickSearchParamsOnly(params, filters);
      expect(validParams).toEqual({ pub_category: 'nanny' });
    });

    it('drops non-search params', () => {
      const params = { pub_category: 'nanny', other_param: 'somevalue' };
      const validParams = pickSearchParamsOnly(params, filters);
      expect(validParams).toEqual({ pub_category: 'nanny' });
    });
  });
});

import { Op } from "sequelize";

type getPaginationType = {
  offset: number;
  limit: number;
};

class Pagination {
  private query;
  private schema;
  private sort;
  private page;
  private limit;
  constructor(req, schema) {
    this.page = req.query.page ? parseInt(req.query.page) : 1;
    this.limit = req.query.limit ? parseInt(req.query.limit) : 10;
    this.sort = req?.query?.sort;
    this.query = req?.query?.query;
    this.schema = schema;
  }
  getPagination(): getPaginationType {
    const offset = (this.page - 1) * this.limit;
    return {
      offset,
      limit: this.limit,
    };
  }
  getSearch() {
    if (this.query) {
      const attributes = this.schema;
      const _keys = Object.keys(attributes);
      let query = {};
      _keys.map((_cs) => {
        query = {
          ...query,
          [_cs]: {
            [Op.like]: `%${this.query}%`,
          },
        };
      });
      return {
        [Op.or]: query,
      };
    }
  }
  getSort(sort) {
    if (this.sort) {
      const sort = Array.isArray(this.sort)
        ? this.sort
        : Array.isArray(JSON.parse(this.sort))
        ? JSON.parse(this.sort)
        : [];
      return {
        order: [sort],
      };
    }
    if (sort) {
      return {
        order: [sort],
      };
    }
    return {};
  }
  params(sort) {
    return {
      ...this.getPagination(),
      ...this.getSort(sort),
    };
  }
  getSearchCustom() {
    if (this.query) {
      const attributes = this.schema;
      let query = {};
      attributes.map((_cs) => {
        query = {
          ...query,
          [_cs]: {
            [Op.like]: `%${this.query}%`,
          },
        };
      });
      return {
        [Op.or]: query,
      };
    }
  }
}

export default Pagination;

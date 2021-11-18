import types from '../types';

/**
 * @param {import('../types').Pool} pool
 * @param {string} query
 * @returns {Promise<import('../types').Result>}
 */
const queryDb = async (pool, query) => {
  return pool.connect().then((client) => {
    return client.query(query).then((res) => {
      client.release();
      return res;
    });
  });
};

export default queryDb;
export { queryDb };

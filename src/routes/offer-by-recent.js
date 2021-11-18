import { queryDb } from '../utils/query-db';
import types from '../types';

/**
 *
 * @param {import('../types').Pool} pool
 * @param {*} minPostId
 * @returns {Promise<Array<import('../types').Result>>}
 */
const offerByRecent = async (pool, minPostId) => {
  let query = 'SELECT * FROM offers ORDER BY id DESC LIMIT 100;';

  if (minPostId > 0) {
    query = `SELECT * FROM offers WHERE id < ${minPostId} ORDER BY id DESC LIMIT 100;`;
  }
  return queryDb(pool, query).then((res) => res.rows);
};

export default offerByRecent;
export { offerByRecent };

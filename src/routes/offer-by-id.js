import { queryDb } from '../utils/query-db';

/**
 * 
 * @param {import('../types').Pool} pool 
 * @param {number} postId 
 * @returns {Promise<Array<import('../types').Match>>}
 */
const offerById = async (pool, postId) => {
  return queryDb(pool, `SELECT * FROM offers WHERE id = ${postId};`).then(
    res => res.rows[0]
  );
};

export default offerById;
export { offerById };

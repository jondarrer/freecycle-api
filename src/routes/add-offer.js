import { queryDb } from '../utils/query-db';
import types from '../types';

/**
 * Adds an offer
 *
 * @param {import('../types').Pool} pool The database pool
 * @param {any} offer The offer
 * @param {Date} now Inserted/updated at date
 * @returns {Promise<any>} The result to return
 */
const addOffer = async (pool, offer, now) => {
  const nowStr = now.toISOString();
  return queryDb(
    pool,
    `INSERT INTO offers (id, group_id, inserted_at, updated_at) VALUES (${offer.postId}, '${offer.groupId}', ${nowStr}, ${nowStr});`
  ).then((res) => res.rows[0]);
};

export default addOffer;
export { addOffer };

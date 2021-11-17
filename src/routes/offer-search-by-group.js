import { queryDb } from '../utils/query-db';

/**
 * @typedef {Object} Result
 * @property {number} maxPostIdSearched
 * @property {Array<import('../types').Match>} matches
 */

/**
 * 
 * @param {import('../types').Pool} pool 
 * @param {string} searchTerm 
 * @param {string} groupId 
 * @param {number} minPostId 
 * @returns {Promise<Result>}
 */
const offerSearchByGroup = async (
  pool,
  searchTerm,
  groupId,
  minPostId
) => {
  const result = {};
  return queryDb(
    pool,
    `SELECT id, group_id FROM offers WHERE group_id = '${groupId}' AND id > ${minPostId} AND description LIKE '%${searchTerm}%';`
  )
    .then(res => {
      result.matches = res.rows.map(row => {
        return { id: row.id, groupId: row.group_id };
      });
      return queryDb(
        pool,
        `SELECT MAX(id) AS max_post_id_searched FROM offers WHERE group_id = '${groupId}';`
      );
    })
    .then(res => {
      result.maxPostIdSearched = res.rows[0].max_post_id_searched;
      return result;
    });
};

export default offerSearchByGroup;
export { offerSearchByGroup };

import {USERS} from './../../constants/table';

/**
 * Delete existing entries from evaluation_score table.
 *
 * @param {Object} knex
 *
 * @returns {Promise}
 */
export function seed(knex) {
  return knex(USERS).del();
}

import {USERS} from './../../constants/table';
import generateUUID from "../../helper/generateUUID"
import {hashPassword} from "../../helper/passwordUtils"

export function seed(knex) {
  return knex(USERS).insert([
    {
      user_id: generateUUID(),
      user_name: "superadminmaker",
      user_email: "maker@test.test",
      user_password: hashPassword("test"),
      created_at: new Date(),
      active: true,
    },
    {
      user_id: generateUUID(),
      user_name: "superadminchecker",
      user_email: "checker@test.test",
      user_password: hashPassword("test"),
      created_at: new Date(),
      active: true,
    }
  ])
}
import User from "./user.js";

export default class PremiumUser extends User {
  static MAX_BORROW_LIMIT = 5;
  constructor(id, name) {
    super(id, name)
  }

  get maxLimit() {
    return PremiumUser.MAX_BORROW_LIMIT
  }
}
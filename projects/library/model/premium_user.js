import User from "./user.js";

export default class PremiumUser extends User {
  static MAX_BORROW_LIMIT = 5;
  constructor(name, id) {
    super(name, id)
  }

  get maxLimit() {
    return PremiumUser.MAX_BORROW_LIMIT
  }
}
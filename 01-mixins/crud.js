const add = (Base) =>
  class extends Base {
    add() {}
  };
const update = (Base) =>
  class extends Base {
    update() {}
  };
const remove = (Base) =>
  class extends Base {
    remove() {}
  };
const get = (Base) =>
  class extends Base {
    get() {}
  };
//class User extends get(class {}) {}
//class Customer extends get(update(remove(add(class {})))) {}



class Mixin {
  constructor(Base) {
    this.Base = Base;
  }
  withMixin(...mixins) {
    return mixins.reduceRight((p, m) => m(p), this.Base);

    //Base+Get
    //Base+Get+Update
    //Base+Get+Update+Remove
    //Base+Get+Update+Remove+Add
  }
}
function inherit(Base) {
  return new Mixin(Base || class {});
}


class User extends inherit().withMixin(get) {}
class Customer extends inherit().withMixin(get, post, put, remove) {}
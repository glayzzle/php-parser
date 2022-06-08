// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/timeout_variation_4.phpt
  it("Timeout within call_user_func", function () {
    expect(parser.parseCode("<?php\nset_time_limit(1);\ncall_user_func('sleep', 1);\ncall_user_func('sleep', 1);\n?>\nnever reached here")).toMatchSnapshot();
  });
});

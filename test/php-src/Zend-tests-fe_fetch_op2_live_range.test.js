// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fe_fetch_op2_live_range.phpt
  it("FE_FETCH op2 is a def and needs special live range handling", function () {
    expect(parser.parseCode("<?php\ntry {\n    foreach ([\"test\"] as $k => func()[]) {}\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/errmsg_020.phpt
  it("errmsg: disabled function", function () {
    expect(parser.parseCode("<?php\ntry {\n    phpinfo();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

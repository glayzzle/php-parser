// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug78833.phpt
  it("Bug #78833 (Integer overflow in pack causes out-of-bound access)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(pack(\"E2E2147483647H*\", 0x0, 0x0, 0x0));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplTempFileObject_constructor_error.phpt
  it("SPL SplTempFileObject constructor sets correct defaults when pass 0 arguments", function () {
    expect(parser.parseCode("<?php\ntry {\n    new SplTempFileObject('invalid');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

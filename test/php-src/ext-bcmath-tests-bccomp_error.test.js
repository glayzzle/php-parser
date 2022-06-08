// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bccomp_error.phpt
  it("bccomp() requires well-formed values", function () {
    expect(parser.parseCode("<?php\ntry {\n    bccomp('a', '1');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    bccomp('1', 'a');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

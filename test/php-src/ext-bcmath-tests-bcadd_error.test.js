// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcadd_error.phpt
  it("bcadd() requires well-formed values", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcadd('a', '1');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    bcadd('1', 'a');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug80545.phpt
  it("Bug #80545 (bcadd('a', 'a') and bcadd('1', 'a') doesn't throw an exception)", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcadd('a', 'a');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    bcadd('1', 'a');\n} catch (\\ValueError $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});

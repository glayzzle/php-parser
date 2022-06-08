// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug60261.phpt
  it("Bug #60261 (phar dos null pointer)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $nx = new Phar();\n    $nx->getLinkTarget();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

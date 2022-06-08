// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug74949.phpt
  it("Bug #74949 (null pointer dereference in _function_string)", function () {
    expect(parser.parseCode("<?php\n$f = function () {};\n$r = new ReflectionMethod($f, \"__invoke\");\nunset($f);\necho $r, \"\\n\";\ntry  {\n    echo $r->getPrototype();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug79968.phpt
  it("dom: Bug #79968 - Crash when calling before without valid hierachy", function () {
    expect(parser.parseCode("<?php\n$cdata = new DOMText;\ntry {\n    $cdata->before(\"string\");\n} catch (DOMException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});

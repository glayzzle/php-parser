// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug74416.phpt
  it("Bug #74416 Wrong reflection on DOMNode::cloneNode", function () {
    expect(parser.parseCode("<?php\n$rm = new ReflectionMethod(DOMNode::class, \"cloneNode\");\nprintf(\"%d\\n%d\\n\", $rm->getNumberOfParameters(), $rm->getNumberOfRequiredParameters());\nforeach ($rm->getParameters() as $param) {\n    printf(\"Parameter #%d %s OPTIONAL\\n\", $param->getPosition(), $param->isOptional() ? \"IS\" : \"IS NOT\");\n}\n?>")).toMatchSnapshot();
  });
});

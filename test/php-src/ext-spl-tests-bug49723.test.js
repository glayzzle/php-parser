// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug49723.phpt
  it("LimitIterator: do not seek if not needed", function () {
    expect(parser.parseCode("<?php\n$it = new ArrayIterator(array());\n$lit = new LimitIterator($it, 0, 5);\nforeach ($lit as $v) {\n    echo $v;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});

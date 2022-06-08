// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_extra_args.phpt
  it("Immediately invoked closure with extra args", function () {
    expect(parser.parseCode("<?php\n(function() {})(new stdClass);\n?>\n===DONE===")).toMatchSnapshot();
  });
});

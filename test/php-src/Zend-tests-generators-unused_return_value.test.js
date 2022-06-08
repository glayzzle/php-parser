// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/unused_return_value.phpt
  it("There shouldn't be any leaks when the generator's return value isn't used", function () {
    expect(parser.parseCode("<?php\nfunction gen($foo) { yield; }\ngen('foo'); // return value not used\n?>\n===DONE===")).toMatchSnapshot();
  });
});

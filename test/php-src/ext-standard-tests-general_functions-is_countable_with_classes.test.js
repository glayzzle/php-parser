// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_countable_with_classes.phpt
  it("Test is_countable() function", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_countable(new class extends ArrayIterator {}));\nvar_dump(is_countable((array) new stdClass()));\nvar_dump(is_countable(new class implements Countable {\n    public function count(): int\n    {\n        return count(1, 'foo');\n    }\n}));\n?>")).toMatchSnapshot();
  });
});

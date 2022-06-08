// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/suppressed_incompatible_return_type.phpt
  it("Test that the notice can be suppressed when the return type/value of the overriding method is incompatible with the tentative return type/value of the overridden method", function () {
    expect(parser.parseCode("<?php\nclass MyDateTime extends DateTime\n{\n    /**\n     * @return DateTime|false\n     */\n    #[ReturnTypeWillChange]\n    public function modify(string $modifier) {\n        return false;\n    }\n}\n$date = new MyDateTime(\"2021-01-01 00:00:00\");\nvar_dump($date->modify(\"+1 sec\"));\n?>")).toMatchSnapshot();
  });
});

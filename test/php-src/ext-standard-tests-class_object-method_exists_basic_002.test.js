// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/method_exists_basic_002.phpt
  it("method_exists() on internal classes", function () {
    expect(parser.parseCode("<?php\necho \" ---(Internal classes, using string class name)---\\n\";\necho \"Does exception::getmessage exist? \";\nvar_dump(method_exists(\"exception\", \"getmessage\"));\necho \"Does stdclass::nonexistent exist? \";\nvar_dump(method_exists(\"stdclass\", \"nonexistent\"));\necho \"\\n ---(Internal classes, using class instance)---\\n\";\necho \"Does exception::getmessage exist? \";\nvar_dump(method_exists(new exception, \"getmessage\"));\necho \"Does stdclass::nonexistent exist? \";\nvar_dump(method_exists(new stdclass, \"nonexistent\"));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});

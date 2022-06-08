// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug25038.phpt
  it("Bug #25038 (call_user_func issues warning if function throws exception)", function () {
    expect(parser.parseCode("<?php\nfunction bar($x='no argument')\n{\n    throw new Exception(\"This is an exception from bar({$x}).\");\n}\ntry\n{\n    bar('first try');\n}\ncatch (Exception $e)\n{\n    print $e->getMessage().\"\\n\";\n}\ntry\n{\n    call_user_func('bar','second try');\n}\ncatch (Exception $e)\n{\n    print $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

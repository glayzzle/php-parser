// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/verify_return_instanceof.phpt
  it("Instanceof checks in VERIFY_RETURN_TYPE optimization may deal with unlinked classes", function () {
    expect(parser.parseCode("<?php\ninterface foo { }\ninterface biz {}\nclass qux implements foo {\n    public function bar(): biz {\n        $x = $this;\n        return $x;\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/__serialize_002.phpt
  it("__serialize() mechanism (002): TypeError on invalid return type", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __serialize() {\n        return $this;\n    }\n}\ntry {\n    serialize(new Test);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

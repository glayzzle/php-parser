// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_error_001.phpt
  it("Test unserialize() with non-bool/array allowed_classes", function () {
    expect(parser.parseCode("<?php\nclass foo {\n        public $x = \"bar\";\n}\n$z = array(new foo(), 2, \"3\");\n$s = serialize($z);\ntry {\n    unserialize($s, [\"allowed_classes\" => null]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    unserialize($s, [\"allowed_classes\" => 0]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    unserialize($s, [\"allowed_classes\" => 1]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

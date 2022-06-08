// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/closedir_without_arg.phpt
  it("Calling closedir() without argument and without opening a directory beforehand", function () {
    expect(parser.parseCode("<?php\ntry {\n    closedir();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug69751.phpt
  it("Bug #69751: Change Error message of sprintf/printf for missing/typo position specifier.", function () {
    expect(parser.parseCode("<?php\ntry {\n    sprintf('%$s, %2$s %1$s', \"a\", \"b\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    sprintf('%3$s, %2$s %1$s', \"a\", \"b\");\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    sprintf('%2147483648$s, %2$s %1$s', \"a\", \"b\");\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

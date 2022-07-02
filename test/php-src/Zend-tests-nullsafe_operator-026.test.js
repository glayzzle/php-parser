// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/026.phpt
  it("Nullsafe chain in static property / method name", function () {
    expect(parser.parseCode("<?php\nclass Test {\n}\n$null = null;\ntry {\n    Test::${$null?->foo}->bar;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    Test::{$null?->foo}()->bar;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

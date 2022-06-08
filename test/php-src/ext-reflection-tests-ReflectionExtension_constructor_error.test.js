// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionExtension_constructor_error.phpt
  it("ReflectionExtension::__construct()", function () {
    expect(parser.parseCode("<?php\ntry {\n    $obj = new ReflectionExtension();\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    $obj = new ReflectionExtension('foo', 'bar');\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\ntry {\n    $obj = new ReflectionExtension([]);\n} catch (TypeError $re) {\n    echo \"Ok - \".$re->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/substr_count_error.phpt
  it("Test substr_count() function (error conditions)", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing error conditions ***\\n\";\n$str = 'abcdefghik';\n/* offset before start */\ntry {\n    substr_count($str, \"t\", -20);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n/* offset > size of the string */\ntry {\n    substr_count($str, \"t\", 25);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n/* Using offset and length to go beyond the size of the string:\n   Exception is expected, as length+offset > length of string */\ntry {\n    substr_count($str, \"i\", 5, 7);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n/* length too small */\ntry {\n    substr_count($str, \"t\", 2, -20);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug61487.phpt
  it("grapheme() str[i]pos limits", function () {
    expect(parser.parseCode("<?php\ntry {\n    grapheme_stripos(1,1,2147483648);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    grapheme_strpos(1,1,2147483648);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

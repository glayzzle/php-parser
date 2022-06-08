// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/gettext_bindtextdomain-emptydomain.phpt
  it("Test if bindtextdomain() errors if the domain is empty.", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\ntry {\n    bindtextdomain('', 'foobar');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

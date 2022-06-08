// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug29119.phpt
  it("Bug #29119 (html_entity_decode() misbehaves with UTF-8)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bin2hex(html_entity_decode('&ensp;&thinsp;&lsquo;&dagger;&prime;&frasl;&euro;', ENT_QUOTES, 'UTF-8')));\n?>")).toMatchSnapshot();
  });
});

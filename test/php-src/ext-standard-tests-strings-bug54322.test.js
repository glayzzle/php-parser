// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug54322.phpt
  it("Bug #54322: Null pointer deref in get_html_translation_table due to information loss in long-to-int conversion", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(get_html_translation_table(NAN, 0, \"UTF-8\") > 0);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

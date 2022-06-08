// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/021.phpt
  it("tidy_get_opt_doc()", function () {
    expect(parser.parseCode("<?php\ntry {\n    tidy_get_opt_doc(new tidy, 'some_bogus_cfg');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$t = new tidy;\nvar_dump($t->getOptDoc('ncr'));\nvar_dump(strlen(tidy_get_opt_doc($t, 'wrap')) > 99);\n?>")).toMatchSnapshot();
  });
});

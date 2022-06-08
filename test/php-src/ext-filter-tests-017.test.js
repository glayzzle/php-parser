// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/017.phpt
  it("filter_var() and FILTER_VALIDATE_REGEXP", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"data\", FILTER_VALIDATE_REGEXP, array(\"options\"=>array(\"regexp\"=>'/.*/'))));\nvar_dump(filter_var(\"data\", FILTER_VALIDATE_REGEXP, array(\"options\"=>array(\"regexp\"=>'/^b(.*)/'))));\nvar_dump(filter_var(\"data\", FILTER_VALIDATE_REGEXP, array(\"options\"=>array(\"regexp\"=>'/^d(.*)/'))));\nvar_dump(filter_var(\"data\", FILTER_VALIDATE_REGEXP, array(\"options\"=>array(\"regexp\"=>'/blah/'))));\nvar_dump(filter_var(\"data\", FILTER_VALIDATE_REGEXP, array(\"options\"=>array(\"regexp\"=>'/\\[/'))));\ntry {\n    filter_var(\"data\", FILTER_VALIDATE_REGEXP);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});

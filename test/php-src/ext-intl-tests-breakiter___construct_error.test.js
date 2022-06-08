// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/breakiter___construct_error.phpt
  it("IntlRuleBasedBreakIterator::__construct(): arg errors", function () {
    expect(parser.parseCode("<?php\nfunction print_exception($e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" . $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\n//missing ; at the end:\ntry {\n    var_dump(new IntlRuleBasedBreakIterator('[\\p{Letter}\\uFFFD]+;[:number:]+'));\n} catch (IntlException $e) {\n    print_exception($e);\n}\ntry {\n    var_dump(new IntlRuleBasedBreakIterator());\n} catch (TypeError $e) {\n    print_exception($e);\n}\ntry {\n    var_dump(new IntlRuleBasedBreakIterator(1,2,3));\n} catch (TypeError $e) {\n    print_exception($e);\n}\ntry {\n    var_dump(new IntlRuleBasedBreakIterator('[\\p{Letter}\\uFFFD]+;[:number:]+;', array()));\n} catch (TypeError $e) {\n    print_exception($e);\n}\ntry {\n    var_dump(new IntlRuleBasedBreakIterator('[\\p{Letter}\\uFFFD]+;[:number:]+;', true));\n} catch (IntlException $e) {\n    print_exception($e);\n}\n$rbbi = new IntlRuleBasedBreakIterator(\".;\");\ntry {\n    $rbbi->__construct(\".;\");\n} catch (Error $e) {\n    print_exception($e);\n}\n?>")).toMatchSnapshot();
  });
});

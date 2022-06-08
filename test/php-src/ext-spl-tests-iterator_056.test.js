// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_056.phpt
  it("SPL: Calling __construct(void) on class extending SPL iterator", function () {
    expect(parser.parseCode("<?php\nclass myFilterIterator extends FilterIterator {\n    function accept(): bool { }\n}\nclass myCachingIterator extends CachingIterator { }\nclass myRecursiveCachingIterator extends RecursiveCachingIterator { }\nclass myParentIterator extends ParentIterator { }\nclass myLimitIterator extends LimitIterator { }\nclass myNoRewindIterator extends NoRewindIterator  {}\ntry {\n    $it = new myFilterIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $it = new myCachingIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $it = new myRecursiveCachingIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $it = new myParentIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $it = new myLimitIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $it = new myNoRewindIterator();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

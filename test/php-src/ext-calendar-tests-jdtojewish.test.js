// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/calendar/tests/jdtojewish.phpt
  it("jdtojewish() function", function () {
    expect(parser.parseCode("<?php\nvar_dump(jdtojewish(gregoriantojd(10,28,2002)).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,28,2002),true).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,28,2002),true, CAL_JEWISH_ADD_ALAFIM_GERESH).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,28,2002),true, CAL_JEWISH_ADD_ALAFIM).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,28,2002),true, CAL_JEWISH_ADD_ALAFIM_GERESH+CAL_JEWISH_ADD_ALAFIM).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,28,2002),true, CAL_JEWISH_ADD_GERESHAYIM).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,8,2002),true, CAL_JEWISH_ADD_GERESHAYIM).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,8,2002),true, CAL_JEWISH_ADD_GERESHAYIM+CAL_JEWISH_ADD_ALAFIM_GERESH).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,8,2002),true, CAL_JEWISH_ADD_GERESHAYIM+CAL_JEWISH_ADD_ALAFIM).\"\\r\\n\".\n    jdtojewish(gregoriantojd(10,8,2002),true, CAL_JEWISH_ADD_GERESHAYIM+CAL_JEWISH_ADD_ALAFIM+CAL_JEWISH_ADD_ALAFIM_GERESH).\"\\r\\n\".\n    jdtojewish(gregoriantojd(3,10,2007)).\"\\r\\n\");\necho jdtojewish(gregoriantojd(11,5,2002)) . \"\\n\";\necho jdtojewish(gregoriantojd(11,29,2004)) . \"\\n\";\necho jdtojewish(gregoriantojd(1,1,9998)) . \"\\n\";\ntry {\n    jdtojewish(gregoriantojd(1,1,9998),true);\n} catch (ValueError $ex) {\n    echo \"{$ex->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});

// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/locale_sort.phpt
  it("Sort with SORT_LOCALE_STRING", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL, 'fr_FR.ISO8859-1', 'fr_FR');\n$table = array(\"AB\" => \"Alberta\",\n\"BC\" => \"Colombie-Britannique\",\n\"MB\" => \"Manitoba\",\n\"NB\" => \"Nouveau-Brunswick\",\n\"NL\" => \"Terre-Neuve-et-Labrador\",\n\"NS\" => \"Nouvelle-�cosse\",\n\"ON\" => \"Ontario\",\n\"PE\" => \"�le-du-Prince-�douard\",\n\"QC\" => \"Qu�bec\",\n\"SK\" => \"Saskatchewan\",\n\"NT\" => \"Territoires du Nord-Ouest\",\n\"NU\" => \"Nunavut\",\n\"YT\" => \"Territoire du Yukon\");\nasort($table, SORT_LOCALE_STRING);\nvar_dump($table);\n?>")).toMatchSnapshot();
  });
});

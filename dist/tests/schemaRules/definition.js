"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var describeInteractionProp_1 = require("../describeInteractionProp");
var describeOptionalProp_1 = require("../describeOptionalProp");
var factory_1 = require("../factory");
var itsInvalid_1 = require("../itsInvalid");
var collection_1 = require("../helpers/collection");
var validData = {};
var correctResponsesPattern = collection_1.default(factory_1.stringValue);
exports.default = function (test) {
    itsInvalid_1.default(10, 'not an object', test);
    describeOptionalProp_1.default('name', factory_1.languageMap, validData, test);
    describeOptionalProp_1.default('description', factory_1.languageMap, validData, test);
    describeOptionalProp_1.default('type', factory_1.iri, validData, test);
    describeOptionalProp_1.default('moreInfo', factory_1.iri, validData, test);
    describeOptionalProp_1.default('extensions', factory_1.extensions, validData, test);
    describeOptionalProp_1.default('interactionType', factory_1.interactionType, validData, test);
    describeOptionalProp_1.default('correctResponsesPattern', correctResponsesPattern, validData, test);
    describeInteractionProp_1.default(['choices'], 'choice', test);
    describeInteractionProp_1.default(['choices'], 'sequencing', test);
    describeInteractionProp_1.default(['scale'], 'likert', test);
    describeInteractionProp_1.default(['source', 'target'], 'matching', test);
    describeInteractionProp_1.default(['steps'], 'performance', test);
};

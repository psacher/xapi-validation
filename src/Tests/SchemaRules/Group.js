const describeOptionalProp = require('../DescribeOptionalProp');
const itsInvalid = require('../ItsInvalid');
const agentSchema = require('../Helpers/AgentSchema');
const { actor } = require('../Factory');

module.exports = test => {
  itsInvalid({
    objectType: 'Group',
    name: 'Test',
    member: [],
  }, 'contains no members', test);
  describe('member', () => {
    actor((value, valid) =>
      test({
        objectType: 'Group',
        name: 'Test',
        mbox: 'mailto:test@example.com',
        member: [value],
      }, valid)
    );
  });
  agentSchema(test);
};

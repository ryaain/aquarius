const Aquarius = require('../aquarius');

const URL = 'https://playoverwatch.com/en-us/career/pc/us/';

class Overwatch extends Aquarius.Command {
  constructor() {
    super();

    this.description = "Links to the Overwatch profile's career overview page";
  }

  helpMessage(server) {
    let msg = super.helpMessage();
    const nickname = Aquarius.Users.getNickname(server, this.client.user);

    msg += 'Usage:\n';
    msg += `\`\`\`@${nickname} overwatch [b.net tag]\`\`\``;
    return msg;
  }

  message(msg) {
    const profile = Aquarius.Triggers.messageTriggered(msg, /^overwatch ([\w]+#[\d]{4,5})$/i);
    if (profile) {
      this.log(`Overwatch called for ${profile[1]}`);
      return URL + profile[1].replace('#', '-');
    }

    return false;
  }
}

module.exports = new Overwatch();

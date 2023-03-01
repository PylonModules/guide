import * as config from '../config';

discord.on(discord.Event.GUILD_MEMBER_ADD, async (member) => {
  if (!config.autorole.enabled) return;
  var guild = await discord.getGuild(member.guildId);
  if (!guild)
    return console.log(
      '[PYLON MODULES] Something went wrong - please join our support server.'
    );

  config.autorole.roles.forEach(async (roleId) => {
    member.addRole(roleId);
    var role = await guild.getRole(roleId);
    if (!role)
      return console.log(
        `[AUTOROLE] Your autorole with id ${roleId} is invalid. Please make sure it is correct!`
      );
    console.log(
      `[AUTOROLE] Added autorole ${role.name} to ${member.user.username}`
    );
  });
});

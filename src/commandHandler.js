function commandHandler(bot, interaction) {
  if (
    !interaction.isCommand() &&
    !interaction.isButton() &&
    !interaction.isStringSelectMenu() &&
    !interaction.isAutocomplete()
  ) {
    return;
  }

  const { commandName } = interaction;
  switch (commandName ? commandName : interaction.customId.split("/")[0]) {
    case "catch":
      bot.commands.get("catch").run(bot, interaction);
      break;
  }
}

module.exports = { commandHandler };

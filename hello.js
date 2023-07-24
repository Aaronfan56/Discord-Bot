module.exports = {
    data: {
        name: 'hello',
        description: "Replies wth hello",
    },

    run: ({ interaction, message }) => {
        interaction.reply(`hello ${message.author.username}!`);
    },
};

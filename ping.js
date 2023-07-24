module.exports = {
    data: {
        name: 'ping',
        description: "Replies wth pong",
    },

    run: ({ interaction }) => {
        interaction.reply('Pong!');
    },
};

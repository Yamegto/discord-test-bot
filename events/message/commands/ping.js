module.exports= {
    exec: async ({ message }) => message.channel.send(". . .").then(msg => msg.edit(`Pong! 🏓 **${msg.createdTimestamp - message.createdTimestamp}** ms`)),
    config: { name: "ping", aliases: ["Pong", "latency", "ms"] }
};
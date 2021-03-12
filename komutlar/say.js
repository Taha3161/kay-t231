const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new MessageEmbed()
        .setColor("RED")
        .setAuthor(`Başarısız !`)
        .setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta`)
    );

  let botkomutkanal = "807592816133668893";

  if (message.channel.id !== botkomutkanal)
    return message.channel.send(
      ` Hey <@${message.author.id}> ! Bu komutu sadece <#${botkomutkanal}> kanalında kullanabilirsin.`
    );

  //// rol tanımlar
  let tag = "ɣ";
  const bayan = message.guild.roles.cache.get("807592814937899057").members
    .size;
  const erkek = message.guild.roles.cache.get("807592814937899055").members
    .size;
  const kayıtsız = message.guild.roles.cache.get("807592814954938374").members
    .size;
  const online = message.guild.members.cache.filter(
    u => u.presence.status != "offline"
  ).size;
  const boost_sayisi = message.guild.premiumSubscriptionCount;
  const boost_level = message.guild.premiumTier;
  const tagbir = message.guild.members.cache.filter(m =>
    m.user.username.includes(tag)
  ).size;
  const toplam = message.guild.memberCount;
  const ses = message.guild.channels.cache
    .filter(channel => channel.type == "voice")
    .map(channel => channel.members.size)
    .reduce((a, b) => a + b);
  const embed = new MessageEmbed()
    .setTitle(" Sunucu İstatistikleri")
    .setColor("GREEN")
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
    .setDescription(`
  **Toplam Üye =** ${toplam}

  **Aktif Üye =** ${online}

 ɣ **Taglı Üye =** ${tagbir}

 **Boost Sayısı =** ${boost_sayisi}

 **Boost Level Sayısı =** ${boost_level}

 **Seslideki Üye =** ${ses}

 **Bayan Üye =** ${bayan} 

 **Erkek Üye =** ${erkek}

 **Kayıtsız Üye =** ${kayıtsız}

`);

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0
};

exports.help = {
  name: "say"
};

const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  const codare = new Discord.MessageEmbed()

    .setColor("#fff000")
    .setAuthor(`Kayıt İçin`, client.user.avatarURL())
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .addField(
      `Kategoriler`,
      `<a:giris:819975501116080188> Erkek İçin ${prefix}e @etiket bla 123  \n<a:giris:819975501116080188> Kadın İçin ${prefix}k @etiket bla 123 `
    ) // bunlar boş kalırsa hata verir
    .setFooter(
      `Menüyü ${message.author.username} istedi .`,
      message.author.avatarURL()
    );

  return message.channel.send(codare);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
//codare
exports.help = {
  name: "yardım",
  description: "Komut kategorilerini atar",
  usage: "!yardım"
};

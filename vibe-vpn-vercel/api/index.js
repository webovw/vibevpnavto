var SUB = [
"#profile-title: 🔥 Vibe vpn",
"#profile-update-interval: 1",
"#support-url: https://t.me/VibeSupport_robot",
"#announce: 🪬 Обходы блокировок и глушилок — все тут",
"⚡ Проблемы? Пиши в тег. поддержку: @VibeSupport_robot",
"💡 Ссылка на поддержку под тремя точками → Бумажный самолётик ✉️",
"#subscription-userinfo: upload=0; download=0; total=0; expire=0",
"vless://402ced46-cf91-41f3-87a4-0a1a9e939a35@de-new.datanode-internal.net:443?encryption=none&flow=xtls-rprx-vision&fp=qq&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&security=reality&sid=abbcd128&type=tcp&sni=ads.x5.ru&spx=%2F#🇩🇪 Германия",
"vless://402ced46-cf91-41f3-87a4-0a1a9e939a35@ru.datanode-internal.net:443?encryption=none&flow=xtls-rprx-vision&fp=qq&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&security=reality&sid=abbcd128&type=tcp&sni=sun9-38.userapi.com&spx=%2F#🇷🇺 Россия YouTube 🎬",
"vless://402ced46-cf91-41f3-87a4-0a1a9e939a35@fi.datanode-internal.net:443?encryption=none&flow=xtls-rprx-vision&fp=qq&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&security=reality&sid=abbcd128&type=tcp&sni=sun9-36.userapi.com&spx=%2F#🇫🇮 Финляндия",
"vless://402ced46-cf91-41f3-87a4-0a1a9e939a35@res.datanode-internal.net:443?encryption=none&flow=xtls-rprx-vision&fp=qq&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&security=reality&sid=abbcd128&type=tcp&sni=ads.x5.ru&spx=%2F#🇸🇪 Швеция",
"vless://00000000-0000-0000-0000-000000000000@0.0.0.0:443?encryption=none&fp=firefox&security=reality&sid=00000000&type=tcp&sni=example.com&spx=%2F#Обход глушилки👇",
"vless://402ced46-cf91-41f3-87a4-0a1a9e939a35@res.datanode-internal.net:443?encryption=none&flow=xtls-rprx-vision&fp=qq&pbk=r6lN34m1nN-xQZ458j5NPD5xJ3_QBF2bGzY4KJEo4ic&security=reality&sid=abbcd128&type=tcp&sni=ads.x5.ru&spx=%2F#🇪🇺 Обход №1",
"vless://ee791990-83c7-11f1-9ca5-1e6febe3e1df@89.208.229.243:2053?encryption=none&fp=chrome&pbk=WUY8Lb4LfUUKLzZK3oSlRAdoy-Iu0w3Ait1-jtxbW1M&security=reality&sid=4b685844d0b4f724&type=grpc&sni=hh.ru&serviceName=grpc-direct&spx=%2F#🇪🇺 Обход №2",
"vless://ee791990-83c7-11f1-9ca5-1e6febe3e1df@5.188.140.194:2053?encryption=none&fp=chrome&pbk=WUY8Lb4LfUUKLzZK3oSlRAdoy-Iu0w3Ait1-jtxbW1M&security=reality&sid=4b685844d0b4f724&type=grpc&sni=hh.ru&serviceName=grpc-direct&spx=%2F#🇪🇺 Обход №3",
"vless://566f8818-17fe-4ca9-8035-c9081ece6f68@176.123.165.127:12672?encryption=none&type=tcp#🇪🇺 Обход №4",
"vless://566f8818-17fe-4ca9-8035-c9081ece6f68@87.242.85.201:35412?encryption=none&type=tcp#🇪🇺 Обход №5",
"trojan://3xyqos8NHMcJEFf_9E7jr4eZpGsy5kHg@rureg-1-f4f493.atlanta-games.com:443?security=tls&sni=rureg-1-f4f493.atlanta-games.com&type=grpc&serviceName=vlgrpc#🇪🇺 Обход №6"
].join("\n");

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache");
  res.status(200).send(SUB);
}

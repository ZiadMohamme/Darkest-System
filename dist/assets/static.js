"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _discord = require("discord.js");

const serverInfo = {
  serverId: '955360355792584734',
  generalRoles: [{
    name: 'members',
    id: '955773099897389116'
  }],
  moderation: {
    adminstrator: [{
      id: '955766324825567232',
      type: 'ROLE',
      permission: true
    }, {
      id: '955860990271053855',
      type: 'ROLE',
      permission: true
    }],
    moderator: [{
      id: '955765495502614569',
      type: 'ROLE',
      permission: true
    }, {
      id: '955862359312830556',
      type: 'ROLE',
      permission: true
    }, {
      id: '955885691357777920',
      type: 'ROLE',
      permission: true
    }],
    general: [{
      id: '955773099897389116',
      type: 'ROLE',
      permission: true
    }]
  },
  welcome: {
    Id: '955723170474766447',
    autoRole: ['955867871085481995', '955866867065561098', '955866504589631548', '955770929202462740', '955872684141576192', '955834589799125092', '956156660185972736', '955773099897389116'],
    botsRole: ['955834585437073428', '955773333910192159'],
    welcomePrivateMessage: `• ━━━━━━• 𝑨𝒅𝒅𝒓𝒆𝒔𝒔 •━━━━━━•

__**Java**__

> **Server Address**\`:\`
> **__mc.dunk-master.com__**

__**BedRock**__

> **Server Address**\`:\`
> **__mc.dunk-master.com__**

> **Server Port**\`:\`
> __**25669**__

__**Versions**__

> **__1.17__** **|** **__1.18.2__**

•━━━━━━━━━━━━━━━━━•`
  },
  roleUpadte: {
    Id: '955753370709278771',
    ignore: ['955866907049857034', '957669253828456468', '955867871085481995', '955879200215158864', '955766324825567232', '955866867065561098', '955866504589631548', '955770929202462740', '955834585437073428', '955872684141576192', '955834589799125092', '955866313350344704', '956156660185972736', '955879335741522000', '955879339495407708', '955865759635083285', '955865812131000430', '955866118692696064', '955773333910192159', '956619226708344902', '956619222627258379', '956619216147066880', '956619213219442708', '956619195993440327', '955872320738701322', '955872312954093580', '955872309493768303', '955872307916730419', '955872300476035132', '957641525771268166', '955872103029174272', '955770449592201246', '955773099897389116', '955867663094120468', '955867538821087313', '955867581691101184', '955885059804659802', '955885861487116359']
  },
  rulesChannelId: '955733600563785768',
  tempChannels: [{
    tempCategoryId: '955768373768233020',
    restrictedChannels: ['955768957833445416', '955769220434624542'],
    editChannelId: {
      id: '955768957833445416',
      baseRoles: [{
        id: '955360355792584734',
        deny: [_discord.Permissions.FLAGS.VIEW_CHANNEL, _discord.Permissions.FLAGS.CREATE_PRIVATE_THREADS, _discord.Permissions.FLAGS.CREATE_PUBLIC_THREADS, _discord.Permissions.FLAGS.SEND_MESSAGES_IN_THREADS]
      }, {
        id: '955773099897389116',
        allow: [_discord.Permissions.FLAGS.VIEW_CHANNEL],
        deny: [_discord.Permissions.FLAGS.CREATE_PRIVATE_THREADS, _discord.Permissions.FLAGS.CREATE_PUBLIC_THREADS, _discord.Permissions.FLAGS.SEND_MESSAGES_IN_THREADS, _discord.Permissions.FLAGS.ATTACH_FILES, _discord.Permissions.FLAGS.ADD_REACTIONS]
      }, {
        id: '955867663094120468',
        deny: [_discord.Permissions.FLAGS.VIEW_CHANNEL]
      }, {
        id: '955885861487116359',
        allow: [_discord.Permissions.FLAGS.VIEW_CHANNEL]
      }]
    }
  }, {
    tempCategoryId: '955772943747649566',
    restrictedChannels: ['955773325123133470', '955773434305077258'],
    editChannelId: {
      id: '955773325123133470',
      baseRoles: [{
        id: '955360355792584734',
        deny: [_discord.Permissions.FLAGS.VIEW_CHANNEL, _discord.Permissions.FLAGS.CREATE_PRIVATE_THREADS, _discord.Permissions.FLAGS.CREATE_PUBLIC_THREADS, _discord.Permissions.FLAGS.SEND_MESSAGES_IN_THREADS]
      }, {
        id: '955773099897389116',
        deny: [_discord.Permissions.FLAGS.CREATE_PRIVATE_THREADS, _discord.Permissions.FLAGS.CREATE_PUBLIC_THREADS, _discord.Permissions.FLAGS.SEND_MESSAGES_IN_THREADS, _discord.Permissions.FLAGS.ATTACH_FILES, _discord.Permissions.FLAGS.ADD_REACTIONS, _discord.Permissions.FLAGS.VIEW_CHANNEL]
      }, {
        id: '955867663094120468',
        deny: [_discord.Permissions.FLAGS.VIEW_CHANNEL]
      }, {
        id: '955885861487116359',
        allow: [_discord.Permissions.FLAGS.VIEW_CHANNEL]
      }, {
        id: '955885059804659802',
        allow: [_discord.Permissions.FLAGS.VIEW_CHANNEL]
      }]
    }
  }],
  logsChannelsId: '955754657051975680',
  serverInfoChannelId: '949561183122378813',
  liveStatus: {
    liveCategoryId: '952835995580129301',
    Roles: [{
      name: 'members',
      id: '955773099897389116'
    }, {
      name: 'Verifyed',
      id: '955770449592201246'
    }, {
      name: 'BOOSTS',
      id: '957641525771268166'
    }]
  },
  boostChannelId: '955753898407247882',
  linkBlockerIgnoreChannels: ['955736526468292618', '955751308760064040', '955769636950007818', '955863271762722916', '955758508119293962', '955758648796274728', '955723170474766447', '955733600563785768', '955863539812274208', '955735566387916830', '955769550161457202', '955769496172376154', '955753370709278771', '955753898407247882', '955766018679123978', '955765901775495178', '955765665548095498', '955765571411120158', '957114386965733476', '957114286558310401', '955863785770479717', '955757123575349289', '955757156882321428', '955757863228289034', '955757292664541204', '955767424387514368', '955754195665944608', '955754657051975680', '955755082010460170', '955755160179716137', '955755260369059861', '955773239605469184', '955769791229079594', '955770136957169724', '955768127587766303', '955768167928590386', '955766417477738538', '955766542686097458', '955772119466246196', '955772329194037288', '955757822669377596', '955733600563785769', '955759228881109032', '955774101358800926'],
  TwitchApi: {
    streamsNotifiactionChannelId: '955766018679123978',
    liveRoleId: '955866907049857034',
    liveStreamCategoryId: '960566222863355984',
    botsRole: {
      id: '955773333910192159',
      allow: [_discord.Permissions.FLAGS.VIEW_CHANNEL, _discord.Permissions.FLAGS.CONNECT]
    },
    liveStreamChannelRoles: [{
      id: '955360355792584734',
      deny: [_discord.Permissions.FLAGS.VIEW_CHANNEL, _discord.Permissions.FLAGS.CREATE_PRIVATE_THREADS, _discord.Permissions.FLAGS.CREATE_PUBLIC_THREADS, _discord.Permissions.FLAGS.SEND_MESSAGES_IN_THREADS]
    }, {
      id: '955773099897389116',
      deny: [_discord.Permissions.FLAGS.CREATE_PRIVATE_THREADS, _discord.Permissions.FLAGS.CREATE_PUBLIC_THREADS, _discord.Permissions.FLAGS.SEND_MESSAGES_IN_THREADS, _discord.Permissions.FLAGS.CONNECT, _discord.Permissions.FLAGS.SEND_MESSAGES]
    }],
    streamers: [{
      name: '000000000',
      discordId: '000000000'
    }]
  },
  // YouTubeApi: {
  //   newVideoNotifiactionChannelId: '949153973338775619',
  //   channelId: ['UCCLnQIRBkqnsRAqpp-6s91g', 'UCBazNt3il35vDU04U5Acm1w']
  // },
  font: {
    Q: '𝑸',
    W: '𝑾',
    E: '𝑬',
    R: '𝑹',
    T: '𝑻',
    Y: '𝒀',
    U: '𝑼',
    I: '𝑰',
    O: '𝑶',
    P: '𝑷',
    A: '𝑨',
    S: '𝑺',
    D: '𝑫',
    F: '𝑭',
    G: '𝑮',
    H: '𝑯',
    J: '𝑱',
    K: '𝑲',
    L: '𝑳',
    Z: '𝒁',
    X: '𝑿',
    C: '𝑪',
    V: '𝑽',
    B: '𝑩',
    N: '𝑵',
    M: '𝑴',
    '👥': '👥',
    '🤖': '🤖',
    '𝑸': 'Q',
    '𝑾': 'W',
    '𝑬': 'E',
    '𝑹': 'R',
    '𝑻': 'T',
    '𝒀': 'Y',
    '𝑼': 'U',
    '𝑰': 'I',
    '𝑶': 'O',
    '𝑷': 'P',
    '𝑨': 'A',
    '𝑺': 'S',
    '𝑫': 'D',
    '𝑭': 'F',
    '𝑮': 'G',
    '𝑯': 'H',
    '𝑱': 'J',
    '𝑲': 'K',
    '𝑳': 'L',
    '𝒁': 'Z',
    '𝑿': 'X',
    '𝑪': 'C',
    '𝑽': 'V',
    '𝑩': 'B',
    '𝑵': 'N',
    '𝑴': 'M'
  }
};
var _default = serverInfo;
exports.default = _default;
import { atom } from 'recoil';
import { atomName } from './constants';

/* eslint-disable */
const defaultValue = {
  author: 'cynicallogic',
  comments: [
    {
      author: 'RandomName01',
      body: 'Bruh',
      body_html: '&lt;div class="md"&gt;&lt;p&gt;Bruh&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570693670,
      depth: 0,
      downs: 0,
      id: 't1_f35vz2f',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35vz2f/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 1,
    },
    {
      author: 'shantanu011',
      body:
        "97% Disagree it's the most unpopular opinion I've seen here after that guy who wanted to be pregnant",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;97% Disagree it&amp;#39;s the most unpopular opinion I&amp;#39;ve seen here after that guy who wanted to be pregnant&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570683149,
      depth: 0,
      downs: 0,
      id: 't1_f35nn9e',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35nn9e/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 2233,
    },
    {
      author: 'OceLawless',
      body:
        "I'm gonna try this tonight op, and if it's shit I will come for you.\n\nEdit: just got home. Getting in shower now.\n\nEdit 2 electric boogaloo: risky click of the day. \n[No bamboozle](https://imgur.com/a/u1C215L)\n\nEdit 3: you!!!  I declare shenanigans.",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;I&amp;#39;m gonna try this tonight op, and if it&amp;#39;s shit I will come for you.&lt;/p&gt;\n\n&lt;p&gt;Edit: just got home. Getting in shower now.&lt;/p&gt;\n\n&lt;p&gt;Edit 2 electric boogaloo: risky click of the day. \n&lt;a href="https://imgur.com/a/u1C215L"&gt;No bamboozle&lt;/a&gt;&lt;/p&gt;\n\n&lt;p&gt;Edit 3: you!!!  I declare shenanigans.&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570680701,
      depth: 0,
      downs: 0,
      id: 't1_f35kuhk',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35kuhk/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 263,
    },
    {
      author: 'ShitOnMyArsehole',
      body:
        'Or the guy who likes sleeping in jeans\n\nEdit: to everyone commenting, I meant the dude liked to get into bed at night with the duvet on with jeans, not just taking a nap',
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Or the guy who likes sleeping in jeans&lt;/p&gt;\n\n&lt;p&gt;Edit: to everyone commenting, I meant the dude liked to get into bed at night with the duvet on with jeans, not just taking a nap&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570697457,
      depth: 1,
      downs: 0,
      id: 't1_f35y9gp',
      parent_id: 't1_f35nn9e',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35y9gp/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 638,
    },
    {
      author: 'HansenTakeASeat',
      body: 'Am I pregegnant or am I ok?',
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Am I pregegnant or am I ok?&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570703350,
      depth: 1,
      downs: 0,
      id: 't1_f361yrc',
      parent_id: 't1_f35nn9e',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f361yrc/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 56,
    },
    {
      author: 'nikithb',
      body: 'Or the guy who eats his cereal with water',
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Or the guy who eats his cereal with water&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570709099,
      depth: 2,
      downs: 0,
      id: 't1_f369ye5',
      parent_id: 't1_f35y9gp',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f369ye5/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 551,
    },
    {
      author: 'bellowingbullfinches',
      body:
        'Sleeping in jeans is fine on a couch or something, but not good in a bed under sheets.',
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Sleeping in jeans is fine on a couch or something, but not good in a bed under sheets.&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570710788,
      depth: 2,
      downs: 0,
      id: 't1_f36drup',
      parent_id: 't1_f35y9gp',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f36drup/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 32,
    },
    {
      author: 'Sazzybee',
      body:
        "Good lord, I wanted to down vote this but realised you're the messenger, we don't shoot the messenger",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Good lord, I wanted to down vote this but realised you&amp;#39;re the messenger, we don&amp;#39;t shoot the messenger&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570711829,
      depth: 3,
      downs: 0,
      id: 't1_f36ge9a',
      parent_id: 't1_f369ye5',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f36ge9a/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 286,
    },
    {
      author: 'ShitOnMyArsehole',
      body:
        "Yeah but you don't purposely go to bed in jeans like the poster did",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Yeah but you don&amp;#39;t purposely go to bed in jeans like the poster did&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570711069,
      depth: 3,
      downs: 0,
      id: 't1_f36efud',
      parent_id: 't1_f36drup',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f36efud/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 16,
    },
    {
      author: '_Noot_Noot',
      body: 'Can you get.....PREGANTE',
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;Can you get.....PREGANTE&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570710595,
      depth: 2,
      downs: 0,
      id: 't1_f36daww',
      parent_id: 't1_f361yrc',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f36daww/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 32,
    },
    {
      author: 'Macho_Mans_Ghost',
      body: '#AM I GREGNANT?!',
      body_html:
        '&lt;div class="md"&gt;&lt;h1&gt;AM I GREGNANT?!&lt;/h1&gt;\n&lt;/div&gt;',
      created_utc: 1570711616,
      depth: 3,
      downs: 0,
      id: 't1_f36fubr',
      parent_id: 't1_f36daww',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f36fubr/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 29,
    },
    {
      author: '[deleted]',
      body: '[deleted]',
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;[deleted]&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570681556,
      depth: 1,
      downs: 0,
      id: 't1_f35ltpb',
      parent_id: 't1_f35kuhk',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35ltpb/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 136,
    },
    {
      author: 'DaSwagCow',
      body: 'So?',
      body_html: '&lt;div class="md"&gt;&lt;p&gt;So?&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570690006,
      depth: 1,
      downs: 0,
      id: 't1_f35tfxh',
      parent_id: 't1_f35kuhk',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35tfxh/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 33,
    },
    {
      author: 'OceLawless',
      body: 'You, sonofabitch.',
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;You, sonofabitch.&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570725030,
      depth: 2,
      downs: 0,
      id: 't1_f37esup',
      parent_id: 't1_f35ltpb',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f37esup/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 10,
    },
    {
      author: 'Killahcamcam',
      body: "It's shit.",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;It&amp;#39;s shit.&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570691417,
      depth: 2,
      downs: 0,
      id: 't1_f35uh0q',
      parent_id: 't1_f35tfxh',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35uh0q/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 75,
    },
    {
      author: 'OceLawless',
      body:
        "It's 3pm where I am. So still at work\n\n\nEdit:sorry lads I'm still at a bar. I will update ASAP no bamboozle.",
      body_html:
        '&lt;div class="md"&gt;&lt;p&gt;It&amp;#39;s 3pm where I am. So still at work&lt;/p&gt;\n\n&lt;p&gt;Edit:sorry lads I&amp;#39;m still at a bar. I will update ASAP no bamboozle.&lt;/p&gt;\n&lt;/div&gt;',
      created_utc: 1570694504,
      depth: 2,
      downs: 0,
      id: 't1_f35wht6',
      parent_id: 't1_f35tfxh',
      permalink:
        '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/f35wht6/',
      subreddit: 'unpopularopinion',
      subreddit_name_prefixed: 'r/unpopularopinion',
      ups: 23,
    },
  ],
  created_utc: 1570671373,
  id: 'dfqxf8',
  is_video: false,
  name: 't3_dfqxf8',
  permalink:
    '/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/',
  score: 20700,
  selftext:
    'I almost always shower with my socks on. It just feels more relaxing, I don’t really like the feeling of water below my feet. Having socks on, even light ones, feels like a nice towel to put around my feet when I’m showering. It’s just better this way. I’ve done this since I was like, 8, and I don’t ever plan on changing it. When I told my friends about it they all said it was really weird. I just think it is more comfortable, relaxing, and overall a better experience.\n\nEdit: jeez I really didn’t think that this was a big deal.\n\nEdit 2: To address some things:Yes, I actually do this, I personally like it, and it really isn’t problematic so I do it. My feet aren’t always super clean but I rub lotion on them occasionally.\n\nEdit 3: well I went to sleep, and now I have 953 notifications.',
  selftext_html:
    '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;I almost always shower with my socks on. It just feels more relaxing, I don’t really like the feeling of water below my feet. Having socks on, even light ones, feels like a nice towel to put around my feet when I’m showering. It’s just better this way. I’ve done this since I was like, 8, and I don’t ever plan on changing it. When I told my friends about it they all said it was really weird. I just think it is more comfortable, relaxing, and overall a better experience.&lt;/p&gt;\n\n&lt;p&gt;Edit: jeez I really didn’t think that this was a big deal.&lt;/p&gt;\n\n&lt;p&gt;Edit 2: To address some things:Yes, I actually do this, I personally like it, and it really isn’t problematic so I do it. My feet aren’t always super clean but I rub lotion on them occasionally.&lt;/p&gt;\n\n&lt;p&gt;Edit 3: well I went to sleep, and now I have 953 notifications.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
  subreddit: 'unpopularopinion',
  subreddit_name_prefixed: 'r/unpopularopinion',
  subreddit_subscribers: 775462,
  thumbnail: 'self',
  title: 'Taking showers with your socks on is so much better than not',
  ups: 20700,
  url:
    'https://www.reddit.com/r/unpopularopinion/comments/dfqxf8/taking_showers_with_your_socks_on_is_so_much/',
};
/* eslint-enable */

const post = atom({
  default: defaultValue,
  key: atomName.POST,
});

export { post };

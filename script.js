// ─── MACBETH (40) ────────────────────────────────────────────────────────────
const macbethQuotes = [
  {
    act: "Act 1, Scene 1",
    text: "\"Fair is foul, and {{gap}} is fair.\"",
    answer: "foul",
    context: "The Witches open the play with a paradox, establishing moral confusion from the outset.",
    inference: "Shakespeare signals a world where appearances cannot be trusted.",
    translation: "What seems good is actually bad, and what seems bad is actually good."
  },
  {
    act: "Act 1, Scene 2",
    text: "\"For brave Macbeth — well he {{gap}} that name.\"",
    answer: "deserves",
    context: "A wounded captain praises Macbeth's courage on the battlefield to King Duncan.",
    inference: "Macbeth is first presented as a loyal hero — making his later fall even more powerful.",
    translation: "Macbeth truly earns the title of brave."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"So {{gap}} and fair a day I have not seen.\"",
    answer: "foul",
    context: "Macbeth's first words echo the Witches, showing their influence already taking hold.",
    inference: "He unconsciously adopts their twisted language — the corruption has already begun.",
    translation: "I've never seen a day that is both so terrible and so good at the same time."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"All hail, Macbeth, that shalt be {{gap}} hereafter!\"",
    answer: "king",
    context: "The Third Witch delivers the prophecy that ignites Macbeth's ambition.",
    inference: "Power is presented as destiny — the prophecy tempts Macbeth to act rather than wait.",
    translation: "All hail, Macbeth — you will be king in the future!"
  },
  {
    act: "Act 1, Scene 3",
    text: "\"If chance will have me king, why, {{gap}} may crown me, without my stir.\"",
    answer: "chance",
    context: "Macbeth briefly considers letting fate take its course without acting himself.",
    inference: "He has not yet committed to murder — ambition and passivity are at war inside him.",
    translation: "If fate wants me to be king, maybe it will just happen without me doing anything."
  },
  {
    act: "Act 1, Scene 4",
    text: "\"{{gap}}, hide your fires; let not light see my black and deep desires.\"",
    answer: "Stars",
    context: "Macbeth privately reveals his murderous thoughts after Duncan names Malcolm his heir.",
    inference: "He recognises his desires are morally corrupt and must be hidden from the world.",
    translation: "Stars, hide your light so no one can see my dark ambitions."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Yet do I fear thy {{gap}}: it is too full o' the milk of human kindness.\"",
    answer: "nature",
    context: "Lady Macbeth reads Macbeth's letter and fears he is too soft to seize power.",
    inference: "She frames compassion as a flaw — ruthlessness is presented as the price of power.",
    translation: "But I worry about your character — you're too full of human kindness to do what's needed."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Come, you spirits that tend on mortal thoughts, {{gap}} me here.\"",
    answer: "unsex",
    context: "Lady Macbeth calls on dark spirits to strip away her femininity before the murder.",
    inference: "She sees compassion as weakness — she must actively destroy her conscience to act.",
    translation: "Spirits, take away my femininity and fill me with ruthlessness."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Look like the innocent flower, but be the {{gap}} under't.\"",
    answer: "serpent",
    context: "Lady Macbeth advises Macbeth to appear innocent while hiding his murderous intent.",
    inference: "Appearance versus reality becomes the central strategy of both characters.",
    translation: "Look harmless on the outside, but be deadly underneath."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Come, thick {{gap}}, and pall thee in the dunnest smoke of hell.\"",
    answer: "night",
    context: "Lady Macbeth calls on darkness to help her suppress guilt before the murder.",
    inference: "Evil requires deliberate effort — she must actively block her conscience to act.",
    translation: "Come, thick darkness, and wrap yourself in the blackest smoke of hell."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"I have no spur to prick the sides of my intent, but only {{gap}} ambition.\"",
    answer: "vaulting",
    context: "Macbeth admits his only motive for killing Duncan is reckless ambition.",
    inference: "He knows his desire for power is irrational and dangerous — yet he cannot stop.",
    translation: "I have no real reason to kill him except reckless ambition."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"He's here in double trust: first, as I am his {{gap}}.\"",
    answer: "kinsman",
    context: "Macbeth lists the bonds of loyalty and duty that should prevent him from killing Duncan.",
    inference: "He fully understands the moral weight of what he is about to do — making his choice even more damning.",
    translation: "Duncan trusts me for two reasons — first because I'm his relative."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"Was the hope drunk wherein you {{gap}} yourself?\"",
    answer: "dressed",
    context: "Lady Macbeth mocks Macbeth's hesitation, comparing his earlier boldness to drunkenness.",
    inference: "She uses shame and contempt to override his conscience — manipulation replaces reason.",
    translation: "Were you drunk when you dressed yourself up with those brave promises?"
  },
  {
    act: "Act 1, Scene 7",
    text: "\"We will {{gap}} no further in this business.\"",
    answer: "proceed",
    context: "Macbeth tells Lady Macbeth he will not go through with the murder of Duncan.",
    inference: "His conscience briefly overcomes his ambition — but Lady Macbeth quickly reverses this.",
    translation: "We are not going any further with this plan."
  },
  {
    act: "Act 2, Scene 1",
    text: "\"Is this a {{gap}} which I see before me, the handle toward my hand?\"",
    answer: "dagger",
    context: "Macbeth hallucinates a dagger pointing him toward Duncan's chamber before the murder.",
    inference: "Guilt and desire have blurred the boundary between reality and vision.",
    translation: "Is that a dagger I can see in front of me, handle pointing toward me?"
  },
  {
    act: "Act 2, Scene 2",
    text: "\"Macbeth does murder {{gap}}.\"",
    answer: "sleep",
    context: "After killing Duncan, Macbeth believes he heard a voice curse him.",
    inference: "He has destroyed his own innocence and peace — guilt will deny him rest forever.",
    translation: "Macbeth has killed the ability to sleep peacefully."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"Will all great Neptune's ocean wash this {{gap}} clean from my hand?\"",
    answer: "blood",
    context: "Macbeth is overwhelmed by guilt immediately after murdering Duncan.",
    inference: "His crime feels permanent and unforgivable — no amount of water can cleanse his conscience.",
    translation: "Could all the oceans in the world wash away my guilt?"
  },
  {
    act: "Act 2, Scene 3",
    text: "\"There's {{gap}} in men's smiles.\"",
    answer: "daggers",
    context: "Donalbain warns his brother that danger lurks behind friendly appearances at court.",
    inference: "The court is full of hidden threats — appearance versus reality extends beyond Macbeth alone.",
    translation: "You can't trust anyone's smile — they might be hiding deadly intentions."
  },
  {
    act: "Act 2, Scene 3",
    text: "\"Had I but {{gap}} an hour before this chance, I had lived a blessed time.\"",
    answer: "died",
    context: "Macbeth performs grief for Duncan's murder in front of the assembled court.",
    inference: "His false lament is itself a murder of truth — deception has become second nature.",
    translation: "If only I had died just an hour ago, I would have died a happy man."
  },
  {
    act: "Act 3, Scene 1",
    text: "\"To be thus is nothing; but to be {{gap}} thus.\"",
    answer: "safely",
    context: "Macbeth realises that being king means nothing without security from Banquo's threat.",
    inference: "Power without safety is worthless — tyranny breeds the very paranoia it tries to escape.",
    translation: "Being king is meaningless unless I can be king safely."
  },
  {
    act: "Act 3, Scene 1",
    text: "\"I am in blood stepped in so far that, should I wade no more, returning were as tedious as go {{gap}}.\"",
    answer: "o'er",
    context: "Macbeth acknowledges he has passed the point of no return in his crimes.",
    inference: "Evil has become self-perpetuating — he can no longer choose a moral path.",
    translation: "I've gone so deep into violence that turning back would be just as hard as pressing on."
  },
  {
    act: "Act 3, Scene 2",
    text: "\"O, full of {{gap}} is my mind, dear wife!\"",
    answer: "scorpions",
    context: "Macbeth confesses to Lady Macbeth that he is tormented by paranoid fears.",
    inference: "Kingship has brought anxiety, not fulfilment — power is poisonous.",
    translation: "My mind is crawling with venomous, tormenting thoughts."
  },
  {
    act: "Act 3, Scene 3",
    text: "\"Fly, good Fleance, {{gap}}! Thou mayst revenge.\"",
    answer: "fly",
    context: "Banquo cries out as he is murdered, urging his son Fleance to escape into the night.",
    inference: "Macbeth's plan to end Banquo's bloodline fails — the cycle of revenge continues.",
    translation: "Run, Fleance, run! You can avenge my death one day."
  },
  {
    act: "Act 3, Scene 4",
    text: "\"Never shake thy {{gap}} locks at me!\"",
    answer: "gory",
    context: "Macbeth speaks to the ghost of Banquo at the royal banquet, visible only to him.",
    inference: "His public breakdown reveals that private guilt cannot be permanently suppressed.",
    translation: "Stop shaking your bloody head at me!"
  },
  {
    act: "Act 3, Scene 4",
    text: "\"The time approaches, that will with due decision make us know what we shall {{gap}} and what we owe.\"",
    answer: "say",
    context: "Macbeth speaks to his guests just before Banquo's ghost appears at the feast.",
    inference: "Even as he performs authority, the consequences of his crimes are closing in.",
    translation: "The time is coming when we'll have to account for everything we've said and done."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"By the pricking of my {{gap}}, something wicked this way comes.\"",
    answer: "thumbs",
    context: "The Second Witch senses Macbeth's approach with supernatural instinct.",
    inference: "Macbeth has become so corrupted he is now recognised as 'wicked' by the witches themselves.",
    translation: "My thumbs are tingling — something evil is on its way."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"{{gap}}, double toil and trouble; fire burn and cauldron bubble.\"",
    answer: "Double",
    context: "The Witches chant their spell as they brew their cauldron.",
    inference: "The repetition creates a hypnotic rhythm — the Witches control events, luring Macbeth to his doom.",
    translation: "Double the trouble! Let the fire burn and the cauldron bubble."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"None of woman {{gap}} shall harm Macbeth.\"",
    answer: "born",
    context: "An Apparition delivers a prophecy that seems to guarantee Macbeth's safety.",
    inference: "He places his trust in fate and ignores the moral consequences of his actions.",
    translation: "No one born of a woman will ever be able to harm Macbeth."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"Macbeth shall never vanquished be until great {{gap}} Wood to high Dunsinane Hill shall come.\"",
    answer: "Birnam",
    context: "The Third Apparition delivers a prophecy that appears completely impossible.",
    inference: "False security is more dangerous than obvious threat — Macbeth is fatally complacent.",
    translation: "Macbeth won't be defeated until Birnam Wood itself marches to Dunsinane Hill."
  },
  {
    act: "Act 4, Scene 3",
    text: "\"He has no {{gap}}; all my pretty ones? Did you say all?\"",
    answer: "children",
    context: "Macduff learns that his wife and children have been slaughtered on Macbeth's orders.",
    inference: "The personal cost of tyranny is felt most viscerally here — private grief mirrors public horror.",
    translation: "He has no children — did you say all of mine were killed? Every single one?"
  },
  {
    act: "Act 4, Scene 3",
    text: "\"I cannot but remember such things were, that were most {{gap}} to me.\"",
    answer: "precious",
    context: "Macduff grieves the loss of his murdered family.",
    inference: "His grief humanises the political conflict — tyranny destroys what is most intimate and irreplaceable.",
    translation: "I can't help remembering everything that was so precious to me, now gone."
  },
  {
    act: "Act 5, Scene 1",
    text: "\"{{gap}}, damned spot! Out, I say!\"",
    answer: "Out",
    context: "Lady Macbeth sleepwalks, reliving the murder of Duncan in her tormented mind.",
    inference: "The guilt she suppressed in waking life erupts through her sleeping mind — it is completely inescapable.",
    translation: "Get out, you cursed stain! I want it gone!"
  },
  {
    act: "Act 5, Scene 1",
    text: "\"The {{gap}} knows what she has known.\"",
    answer: "heart",
    context: "The Doctor observes Lady Macbeth's sleepwalking and realises she carries terrible secrets.",
    inference: "Her subconscious cannot contain what her waking self suppressed — the body betrays the mind.",
    translation: "Her heart holds secrets from what she has done and witnessed."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"Canst thou not minister to a mind {{gap}}?\"",
    answer: "diseased",
    context: "Macbeth demands his doctor cure Lady Macbeth's psychological torment.",
    inference: "He seeks a physical remedy for a moral wound — showing his fundamental misunderstanding of guilt.",
    translation: "Can't you treat a sick and troubled mind?"
  },
  {
    act: "Act 5, Scene 5",
    text: "\"I looked toward Birnam, and anon, methought, the wood began to {{gap}}.\"",
    answer: "move",
    context: "A Messenger reports that Birnam Wood appears to be moving — Malcolm's soldiers carry branches.",
    inference: "The prophecy begins to unravel; Macbeth's false security collapses completely.",
    translation: "I looked toward Birnam Wood and suddenly I thought the forest was moving."
  },
  {
    act: "Act 5, Scene 5",
    text: "\"She should have died {{gap}}; there would have been a time for such a word.\"",
    answer: "hereafter",
    context: "Macbeth reacts to news of Lady Macbeth's death with numb indifference.",
    inference: "He has lost all capacity to feel — the complete collapse of his humanity is now total.",
    translation: "She would have died eventually — there would have been a better time to hear such news."
  },
  {
    act: "Act 5, Scene 5",
    text: "\"{{gap}}, and tomorrow, and tomorrow, creeps in this petty pace from day to day.\"",
    answer: "Tomorrow",
    context: "Macbeth reflects on the meaninglessness of life after hearing of Lady Macbeth's death.",
    inference: "He has achieved everything he murdered for and found it all empty — nihilism is the fruit of ambition.",
    translation: "Tomorrow and tomorrow and tomorrow drag on in their dull, slow routine."
  },
  {
    act: "Act 5, Scene 5",
    text: "\"It is a tale told by an idiot, full of sound and fury, signifying {{gap}}.\"",
    answer: "nothing",
    context: "Macbeth reaches the peak of nihilism as his world collapses around him.",
    inference: "His entire violent journey has led to emptiness — ambition is ultimately meaningless.",
    translation: "Life is just noise and chaos told by a fool, with no real meaning at all."
  },
  {
    act: "Act 5, Scene 8",
    text: "\"Yet I will try the last. Before my body I throw my {{gap}} shield.\"",
    answer: "warlike",
    context: "Macbeth resolves to fight Macduff to the death rather than surrender.",
    inference: "Even in defeat, Macbeth clings to the warrior identity he began with — he dies as he lived.",
    translation: "I'll fight to the very end. I raise my battle shield and face you."
  }
];

// ─── ROMEO & JULIET (40) ─────────────────────────────────────────────────────
const romeoQuotes = [
  {
    act: "Prologue",
    text: "\"A pair of star-crossed {{gap}} take their life.\"",
    answer: "lovers",
    context: "The Chorus announces the tragedy before it begins, removing all suspense.",
    inference: "Fate is foregrounded — the lovers are doomed before they even meet.",
    translation: "Two unlucky lovers, cursed by the stars, will end their own lives."
  },
  {
    act: "Act 1, Scene 1",
    text: "\"Here's much to do with {{gap}}, but more with love.\"",
    answer: "hate",
    context: "Romeo reflects on the paradox of the feud — hate causing love's suffering.",
    inference: "Love and hate are presented as inseparable forces driving the entire play.",
    translation: "All of this is about hate — but even more about love."
  },
  {
    act: "Act 1, Scene 2",
    text: "\"She is the hopeful lady of my {{gap}}.\"",
    answer: "earth",
    context: "Lord Capulet speaks proudly of Juliet when Paris asks to marry her.",
    inference: "Juliet is prized as property and legacy — her own feelings are irrelevant to the men around her.",
    translation: "She is the most precious thing I have on this earth."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"Go, girl, seek happy {{gap}} in your eyes: look to like, if looking liking move.\"",
    answer: "nights",
    context: "Lady Capulet coaches Juliet to feel attracted to Paris at the feast.",
    inference: "Juliet is directed to feel emotion on command — her autonomy over love does not exist.",
    translation: "Look for happiness, girl. Try to like him — see if looking at him stirs something in you."
  },
  {
    act: "Act 1, Scene 4",
    text: "\"I fear, too early: for my mind misgives some {{gap}} yet hanging in the stars.\"",
    answer: "consequence",
    context: "Romeo feels a dark premonition just before entering the Capulet feast.",
    inference: "He senses fate's hand — yet proceeds anyway, showing how little free will matters.",
    translation: "I'm worried — I feel something terrible is fated to happen tonight."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"She doth {{gap}} the torches to burn bright!\"",
    answer: "teach",
    context: "Romeo sees Juliet for the first time across the Capulet feast.",
    inference: "Juliet is associated with light — she represents hope in a world of darkness.",
    translation: "She makes the torches look dim — she shines more brightly than any flame."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Did my heart love till now? Forswear it, {{gap}}! For I ne'er saw true beauty till this night.\"",
    answer: "sight",
    context: "Romeo instantly forgets Rosaline the moment he sees Juliet.",
    inference: "Love is presented as sudden and overwhelming — but also dangerously blind and impulsive.",
    translation: "Had I ever truly loved before? I've never seen real beauty until tonight."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"If I profane with my unworthiest {{gap}} this holy shrine.\"",
    answer: "hand",
    context: "Romeo approaches Juliet and compares touching her hand to touching a sacred place.",
    inference: "Religious imagery elevates love — Juliet becomes almost divine in his eyes.",
    translation: "If my unworthy hand touches this holy place..."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"My only love sprung from my only {{gap}}!\"",
    answer: "hate",
    context: "Juliet discovers that Romeo is a Montague — her family's sworn enemy.",
    inference: "Love and hate are inextricably entangled — she cannot escape the feud.",
    translation: "The only person I love comes from the family I was born to hate."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"But soft! What light through yonder window {{gap}}?\"",
    answer: "breaks",
    context: "Romeo stands beneath Juliet's window, captivated by her appearance.",
    inference: "Juliet is associated with light — she represents hope breaking through the darkness of the feud.",
    translation: "Wait — what is that light shining through the window up there?"
  },
  {
    act: "Act 2, Scene 2",
    text: "\"O Romeo, Romeo! Wherefore art thou {{gap}}?\"",
    answer: "Romeo",
    context: "Juliet laments that the man she loves bears the name of her family's enemy.",
    inference: "Names and identity are obstacles to love — the feud makes Romeo's very name a barrier.",
    translation: "Why do you have to be Romeo — why do you have to be a Montague?"
  },
  {
    act: "Act 2, Scene 2",
    text: "\"What's in a name? That which we call a {{gap}} by any other name would smell as sweet.\"",
    answer: "rose",
    context: "Juliet argues that Romeo's family name is meaningless — it doesn't define who he is.",
    inference: "She challenges the arbitrary cruelty of the feud and the power of labels over identity.",
    translation: "Names don't matter — a rose would still smell sweet whatever you called it."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"My bounty is as boundless as the {{gap}}, my love as deep.\"",
    answer: "sea",
    context: "Juliet expresses the limitlessness of her love for Romeo.",
    inference: "Love is presented as an inexhaustible, uncontrollable force — vast and beyond reason.",
    translation: "My generosity and love are as deep and endless as the sea."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"This bud of love, by summer's ripening {{gap}}, may prove a beauteous flower when next we meet.\"",
    answer: "breath",
    context: "Juliet cautions against rushing their love — it is new and fragile.",
    inference: "Love needs time to grow — the tragedy is that events deny them this time entirely.",
    translation: "Our love is just a bud — let it ripen into something beautiful before we next meet."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"Good night, good night! Parting is such sweet {{gap}}.\"",
    answer: "sorrow",
    context: "Juliet bids Romeo farewell at the end of the balcony scene.",
    inference: "Their love is defined by beautiful pain — joy and grief are always intertwined for them.",
    translation: "Good night! It is such a sweet sadness to say goodbye to you."
  },
  {
    act: "Act 2, Scene 3",
    text: "\"These violent delights have violent {{gap}}.\"",
    answer: "ends",
    context: "Friar Lawrence warns Romeo that excessive passion burns dangerously bright.",
    inference: "This is the play's central structural warning — extreme joy always leads to extreme sorrow.",
    translation: "Wildly passionate feelings always come to a violent end."
  },
  {
    act: "Act 2, Scene 3",
    text: "\"Wisely and {{gap}}: they stumble that run fast.\"",
    answer: "slow",
    context: "Friar Lawrence urges Romeo not to rush headlong into marriage.",
    inference: "Rashness is the fatal flaw of both lovers — haste is the mechanism of the tragedy.",
    translation: "Be careful and go slowly — people who rush end up falling."
  },
  {
    act: "Act 2, Scene 4",
    text: "\"The more I give to thee, the more I {{gap}}, for both are infinite.\"",
    answer: "have",
    context: "Juliet describes how giving her love to Romeo does not diminish it at all.",
    inference: "Love is paradoxical — the more you give, the more you have, unlike any worldly possession.",
    translation: "The more love I give you, the more I seem to have — it is completely endless."
  },
  {
    act: "Act 2, Scene 6",
    text: "\"The sweetest honey is loathsome in his own {{gap}}.\"",
    answer: "deliciousness",
    context: "Friar Lawrence warns that excessive pleasure can become sickening.",
    inference: "Excess — even of love — carries the seeds of its own destruction.",
    translation: "Too much sweetness becomes disgusting — even the best things can be too much."
  },
  {
    act: "Act 3, Scene 1",
    text: "\"Romeo, the love I bear thee can afford no better term than this: thou art a {{gap}}.\"",
    answer: "villain",
    context: "Tybalt confronts Romeo in the street, seeking to provoke a fight.",
    inference: "The feud demands hatred — Tybalt cannot conceive of any relationship with a Montague other than enmity.",
    translation: "Romeo, the only word I have for you is: you are a villain."
  },
  {
    act: "Act 3, Scene 1",
    text: "\"A plague on {{gap}} your houses!\"",
    answer: "both",
    context: "The dying Mercutio curses both the Montague and Capulet families.",
    inference: "An innocent man dies because of others' hatred — the feud destroys those who have nothing to do with it.",
    translation: "A curse on both your families!"
  },
  {
    act: "Act 3, Scene 1",
    text: "\"O, I am fortune's {{gap}}!\"",
    answer: "fool",
    context: "Romeo cries out after killing Tybalt, realising what fate has led him to do.",
    inference: "He sees himself as a victim of fortune — responsibility and destiny blur together.",
    translation: "I am just a fool at the mercy of fortune!"
  },
  {
    act: "Act 3, Scene 2",
    text: "\"Come, {{gap}}; come, loving black-browed night, give me my Romeo.\"",
    answer: "night",
    context: "Juliet longs for night to arrive so Romeo can come to her after their wedding.",
    inference: "Night becomes a protective, loving force — daylight represents danger and the outside world.",
    translation: "Come, night — come, dark and loving night — bring Romeo to me."
  },
  {
    act: "Act 3, Scene 2",
    text: "\"Beautiful tyrant! Fiend {{gap}}!\"",
    answer: "angelical",
    context: "Juliet reacts with shock and grief to news that Romeo has killed Tybalt.",
    inference: "Oxymorons reflect her conflicted state — love and betrayal, beauty and violence, all coexist in Romeo.",
    translation: "You beautiful monster! You angelic devil!"
  },
  {
    act: "Act 3, Scene 3",
    text: "\"There is no world without {{gap}}'s walls but purgatory, torture, hell itself.\"",
    answer: "Verona",
    context: "Romeo is devastated by the Friar's news that he will be banished from Verona.",
    inference: "Exile from Juliet is worse than death — she is his entire world.",
    translation: "Anywhere outside Verona's walls — without Juliet — is just purgatory, torture, hell."
  },
  {
    act: "Act 3, Scene 5",
    text: "\"It was the {{gap}}, and not the lark.\"",
    answer: "nightingale",
    context: "Juliet tries to convince Romeo that the bird they hear is a nightingale, not the dawn lark.",
    inference: "She refuses to accept the reality of their separation — love tries to deny the passage of time.",
    translation: "That was the nightingale singing, not the morning lark — you don't have to leave yet."
  },
  {
    act: "Act 3, Scene 5",
    text: "\"Methinks I see thee now, thou art so {{gap}} as one dead in the bottom of a tomb.\"",
    answer: "low",
    context: "Juliet watches Romeo climb down from her window — a moment of dark premonition.",
    inference: "Shakespeare foreshadows the tomb ending — their last meeting mirrors their final resting place.",
    translation: "Looking down at you now, you look like someone lying dead at the bottom of a grave."
  },
  {
    act: "Act 3, Scene 5",
    text: "\"Delay this marriage for a month, a week; or, if you do not, make the bridal-bed in that dim {{gap}} where Juliet lies.\"",
    answer: "monument",
    context: "Juliet begs her father to postpone her arranged marriage to Paris.",
    inference: "Capulet's refusal makes Juliet's death inevitable — parental authority becomes complicit in tragedy.",
    translation: "Delay the wedding, or else make my marriage bed inside my grave."
  },
  {
    act: "Act 3, Scene 5",
    text: "\"I'll to the Friar, to know his {{gap}}; if all else fail, myself have power to die.\"",
    answer: "remedy",
    context: "Juliet resolves to seek Friar Lawrence's help — or take her own life.",
    inference: "Death is her ultimate act of agency in a world that denies her any choices.",
    translation: "I'll go to the Friar for a solution. If there is none, I always have the power to die."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"Romeo, I come! this do I drink to {{gap}}.\"",
    answer: "thee",
    context: "Juliet drinks the Friar's sleeping potion, dedicating her sacrifice to Romeo.",
    inference: "Love drives her to risk death — devotion completely overcomes fear.",
    translation: "Romeo, I'm coming — I drink this for you."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"Take thou this {{gap}} and bear this letter to thy lord.\"",
    answer: "vial",
    context: "Friar Lawrence gives Juliet the sleeping potion and instructs her in his plan.",
    inference: "The Friar's scheme is well-intentioned but fatally dependent on perfect timing — good intentions cause ruin.",
    translation: "Take this small bottle and deliver this letter to Romeo."
  },
  {
    act: "Act 4, Scene 3",
    text: "\"What if it be a {{gap}} which the Friar subtly hath ministered to have me dead?\"",
    answer: "poison",
    context: "Juliet is alone, imagining worst-case scenarios before she drinks the vial.",
    inference: "She is in many ways braver than Romeo — she proceeds despite very real and rational fear.",
    translation: "What if this is actually poison that the Friar has secretly given me to kill me?"
  },
  {
    act: "Act 5, Scene 1",
    text: "\"Then I defy you, {{gap}}!\"",
    answer: "stars",
    context: "Romeo rebels against fate upon hearing the false news of Juliet's death.",
    inference: "He refuses to accept passive fate — yet his defiance itself leads directly to his destruction.",
    translation: "Then I defy fate itself!"
  },
  {
    act: "Act 5, Scene 1",
    text: "\"Well, Juliet, I will lie with thee tonight. Let's see for {{gap}}.\"",
    answer: "means",
    context: "Romeo resolves to die beside Juliet the moment he hears she is dead.",
    inference: "He acts impulsively — the same rashness that characterised his love now characterises his death.",
    translation: "I will lie beside you tonight, Juliet. Let me find a way."
  },
  {
    act: "Act 5, Scene 2",
    text: "\"Unhappy {{gap}}! Full of untoward events.\"",
    answer: "fortune",
    context: "Friar Lawrence discovers his letter never reached Romeo in Mantua.",
    inference: "Miscommunication — not just fate — drives the tragedy. Human error is as deadly as destiny.",
    translation: "What terrible luck! Everything has gone wrong."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"O, here will I set up my everlasting {{gap}}.\"",
    answer: "rest",
    context: "Romeo enters the Capulet tomb and resolves to die beside Juliet.",
    inference: "Death is presented as the only lasting peace — love cannot exist in the world they inhabit.",
    translation: "Here I will rest forever."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"Thus with a {{gap}} I die.\"",
    answer: "kiss",
    context: "Romeo kisses Juliet and drinks the poison, dying at her side.",
    inference: "Love and death merge in a single act — the play's central paradox is fulfilled.",
    translation: "I die with this kiss."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"O happy {{gap}}! that did suck the honey of his breath.\"",
    answer: "dagger",
    context: "Juliet wakes to find Romeo dead and reaches for his dagger.",
    inference: "She addresses the blade with dark irony — death is personified as intimate and almost loving.",
    translation: "Oh lucky dagger, that got to take in his last breath!"
  },
  {
    act: "Act 5, Scene 3",
    text: "\"This is thy {{gap}}; there rust, and let me die.\"",
    answer: "sheath",
    context: "Juliet stabs herself with Romeo's dagger.",
    inference: "Her death is a conscious, defiant act — she refuses to be a passive victim of circumstance.",
    translation: "Your sheath is right here in my chest — rust there while I die."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"For never was a story of more {{gap}} than this of Juliet and her Romeo.\"",
    answer: "woe",
    context: "The Prince delivers the final judgement on the tragedy.",
    inference: "The feud has destroyed the most precious thing in Verona — the play ends with grief, not resolution.",
    translation: "There has never been a sadder story than this one about Juliet and her Romeo."
  }
];

// ─── A CHRISTMAS CAROL (40) ──────────────────────────────────────────────────
const carolQuotes = [
  {
    act: "Stave 1",
    text: "\"Marley was dead, to begin with. There is no {{gap}} of doubt whatever about that.\"",
    answer: "doubt",
    context: "Dickens opens the novel by insisting on Marley's death, establishing the supernatural premise.",
    inference: "The blunt certainty mocks Scrooge's denial of spiritual reality — death cannot be rationalised away.",
    translation: "Marley was definitely dead. Absolutely no question about it."
  },
  {
    act: "Stave 1",
    text: "\"Oh! but he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, {{gap}} old sinner!\"",
    answer: "covetous",
    context: "Dickens introduces Scrooge through a long accumulation of dehumanising adjectives.",
    inference: "The list form mimics Scrooge's obsessive hoarding — narrative style mirrors character flaw.",
    translation: "Scrooge was an incredibly greedy, selfish, grasping old sinner."
  },
  {
    act: "Stave 1",
    text: "\"No warmth could warm, no wintry weather {{gap}} him.\"",
    answer: "chill",
    context: "Dickens describes Scrooge's complete emotional detachment from the world around him.",
    inference: "His isolation is total — he is beyond the reach of ordinary human comfort or feeling.",
    translation: "Nothing from the outside world could reach him — not warmth, not cold."
  },
  {
    act: "Stave 1",
    text: "\"Nobody ever stopped him in the street to say with gladsome looks: 'My dear Scrooge, how are you?' Even the blind men's dogs would {{gap}} their masters into doorways.\"",
    answer: "tug",
    context: "Dickens catalogues how every level of society — even animals — avoids Scrooge.",
    inference: "His isolation is universal and total — he has cut himself off from the entire human community.",
    translation: "No one greeted Scrooge — not beggars, not children, not even guide dogs who dragged their owners out of his path."
  },
  {
    act: "Stave 1",
    text: "\"Are there no prisons? Are there no {{gap}}?\"",
    answer: "workhouses",
    context: "Scrooge dismisses charity collectors who ask for donations for the poor.",
    inference: "He echoes the language of the Poor Law — Dickens exposes the cruelty of Victorian social policy through Scrooge's words.",
    translation: "Why should I help? The poor already have prisons and workhouses to go to."
  },
  {
    act: "Stave 1",
    text: "\"If they would rather die, they had better do it, and {{gap}} the surplus population.\"",
    answer: "decrease",
    context: "Scrooge coldly dismisses the suffering of the poor using Malthusian economic logic.",
    inference: "Dickens satirises the dehumanising reasoning of laissez-faire economics — people reduced to numbers.",
    translation: "If the poor want to die, let them — it would reduce the population problem."
  },
  {
    act: "Stave 1",
    text: "\"Scrooge had a very small fire, but the clerk's fire was so very much {{gap}} that it looked like one coal.\"",
    answer: "smaller",
    context: "Bob Cratchit works in freezing conditions because Scrooge refuses to spend on coal.",
    inference: "The physical cold mirrors Scrooge's emotional coldness — his cruelty has direct material consequences.",
    translation: "Scrooge barely had a fire; his clerk's fire was so tiny it was practically just one lump of coal."
  },
  {
    act: "Stave 1",
    text: "\"You may be an undigested bit of {{gap}}, a blot of mustard, a crumb of cheese.\"",
    answer: "beef",
    context: "Scrooge tries to explain away Marley's ghost as a product of indigestion.",
    inference: "His materialist rationalism refuses to accept any spiritual reality — he can only see the physical world.",
    translation: "You might just be something I ate — not a real ghost at all."
  },
  {
    act: "Stave 1",
    text: "\"I wear the chain I {{gap}} in life.\"",
    answer: "forged",
    context: "Marley's Ghost explains his chains as the direct consequence of his selfish choices in life.",
    inference: "Dickens presents moral choices as having literal, inescapable consequences — selfishness is its own punishment.",
    translation: "These chains are the result of every selfish choice I made while I was alive."
  },
  {
    act: "Stave 1",
    text: "\"{{gap}} was my business. The common welfare was my business.\"",
    answer: "Mankind",
    context: "Marley's Ghost regrets having prioritised profit over people during his life.",
    inference: "Dickens voices his central message through Marley — capitalism corrupts and isolates us from our humanity.",
    translation: "People should have been my business. The welfare of others should have been my concern."
  },
  {
    act: "Stave 2",
    text: "\"I am the Ghost of Christmas {{gap}}!\"",
    answer: "Past",
    context: "The First Spirit identifies itself to Scrooge, glowing with a strange inner light.",
    inference: "Memory is the key to moral awakening — understanding the past is the first step to transformation.",
    translation: "I am the spirit of all your past Christmases."
  },
  {
    act: "Stave 2",
    text: "\"The school is not quite deserted. A {{gap}}, neglected child is left there still.\"",
    answer: "solitary",
    context: "The Ghost shows Scrooge his lonely younger self, left behind at school over Christmas.",
    inference: "Scrooge's adult isolation began in childhood abandonment — Dickens invites pity rather than condemnation.",
    translation: "The school isn't quite empty — one lonely, forgotten child is still there."
  },
  {
    act: "Stave 2",
    text: "\"There was a boy singing a Christmas carol at my door last night. I should like to have given him something — that's {{gap}}.\"",
    answer: "all",
    context: "Scrooge begins to feel regret as he watches his younger self alone at Christmas.",
    inference: "The first flicker of empathy — memory re-awakens the compassion Scrooge had buried beneath decades of greed.",
    translation: "I wish I'd been kinder to that carol singer last night — that's all I can say."
  },
  {
    act: "Stave 2",
    text: "\"He has the power to render us happy or {{gap}}; to make our service light or burdensome.\"",
    answer: "unhappy",
    context: "Young Scrooge praises his generous employer Fezziwig at the Christmas party.",
    inference: "Dickens presents employers as having moral responsibility for those who work for them.",
    translation: "He has the power to make us happy or miserable, to make work feel easy or unbearable."
  },
  {
    act: "Stave 2",
    text: "\"You fear the world too much. All your other hopes have merged into the hope of being beyond the chance of its {{gap}} reproach.\"",
    answer: "sordid",
    context: "Belle breaks off her engagement to Scrooge, accusing him of choosing money over love.",
    inference: "Scrooge's transformation into a miser has destroyed his capacity for human connection.",
    translation: "You're so afraid of poverty that avoiding it has become your only goal in life."
  },
  {
    act: "Stave 2",
    text: "\"Another {{gap}} has displaced me; and if it can cheer and comfort you in time to come, I have no just cause to grieve.\"",
    answer: "idol",
    context: "Belle tells Scrooge that his idol — money — has replaced her in his heart.",
    inference: "Scrooge's worship of wealth is presented as a spiritual failing, not merely a moral one.",
    translation: "You've replaced me with another idol — money. If it makes you happy, I won't grieve."
  },
  {
    act: "Stave 2",
    text: "\"'Always a delicate creature, whom a breath might have {{gap}},' said the Ghost. 'But she had a large heart!'\"",
    answer: "withered",
    context: "The Ghost describes Scrooge's sister Fan, who loved him unconditionally despite her fragility.",
    inference: "Fan represents the love Scrooge once had access to — her death marks the beginning of his withdrawal.",
    translation: "'She was always fragile,' said the Ghost, 'but she had a huge and loving heart.'"
  },
  {
    act: "Stave 3",
    text: "\"I am the Ghost of Christmas {{gap}}!\"",
    answer: "Present",
    context: "The Second Spirit introduces itself, surrounded by a lavish feast and festive abundance.",
    inference: "The present is abundant with joy — Scrooge has been wilfully blind to the happiness around him.",
    translation: "I am the spirit of all the joy and plenty of right now."
  },
  {
    act: "Stave 3",
    text: "\"There is nothing on which it is so hard as {{gap}}, Scrooge, save money.\"",
    answer: "poverty",
    context: "The Ghost of Christmas Present taunts Scrooge by echoing his own earlier words back at him.",
    inference: "Dickens uses irony — Scrooge's own cruelty is turned against him as a weapon.",
    translation: "Nothing is harder than poverty — except perhaps being as tight-fisted as you, Scrooge."
  },
  {
    act: "Stave 3",
    text: "\"Alas for Tiny Tim, he bore a little {{gap}}, and had his limbs supported by an iron frame.\"",
    answer: "crutch",
    context: "Dickens introduces Tiny Tim as a symbol of the vulnerable poor, dependent on others' generosity.",
    inference: "Tim's frailty represents all those whose survival depends on the willingness of the wealthy to share.",
    translation: "Poor Tiny Tim had to use a little crutch and leg braces just to walk."
  },
  {
    act: "Stave 3",
    text: "\"God bless us, every {{gap}}!\"",
    answer: "one",
    context: "Tiny Tim's toast at the Cratchit family Christmas dinner.",
    inference: "His inclusive blessing contrasts directly with Scrooge's exclusion of the poor from society.",
    translation: "May God bless every single one of us."
  },
  {
    act: "Stave 3",
    text: "\"What would I not have given to be one of them! Though I never could have been so {{gap}}, I should have dearly liked to have had the lightest licence to do the same.\"",
    answer: "rude",
    context: "Scrooge watches the Cratchit family celebrate and feels the pain of exclusion for the first time.",
    inference: "His longing to belong shows how much isolation has cost him — he craves the warmth he denied to others.",
    translation: "I'd have given anything to join them! I wish I could have been that free and joyful."
  },
  {
    act: "Stave 3",
    text: "\"Every one had had enough, and the youngest Cratchits in particular, were steeped in sage and onion to the {{gap}} of their eyebrows.\"",
    answer: "eyebrows",
    context: "The Cratchit family enjoy their humble but joyful Christmas feast together.",
    inference: "Dickens presents working-class joy as genuine and abundant — poverty does not preclude happiness or love.",
    translation: "Everyone had eaten their fill, especially the little ones who were absolutely stuffed."
  },
  {
    act: "Stave 3",
    text: "\"Much they saw, and far they went, and many homes they visited, but always with a happy {{gap}}.\"",
    answer: "end",
    context: "The Ghost of Christmas Present takes Scrooge on a wide tour of Christmas joy across all of society.",
    inference: "Happiness is everywhere — Scrooge's problem is his refusal to participate, not any scarcity of warmth.",
    translation: "They visited many homes and went far and wide, and every single visit ended happily."
  },
  {
    act: "Stave 3",
    text: "\"This boy is Ignorance. This girl is {{gap}}. Beware them both, and all of their degree.\"",
    answer: "Want",
    context: "The Ghost of Christmas Present reveals two starving children hidden beneath his robe.",
    inference: "Ignorance and poverty are systemic dangers — the consequence of society's failure, not individual weakness.",
    translation: "This boy is Ignorance; this girl is Poverty. Beware them both — they will destroy society."
  },
  {
    act: "Stave 3",
    text: "\"Beware this boy, for on his brow I see that written which is {{gap}}, if the writing be erased.\"",
    answer: "doom",
    context: "The Ghost warns that Ignorance, if left unchecked, leads to societal collapse.",
    inference: "Education and compassion are the only weapons against social ruin — neglect is a form of violence.",
    translation: "Beware this child — I can see doom written on his face unless something is done."
  },
  {
    act: "Stave 4",
    text: "\"The Phantom slowly, gravely, {{gap}} approached.\"",
    answer: "silently",
    context: "The Ghost of Christmas Yet to Come appears — a dark, silent, shapeless figure.",
    inference: "Silence is more terrifying than words — the unknowable future cannot be argued with or charmed.",
    translation: "The dark, silent ghost moved slowly and gravely closer to Scrooge."
  },
  {
    act: "Stave 4",
    text: "\"It's likely to be a very cheap funeral, for upon my life I don't know of anybody to go to {{gap}}.\"",
    answer: "it",
    context: "Businessmen casually discuss the death of an unnamed man — later revealed to be Scrooge himself.",
    inference: "A life without human warmth ends without mourners — the cost of isolation is laid bare.",
    translation: "It'll be a cheap funeral — I can't think of a single person who'd bother to attend."
  },
  {
    act: "Stave 4",
    text: "\"What has he done with his {{gap}}? Who inherits it?\"",
    answer: "money",
    context: "Joe the pawnbroker and his associates divide up Scrooge's stolen possessions after his death.",
    inference: "The things Scrooge hoarded in life are worthless after death — materialism is completely futile.",
    translation: "What happened to all his money? Who gets it now he's dead?"
  },
  {
    act: "Stave 4",
    text: "\"Before I draw nearer to that stone to which you point, answer me one {{gap}}: are these the shadows of things that will be, or only of things that may be?\"",
    answer: "question",
    context: "Scrooge pleads with the Ghost of Christmas Yet to Come as he is shown his own grave.",
    inference: "He grasps for hope — the future is not fixed, and redemption is still possible if he acts.",
    translation: "Before I look at that gravestone, tell me: is this the definite future, or can it be changed?"
  },
  {
    act: "Stave 4",
    text: "\"Scrooge crept towards it, trembling as he went; and following the finger, read upon the stone of the neglected grave his own {{gap}}.\"",
    answer: "name",
    context: "Scrooge finally sees that the dead man the spirits have been showing him all night is himself.",
    inference: "The revelation forces him to confront the ultimate cost of his choices — this is the crucial turning point.",
    translation: "Shaking, Scrooge crept forward and read his own name carved on the neglected gravestone."
  },
  {
    act: "Stave 4",
    text: "\"I will honour Christmas in my heart, and try to keep it all the {{gap}}.\"",
    answer: "year",
    context: "Scrooge makes his vow of transformation to the Ghost of Christmas Yet to Come.",
    inference: "True reform means making the spirit of Christmas a daily practice, not merely a seasonal gesture.",
    translation: "I will carry the spirit of Christmas in my heart every single day of the year."
  },
  {
    act: "Stave 4",
    text: "\"I will live in the Past, the Present, and the Future. The Spirits of all Three shall {{gap}} within me.\"",
    answer: "strive",
    context: "Scrooge commits to his full transformation, embracing the lessons of all three spirits.",
    inference: "Wholeness requires integrating all three dimensions of time — selfishness exists only in the shallow present.",
    translation: "I'll draw on the lessons of past, present, and future — all three will guide me going forward."
  },
  {
    act: "Stave 5",
    text: "\"I am as {{gap}} as a school-boy. I am as giddy as a drunken man.\"",
    answer: "light",
    context: "Scrooge wakes on Christmas morning, overwhelmed by joy at discovering he has a second chance.",
    inference: "His new lightness of spirit is felt as a physical sensation — redemption is embodied and joyful.",
    translation: "I feel weightless and dizzy with happiness — like a child or someone who's had too much to drink."
  },
  {
    act: "Stave 5",
    text: "\"He dressed himself all in his best, and at last got out into the streets. Scrooge regarded every one with a delighted {{gap}}.\"",
    answer: "smile",
    context: "Scrooge walks through London on Christmas morning, transformed and joyful.",
    inference: "He now participates in the human community he had excluded himself from.",
    translation: "Scrooge put on his best clothes and walked through the crowded streets, smiling at absolutely everyone."
  },
  {
    act: "Stave 5",
    text: "\"I'll raise your {{gap}}, and endeavour to assist your struggling family.\"",
    answer: "salary",
    context: "Scrooge tells Bob Cratchit he is going to give him a pay rise.",
    inference: "Economic justice — not merely charity — is the practical expression of Scrooge's transformation.",
    translation: "I'm going to increase your wages and help support you and your family."
  },
  {
    act: "Stave 5",
    text: "\"Scrooge was better than his word. He did it all, and {{gap}} more.\"",
    answer: "infinitely",
    context: "The narrator confirms that Scrooge exceeded every single promise he made.",
    inference: "True redemption goes far beyond minimum obligation — generosity has become its own reward.",
    translation: "Scrooge was even better than he promised — he did everything he said and so much more."
  },
  {
    act: "Stave 5",
    text: "\"He became as good a friend, as good a master, and as good a man, as the good old {{gap}} knew.\"",
    answer: "city",
    context: "The narrator summarises Scrooge's completely transformed character at the novel's close.",
    inference: "Goodness is measured by the community — transformation is only meaningful when it touches others' lives.",
    translation: "He became one of the best men, employers, and friends the whole city had ever known."
  },
  {
    act: "Stave 5",
    text: "\"He went to {{gap}}, and walked about the streets, and watched the people hurrying to and fro.\"",
    answer: "church",
    context: "Scrooge attends church on Christmas Day, marking his spiritual renewal publicly.",
    inference: "Public worship signals genuine transformation — redemption is communal, not just an inward private change.",
    translation: "He went to church and walked around the streets, watching people rush about happily."
  },
  {
    act: "Stave 5",
    text: "\"And to Tiny Tim, who did NOT die, he was a second {{gap}}.\"",
    answer: "father",
    context: "The narrator confirms that Tiny Tim survives because of Scrooge's intervention.",
    inference: "Scrooge becomes the father figure Tiny Tim needed — redemption is measured in lives saved, not money given.",
    translation: "And to Tiny Tim, who did not die, Scrooge became like a second father."
  }
];

// ─── POETRY ANTHOLOGY (40) ───────────────────────────────────────────────────
const anthologyQuotes = [
  // ─ THE MANHUNT ──────────────────────────────────────────────────────────────
  {
    act: "The Manhunt — Armitage",
    text: "\"only then would he let me {{gap}} / the blown hinge of his lower jaw\"",
    answer: "trace",
    context: "Laura can only begin to map her husband's injuries after re-establishing emotional intimacy.",
    inference: "Physical touch is the language of healing — the body becomes a map of the trauma of war.",
    translation: "Only then would he let me touch and follow the broken line of his damaged jaw."
  },
  {
    act: "The Manhunt — Armitage",
    text: "\"the parachute silk of his punctured {{gap}}\"",
    answer: "lung",
    context: "Laura traces the internal injuries sustained by her husband, a soldier wounded in Bosnia.",
    inference: "Delicate, intimate imagery contrasts sharply with the violence of war — tenderness is placed against destruction.",
    translation: "The fragile tissue of his damaged lung felt as delicate as parachute silk."
  },
  {
    act: "The Manhunt — Armitage",
    text: "\"the sweating, unexploded {{gap}} / buried deep in his mind\"",
    answer: "mine",
    context: "The poem's closing image — the psychological wound of PTSD cannot be reached or defused.",
    inference: "The real damage of war is internal and invisible — mental injury is more dangerous than any physical scar.",
    translation: "The psychological trauma buried deep in his mind is like a live explosive waiting to go off."
  },
  {
    act: "The Manhunt — Armitage",
    text: "\"the tremble of the {{gap}} / and the shoulder blade\"",
    answer: "jaw",
    context: "Laura carefully charts each damaged part of her husband's body in sequence.",
    inference: "The methodical listing of injuries mirrors the patient, loving process of rebuilding intimacy after trauma.",
    translation: "The trembling of the jaw and the shoulder blade — each injury carefully noted."
  },
  {
    act: "The Manhunt — Armitage",
    text: "\"Then, and only {{gap}}, did I come close\"",
    answer: "then",
    context: "The conditional phrasing emphasises that intimacy had to be earned slowly, step by step.",
    inference: "Recovery from trauma cannot be rushed — the repetition insists on patience as the only path forward.",
    translation: "Only then — and not before — was I able to come close to him again."
  },
  // ─ LONDON ───────────────────────────────────────────────────────────────────
  {
    act: "London — Blake",
    text: "\"I wander through each chartered {{gap}}\"",
    answer: "street",
    context: "Blake's speaker walks through a London where everything has been bought, sold, and controlled.",
    inference: "'Chartered' implies ownership — even public space has been commodified by the powerful.",
    translation: "I walk through streets that have been mapped, owned, and sold."
  },
  {
    act: "London — Blake",
    text: "\"the mind-forged {{gap}} I hear\"",
    answer: "manacles",
    context: "Blake hears suffering in every voice he encounters on the streets of London.",
    inference: "Mental imprisonment keeps people trapped — oppression is internalised, not just imposed from outside.",
    translation: "I hear the mental chains that people have locked around their own minds."
  },
  {
    act: "London — Blake",
    text: "\"How the chimney-sweeper's cry / every blackening {{gap}} appals\"",
    answer: "Church",
    context: "The Church is blackened both by soot and by its failure to protect child chimney sweeps.",
    inference: "Institutional religion is complicit in social injustice — stained by what it silently tolerates.",
    translation: "The cry of the child chimney sweep darkens and shames every church that does nothing."
  },
  {
    act: "London — Blake",
    text: "\"And the hapless Soldier's sigh / Runs in blood down {{gap}} walls\"",
    answer: "Palace",
    context: "Blake connects the soldier's suffering directly to the institution of the monarchy.",
    inference: "The state is implicated in the suffering of its soldiers — power is built on sacrifice and blood.",
    translation: "The soldier's misery and blood are on the hands of the Palace — those who sent him to war."
  },
  {
    act: "London — Blake",
    text: "\"How the youthful Harlot's curse / Blasts the newborn {{gap}}'s tear\"",
    answer: "Infant",
    context: "Blake ends the poem with the image of prostitution and its consequences passed to the next generation.",
    inference: "Society's corruption contaminates even innocent new life — the cycle of oppression is self-perpetuating.",
    translation: "How the young prostitute's curse blights even the tears of a newborn baby."
  },
  // ─ VALENTINE ────────────────────────────────────────────────────────────────
  {
    act: "Valentine — Duffy",
    text: "\"Not a red rose or a satin {{gap}}\"",
    answer: "heart",
    context: "Duffy's speaker rejects clichéd Valentine's gifts in favour of something more honest.",
    inference: "Conventional romantic gestures are hollow — real love requires truthfulness, not empty sentiment.",
    translation: "Not the usual red rose or satin heart you'd expect."
  },
  {
    act: "Valentine — Duffy",
    text: "\"I am trying to be {{gap}}\"",
    answer: "truthful",
    context: "The speaker explicitly states her intention — the onion is an attempt at honest representation of love.",
    inference: "Love poetry should reflect reality rather than idealise it — truth matters more than beauty.",
    translation: "I'm trying to be honest with you about what love is really like."
  },
  {
    act: "Valentine — Duffy",
    text: "\"Its {{gap}} will cling to your fingers, / cling to your knife\"",
    answer: "scent",
    context: "The poem closes with the onion's persistent, clinging smell and the dark image of the knife.",
    inference: "Love is possessive and difficult to escape — the repetition of 'cling' suggests obsession and danger.",
    translation: "Its smell will stick to your fingers and to your knife — it refuses to let go."
  },
  {
    act: "Valentine — Duffy",
    text: "\"It will blind you with {{gap}} / and grief\"",
    answer: "tears",
    context: "The speaker acknowledges that love, like an onion, will make you cry.",
    inference: "Love inevitably causes pain — the poem refuses to pretend otherwise, insisting on emotional honesty.",
    translation: "It will make you cry — love brings tears and grief alongside joy."
  },
  {
    act: "Valentine — Duffy",
    text: "\"Lethal. / Its {{gap}} a ring\"",
    answer: "platinum",
    context: "The speaker offers the onion's inner rings as a substitute engagement ring.",
    inference: "The word 'lethal' immediately before reframes the ring — commitment is both precious and potentially destructive.",
    translation: "Deadly. Its rings are like a platinum engagement ring — beautiful but dangerous."
  },
  // ─ DULCE ET DECORUM EST ──────────────────────────────────────────────────────
  {
    act: "Dulce et Decorum Est — Owen",
    text: "\"Bent double, like old {{gap}} under sacks\"",
    answer: "beggars",
    context: "Owen opens with a shocking image of soldiers reduced to broken, exhausted figures.",
    inference: "The simile strips away all glory — soldiers are compared to the most degraded figures in society.",
    translation: "Doubled over like old beggars carrying heavy loads — nothing heroic here."
  },
  {
    act: "Dulce et Decorum Est — Owen",
    text: "\"Gas! Gas! Quick, boys! — An ecstasy of {{gap}}\"",
    answer: "fumbling",
    context: "A gas attack forces soldiers to scramble desperately for their masks in pure panic.",
    inference: "'Ecstasy' is used with savage irony — the panic of dying is mockingly elevated to near-religious transport.",
    translation: "Gas! Quick everyone! A desperate, frantic fumbling rush to get gas masks on."
  },
  {
    act: "Dulce et Decorum Est — Owen",
    text: "\"the old Lie: Dulce et decorum est / Pro patria {{gap}}\"",
    answer: "mori",
    context: "Owen closes by naming the Latin phrase taught to schoolboys as patriotic propaganda.",
    inference: "'Lie' is the poem's moral centre — the establishment has deliberately deceived a generation into dying.",
    translation: "The old lie: it is sweet and honourable to die for one's country."
  },
  {
    act: "Dulce et Decorum Est — Owen",
    text: "\"In all my {{gap}} before my helpless sight\"",
    answer: "dreams",
    context: "Owen is haunted by nightmares of the soldier dying in the gas attack.",
    inference: "The speaker cannot escape the trauma of what he witnessed — war scars the mind long after the body has left.",
    translation: "In every dream I have, I see him helplessly dying right in front of my eyes."
  },
  {
    act: "Dulce et Decorum Est — Owen",
    text: "\"As under a green {{gap}} I saw him drowning\"",
    answer: "sea",
    context: "Owen watches a soldier dying in a gas attack through the glass of his own mask.",
    inference: "The colour green makes the lethal gas hauntingly beautiful — death is given an eerie, dreamlike quality.",
    translation: "Through the green haze of the gas, I watched him drowning as if under a sea."
  },
  // ─ HAWK ROOSTING ────────────────────────────────────────────────────────────
  {
    act: "Hawk Roosting — Hughes",
    text: "\"I sit in the top of the wood, my eyes {{gap}}\"",
    answer: "closed",
    context: "The hawk speaks in first person, entirely at rest and in complete control of its environment.",
    inference: "Closed eyes signal supreme confidence — the hawk has no need to watch because nothing threatens it.",
    translation: "I perch at the top of the wood, eyes closed, completely at ease and in command."
  },
  {
    act: "Hawk Roosting — Hughes",
    text: "\"I am going to keep things like {{gap}}\"",
    answer: "this",
    context: "The hawk's final declaration — it intends to preserve its total power and control indefinitely.",
    inference: "The poem ends with chilling absolutism — the hawk symbolises authoritarian power that refuses all change.",
    translation: "I intend to keep everything exactly as it is right now."
  },
  {
    act: "Hawk Roosting — Hughes",
    text: "\"The convenience of the high {{gap}}\"",
    answer: "trees",
    context: "The hawk surveys its environment, treating the natural world as existing for its benefit alone.",
    inference: "Nature is entirely subservient to power — the hawk is indistinguishable from a tyrant.",
    translation: "The trees are conveniently placed for my use — everything exists to serve me."
  },
  {
    act: "Hawk Roosting — Hughes",
    text: "\"I kill where I {{gap}}\"",
    answer: "please",
    context: "The hawk asserts complete, unquestioned freedom to destroy life at will.",
    inference: "The absence of moral constraint defines the hawk's power — violence is casual and unrestricted.",
    translation: "I kill wherever and whenever I want — there are no limits on my power."
  },
  {
    act: "Hawk Roosting — Hughes",
    text: "\"My manners are tearing off {{gap}}\"",
    answer: "heads",
    context: "The hawk uses the word 'manners' with dark irony to describe its method of killing.",
    inference: "The juxtaposition of polite language and brutal act exposes the thin veneer of civilisation over violence.",
    translation: "My way of behaving — my so-called manners — involves tearing off heads."
  },
  // ─ DEATH OF A NATURALIST ─────────────────────────────────────────────────────
  {
    act: "Death of a Naturalist — Heaney",
    text: "\"All year the flax-dam festered in the {{gap}} / Of the townland\"",
    answer: "heart",
    context: "The flax-dam is a stagnant, rotting pool at the centre of the local landscape.",
    inference: "'Heart' places decay at the core of things — corruption is central and intimate, not distant.",
    translation: "All year, the stagnant flax pond rotted right at the heart of the local area."
  },
  {
    act: "Death of a Naturalist — Heaney",
    text: "\"The warm thick {{gap}} / Of frogspawn that grew like clotted water\"",
    answer: "slobber",
    context: "As a child, Heaney collects frogspawn, fascinated and delighted by the processes of nature.",
    inference: "The visceral language of childhood wonder soon curdles into revulsion — innocence cannot last.",
    translation: "The warm, thick slimy mass of frogspawn that looked like clotted, heavy water."
  },
  {
    act: "Death of a Naturalist — Heaney",
    text: "\"Miss Walls would tell us how / The daddy frog was called a {{gap}}\"",
    answer: "bullfrog",
    context: "The childhood version of nature is presented as safe, educational, and controlled by an authority figure.",
    inference: "Adult mediation of nature is later replaced by the raw, threatening reality of it — knowledge kills wonder.",
    translation: "Our teacher would explain that the father frog was called a bullfrog."
  },
  {
    act: "Death of a Naturalist — Heaney",
    text: "\"The air was thick with a bass {{gap}}\"",
    answer: "chorus",
    context: "When Heaney returns to the flax-dam, the frogs have gathered and the sound is overwhelming.",
    inference: "Nature has become threatening and overpowering — the innocence of childhood is shattered by the sublime.",
    translation: "The air was heavy with the deep, throbbing chorus of countless frogs."
  },
  {
    act: "Death of a Naturalist — Heaney",
    text: "\"I {{gap}} / To get away, did not dare to go\"",
    answer: "sickened",
    context: "The poem ends with Heaney frozen in horror before the mass of frogs, unable to move.",
    inference: "The loss of innocence is paralysing — he can neither embrace nor escape the adult understanding of nature.",
    translation: "I felt sick and wanted to run away, but I also didn't dare to move."
  },
  // ─ MAMETZ WOOD ───────────────────────────────────────────────────────────────
  {
    act: "Mametz Wood — Sheers",
    text: "\"For years afterwards the {{gap}} found them\"",
    answer: "farmers",
    context: "Sheers describes how the skeletal remains of Welsh soldiers killed in 1916 were discovered decades later.",
    inference: "The land preserves what history tried to bury — the earth refuses to forget its dead.",
    translation: "For years after the battle, farmers kept finding the remains of soldiers in their fields."
  },
  {
    act: "Mametz Wood — Sheers",
    text: "\"nesting in their absent {{gap}}\"",
    answer: "tongues",
    context: "The poem closes with a bird's nest found inside the skull of a dead soldier.",
    inference: "Life continues in the space where speech once was — the image is both tender and devastating.",
    translation: "A bird had made its nest in the empty space where their tongues once were."
  },
  {
    act: "Mametz Wood — Sheers",
    text: "\"a chit of bone, the china {{gap}} / of a shoulder blade\"",
    answer: "plate",
    context: "Sheers describes the fragile remains of the soldiers with delicate, precise imagery.",
    inference: "The comparison to fine china makes the bones precious and fragile — these were human beings, not statistics.",
    translation: "A small piece of bone, the delicate china-like curve of a shoulder blade."
  },
  {
    act: "Mametz Wood — Sheers",
    text: "\"their skeletons paused mid-{{gap}}\"",
    answer: "dance",
    context: "The soldiers' bones are found in positions suggesting they were caught mid-movement when they died.",
    inference: "The dance image is deeply ironic — these men were cut down in the prime of their youth and vitality.",
    translation: "Their skeletons were frozen mid-dance — caught in motion at the moment of death."
  },
  {
    act: "Mametz Wood — Sheers",
    text: "\"the {{gap}} earth still / insisting on this payment\"",
    answer: "wired",
    context: "The earth is described as actively continuing to yield up the bones of dead soldiers.",
    inference: "The land itself holds the soldiers accountable — their sacrifice cannot be forgotten while the earth remembers.",
    translation: "The churned-up earth is still demanding its payment — still giving back the bodies buried in it."
  },
  // ─ SHE WALKS IN BEAUTY ───────────────────────────────────────────────────────
  {
    act: "She Walks in Beauty — Byron",
    text: "\"She walks in beauty, like the {{gap}}\"",
    answer: "night",
    context: "Byron describes a woman he saw at a party, combining darkness and light in her appearance.",
    inference: "Beauty is associated with night rather than day — darkness is majestic and profound, not threatening.",
    translation: "She walks with a beauty that is like the night — dark, calm, and magnificent."
  },
  {
    act: "She Walks in Beauty — Byron",
    text: "\"And all that's best of dark and {{gap}} / Meet in her aspect and her eyes\"",
    answer: "bright",
    context: "Byron presents his subject as a perfect harmony of contrasting qualities.",
    inference: "The balance of opposites suggests inner perfection — her beauty is moral as well as physical.",
    translation: "Everything that is best about darkness and light comes together in her face and eyes."
  },
  {
    act: "She Walks in Beauty — Byron",
    text: "\"One shade the more, one ray the {{gap}} / Had half impaired the nameless grace\"",
    answer: "less",
    context: "Byron argues that even the slightest alteration would destroy the perfect balance of her beauty.",
    inference: "Perfection is presented as an absolute — any deviation from it, however small, would corrupt the whole.",
    translation: "Even one more shade of darkness or one less ray of light would have ruined her perfect beauty."
  },
  {
    act: "She Walks in Beauty — Byron",
    text: "\"The smiles that win, the tints that {{gap}}\"",
    answer: "glow",
    context: "Byron catalogues the subtle signs of inner virtue visible in the woman's expression.",
    inference: "The face becomes a window to the soul — goodness radiates outward into physical appearance.",
    translation: "The smiles that charm everyone, the warm glow in her complexion."
  },
  {
    act: "She Walks in Beauty — Byron",
    text: "\"A heart whose love is {{gap}}\"",
    answer: "innocent",
    context: "The poem closes by moving from physical beauty to inner moral virtue.",
    inference: "True beauty is ultimately moral, not merely physical — inner goodness gives outer appearance its real meaning.",
    translation: "A heart whose love is pure and innocent — beauty that comes from within."
  },
  // ─ SONNET 43 ─────────────────────────────────────────────────────────────────
  {
    act: "Sonnet 43 — E.B. Browning",
    text: "\"How do I love thee? Let me count the {{gap}}\"",
    answer: "ways",
    context: "Browning opens with a question she then spends the whole sonnet answering.",
    inference: "Love is something that can be catalogued — yet the list only demonstrates that it is infinite.",
    translation: "How do I love you? Let me count all the ways."
  },
  {
    act: "Sonnet 43 — E.B. Browning",
    text: "\"I love thee to the depth and breadth and {{gap}} / My soul can reach\"",
    answer: "height",
    context: "Browning attempts to measure her love spatially — filling every dimension of her soul.",
    inference: "Love is presented as limitless and all-encompassing — it fills every possible dimension of being.",
    translation: "I love you to every depth, breadth, and height that my soul is capable of reaching."
  },
  {
    act: "Sonnet 43 — E.B. Browning",
    text: "\"I love thee with the passion put to {{gap}} / In my old griefs\"",
    answer: "use",
    context: "Browning maps the depth of her love onto her most intense past emotional experiences.",
    inference: "Love converts past pain into something positive — suffering becomes the very measure of devotion.",
    translation: "I love you with the same intensity I once poured into my deepest sorrows."
  },
  {
    act: "Sonnet 43 — E.B. Browning",
    text: "\"I love thee freely, as men strive for {{gap}}\"",
    answer: "Right",
    context: "Browning compares her love to the moral striving for justice and righteousness.",
    inference: "Love is not merely an emotion but an ethical commitment — as serious and principled as fighting for justice.",
    translation: "I love you freely, the way people strive for what is right and just."
  },
  {
    act: "Sonnet 43 — E.B. Browning",
    text: "\"I shall but love thee better after {{gap}}\"",
    answer: "death",
    context: "Browning closes the sonnet by extending her love beyond the physical world entirely.",
    inference: "Love transcends mortality — death is not an ending but a transition into even greater devotion.",
    translation: "I will love you even more after death than I do in this life."
  },
  // ─ THE PRELUDE ───────────────────────────────────────────────────────────────
  {
    act: "The Prelude — Wordsworth",
    text: "\"One summer evening, led by her, I found / A little {{gap}}\"",
    answer: "boat",
    context: "The young Wordsworth secretly takes a rowing boat, experiencing the thrill of freedom on the lake.",
    inference: "Nature first appears as a benevolent guide — but the transgression soon triggers a profound moral reckoning.",
    translation: "One summer evening, nature led me to find a small boat tied up by the bank."
  },
  {
    act: "The Prelude — Wordsworth",
    text: "\"I dipped my oars into the silent {{gap}}\"",
    answer: "lake",
    context: "Wordsworth rows out alone, the silence emphasising the beauty and peace of the natural setting.",
    inference: "The tranquillity is about to be shattered — the calm before the sublime terror of what follows.",
    translation: "I dipped my oars into the still, silent surface of the lake."
  },
  {
    act: "The Prelude — Wordsworth",
    text: "\"A huge peak, black and huge, as if with voluntary power instinct, upreared its {{gap}} head\"",
    answer: "head",
    context: "A mountain seems to rise and pursue the boy across the lake as punishment for taking the boat.",
    inference: "Nature is a moral force — it punishes transgression and reshapes the boy's conscience.",
    translation: "A massive, dark mountain peak seemed to rise up deliberately, as if alive, towering above me."
  },
  {
    act: "The Prelude — Wordsworth",
    text: "\"My brain / Worked with a dim and undetermined sense / Of unknown modes of {{gap}}\"",
    answer: "being",
    context: "After the encounter with the mountain, the boy is left psychologically disturbed for days.",
    inference: "Nature reshapes consciousness — the sublime is both frightening and profoundly formative.",
    translation: "My mind was left troubled for many days with a vague, unsettling sense of forces I couldn't name."
  },
  {
    act: "The Prelude — Wordsworth",
    text: "\"Huge and mighty forms that do not live / Like living men moved {{gap}} through the mind\"",
    answer: "slowly",
    context: "Wordsworth reflects on the lasting presence of the mountain in his imagination long afterwards.",
    inference: "Nature leaves a permanent impression on the developing mind — its influence cannot be forgotten.",
    translation: "Vast, powerful shapes that are not human moved slowly and hauntingly through my thoughts for days."
  },
  // ─ OZYMANDIAS ────────────────────────────────────────────────────────────────
  {
    act: "Ozymandias — Shelley",
    text: "\"Two vast and trunkless legs of {{gap}} / Stand in the desert\"",
    answer: "stone",
    context: "The traveller describes the ruined statue — its torso is gone, only the legs remain upright.",
    inference: "The image of separated body parts is grotesque and comic — power is literally incomplete and broken.",
    translation: "Two enormous legless stone legs stand alone in the middle of the desert."
  },
  {
    act: "Ozymandias — Shelley",
    text: "\"whose frown / And wrinkled lip, and sneer of cold {{gap}}\"",
    answer: "command",
    context: "The statue's face still wears an expression of arrogant authority despite lying shattered in the sand.",
    inference: "Power outlives the powerful in stone — but even stone eventually crumbles into insignificance.",
    translation: "With a frown, a curled lip, and a sneer of cold authority still carved into the stone."
  },
  {
    act: "Ozymandias — Shelley",
    text: "\"Look on my Works, ye Mighty, and {{gap}}!\"",
    answer: "despair",
    context: "The inscription on the pedestal — a boast now surrounded by nothing but empty desert.",
    inference: "The command to despair is deeply ironic — the real despair is Ozymandias's own vanished power.",
    translation: "Look at what I built, you powerful rulers, and give up hope of ever matching me!"
  },
  {
    act: "Ozymandias — Shelley",
    text: "\"The hand that {{gap}} them and the heart that fed\"",
    answer: "mocked",
    context: "The sculptor who made the statue understood Ozymandias's arrogance and captured it precisely.",
    inference: "Art outlasts power — the sculptor's skill preserves the tyrant's folly for posterity to judge.",
    translation: "The sculptor's hand that captured those cruel features, and the arrogant heart that inspired them."
  },
  {
    act: "Ozymandias — Shelley",
    text: "\"the lone and level {{gap}} stretch far away\"",
    answer: "sands",
    context: "The poem closes with the empty desert surrounding the ruins of what was once a great empire.",
    inference: "Nature outlasts all human ambition — the indifferent desert is the only truly lasting power.",
    translation: "Nothing remains but bare, endless desert stretching away in every direction."
  },
  // ─ THE SOLDIER ───────────────────────────────────────────────────────────────
  {
    act: "The Soldier — Brooke",
    text: "\"If I should die, think only this of me: / That there's some corner of a foreign {{gap}}\"",
    answer: "field",
    context: "Brooke imagines his own death in war, framing it as England's gift of itself to foreign soil.",
    inference: "Death is presented as a form of national expansion — the soldier's body becomes England itself.",
    translation: "If I die, just remember that some corner of a foreign field will be forever England."
  },
  {
    act: "The Soldier — Brooke",
    text: "\"A dust whom {{gap}} bore, shaped, made aware\"",
    answer: "England",
    context: "Brooke describes himself as entirely a product of England — shaped and given consciousness by his nation.",
    inference: "National identity is a complete and sufficient self — the individual is joyfully subsumed into the country.",
    translation: "A man whom England created, formed, and gave awareness to."
  },
  {
    act: "The Soldier — Brooke",
    text: "\"In that rich earth a richer {{gap}} concealed\"",
    answer: "dust",
    context: "Brooke imagines his body enriching the foreign soil with English soil.",
    inference: "Death is transformed into a gift — the soldier's decomposition becomes an act of national generosity.",
    translation: "In that fertile foreign soil, an even richer earth is hidden — his Englishness."
  },
  {
    act: "The Soldier — Brooke",
    text: "\"Her sights and sounds; dreams happy as her {{gap}}\"",
    answer: "day",
    context: "Brooke imagines carrying England's landscapes and memories with him, even in death.",
    inference: "England is presented as a paradise — death is not loss but the preservation of something perfect.",
    translation: "England's landscapes and sounds — dreams as happy and golden as one of her summer days."
  },
  {
    act: "The Soldier — Brooke",
    text: "\"And laughter, learnt of friends; and {{gap}} / Shed by the rivers\"",
    answer: "gentleness",
    context: "Brooke concludes by listing the English qualities he will carry with him — friendship, laughter, gentleness.",
    inference: "England is characterised by its moral and social virtues, not its politics — a deeply idealised vision.",
    translation: "And laughter learned from friends; and gentleness, absorbed from English rivers and meadows."
  },
  // ─ ODE TO AUTUMN ─────────────────────────────────────────────────────────────
  {
    act: "Ode to Autumn — Keats",
    text: "\"Season of mists and mellow {{gap}}!\"",
    answer: "fruitfulness",
    context: "Keats opens with an apostrophe to Autumn, celebrating its abundance and rich generosity.",
    inference: "Autumn is the peak of natural fulfilment — beauty is found in maturity and ripeness, not just in youth.",
    translation: "Season of mist and gentle, generous ripeness!"
  },
  {
    act: "Ode to Autumn — Keats",
    text: "\"To bend with apples the {{gap}} cottage-trees\"",
    answer: "mossed",
    context: "Keats imagines Autumn conspiring with the sun to load fruit trees with abundance.",
    inference: "The natural world is purposeful and generous — Autumn actively produces abundance, not merely allows it.",
    translation: "To weigh down with apples the moss-covered trees around the cottage."
  },
  {
    act: "Ode to Autumn — Keats",
    text: "\"Thy hair soft-lifted by the winnowing {{gap}}\"",
    answer: "wind",
    context: "Autumn is personified as a figure with hair blowing in the breeze at the threshing floor.",
    inference: "The personification is gentle and sensory — Autumn is a living presence, not merely a season.",
    translation: "Your hair gently lifted by the light breeze that separates the grain."
  },
  {
    act: "Ode to Autumn — Keats",
    text: "\"Where are the songs of {{gap}}? Aye, where are they?\"",
    answer: "Spring",
    context: "The final stanza reassures Autumn that it has its own distinct music.",
    inference: "Autumn need not mourn Spring — every season has its own beauty and its own value.",
    translation: "Where have Spring's songs gone? — Autumn has its own music just as beautiful."
  },
  {
    act: "Ode to Autumn — Keats",
    text: "\"Then in a wailful choir the small gnats {{gap}}\"",
    answer: "mourn",
    context: "In the final stanza, the sounds of Autumn are catalogued — gnats, lambs, crickets, robins.",
    inference: "Autumn's music contains grief — the season acknowledges mortality even as it celebrates abundance.",
    translation: "Then the small gnats make a mournful, wailing sound like a sad choir."
  },
  // ─ AFTERNOONS ────────────────────────────────────────────────────────────────
  {
    act: "Afternoons — Larkin",
    text: "\"Summer is fading: / The leaves fall in ones and twos / From trees bordering the new {{gap}}\"",
    answer: "recreation",
    context: "Larkin opens with Autumn arriving in a suburban setting where young mothers bring children to play.",
    inference: "The fading of summer reflects the fading of the women's youth and possibilities — time is running out.",
    translation: "Summer is ending: leaves are falling one by one from trees around the new recreation ground."
  },
  {
    act: "Afternoons — Larkin",
    text: "\"Their beauty has {{gap}}\"",
    answer: "thickened",
    context: "Larkin notes the physical change in the young mothers with characteristic unflinching directness.",
    inference: "'Thickened' captures both physical change and the blunting of possibility — time is quietly cruel.",
    translation: "Their beauty has coarsened and solidified — youth has quietly been replaced by something heavier."
  },
  {
    act: "Afternoons — Larkin",
    text: "\"Something is pushing them / To the side of their own {{gap}}\"",
    answer: "lives",
    context: "Larkin observes young mothers being slowly displaced from the centre of their own existence.",
    inference: "Domesticity and parenthood gradually displace the self — time steals identity without drama.",
    translation: "Something is slowly pushing these women to the margins of their own lives."
  },
  {
    act: "Afternoons — Larkin",
    text: "\"An estateful of washing, / And the albums, lettered / Our {{gap}}, lying / Near the television\"",
    answer: "Wedding",
    context: "Wedding albums sit gathering dust near the television — a symbol of faded romantic aspirations.",
    inference: "Marriage has been domesticated into an object collecting dust — romance has been replaced by routine.",
    translation: "A neighbourhood full of laundry, and wedding albums lying near the television."
  },
  {
    act: "Afternoons — Larkin",
    text: "\"Their {{gap}} open at / Washing, and those unripped / Paths through the evening\"",
    answer: "lovers",
    context: "The husbands who were once their lovers now open up paths through the evening — routine has replaced passion.",
    inference: "The word 'lovers' applied to domesticated husbands is deeply melancholic — love has been suburbanised.",
    translation: "Their lovers — now reduced to heading off through the evening on routine errands."
  },
  // ─ AS IMPERCEPTIBLY AS GRIEF ──────────────────────────────────────────────────
  {
    act: "As Imperceptibly as Grief — Dickinson",
    text: "\"As imperceptibly as {{gap}} / The Summer lapsed away\"",
    answer: "Grief",
    context: "Dickinson compares the gradual fading of summer to the slow, almost unnoticed process of grief.",
    inference: "Loss is something you barely notice until it has already happened — change is subtle and cumulative.",
    translation: "As gradually and quietly as grief itself, summer just slipped away."
  },
  {
    act: "As Imperceptibly as Grief — Dickinson",
    text: "\"Too imperceptible at last / To seem like {{gap}}\"",
    answer: "Perfidy",
    context: "The departure of summer is so gradual it barely feels like a betrayal.",
    inference: "Loss creeps up on us — grief and the passing of seasons share the quality of deceptive slowness.",
    translation: "Too gradual in the end to even feel like a betrayal or a deception."
  },
  {
    act: "As Imperceptibly as Grief — Dickinson",
    text: "\"The Dusk drew earlier in / The Morning foreign {{gap}}\"",
    answer: "shone",
    context: "The shortening days signal Autumn's arrival — the quality of light has subtly changed.",
    inference: "The world becomes unfamiliar — even the morning light is changed, estranged, something other.",
    translation: "The evenings grew darker earlier, and even the morning light began to feel strange and foreign."
  },
  {
    act: "As Imperceptibly as Grief — Dickinson",
    text: "\"A Courteous, yet harrowing {{gap}}\"",
    answer: "Grace",
    context: "Summer's departure is described as polite yet painful — a dignified, distressing leave-taking.",
    inference: "Beauty and pain are inseparable — the grace of summer's departure does not make it any less devastating.",
    translation: "Departing with a courteous but deeply painful grace."
  },
  {
    act: "As Imperceptibly as Grief — Dickinson",
    text: "\"As Guest that would be {{gap}}\"",
    answer: "gone",
    context: "Summer departs like a polite, considerate guest who leaves without making any fuss.",
    inference: "The personification is bittersweet — summer's quiet politeness makes its absence feel all the more complete.",
    translation: "Like a guest who was ready to leave and simply, quietly departed."
  },
  // ─ COZY APOLOGIA ──────────────────────────────────────────────────────────────
  {
    act: "Cozy Apologia — Dove",
    text: "\"{{gap}}, disastrous, thrilling\"",
    answer: "Macho",
    context: "The speaker describes the kind of dangerous, glamorous man she once romanticised in her younger years.",
    inference: "Passion is exposed as a kind of performance — the thrilling past is contrasted with the comfortable present.",
    translation: "Macho, catastrophic, exciting — that is the kind of man I used to idealise."
  },
  {
    act: "Cozy Apologia — Dove",
    text: "\"I could give the stars / their {{gap}}\"",
    answer: "distance",
    context: "The speaker reflects on the grand romantic gestures she could make, but chooses not to.",
    inference: "True love is not about spectacular display — comfort and closeness replace the need for grand passion.",
    translation: "I could try to measure the stars, to make impressive romantic gestures — but I don't need to."
  },
  {
    act: "Cozy Apologia — Dove",
    text: "\"I've been {{gap}} to you\"",
    answer: "faithful",
    context: "The speaker acknowledges her loyalty to Fred, her husband, with gentle self-aware humour.",
    inference: "Fidelity is presented as an active, chosen commitment rather than passive obligation — love matures.",
    translation: "I have been faithful to you — I have stayed true."
  },
  {
    act: "Cozy Apologia — Dove",
    text: "\"Outside, rain and thunder: / nifty as a {{gap}}\"",
    answer: "Nazi",
    context: "Hurricane Floyd rages outside while the couple sits safely indoors — the storm is given a sharp, menacing comparison.",
    inference: "The contrast between domestic warmth and external chaos makes the ordinary feel miraculous and worth protecting.",
    translation: "Outside, rain and thunder — the hurricane as efficient and terrifying as a fascist army."
  },
  {
    act: "Cozy Apologia — Dove",
    text: "\"For this I could {{gap}} the humdrum and carry / each useful day\"",
    answer: "decorate",
    context: "The speaker finds beauty and meaning in the ordinary domestic day shared with her partner.",
    inference: "Love transforms the ordinary into something worth celebrating — the everyday becomes the extraordinary.",
    translation: "For this love I could decorate even the dull and ordinary days and carry them with pride."
  },
  // ─ LIVING SPACE ──────────────────────────────────────────────────────────────
  {
    act: "Living Space — Dharker",
    text: "\"There are just not enough / straight {{gap}} here\"",
    answer: "lines",
    context: "Dharker describes the makeshift slums of Mumbai, built without any formal structure or design.",
    inference: "The absence of straight lines represents lives lived outside the rigid structures of mainstream society.",
    translation: "There simply aren't enough straight lines in this place — nothing has been built to plan."
  },
  {
    act: "Living Space — Dharker",
    text: "\"The whole structure leans into the {{gap}}\"",
    answer: "circle",
    context: "The makeshift building is described as leaning as if drawn into an organic, non-linear shape.",
    inference: "The organic form of the building reflects the organic, improvised lives lived within it.",
    translation: "The whole building leans inward, pulled into a circular, imperfect shape."
  },
  {
    act: "Living Space — Dharker",
    text: "\"Someone has {{gap}} a bulb / in the soft hollow of a face\"",
    answer: "squeezed",
    context: "A light bulb has been improvised into the structure — electricity brought into an impossible space.",
    inference: "Human ingenuity creates light in darkness — even in the most precarious conditions, people seek illumination.",
    translation: "Someone has squeezed a light bulb into the soft, curved hollow of the structure."
  },
  {
    act: "Living Space — Dharker",
    text: "\"thin walls of {{gap}}\"",
    answer: "faith",
    context: "The poem closes with eggs balanced in a wire basket inside the precarious, leaning structure.",
    inference: "Faith is the only thing holding fragile lives together — belief sustains what logic says should collapse.",
    translation: "Held together by nothing but thin, fragile walls of faith."
  },
  {
    act: "Living Space — Dharker",
    text: "\"Bright new {{gap}} in a wire basket\"",
    answer: "eggs",
    context: "The closing image — fragile eggs balanced in a wire basket inside the precarious structure.",
    inference: "The eggs symbolise fragile hope and new life — the most delicate things survive here through faith alone.",
    translation: "Bright, new eggs sitting in a wire basket — fragile life balanced inside an impossible space."
  },
  // ─ A WIFE IN LONDON ───────────────────────────────────────────────────────────
  {
    act: "A Wife in London — Hardy",
    text: "\"She sits in the {{gap}} vapour\"",
    answer: "tawny",
    context: "A soldier's wife waits in foggy London for news of her husband fighting in the Boer War.",
    inference: "The atmospheric fog mirrors her psychological state — she exists in uncertainty, a kind of living limbo.",
    translation: "She sits in the thick, yellowish-brown fog that rolls in from the Thames."
  },
  {
    act: "A Wife in London — Hardy",
    text: "\"Flashed {{gap}} is in her hand\"",
    answer: "news",
    context: "A telegram arrives informing the wife of her husband's death in the Boer War.",
    inference: "'Flashed' makes the news feel like an electric shock — sudden, violent, and brutally impersonal.",
    translation: "Urgent, devastating news is now in her hands — delivered coldly by telegram."
  },
  {
    act: "A Wife in London — Hardy",
    text: "\"The thick {{gap}} webbing the columned street\"",
    answer: "fog",
    context: "The fog of London envelops the setting, creating an atmosphere of confusion and obscured vision.",
    inference: "The fog is both literal and metaphorical — the wife cannot see clearly, cannot yet know the truth.",
    translation: "The thick fog wrapping itself around the columns of the London street."
  },
  {
    act: "A Wife in London — Hardy",
    text: "\"He — has {{gap}} — fallen — in the far South Land\"",
    answer: "fallen",
    context: "The telegram announces the husband's death with stark, formal phrasing.",
    inference: "The dashes enact the wife's shock — the mind cannot absorb the news all at once.",
    translation: "He — has fallen — died — in the distant South African battlefields."
  },
  {
    act: "A Wife in London — Hardy",
    text: "\"That he would have home by {{gap}}, and they would go\"",
    answer: "Easter",
    context: "A second letter arrives the very next day — written before his death, full of plans for the future.",
    inference: "Hope and plans arrive the day after death is confirmed — the timing makes the grief unbearably bitter.",
    translation: "That he would be home by Easter and they would go somewhere together — plans now impossible."
  }
];

// ─── LOOKUP MAP ───────────────────────────────────────────────────────────────
const allQuotes = {
  macbeth:   macbethQuotes,
  romeo:     romeoQuotes,
  carol:     carolQuotes,
  anthology: anthologyQuotes
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentPlay = 'macbeth';
let index = 0;
let userAnswers = Array(macbethQuotes.length).fill('');

function getQuotes() {
  return allQuotes[currentPlay] || macbethQuotes;
}

// ─── DOM REFS ─────────────────────────────────────────────────────────────────
const countEl         = document.getElementById('count');
const barFill         = document.getElementById('barFill');
const actSceneEl      = document.getElementById('actScene');
const quoteTextEl     = document.getElementById('quoteText');
const feedbackEl      = document.getElementById('feedback');
const contextText     = document.getElementById('contextText');
const inferenceText   = document.getElementById('inferenceText');
const translationText = document.getElementById('translationText');
const summaryEl       = document.getElementById('summary');
const scoreLine       = document.getElementById('scoreLine');
const summaryList     = document.getElementById('summaryList');
const prevBtn         = document.getElementById('prevBtn');
const nextBtn         = document.getElementById('nextBtn');
const checkBtn        = document.getElementById('checkBtn');
const revealBtn       = document.getElementById('revealBtn');
const resetBtn        = document.getElementById('resetBtn');
const tabBtns         = document.querySelectorAll('.tab-btn');

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function normalize(v) { return v.trim().toLowerCase(); }
function getInput()   { return document.getElementById('gapInput'); }

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderQuote() {
  const quotes = getQuotes();
  const item   = quotes[index];

  actSceneEl.textContent      = item.act;
  quoteTextEl.innerHTML       = item.text.replace('{{gap}}', '<input type="text" placeholder="..." id="gapInput" autocomplete="off" />');
  translationText.textContent = item.translation;
  contextText.textContent     = item.context;
  inferenceText.textContent   = item.inference;

  feedbackEl.textContent = '';
  feedbackEl.className   = 'feedback';

  var input = getInput();
  input.value = userAnswers[index] || '';
  input.addEventListener('input', function() {
    feedbackEl.textContent = '';
    feedbackEl.className   = 'feedback';
    userAnswers[index]     = input.value;
  });
  input.focus();

  countEl.textContent     = (index + 1) + ' / ' + quotes.length;
  barFill.style.width     = (((index + 1) / quotes.length) * 100) + '%';
  prevBtn.disabled        = index === 0;
  nextBtn.textContent     = index === quotes.length - 1 ? 'Finish' : 'Next';
  summaryEl.style.display = 'none';
}

function showSummary() {
  var quotes  = getQuotes();
  var correct = 0;
  summaryList.innerHTML = '';

  quotes.forEach(function(item, i) {
    var user      = (userAnswers[i] || '').trim();
    var isCorrect = normalize(user) === normalize(item.answer);
    if (isCorrect) correct++;

    var li       = document.createElement('li');
    li.className = isCorrect ? 'correct' : 'incorrect';
    var word     = isCorrect
      ? '<span class="word-correct">' + item.answer + '</span>'
      : '<span class="word-incorrect">' + (user || '(blank)') + '</span> <span class="word-correct">(correct: ' + item.answer + ')</span>';
    li.innerHTML = item.act + ' — ' + item.text.replace('{{gap}}', word);
    summaryList.appendChild(li);
  });

  scoreLine.textContent   = 'Score: ' + correct + ' / ' + quotes.length;
  summaryEl.style.display = 'block';
  summaryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── TAB SWITCH ───────────────────────────────────────────────────────────────
function switchPlay(play) {
  currentPlay = play;
  index       = 0;
  userAnswers = Array(getQuotes().length).fill('');

  document.body.classList.remove('romeo-mode', 'carol-mode', 'anthology-mode');
  if (play === 'romeo')     document.body.classList.add('romeo-mode');
  if (play === 'carol')     document.body.classList.add('carol-mode');
  if (play === 'anthology') document.body.classList.add('anthology-mode');

  tabBtns.forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.play === play);
  });

  renderQuote();
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────
tabBtns.forEach(function(btn) {
  btn.addEventListener('click', function() { switchPlay(btn.dataset.play); });
});

checkBtn.addEventListener('click', function() {
  var input     = getInput();
  var answer    = getQuotes()[index].answer;
  var isCorrect = normalize(input.value) === normalize(answer);
  userAnswers[index]     = input.value;
  feedbackEl.textContent = isCorrect ? 'Correct.' : 'Not quite. You want "' + answer + '".';
  feedbackEl.className   = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
});

revealBtn.addEventListener('click', function() {
  var answer         = getQuotes()[index].answer;
  getInput().value   = answer;
  userAnswers[index] = answer;
  feedbackEl.textContent = 'Revealed.';
  feedbackEl.className   = 'feedback correct';
});

resetBtn.addEventListener('click', function() {
  getInput().value       = '';
  userAnswers[index]     = '';
  feedbackEl.textContent = '';
  feedbackEl.className   = 'feedback';
});

prevBtn.addEventListener('click', function() {
  if (index > 0) { index--; renderQuote(); }
});

nextBtn.addEventListener('click', function() {
  var quotes = getQuotes();
  if (index < quotes.length - 1) { index++; renderQuote(); }
  else showSummary();
});

document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter') return;
  var input = getInput();
  if (!input || document.activeElement !== input) return;
  e.preventDefault();

  var quotes    = getQuotes();
  var answer    = quotes[index].answer;
  var isCorrect = normalize(input.value) === normalize(answer);
  userAnswers[index]     = input.value;
  feedbackEl.textContent = isCorrect ? 'Correct.' : 'Not quite. You want "' + answer + '".';
  feedbackEl.className   = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');

  if (index < quotes.length - 1) { index++; renderQuote(); }
  else showSummary();
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderQuote();

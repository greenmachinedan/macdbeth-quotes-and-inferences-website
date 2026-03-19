// ─── MACBETH QUOTES (40) ────────────────────────────────────────────────────
const macbethQuotes = [
  // Original 20
  {
    act: "Act 1, Scene 1",
    text: "\"Fair is foul, and {{gap}} is fair.\"",
    answer: "foul",
    context: "Witches open with a paradox, framing disorder and moral confusion.",
    inference: "Shakespeare signals a world where appearances are unreliable.",
    translation: "What seems good is bad, and what seems bad is good."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"So {{gap}} and fair a day I have not seen.\"",
    answer: "foul",
    context: "Macbeth echoes the witches, showing their influence taking hold.",
    inference: "Macbeth is already adopting their twisted worldview.",
    translation: "I've never seen a day so bad and so good at once."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"All hail, Macbeth, that shalt be {{gap}} hereafter!\"",
    answer: "king",
    context: "The prophecy sparks Macbeth's ambition.",
    inference: "Power is presented as destiny, tempting Macbeth to act.",
    translation: "All hail, Macbeth, you will be king in the future!"
  },
  {
    act: "Act 1, Scene 4",
    text: "\"{{gap}}, hide your fires; let not light see my black and deep desires.\"",
    answer: "stars",
    context: "Macbeth hides his ambition from Duncan.",
    inference: "He recognizes his desires are morally corrupt.",
    translation: "Stars, hide your light so no one sees my dark desires."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Look like the innocent flower, but be the {{gap}} under't.\"",
    answer: "serpent",
    context: "Lady Macbeth advises deception to secure power.",
    inference: "Appearance vs reality becomes the couple's strategy.",
    translation: "Look innocent, but be deadly underneath."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Come, you spirits that tend on mortal thoughts, {{gap}} me here.\"",
    answer: "unsex",
    context: "Lady Macbeth rejects traditional femininity.",
    inference: "She sees compassion as weakness that must be stripped away.",
    translation: "Spirits, take away my femininity and make me ruthless."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"I have no spur to prick the sides of my intent, but only {{gap}} ambition.\"",
    answer: "vaulting",
    context: "Macbeth identifies ambition as his main motive.",
    inference: "He knows his desire for power is irrational and dangerous.",
    translation: "I have no motive except reckless ambition."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"We will {{gap}} no further in this business.\"",
    answer: "proceed",
    context: "Macbeth hesitates before murdering Duncan.",
    inference: "His conscience briefly resists ambition.",
    translation: "We will not go any further with this plan."
  },
  {
    act: "Act 2, Scene 1",
    text: "\"Is this a {{gap}} which I see before me, the handle toward my hand?\"",
    answer: "dagger",
    context: "Macbeth hallucinates before the murder.",
    inference: "Guilt and desire blur reality and push him toward violence.",
    translation: "Is that a dagger I'm seeing, pointing me to the murder?"
  },
  {
    act: "Act 2, Scene 2",
    text: "\"Macbeth does murder {{gap}}.\"",
    answer: "sleep",
    context: "After killing Duncan, Macbeth feels cursed.",
    inference: "He believes he has destroyed his own peace and innocence.",
    translation: "Macbeth has killed his own ability to rest in peace."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"Will all great Neptune's ocean wash this {{gap}} clean from my hand?\"",
    answer: "blood",
    context: "Macbeth is overwhelmed by guilt.",
    inference: "His crime feels permanent and unforgivable.",
    translation: "Can all the oceans wash away my guilt?"
  },
  {
    act: "Act 2, Scene 3",
    text: "\"There's {{gap}} in men's smiles.\"",
    answer: "daggers",
    context: "Donalbain recognizes danger after Duncan's death.",
    inference: "The court is full of hidden threats and betrayal.",
    translation: "Smiles can hide deadly intentions."
  },
  {
    act: "Act 3, Scene 2",
    text: "\"O, full of {{gap}} is my mind, dear wife!\"",
    answer: "scorpions",
    context: "Macbeth becomes paranoid after gaining power.",
    inference: "Kingship brings fear, not security.",
    translation: "My mind is full of poisonous, disturbing thoughts."
  },
  {
    act: "Act 3, Scene 4",
    text: "\"Never shake thy {{gap}} locks at me!\"",
    answer: "gory",
    context: "Macbeth sees Banquo's ghost at the banquet.",
    inference: "Public collapse reveals his private guilt.",
    translation: "Don't shake your bloody hair at me!"
  },
  {
    act: "Act 4, Scene 1",
    text: "\"{{gap}}, double toil and trouble; fire burn and cauldron bubble.\"",
    answer: "double",
    context: "Witches intensify the chaos with their spell.",
    inference: "Their power fuels Macbeth's false confidence.",
    translation: "Trouble is doubled; the witches stir up more chaos."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"None of woman {{gap}} shall harm Macbeth.\"",
    answer: "born",
    context: "A prophecy gives Macbeth misleading safety.",
    inference: "He trusts fate and ignores the moral consequences.",
    translation: "No one born from a woman will hurt Macbeth."
  },
  {
    act: "Act 5, Scene 1",
    text: "\"{{gap}}, damned spot! Out, I say!\"",
    answer: "out",
    context: "Lady Macbeth sleepwalks, haunted by guilt.",
    inference: "The stain of murder is psychological and inescapable.",
    translation: "Get out, cursed stain! I want it gone!"
  },
  {
    act: "Act 5, Scene 5",
    text: "\"I looked toward Birnam, and anon, methought, the wood began to {{gap}}.\"",
    answer: "move",
    context: "Malcolm's army advances with branches as camouflage.",
    inference: "Prophecy unravels and Macbeth's fate closes in.",
    translation: "I thought the forest started moving toward us."
  },
  {
    act: "Act 5, Scene 5",
    text: "\"{{gap}}, and tomorrow, and tomorrow, creeps in this petty pace from day to day.\"",
    answer: "tomorrow",
    context: "Macbeth reflects after hearing of Lady Macbeth's death.",
    inference: "Life feels meaningless and repetitive to him.",
    translation: "Tomorrow and tomorrow keep dragging on in a dull routine."
  },
  {
    act: "Act 5, Scene 5",
    text: "\"It is a tale told by an idiot, full of sound and fury, signifying {{gap}}.\"",
    answer: "nothing",
    context: "Macbeth reaches the height of nihilism.",
    inference: "He believes his ambition has led to emptiness.",
    translation: "Life is just noise and chaos with no real meaning."
  },

  // NEW 20 Macbeth quotes
  {
    act: "Act 1, Scene 2",
    text: "\"For brave Macbeth — well he {{gap}} that name.\"",
    answer: "deserves",
    context: "A captain praises Macbeth's valor on the battlefield.",
    inference: "Before corruption, Macbeth is framed as a hero of the state.",
    translation: "Macbeth really earns the title of brave."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"If chance will have me king, why, {{gap}} may crown me, without my stir.\"",
    answer: "chance",
    context: "Macbeth briefly considers leaving fate to do its work.",
    inference: "He has not yet committed to murder — ambition wars with passivity.",
    translation: "If fate wants me to be king, it might just happen without me doing anything."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Yet do I fear thy {{gap}}: it is too full o' the milk of human kindness.\"",
    answer: "nature",
    context: "Lady Macbeth reads Macbeth's letter and fears he's too soft.",
    inference: "She positions compassion as a flaw — power requires ruthlessness.",
    translation: "I worry you're too kind-hearted to seize power."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Come, thick {{gap}}, and pall thee in the dunnest smoke of hell.\"",
    answer: "night",
    context: "Lady Macbeth calls on darkness to help her suppress guilt.",
    inference: "She must actively block her conscience to commit murder.",
    translation: "Come, thick darkness, and wrap yourself in the blackest smoke of hell."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"He's here in double trust: first, as I am his {{gap}}.\"",
    answer: "kinsman",
    context: "Macbeth lists the reasons he should not kill Duncan.",
    inference: "He knows the murder violates every bond of loyalty and hospitality.",
    translation: "Duncan trusts me doubly — first because I'm his relative."
  },
  {
    act: "Act 1, Scene 7",
    text: "\"Was the hope drunk wherein you {{gap}} yourself?\"",
    answer: "dressed",
    context: "Lady Macbeth challenges Macbeth's wavering resolve.",
    inference: "She uses shame and mockery to overpower his conscience.",
    translation: "Were you drunk when you made those brave promises?"
  },
  {
    act: "Act 2, Scene 1",
    text: "\"Thou sure and {{gap}} minister, that goest not in the dark, hear not my steps.\"",
    answer: "firm-set",
    context: "Macbeth moves toward Duncan's chamber, urging the earth not to reveal him.",
    inference: "Even the ground becomes complicit in his crime — he fears exposure.",
    translation: "Solid earth, don't let my footsteps be heard."
  },
  {
    act: "Act 2, Scene 3",
    text: "\"Had I but {{gap}} an hour before this chance, I had lived a blessed time.\"",
    answer: "died",
    context: "Macbeth laments Duncan's murder to deflect suspicion.",
    inference: "His performance of grief is itself a kind of murder of truth.",
    translation: "If I had died just an hour ago, I would have died happy."
  },
  {
    act: "Act 3, Scene 1",
    text: "\"To be thus is nothing; but to be {{gap}} thus.\"",
    answer: "safely",
    context: "Macbeth fears Banquo, who knows the witches' prophecy.",
    inference: "Gaining power is meaningless without security — tyranny breeds paranoia.",
    translation: "Being king means nothing unless I'm safe while being king."
  },
  {
    act: "Act 3, Scene 1",
    text: "\"I am in blood stepped in so far that, should I {{gap}} no more, returning were as tedious as go o'er.\"",
    answer: "wade",
    context: "Macbeth acknowledges the point of no return in his crimes.",
    inference: "He has accepted evil as his path — guilt no longer stops him.",
    translation: "I've gone so deep into blood that turning back would be as hard as pressing on."
  },
  {
    act: "Act 3, Scene 3",
    text: "\"Fly, good Fleance, {{gap}}! Thou mayst revenge.\"",
    answer: "fly",
    context: "A murderer cries out as Fleance escapes Banquo's ambush.",
    inference: "Macbeth's plan to end the bloodline fails — the cycle of revenge continues.",
    translation: "Run, Fleance, run! You can avenge your father someday."
  },
  {
    act: "Act 3, Scene 4",
    text: "\"The time approaches, that will with due decision make us know what we shall {{gap}} and what we owe.\"",
    answer: "say",
    context: "Macbeth speaks at the banquet just before the ghost appears.",
    inference: "He still performs authority publicly while privately disintegrating.",
    translation: "The time is coming when we'll have to account for what we've done and what we own."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"By the pricking of my {{gap}}, something wicked this way comes.\"",
    answer: "thumbs",
    context: "The second witch senses Macbeth's approach with supernatural instinct.",
    inference: "The witches remain in control, luring Macbeth deeper into fate.",
    translation: "My thumbs are pricking — something wicked is coming."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"Macbeth shall never vanquished be until great {{gap}} Wood to high Dunsinane Hill shall come.\"",
    answer: "Birnam",
    context: "The witches deliver a prophecy that seems impossible.",
    inference: "False security is more dangerous than open threat — Macbeth is lulled.",
    translation: "Macbeth won't be defeated until Birnam Wood marches to Dunsinane Hill."
  },
  {
    act: "Act 4, Scene 3",
    text: "\"He has no {{gap}}; all my pretty ones? Did you say all?\"",
    answer: "children",
    context: "Macduff learns of the murder of his wife and children by Macbeth.",
    inference: "The personal cost of tyranny is felt most viscerally in this moment of grief.",
    translation: "He has no children — all my precious ones killed? All of them?"
  },
  {
    act: "Act 4, Scene 3",
    text: "\"I cannot but remember such things were, that were most {{gap}} to me.\"",
    answer: "precious",
    context: "Macduff mourns the slaughter of his family.",
    inference: "Personal loss makes the cost of Macbeth's tyranny viscerally human.",
    translation: "I can't help remembering things that were so precious to me."
  },
  {
    act: "Act 5, Scene 1",
    text: "\"The {{gap}} knows what she has known.\"",
    answer: "heart",
    context: "The doctor observes Lady Macbeth's sleepwalking confession.",
    inference: "Her subconscious cannot contain the guilt her waking self suppressed.",
    translation: "Her heart holds secrets she revealed while sleepwalking."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"Canst thou not minister to a mind {{gap}}?\"",
    answer: "diseased",
    context: "Macbeth demands his doctor cure Lady Macbeth's psychological torment.",
    inference: "He seeks a physical cure for a moral wound — showing his fundamental misunderstanding.",
    translation: "Can't you treat a sick mind?"
  },
  {
    act: "Act 5, Scene 5",
    text: "\"She should have died {{gap}}; there would have been a time for such a word.\"",
    answer: "hereafter",
    context: "Macbeth reacts to news of Lady Macbeth's death with numbness.",
    inference: "He has lost the capacity to feel — a mark of total moral collapse.",
    translation: "She would have died eventually — there would have been time to grieve later."
  },
  {
    act: "Act 5, Scene 8",
    text: "\"Yet I will try the last. Before my body I throw my {{gap}} shield.\"",
    answer: "warlike",
    context: "Macbeth faces Macduff in final combat, resolved to die fighting.",
    inference: "Even in defeat, Macbeth clings to the warrior identity he began with.",
    translation: "I'll fight to the end. I hold up my shield and face you."
  }
];

// ─── ROMEO & JULIET QUOTES (40) ─────────────────────────────────────────────
const romeoQuotes = [
  {
    act: "Act 1, Scene 1",
    text: "\"A pair of star-crossed {{gap}} take their life.\"",
    answer: "lovers",
    context: "The Prologue announces the tragedy before it unfolds.",
    inference: "Fate is foregrounded — love and death are bound from the outset.",
    translation: "Two unlucky lovers will end their own lives."
  },
  {
    act: "Act 1, Scene 1",
    text: "\"Here's much to do with {{gap}}, but more with love.\"",
    answer: "hate",
    context: "Romeo reflects on the contradictions of the feud and his feelings for Rosaline.",
    inference: "Love and hate are presented as inseparable forces in Verona.",
    translation: "All of this has to do with hate, but even more with love."
  },
  {
    act: "Act 1, Scene 2",
    text: "\"She is the hopeful lady of my {{gap}}.\"",
    answer: "earth",
    context: "Capulet speaks proudly of Juliet to Paris, who seeks to marry her.",
    inference: "Juliet is prized as property and legacy — her own feelings are irrelevant to the men around her.",
    translation: "She is my most precious hope in the world."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"Did my heart love till now? Forswear it, {{gap}}! For I ne'er saw true beauty till this night.\"",
    answer: "sight",
    context: "Romeo sees Juliet for the first time at the Capulet feast.",
    inference: "His love for Rosaline is instantly abandoned — love is presented as sudden and overwhelming.",
    translation: "Had I ever truly loved before? My eyes must have been wrong — I've never seen real beauty until tonight."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"My only love sprung from my only {{gap}}!\"",
    answer: "hate",
    context: "Juliet discovers Romeo is a Montague — her family's sworn enemy.",
    inference: "Love and hate are inseparable in Verona — she cannot escape the feud.",
    translation: "The person I love comes from the family I was born to hate."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"But soft! What light through yonder window {{gap}}?\"",
    answer: "breaks",
    context: "Romeo stands below Juliet's balcony and is captivated by her appearance.",
    inference: "Juliet is associated with light throughout the play — she represents hope in darkness.",
    translation: "Wait — what is that light shining through the window?"
  },
  {
    act: "Act 2, Scene 2",
    text: "\"What's in a name? That which we call a {{gap}} by any other name would smell as sweet.\"",
    answer: "rose",
    context: "Juliet argues that names are meaningless — Romeo's family name doesn't define him.",
    inference: "She challenges the arbitrary nature of the feud and social identity.",
    translation: "Names don't matter — a rose would still be beautiful whatever you called it."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"O Romeo, Romeo! Wherefore art thou {{gap}}?\"",
    answer: "Romeo",
    context: "Juliet laments that the man she loves has the wrong family name.",
    inference: "Identity and social belonging are obstacles to love.",
    translation: "Why do you have to be Romeo — a Montague?"
  },
  {
    act: "Act 2, Scene 2",
    text: "\"My bounty is as boundless as the {{gap}}, my love as deep.\"",
    answer: "sea",
    context: "Juliet expresses the limitlessness of her love for Romeo.",
    inference: "Love is presented as an inexhaustible force — vast and uncontrollable.",
    translation: "My generosity and love are as deep and endless as the sea."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"This bud of love, by summer's ripening {{gap}}, may prove a beauteous flower when next we meet.\"",
    answer: "breath",
    context: "Juliet cautions against rushing their love — it is new and fragile.",
    inference: "Love needs time to grow — the tragedy lies in the speed that denies this.",
    translation: "Our love is just a bud — it may bloom into something beautiful if we give it time."
  },
  {
    act: "Act 2, Scene 3",
    text: "\"These violent delights have violent {{gap}}.\"",
    answer: "ends",
    context: "Friar Lawrence warns Romeo that passionate love burns too brightly.",
    inference: "A structural warning — extreme joy breeds extreme sorrow.",
    translation: "Wild passions lead to wild disasters."
  },
  {
    act: "Act 2, Scene 3",
    text: "\"Wisely and {{gap}}: they stumble that run fast.\"",
    answer: "slow",
    context: "Friar Lawrence counsels Romeo not to rush into marriage.",
    inference: "Rashness is a fatal flaw throughout the play — haste leads to death.",
    translation: "Be careful and go slowly — people who rush end up falling."
  },
  {
    act: "Act 2, Scene 6",
    text: "\"The sweetest honey is loathsome in his own {{gap}}.\"",
    answer: "deliciousness",
    context: "Friar Lawrence warns that too much pleasure destroys itself.",
    inference: "Excess — even of love — carries the seeds of its own undoing.",
    translation: "Too much sweetness becomes sickening — even the best things can be too much."
  },
  {
    act: "Act 3, Scene 1",
    text: "\"A plague on {{gap}} your houses!\"",
    answer: "both",
    context: "Mercutio curses both families as he lies dying from Tybalt's wound.",
    inference: "The feud destroys innocent people — its victims condemn both sides.",
    translation: "I curse both of your families!"
  },
  {
    act: "Act 3, Scene 1",
    text: "\"O, I am fortune's {{gap}}!\"",
    answer: "fool",
    context: "Romeo cries out after killing Tybalt, realising what he has done.",
    inference: "He sees himself as a victim of fate — responsibility and destiny blur.",
    translation: "I am just a fool, played by fate!"
  },
  {
    act: "Act 3, Scene 2",
    text: "\"Come, {{gap}}; come, loving black-browed night, give me my Romeo.\"",
    answer: "night",
    context: "Juliet longs for night to arrive so Romeo can come to her.",
    inference: "Night becomes a protective force — daylight represents danger and separation.",
    translation: "Come, night; come, dark night — bring Romeo to me."
  },
  {
    act: "Act 3, Scene 2",
    text: "\"Beautiful tyrant! Fiend {{gap}}!\"",
    answer: "angelical",
    context: "Juliet reacts to news that Romeo has killed Tybalt.",
    inference: "Oxymorons reflect her conflicted grief — love and betrayal coexist.",
    translation: "You beautiful monster! You angelic devil!"
  },
  {
    act: "Act 3, Scene 3",
    text: "\"There is no world without {{gap}}'s walls but purgatory, torture, hell itself.\"",
    answer: "Verona",
    context: "Romeo is devastated by his banishment.",
    inference: "Exile from Juliet feels worse than death — love defines his entire world.",
    translation: "Anywhere outside Verona without Juliet is just hell."
  },
  {
    act: "Act 3, Scene 5",
    text: "\"It was the {{gap}}, and not the lark.\"",
    answer: "nightingale",
    context: "Juliet tries to convince Romeo it is still night so he need not leave.",
    inference: "She cannot accept the reality of their separation — love denies time.",
    translation: "It was the nightingale you heard, not the morning lark — you don't have to go yet."
  },
  {
    act: "Act 3, Scene 5",
    text: "\"Methinks I see thee now, thou art so {{gap}} as one dead in the bottom of a tomb.\"",
    answer: "low",
    context: "Juliet watches Romeo descend from her window — a moment of dark premonition.",
    inference: "Shakespeare foreshadows the tomb ending with visual imagery.",
    translation: "Looking down at you now, you look like someone dead at the bottom of a grave."
  },
  {
    act: "Act 3, Scene 5",
    text: "\"I'll to the Friar, to know his {{gap}}; if all else fail, myself have power to die.\"",
    answer: "remedy",
    context: "Juliet resolves to seek Friar Lawrence's help or face death.",
    inference: "Death is presented as the ultimate act of female agency in a world that denies her choices.",
    translation: "I'll go to the Friar for a solution. If there's none, I can always die."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"Take thou this {{gap}} and bear this letter to thy lord.\"",
    answer: "vial",
    context: "Friar Lawrence gives Juliet the sleeping potion and instructs her in the plan.",
    inference: "The Friar's well-intentioned scheme sets the tragedy in motion — good intentions lead to ruin.",
    translation: "Take this small bottle and deliver this letter to Romeo."
  },
  {
    act: "Act 4, Scene 1",
    text: "\"Romeo, I come! this do I drink to {{gap}}.\"",
    answer: "thee",
    context: "Juliet drinks the potion, dedicating her sacrifice to Romeo.",
    inference: "Love drives her to risk death — devotion overcomes fear.",
    translation: "Romeo, I'm coming to you — I drink this for you."
  },
  {
    act: "Act 4, Scene 3",
    text: "\"What if it be a {{gap}} which the Friar subtly hath ministered to have me dead?\"",
    answer: "poison",
    context: "Juliet alone imagines worst-case scenarios before drinking the vial.",
    inference: "She is braver than Romeo — she proceeds despite real fear.",
    translation: "What if the Friar has secretly given me poison to kill me?"
  },
  {
    act: "Act 5, Scene 1",
    text: "\"Well, Juliet, I will lie with thee tonight. Let's see for {{gap}}.\"",
    answer: "means",
    context: "Romeo hears of Juliet's death and resolves to die beside her.",
    inference: "He acts impulsively — the speed of his decision mirrors earlier rashness.",
    translation: "I'll lie beside you tonight, Juliet. Let me find a way."
  },
  {
    act: "Act 5, Scene 1",
    text: "\"Then I defy you, {{gap}}!\"",
    answer: "stars",
    context: "Romeo rebels against fate upon hearing of Juliet's death.",
    inference: "He refuses passive acceptance — yet his defiance leads to destruction.",
    translation: "I defy fate itself!"
  },
  {
    act: "Act 5, Scene 2",
    text: "\"Unhappy {{gap}}! Full of untoward events.\"",
    answer: "fortune",
    context: "Friar Lawrence realises his letter never reached Romeo.",
    inference: "Miscommunication — not just fate — drives the tragedy.",
    translation: "Terrible luck! So many things have gone wrong."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"For never was a story of more {{gap}} than this of Juliet and her Romeo.\"",
    answer: "woe",
    context: "The Prince closes the play with a final judgement on the tragedy.",
    inference: "The feud has destroyed the most precious thing — love and young life.",
    translation: "There has never been a sadder story than this one."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"O, here will I set up my everlasting {{gap}}.\"",
    answer: "rest",
    context: "Romeo enters the Capulet tomb and resolves to die beside Juliet.",
    inference: "Death is presented as the only lasting peace — love cannot exist in life.",
    translation: "Here I will rest forever."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"Thus with a {{gap}} I die.\"",
    answer: "kiss",
    context: "Romeo drinks poison after kissing Juliet, dying by her side.",
    inference: "Love and death merge in a single act — the play's central paradox fulfilled.",
    translation: "I die with this kiss."
  },
  {
    act: "Act 5, Scene 3",
    text: "\"O happy {{gap}}! that did suck the honey of his breath.\"",
    answer: "dagger",
    context: "Juliet discovers Romeo dead and reaches for his dagger.",
    inference: "Death is personified as intimate — she addresses the blade with dark irony.",
    translation: "Oh, lucky dagger, that got to take his last breath!"
  },
  {
    act: "Act 5, Scene 3",
    text: "\"This is thy {{gap}}; there rust, and let me die.\"",
    answer: "sheath",
    context: "Juliet stabs herself with Romeo's dagger.",
    inference: "She refuses to be passive — her death is a conscious, defiant act.",
    translation: "Your sheath is here in my chest — rust there while I die."
  },
  {
    act: "Act 1, Scene 3",
    text: "\"Go, girl, seek happy {{gap}} in your eyes: be happy, lady, look to like, if looking liking move.\"",
    answer: "nights",
    context: "Lady Capulet encourages Juliet to consider Paris as a husband at the feast.",
    inference: "Juliet is coached to feel attraction on command — her autonomy over love is non-existent.",
    translation: "Look for happiness, girl — try to like him if looking at him makes you feel something."
  },
  {
    act: "Act 1, Scene 4",
    text: "\"I fear, too early: for my mind misgives some {{gap}} yet hanging in the stars.\"",
    answer: "consequence",
    context: "Romeo feels a dark premonition before entering the Capulet party.",
    inference: "He senses fate's hand — yet proceeds, showing how little free will matters.",
    translation: "I'm worried — my mind suspects something terrible is written in the stars."
  },
  {
    act: "Act 2, Scene 4",
    text: "\"The more I give to thee, the more I {{gap}}, for both are infinite.\"",
    answer: "have",
    context: "Juliet describes how giving her love does not diminish it.",
    inference: "Love is depicted as a paradox — generosity increases rather than depletes.",
    translation: "The more love I give you, the more I seem to have — it's endless."
  },
  {
    act: "Act 3, Scene 1",
    text: "\"Romeo, the love I bear thee can afford no better term than this: thou art a {{gap}}.\"",
    answer: "villain",
    context: "Tybalt challenges Romeo in the street, seeking a fight.",
    inference: "The feud demands hatred — Tybalt cannot conceive of peace with a Montague.",
    translation: "Romeo, the only word I have for you is: you're a villain."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"She doth {{gap}} the torches to burn bright!\"",
    answer: "teach",
    context: "Romeo sees Juliet for the first time across the Capulet feast.",
    inference: "Juliet is associated with light — she illuminates the darkness of the feud-torn world.",
    translation: "She makes the torches look dim by comparison — she shines so brightly."
  },
  {
    act: "Act 1, Scene 5",
    text: "\"If I profane with my unworthiest {{gap}} this holy shrine.\"",
    answer: "hand",
    context: "Romeo approaches Juliet at the feast and compares her to a sacred place.",
    inference: "Religious imagery elevates love — Juliet becomes almost divine in his eyes.",
    translation: "If my unworthy hand touches this holy place..."
  },
  {
    act: "Act 3, Scene 5",
    text: "\"Delay this marriage for a month, a week; or, if you do not, make the {{gap}} where Juliet lies.\"",
    answer: "bridal-bed",
    context: "Juliet begs her father to postpone her marriage to Paris.",
    inference: "Capulet's refusal makes death inevitable — parental authority seals her fate.",
    translation: "Delay the wedding, or else make the marriage bed inside my grave."
  },
  {
    act: "Act 2, Scene 2",
    text: "\"Good night, good night! Parting is such sweet {{gap}}.\"",
    answer: "sorrow",
    context: "Juliet bids farewell to Romeo after their first meeting at the balcony.",
    inference: "Their love is defined by beautiful pain — joy and grief are inseparable.",
    translation: "Good night, good night! It's such a sweet sadness to say goodbye."
  }
];

// ─── A CHRISTMAS CAROL QUOTES (40) ──────────────────────────────────────────
const carolQuotes = [
  {
    act: "Stave 1",
    text: "\"Marley was dead, to begin with. There is no {{gap}} of doubt whatever about that.\"",
    answer: "doubt",
    context: "Dickens opens by insisting on Marley's death, establishing the supernatural premise.",
    inference: "The blunt certainty mocks Scrooge's denial of spiritual reality — death cannot be argued away.",
    translation: "Marley was definitely dead. There's no question about it at all."
  },
  {
    act: "Stave 1",
    text: "\"Oh! but he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, {{gap}}, covetous old sinner!\"",
    answer: "clutching",
    context: "Dickens introduces Scrooge through an accumulation of dehumanising adjectives.",
    inference: "The list form mimics Scrooge's own obsessive hoarding — style mirrors character.",
    translation: "Scrooge was an incredibly greedy, mean-spirited, miserly old sinner."
  },
  {
    act: "Stave 1",
    text: "\"I wear the chain I {{gap}} in life.\"",
    answer: "forged",
    context: "Marley's Ghost explains his chains as the consequence of his selfish life.",
    inference: "Dickens presents moral choices as having literal, inescapable consequences.",
    translation: "These chains are the result of every selfish choice I made while I was alive."
  },
  {
    act: "Stave 1",
    text: "\"Mankind was my {{gap}}. The common welfare was my business.\"",
    answer: "business",
    context: "Marley regrets prioritising profit over people during his life.",
    inference: "Dickens voices his central message through Marley — capitalism corrupts humanity.",
    translation: "I should have cared for people, not just money."
  },
  {
    act: "Stave 1",
    text: "\"Are there no prisons? Are there no {{gap}}?\"",
    answer: "workhouses",
    context: "Scrooge dismisses charity collectors who seek donations for the poor.",
    inference: "He echoes the language of the Poor Law — Dickens exposes the cruelty of Victorian social policy.",
    translation: "Why should I help? The poor have prisons and workhouses to go to."
  },
  {
    act: "Stave 1",
    text: "\"If they would rather die, they had better do it, and {{gap}} the surplus population.\"",
    answer: "decrease",
    context: "Scrooge coldly dismisses the suffering of the poor by echoing Malthus.",
    inference: "Dickens satirises the dehumanising logic of laissez-faire economics.",
    translation: "If the poor want to die, let them — it would reduce the overpopulation problem."
  },
  {
    act: "Stave 1",
    text: "\"You may be an undigested bit of {{gap}}, a blot of mustard, a crumb of cheese.\"",
    answer: "beef",
    context: "Scrooge tries to explain away Marley's ghost as indigestion.",
    inference: "His materialist rationalism refuses to accept spiritual truth — he cannot see beyond the physical.",
    translation: "You might just be something I ate — not a real ghost at all."
  },
  {
    act: "Stave 2",
    text: "\"I am the Ghost of Christmas {{gap}}!\"",
    answer: "Past",
    context: "The first spirit identifies itself to Scrooge.",
    inference: "Memory is presented as the key to moral awakening — the past shapes who we become.",
    translation: "I am the spirit of all your past Christmases."
  },
  {
    act: "Stave 2",
    text: "\"There was a boy singing a Christmas carol at my door last night. I should like to have given him something — that's {{gap}}.\"",
    answer: "all",
    context: "Scrooge begins to feel regret as he watches his younger self alone at school.",
    inference: "The first flicker of empathy — memory re-awakens the compassion Scrooge had buried.",
    translation: "I wish I'd been kinder to that carol singer — that's all I can say."
  },
  {
    act: "Stave 2",
    text: "\"He has the power to render us happy or {{gap}}; to make our service light or burdensome.\"",
    answer: "unhappy",
    context: "Young Scrooge praises his generous employer Fezziwig at the Christmas party.",
    inference: "Dickens presents good employers as having moral responsibility for those they employ.",
    translation: "He can make us happy or miserable, make work feel easy or unbearable."
  },
  {
    act: "Stave 2",
    text: "\"You fear the world too much. All your other hopes have merged into the hope of being beyond the chance of its {{gap}} reproach.\"",
    answer: "sordid",
    context: "Belle breaks off her engagement to Scrooge, accusing him of choosing money over love.",
    inference: "Scrooge's transformation into a miser has already destroyed his capacity for human connection.",
    translation: "You're so afraid of being poor that money has replaced everything you once loved."
  },
  {
    act: "Stave 2",
    text: "\"Another {{gap}} has displaced me; and if it can cheer and comfort you in time to come, as I would have tried to do, I have no just cause to grieve.\"",
    answer: "idol",
    context: "Belle tells Scrooge that his golden idol — money — has replaced her in his affections.",
    inference: "Scrooge's idol worship of wealth is presented as a spiritual failing, not just a moral one.",
    translation: "You've replaced me with another idol — money. If it makes you happy, I won't grieve."
  },
  {
    act: "Stave 3",
    text: "\"I am the Ghost of Christmas {{gap}}!\"",
    answer: "Present",
    context: "The second spirit introduces itself, surrounded by a lavish feast.",
    inference: "The present is abundant with joy — Scrooge has been blind to what exists around him.",
    translation: "I am the spirit of the joy and plenty of right now."
  },
  {
    act: "Stave 3",
    text: "\"There is nothing on which it is so hard as {{gap}}, Scrooge, save money.\"",
    answer: "poverty",
    context: "The Ghost taunts Scrooge with his own earlier words, applying them to him now.",
    inference: "Dickens uses irony — Scrooge's cruelty is turned back on him.",
    translation: "Nothing is harder than poverty — except perhaps being as miserly as you, Scrooge."
  },
  {
    act: "Stave 3",
    text: "\"God bless us, every {{gap}}!\"",
    answer: "one",
    context: "Tiny Tim's famous toast at the Cratchit family Christmas dinner.",
    inference: "His inclusive blessing contrasts with Scrooge's exclusion of the poor — innocence shames selfishness.",
    translation: "May God bless every single one of us."
  },
  {
    act: "Stave 3",
    text: "\"Alas for Tiny Tim, he bore a little {{gap}}, and had his limbs supported by an iron frame.\"",
    answer: "crutch",
    context: "Dickens introduces Tiny Tim as a symbol of the vulnerable poor.",
    inference: "Tim's frailty represents all those whose survival depends on the generosity of others.",
    translation: "Poor Tiny Tim had to use a little crutch and leg braces to walk."
  },
  {
    act: "Stave 3",
    text: "\"This boy is Ignorance. This girl is {{gap}}. Beware them both, and all of their degree.\"",
    answer: "Want",
    context: "The Ghost of Christmas Present reveals two starving children hidden under his robe.",
    inference: "Dickens presents ignorance and poverty as systemic dangers — not individual failures.",
    translation: "This boy represents ignorance; this girl represents poverty. Both will destroy society."
  },
  {
    act: "Stave 3",
    text: "\"Beware this boy, for on his brow I see that written which is {{gap}}, if the writing be erased.\"",
    answer: "doom",
    context: "The Ghost warns that Ignorance, if left unchecked, leads to societal collapse.",
    inference: "Education and compassion are presented as the only weapons against social ruin.",
    translation: "Beware this child — I can see the doom of society written on his face unless it is addressed."
  },
  {
    act: "Stave 4",
    text: "\"The Phantom slowly, gravely, {{gap}} approached.\"",
    answer: "silently",
    context: "The Ghost of Christmas Yet to Come appears, refusing to speak.",
    inference: "Silence is more terrifying than words — the future is unknown and cannot be argued with.",
    translation: "The silent, dark ghost slowly and gravely came closer."
  },
  {
    act: "Stave 4",
    text: "\"It's likely to be a very cheap funeral, for upon my life I don't know of anybody to go to {{gap}}.\"",
    answer: "it",
    context: "Businessmen discuss the death of an unnamed man — revealed to be Scrooge.",
    inference: "A life without human warmth ends without mourners — Dickens shows the consequence of isolation.",
    translation: "The funeral will be cheap — I can't think of anyone who would actually attend."
  },
  {
    act: "Stave 4",
    text: "\"What has he done with his {{gap}}? Who inherits it?\"",
    answer: "money",
    context: "Joe the pawnbroker and thieves divide Scrooge's possessions after his death.",
    inference: "The things Scrooge hoarded in life are worthless after death — materialism is exposed as futile.",
    translation: "What happened to all his money? Who gets it now he's dead?"
  },
  {
    act: "Stave 4",
    text: "\"I will honour Christmas in my heart, and try to keep it all the {{gap}}.\"",
    answer: "year",
    context: "Scrooge makes his vow of transformation to the Ghost of Christmas Yet to Come.",
    inference: "True reform means making the spirit of Christmas a daily practice, not a seasonal gesture.",
    translation: "I will carry the spirit of Christmas in my heart every single day of the year."
  },
  {
    act: "Stave 4",
    text: "\"I will live in the Past, the Present, and the Future. The Spirits of all Three shall {{gap}} within me.\"",
    answer: "strive",
    context: "Scrooge commits to his full transformation, embracing all three spirits' lessons.",
    inference: "Wholeness requires integrating past, present, and future — selfishness lives only in the present moment.",
    translation: "I'll draw on the lessons of past, present, and future — all three will guide me."
  },
  {
    act: "Stave 5",
    text: "\"I am as {{gap}} as a school-boy. I am as giddy as a drunken man.\"",
    answer: "light",
    context: "Scrooge wakes on Christmas morning, overwhelmed by joy at his second chance.",
    inference: "His new lightness of spirit is a physical sensation — redemption is embodied, not just abstract.",
    translation: "I feel weightless and dizzy with happiness — like a child or someone who's had too much to drink."
  },
  {
    act: "Stave 5",
    text: "\"He went to {{gap}} on both knees, and shook hands with him.\"",
    answer: "church",
    context: "Scrooge attends church on Christmas Day, marking his spiritual renewal.",
    inference: "Public worship signals genuine transformation — redemption is communal, not just private.",
    translation: "He knelt and prayed, then went to shake hands with people he knew."
  },
  {
    act: "Stave 5",
    text: "\"He had not gone far, when coming on towards him he beheld the portly gentleman, who had walked into his counting-house the day before and said, 'Scrooge and Marley's, I believe?' It sent a pang across his heart to think how this old gentleman would look upon him when they {{gap}}.\"",
    answer: "met",
    context: "Scrooge encounters the charity collector he previously dismissed.",
    inference: "His anxiety about judgement shows genuine moral growth — he is now capable of shame.",
    translation: "He thought nervously about how the charity man would react when they came face to face."
  },
  {
    act: "Stave 5",
    text: "\"I'll raise your {{gap}}, and endeavour to assist your struggling family.\"",
    answer: "salary",
    context: "Scrooge tells Bob Cratchit he will give him a pay rise.",
    inference: "Economic justice — not just charity — is the practical expression of Scrooge's transformation.",
    translation: "I'm going to increase your wages and help you and your family."
  },
  {
    act: "Stave 5",
    text: "\"Scrooge was better than his word. He did it all, and {{gap}} more.\"",
    answer: "infinitely",
    context: "The narrator confirms that Scrooge exceeded all his promises.",
    inference: "True redemption goes beyond minimum obligation — generosity becomes its own reward.",
    translation: "Scrooge was even better than he promised — he did everything and so much more."
  },
  {
    act: "Stave 5",
    text: "\"He became as good a friend, as good a master, and as good a man, as the good old {{gap}} knew.\"",
    answer: "city",
    context: "The closing summary of Scrooge's transformed character.",
    inference: "Goodness is measured by the community — transformation is only meaningful when witnessed by others.",
    translation: "He became one of the best men, employers, and friends the city had ever known."
  },
  {
    act: "Stave 3",
    text: "\"What would I not have given to be one of them! Though I never could have been so {{gap}}, I should have dearly liked to have had the lightest licence to do the same.\"",
    answer: "rude",
    context: "Scrooge watches the Cratchit family celebrate Christmas and feels the pang of exclusion.",
    inference: "His longing to belong shows how isolation has damaged him — he craves the warmth he has denied others.",
    translation: "I'd have given anything to join them! I wish I could have been that free and happy."
  },
  {
    act: "Stave 1",
    text: "\"Scrooge had a very small fire, but the clerk's fire was so very much {{gap}} that it looked like one coal.\"",
    answer: "smaller",
    context: "Bob Cratchit works in freezing conditions because Scrooge refuses to spend on coal.",
    inference: "The physical cold mirrors Scrooge's emotional coldness — his cruelty has material consequences.",
    translation: "Scrooge barely had a fire; his clerk's fire was so tiny it was practically just one lump of coal."
  },
  {
    act: "Stave 2",
    text: "\"The school is not quite deserted. A {{gap}}, neglected child is left there still.\"",
    answer: "solitary",
    context: "The Ghost shows Scrooge his lonely younger self, abandoned at school over Christmas.",
    inference: "Scrooge's isolation as an adult began in childhood — Dickens invites the reader to pity rather than condemn.",
    translation: "One lonely, forgotten child is left at school while the others go home."
  },
  {
    act: "Stave 3",
    text: "\"Every one had had enough, and the youngest Cratchits in particular were steeped in sage and onion to the {{gap}} of their eyebrows.\"",
    answer: "eyebrows",
    context: "The Cratchit family enjoy their humble but joyful Christmas feast.",
    inference: "Dickens presents working-class joy as genuine and abundant — poverty does not preclude happiness.",
    translation: "Everyone had eaten their fill, especially the little ones who were stuffed to the brim."
  },
  {
    act: "Stave 3",
    text: "\"'A Merry Christmas to us all, my dears. God bless us!' Which all the family re-echoed. 'God bless us every one!' said Tiny Tim, the last of {{gap}}.\"",
    answer: "all",
    context: "Tiny Tim's blessing rounds off the Cratchit family Christmas dinner.",
    inference: "His voice comes last but carries the most moral weight — the most vulnerable speaks for everyone.",
    translation: "The whole family blessed one another, and Tiny Tim had the last word: God bless everyone."
  },
  {
    act: "Stave 1",
    text: "\"External heat and cold had little influence on Scrooge. No warmth could warm, no wintry weather chill {{gap}}.\"",
    answer: "him",
    context: "Dickens describes Scrooge's complete emotional detachment from the world.",
    inference: "His isolation is total — he is beyond the reach of ordinary human comfort or suffering.",
    translation: "Heat and cold meant nothing to Scrooge. Nothing from the outside world could touch him."
  },
  {
    act: "Stave 4",
    text: "\"Before I draw nearer to that stone to which you point, answer me one {{gap}} — are these the shadows of things that will be, or only of things that may be?\"",
    answer: "question",
    context: "Scrooge pleads with the Ghost of Christmas Yet to Come as he is shown his own grave.",
    inference: "He grasps for hope — the future is not fixed, and redemption is still possible.",
    translation: "Before I look at that gravestone — tell me: is this definitely the future, or can it be changed?"
  },
  {
    act: "Stave 4",
    text: "\"Scrooge crept towards it, trembling as he went; and following the finger, read upon the stone of the neglected grave his own {{gap}}.\"",
    answer: "name",
    context: "Scrooge finally sees that the dead man the spirits have been showing him is himself.",
    inference: "The revelation forces him to confront the cost of his life choices — this is the turning point.",
    translation: "Shaking, Scrooge crept forward and read his own name on the neglected gravestone."
  },
  {
    act: "Stave 5",
    text: "\"He dressed himself all in his best, and at last got out into the streets. The people were by this time pouring forth, and walking with his hands behind him, Scrooge regarded every one with a delighted {{gap}}.\"",
    answer: "smile",
    context: "Scrooge walks through London on Christmas morning, transformed.",
    inference: "He now participates in the human community he had excluded himself from — the streets are reclaimed.",
    translation: "Scrooge went out in his best clothes and walked through the crowded streets, smiling at everyone."
  },
  {
    act: "Stave 1",
    text: "\"Nobody ever stopped him in the street to say, with gladsome looks, 'My dear Scrooge, how are you?' No beggars implored him to bestow a trifle; no children asked him what it was o'clock — even the blind men's dogs appeared to know him; and when they saw him coming on, would {{gap}} their masters into doorways.\"",
    answer: "tug",
    context: "Dickens catalogues how everyone — even dogs — avoids Scrooge.",
    inference: "His isolation is total and universal — he has cut himself off from every level of society.",
    translation: "No one greeted Scrooge — not beggars, not children, not even guide dogs, who dragged their owners out of his path."
  },
  {
    act: "Stave 2",
    text: "\"'Always a delicate creature, whom a breath might have withered,' said the Ghost. 'But she had a large heart!'\"",
    answer: "withered",
    context: "The Ghost describes Scrooge's sister Fan, who loved him unconditionally.",
    inference: "Fan represents the love Scrooge once had access to — her death begins his emotional withdrawal.",
    translation: "'She was always fragile,' said the Ghost, 'but she had a huge, loving heart.'"
  },
  {
    act: "Stave 3",
    text: "\"Much they saw, and far they went, and many homes they visited, but always with a happy {{gap}}.\"",
    answer: "end",
    context: "The Ghost of Christmas Present takes Scrooge on a wide tour of Christmas joy across society.",
    inference: "Happiness is everywhere — Scrooge's problem is his refusal to participate, not any scarcity of warmth.",
    translation: "They visited many homes and went far and wide, but every visit ended in happiness."
  }
];

// ─── POETRY ANTHOLOGY QUOTES (40) ────────────────────────────────────────────
const anthologyQuotes = [
  {
    act: "Ozymandias — Shelley",
    text: "\"I met a traveller from an {{gap}} land.\"",
    answer: "antique",
    context: "The poem's framing device — a traveller reports seeing Ozymandias's ruined statue.",
    inference: "The word 'antique' immediately signals age and distance — power belongs to the past.",
    translation: "I met someone who had travelled from an ancient, faraway land."
  },
  {
    act: "Ozymandias — Shelley",
    text: "\"My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and {{gap}}!\"",
    answer: "despair",
    context: "The inscription on the pedestal of the ruined statue — a boast now surrounded by emptiness.",
    inference: "The command to despair is ironic — the real despair is Ozymandias's own vanished power.",
    translation: "My name is Ozymandias, the greatest king — look at what I built and give up hope of matching me!"
  },
  {
    act: "Ozymandias — Shelley",
    text: "\"Nothing beside remains. Round the decay of that colossal Wreck, boundless and bare, the lone and level {{gap}} stretch far away.\"",
    answer: "sands",
    context: "The poem closes with the empty desert swallowing what once was a great empire.",
    inference: "Nature outlasts all human power — the sand is indifferent to human ambition.",
    translation: "Nothing is left. Around the crumbling ruin, bare and endless desert stretches in every direction."
  },
  {
    act: "London — Blake",
    text: "\"I wander through each chartered {{gap}}, near where the chartered Thames does flow.\"",
    answer: "street",
    context: "Blake's speaker walks through a London where everything has been bought and controlled.",
    inference: "'Chartered' implies ownership — even natural features like the Thames have been commodified.",
    translation: "I walk through streets that have been mapped, owned and sold, beside a river that's been claimed the same way."
  },
  {
    act: "London — Blake",
    text: "\"In every cry of every Man, in every Infant's cry of fear, in every voice, in every ban, the mind-forged {{gap}} I hear.\"",
    answer: "manacles",
    context: "Blake hears suffering in every voice he encounters in London.",
    inference: "Mental imprisonment — not just physical — keeps people trapped; oppression is internalised.",
    translation: "In every person's voice, in every child's fear, I hear the chains that people have locked around their own minds."
  },
  {
    act: "London — Blake",
    text: "\"How the chimney-sweeper's cry every blackening {{gap}} appals.\"",
    answer: "church",
    context: "The Church is 'blackened' both by pollution and by its failure to protect child labourers.",
    inference: "Institutional religion is complicit in social injustice — it is stained by what it ignores.",
    translation: "The cry of the child chimney sweep darkens and shames the church that does nothing."
  },
  {
    act: "The Prelude — Wordsworth",
    text: "\"One summer evening, led by her, I found a little {{gap}} of agars.\"",
    answer: "boat",
    context: "The young Wordsworth secretly borrows a rowing boat, experiencing the freedom of nature.",
    inference: "Nature first appears as a benevolent guide — the transgression seems innocent and exhilarating.",
    translation: "One summer evening, led by nature herself, I found a small boat tied up by the bank."
  },
  {
    act: "The Prelude — Wordsworth",
    text: "\"A huge peak, black and huge, as if with voluntary power instinct, upreared its {{gap}} head.\"",
    answer: "head",
    context: "A mountain seems to rise and follow the boy as punishment for taking the boat.",
    inference: "Nature is presented as a moral force — it punishes transgression and induces guilt.",
    translation: "A massive, dark peak seemed to rise up deliberately, as if alive, towering above me."
  },
  {
    act: "The Prelude — Wordsworth",
    text: "\"There hung a darkness, call it {{gap}} or not, that after I had seen that spectacle, for many days my brain worked with a dim and undetermined sense of unknown modes of being.\"",
    answer: "solitude",
    context: "After the encounter with the peak, the boy is left psychologically disturbed.",
    inference: "Nature's sublime power reshapes consciousness — the experience is both frightening and formative.",
    translation: "A kind of darkness settled over me for many days after — a strange feeling that I couldn't name."
  },
  {
    act: "My Last Duchess — Browning",
    text: "\"That's my last {{gap}} painted on the wall, looking as if she were alive.\"",
    answer: "Duchess",
    context: "The Duke shows the envoy a painting of his dead wife, beginning his self-revealing monologue.",
    inference: "He controls her in death as he tried to in life — the painting is an act of possession.",
    translation: "That's a portrait of my last wife on the wall — she looks so lifelike."
  },
  {
    act: "My Last Duchess — Browning",
    text: "\"She had a heart — how shall I say? — too soon made {{gap}}.\"",
    answer: "glad",
    context: "The Duke accuses the Duchess of being too easily pleased by others.",
    inference: "Her warmth and openness are presented as flaws — his possessiveness is revealed as tyranny.",
    translation: "She was too easily made happy — she didn't value my approval above everyone else's."
  },
  {
    act: "My Last Duchess — Browning",
    text: "\"I gave commands; then all smiles {{gap}} together.\"",
    answer: "stopped",
    context: "The Duke implies he had the Duchess killed, framing it as a necessary management decision.",
    inference: "The casual euphemism is chilling — murder is presented as corrective housekeeping.",
    translation: "I gave orders and after that, her smiling stopped permanently."
  },
  {
    act: "The Charge of the Light Brigade — Tennyson",
    text: "\"Half a league, half a league, half a league {{gap}}.\"",
    answer: "onward",
    context: "The poem opens with the relentless forward march of the six hundred cavalrymen.",
    inference: "The repetition mimics the rhythm of hoofbeats — momentum is unstoppable, even toward death.",
    translation: "Forward, forward, forward — half a mile, half a mile, half a mile ahead."
  },
  {
    act: "The Charge of the Light Brigade — Tennyson",
    text: "\"Theirs not to reason why, theirs but to do and {{gap}}.\"",
    answer: "die",
    context: "Tennyson describes the soldiers' unquestioning obedience to a disastrous order.",
    inference: "Military duty is presented as absolute — soldiers are not meant to question authority, even fatal orders.",
    translation: "It wasn't their place to ask questions — they just had to follow orders and die."
  },
  {
    act: "The Charge of the Light Brigade — Tennyson",
    text: "\"Cannon to right of them, cannon to left of them, cannon in front of them, volley'd and {{gap}}.\"",
    answer: "thunder'd",
    context: "The soldiers ride into a valley surrounded by enemy artillery.",
    inference: "Encirclement by cannon mirrors the soldiers' lack of choice — death closes in from all sides.",
    translation: "Cannons blasted at them from the right, left, and front — thundering fire all around."
  },
  {
    act: "Exposure — Owen",
    text: "\"Our brains ache, in the merciless iced east winds that {{gap}} us.\"",
    answer: "knive",
    context: "Owen's soldiers suffer from the freezing cold of the Western Front trenches.",
    inference: "The weather is the real enemy — nature is indifferent and lethal, not heroic or romantic.",
    translation: "Our heads ache with pain as the brutal icy east winds cut into us like knives."
  },
  {
    act: "Exposure — Owen",
    text: "\"But nothing happens.\"",
    answer: "happens",
    context: "The refrain of Exposure — the men wait for an attack that never comes.",
    inference: "Inaction is as deadly as battle — the poem subverts expectations of war poetry.",
    translation: "And yet — nothing actually happens."
  },
  {
    act: "Exposure — Owen",
    text: "\"What are we doing here? The poignant misery of dawn begins to grow... We only know war lasts, rain soaks, and clouds {{gap}}, stormy.\"",
    answer: "sag",
    context: "Owen's soldiers question their purpose while waiting in the freezing mud.",
    inference: "The lack of answers is itself the answer — war is purposeless suffering.",
    translation: "What are we even doing here? We just know the war goes on, the rain never stops, and the heavy clouds weigh down on us."
  },
  {
    act: "Storm on the Island — Heaney",
    text: "\"We are prepared: we build our houses squat, sink walls in {{gap}}, and roof them in flagstone.\"",
    answer: "rock",
    context: "The islanders describe their careful preparations against Atlantic storms.",
    inference: "Human resilience is celebrated — but the storm will still overpower their preparations.",
    translation: "We're ready for the worst — we build low, anchor our walls in solid rock, and use heavy stone roofs."
  },
  {
    act: "Storm on the Island — Heaney",
    text: "\"Blast: you are bombarded by the {{gap}}.\"",
    answer: "empty",
    context: "The storm attacks the island — but with nothing, just air.",
    inference: "The 'empty' air is paradoxically the greatest threat — fear of absence is as powerful as fear of presence.",
    translation: "You are bombarded by — nothing. Just empty air, hitting you like a weapon."
  },
  {
    act: "Bayonet Charge — Hughes",
    text: "\"Suddenly he awoke and was running — raw in the raw morning, towards the green hedge that was the {{gap}}.\"",
    answer: "end",
    context: "A soldier finds himself in the middle of a charge before he can even think.",
    inference: "War strips away heroism instantly — instinct and survival replace ideology and purpose.",
    translation: "Suddenly he was awake and running — half asleep in the cold morning, heading for the hedge that marked the end of the field."
  },
  {
    act: "Bayonet Charge — Hughes",
    text: "\"King, honour, human dignity, etcetera dropped like luxuries in a {{gap}}.\"",
    answer: "yelling",
    context: "The soldier discards all the abstract ideals that had motivated him to enlist.",
    inference: "War exposes the gap between propaganda and reality — ideals cannot survive contact with violence.",
    translation: "All the grand ideas — loyalty, honour, dignity — fell away instantly the moment he was under fire."
  },
  {
    act: "Remains — Armitage",
    text: "\"I see every {{gap}}, the exact same jeep and man.\"",
    answer: "time",
    context: "The soldier is haunted by flashbacks of killing a looter in a war zone.",
    inference: "PTSD is rendered as involuntary repetition — the trauma cannot be controlled or escaped.",
    translation: "Every time I close my eyes, I see the same jeep and the same man."
  },
  {
    act: "Remains — Armitage",
    text: "\"He's here in my {{gap}}, here.\"",
    answer: "bloody",
    context: "The dead man haunts the soldier's mind and sleep.",
    inference: "The colloquial 'bloody' doubles as literal gore — language carries the weight of trauma.",
    translation: "He's here in my bloody head, right here — I can't get rid of him."
  },
  {
    act: "Poppies — Weir",
    text: "\"Before you left, I pinned one {{gap}} poppy to your lapel.\"",
    answer: "single",
    context: "A mother sends her son off, perhaps to war, in a gesture of remembrance.",
    inference: "The poppy as symbol is personal, not just public — private grief behind the national ritual.",
    translation: "Before you went, I pinned one poppy onto your jacket."
  },
  {
    act: "War Photographer — Duffy",
    text: "\"In his dark room he is finally {{gap}}.\"",
    answer: "alone",
    context: "The war photographer develops his images in the privacy of his darkroom.",
    inference: "The darkroom becomes a space for moral reckoning — he must face what he witnessed.",
    translation: "In his darkroom, finally by himself, he faces what he has seen."
  },
  {
    act: "War Photographer — Duffy",
    text: "\"Something is happening. A stranger's features faintly begin to {{gap}}.\"",
    answer: "form",
    context: "A face emerges in the developing photograph — a victim's identity is restored.",
    inference: "Photography gives the dead back their humanity — but only briefly, before the image is forgotten.",
    translation: "Slowly, a stranger's face begins to appear in the developing photograph."
  },
  {
    act: "Tissue — Dharker",
    text: "\"Paper that lets the {{gap}} through.\"",
    answer: "light",
    context: "The poem opens with a description of delicate, translucent paper.",
    inference: "Transparency and fragility are presented as strengths — what lets light through also gives life.",
    translation: "Paper so thin and delicate that light can shine right through it."
  },
  {
    act: "Tissue — Dharker",
    text: "\"What if our lives were carried in these hands, and unwrapped, layer by {{gap}}?\"",
    answer: "layer",
    context: "Dharker imagines human identity as layers of tissue — fragile and revealed slowly.",
    inference: "Identity is not fixed — it is made of accumulated, fragile layers that can be peeled back.",
    translation: "What if our whole lives could be held and slowly unfolded, layer by layer?"
  },
  {
    act: "The Emigrée — Rumens",
    text: "\"There once was a country... I left it as a {{gap}}.\"",
    answer: "child",
    context: "The speaker reflects on the homeland she left behind when very young.",
    inference: "Childhood memory preserves an idealised place — exile fixes the homeland in a permanent golden light.",
    translation: "There was once a country I belonged to — I left it when I was just a child."
  },
  {
    act: "The Emigrée — Rumens",
    text: "\"My city hides behind me as I \nwork it. They are trying to {{gap}} her.\"",
    answer: "kill",
    context: "The speaker defends her memory of her homeland against those who would erase it.",
    inference: "Memory is an act of resistance — keeping a place alive in the mind is a political act.",
    translation: "My city shelters behind me as I carry it. Others are trying to destroy it."
  },
  {
    act: "Checking Out Me History — Agard",
    text: "\"Dem tell me bout 1066 and all dat, dem tell me bout Dick Whittington and his cat. But Toussaint L'Ouverture no get a {{gap}}.\"",
    answer: "mention",
    context: "Agard lists the British history he was taught, contrasted with the Black history he was not.",
    inference: "The curriculum is a form of power — what is omitted shapes identity as much as what is taught.",
    translation: "They taught me about 1066 and Dick Whittington — but they never mentioned Toussaint L'Ouverture."
  },
  {
    act: "Checking Out Me History — Agard",
    text: "\"I carving out me own {{gap}}.\"",
    answer: "identity",
    context: "The speaker resolves to construct his own sense of history and self.",
    inference: "Self-determination is an act of resistance — identity must be actively claimed, not passively received.",
    translation: "I am creating my own identity for myself."
  },
  {
    act: "Kamikaze — Garland",
    text: "\"his survival was a matter of {{gap}} among them.\"",
    answer: "shame",
    context: "A Japanese pilot turns back from his suicide mission — and is shunned by his family.",
    inference: "Honour culture demands death over survival — the living man becomes the ghost.",
    translation: "His survival became something his family and community were ashamed of."
  },
  {
    act: "Kamikaze — Garland",
    text: "\"which way his hand gripped the tiller to bring himself {{gap}}.\"",
    answer: "home",
    context: "The daughter imagines the moment her father chose to turn his plane around.",
    inference: "The instinct for survival — for home — overrides ideology; nature is stronger than duty.",
    translation: "The way he turned the steering handle to bring his plane back home."
  },
  {
    act: "Charge of the Light Brigade — Tennyson",
    text: "\"When can their glory {{gap}}? O the wild charge they made!\"",
    answer: "fade",
    context: "Tennyson celebrates the bravery of the doomed soldiers in the final stanzas.",
    inference: "Even a disastrous charge can be heroic — the poem honours sacrifice even when orders were wrong.",
    translation: "When will their glory ever fade? What a wild, brave charge they made!"
  },
  {
    act: "Exposure — Owen",
    text: "\"Since we believe not otherwise can kind fires burn; nor ever sun smile true on child or {{gap}}.\"",
    answer: "field",
    context: "Owen's soldiers convince themselves their suffering has a purpose.",
    inference: "They cling to meaning even as the poem has stripped it away — self-deception is a survival mechanism.",
    translation: "We tell ourselves our sacrifice will allow fires to burn and the sun to shine for people at home."
  },
  {
    act: "War Photographer — Duffy",
    text: "\"A hundred agonies in black-and-white from which his editor will {{gap}} five or six.\"",
    answer: "choose",
    context: "The photographer knows that most of his images of suffering will be rejected.",
    inference: "The media filters and selects suffering — compassion is rationed by commercial decisions.",
    translation: "A hundred images of suffering, from which his editor will pick just five or six."
  },
  {
    act: "Remains — Armitage",
    text: "\"His blood-shadow stays on the {{gap}}.\"",
    answer: "street",
    context: "The dead man's blood leaves a permanent mark on the place where he was killed.",
    inference: "Violence leaves traces that cannot be erased — the physical world records what the soldier tries to forget.",
    translation: "The shadow made by his blood is still there on the road."
  },
  {
    act: "London — Blake",
    text: "\"And the hapless Soldier's sigh runs in blood down {{gap}} walls.\"",
    answer: "Palace",
    context: "Blake connects the soldier's suffering directly to the institution of the monarchy.",
    inference: "The state is implicated in the suffering of its soldiers — power feeds on sacrifice.",
    translation: "The soldier's misery and blood are on the hands of the Palace — those who sent him to war."
  },
  {
    act: "Ozymandias — Shelley",
    text: "\"Half sunk, a {{gap}} visage lies, whose frown, and wrinkled lip, and sneer of cold command, tell that its sculptor well those passions read.\"",
    answer: "shattered",
    context: "The statue's face lies broken in the sand, still wearing its expression of arrogance.",
    inference: "The sculptor captured the king's cruelty accurately — but the art outlasts the power it served.",
    translation: "Half buried, the broken face still wears a look of cold arrogance — the sculptor captured him perfectly."
  }
];

// ─── QUOTE LOOKUP MAP ────────────────────────────────────────────────────────
const allQuotes = {
  macbeth:    macbethQuotes,
  romeo:      romeoQuotes,
  carol:      carolQuotes,
  anthology:  anthologyQuotes
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let currentPlay = 'macbeth';
let index = 0;
let userAnswers = [];

function getQuotes() {
  return allQuotes[currentPlay] || macbethQuotes;
}

// ─── DOM REFS ────────────────────────────────────────────────────────────────
const countEl       = document.getElementById('count');
const barFill       = document.getElementById('barFill');
const actSceneEl    = document.getElementById('actScene');
const quoteTextEl   = document.getElementById('quoteText');
const feedbackEl    = document.getElementById('feedback');
const contextText   = document.getElementById('contextText');
const inferenceText = document.getElementById('inferenceText');
const translationText = document.getElementById('translationText');
const summaryEl     = document.getElementById('summary');
const scoreLine     = document.getElementById('scoreLine');
const summaryList   = document.getElementById('summaryList');
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const checkBtn      = document.getElementById('checkBtn');
const revealBtn     = document.getElementById('revealBtn');
const resetBtn      = document.getElementById('resetBtn');
const tabBtns       = document.querySelectorAll('.tab-btn');

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function normalize(value) {
  return value.trim().toLowerCase();
}

function getInput() {
  return document.getElementById('gapInput');
}

// ─── RENDER ──────────────────────────────────────────────────────────────────
function renderQuote() {
  const quotes = getQuotes();
  const item = quotes[index];

  actSceneEl.textContent = item.act;
  quoteTextEl.innerHTML  = item.text.replace('{{gap}}', '<input type="text" placeholder="gap" id="gapInput" />');

  feedbackEl.textContent = '';
  feedbackEl.classList.remove('correct', 'incorrect');
  contextText.textContent   = item.context;
  inferenceText.textContent = item.inference;
  translationText.textContent = item.translation;

  const input = getInput();
  input.value = userAnswers[index] || '';
  input.addEventListener('input', () => {
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('correct', 'incorrect');
    userAnswers[index] = input.value;
  });
  input.focus();

  countEl.textContent = `${index + 1} / ${quotes.length}`;
  barFill.style.width = `${((index + 1) / quotes.length) * 100}%`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = false;
  nextBtn.textContent = index === quotes.length - 1 ? 'Finish' : 'Next';

  summaryEl.style.display = 'none';
}

function showSummary() {
  const quotes = getQuotes();
  let correctCount = 0;
  summaryList.innerHTML = '';

  quotes.forEach((item, i) => {
    const user = (userAnswers[i] || '').trim();
    const isCorrect = normalize(user) === normalize(item.answer);
    if (isCorrect) correctCount += 1;

    const li = document.createElement('li');
    li.className = isCorrect ? 'correct' : 'incorrect';

    const wordSpan = isCorrect
      ? `<span class="word-correct">${item.answer}</span>`
      : `<span class="word-incorrect">${user || '(blank)'}</span> <span class="word-correct">(correct: ${item.answer})</span>`;

    li.innerHTML = `${item.act} — ${item.text.replace('{{gap}}', wordSpan)}`;
    summaryList.appendChild(li);
  });

  scoreLine.textContent = `Score: ${correctCount} / ${quotes.length}`;
  summaryEl.style.display = 'block';
  summaryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function switchPlay(play) {
  currentPlay = play;
  index = 0;
  userAnswers = Array(getQuotes().length).fill('');

  document.body.classList.remove('romeo-mode', 'carol-mode', 'anthology-mode');
  if (play === 'romeo')     document.body.classList.add('romeo-mode');
  if (play === 'carol')     document.body.classList.add('carol-mode');
  if (play === 'anthology') document.body.classList.add('anthology-mode');

  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.play === play);
  });

  renderQuote();
}

// ─── EVENTS ──────────────────────────────────────────────────────────────────
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => switchPlay(btn.dataset.play));
});

checkBtn.addEventListener('click', () => {
  const input = getInput();
  const answer = getQuotes()[index].answer;
  const isCorrect = normalize(input.value) === normalize(answer);
  userAnswers[index] = input.value;
  feedbackEl.textContent = isCorrect ? 'Correct.' : `Not quite. You want "${answer}".`;
  feedbackEl.classList.remove('correct', 'incorrect');
  feedbackEl.classList.add(isCorrect ? 'correct' : 'incorrect');
});

revealBtn.addEventListener('click', () => {
  const input  = getInput();
  const answer = getQuotes()[index].answer;
  input.value  = answer;
  userAnswers[index] = answer;
  feedbackEl.textContent = 'Revealed.';
  feedbackEl.classList.remove('incorrect');
  feedbackEl.classList.add('correct');
});

resetBtn.addEventListener('click', () => {
  const input = getInput();
  input.value = '';
  userAnswers[index] = '';
  feedbackEl.textContent = '';
  feedbackEl.classList.remove('correct', 'incorrect');
});

prevBtn.addEventListener('click', () => {
  if (index > 0) { index -= 1; renderQuote(); }
});

nextBtn.addEventListener('click', () => {
  const quotes = getQuotes();
  if (index < quotes.length - 1) { index += 1; renderQuote(); }
  else showSummary();
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') return;
  const input = getInput();
  if (!input || document.activeElement !== input) return;
  event.preventDefault();

  const quotes = getQuotes();
  const answer = quotes[index].answer;
  const isCorrect = normalize(input.value) === normalize(answer);
  userAnswers[index] = input.value;
  feedbackEl.textContent = isCorrect ? 'Correct.' : `Not quite. You want "${answer}".`;
  feedbackEl.classList.remove('correct', 'incorrect');
  feedbackEl.classList.add(isCorrect ? 'correct' : 'incorrect');

  if (index < quotes.length - 1) { index += 1; renderQuote(); }
  else { showSummary(); }
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
userAnswers = Array(macbethQuotes.length).fill('');
renderQuote();

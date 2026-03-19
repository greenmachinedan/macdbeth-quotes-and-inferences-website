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

// ─── STATE ───────────────────────────────────────────────────────────────────
let currentPlay = 'macbeth';
let index = 0;
let userAnswers = [];

function getQuotes() {
  return currentPlay === 'macbeth' ? macbethQuotes : romeoQuotes;
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

  document.body.classList.toggle('romeo-mode', play === 'romeo');

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

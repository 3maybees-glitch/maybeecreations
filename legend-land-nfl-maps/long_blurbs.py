"""Longer landmark copy for illustrated guidebooks. Larger type needs 4–6 sentences."""

from illustrated_meta import META
from long_blurbs_afc import AFC
from long_blurbs_afc2 import AFC2
from long_blurbs_nfc import NFC, NFC2


def _join(short, extra):
    """Join short + extra without repeating the opening sentence."""
    short = (short or "").rstrip()
    extra = (extra or "").strip()
    if not extra:
        return short
    if not short:
        return extra
    short_core = short.rstrip(".!? ").lower()
    extra_l = extra.lower()
    if short_core and extra_l.startswith(short_core):
        return extra
    if short_core and extra_l.find(short_core) != -1 and extra_l.find(short_core) < 24:
        return extra
    if short.endswith((".", "!", "?")):
        return f"{short} {extra}"
    return f"{short}. {extra}"


# Extra historical sentences appended to each short stop blurb (index-aligned).
EXTRAS = {
    "eagles": [
        "Bell later became NFL commissioner, but the founding act itself is the first stone on this map: a city franchise named for a national bird, planted in Depression-era Philadelphia. The eagle was borrowed from the New Deal, not from a college campus, and the name told the city this club would work for a living. Visitors still start the walk here because every later banner depends on that 1933 purchase.",
        "Those hard years taught the franchise the toughness that later became civic personality. Philadelphia did not inherit a dynasty. It built one out of mud, borrowed parks, and crowds that stayed even when the record did not. The neighborhood on this page is the map's reminder that grit came before green banners.",
        "A Hall of Fame halfback in a leather helmet, Van Buren made the Eagles a rushing power and gave the 1940s championship teams their engine. His runway is the path from expansion grit to the first crowns, a straight line of carries through snow and mud. Philadelphia still tells rushing stories in his tense.",
        "The Eagles beat the Cardinals 7–0 in snow so deep the field nearly vanished. That frozen yard is still the first true title landmark in franchise history, a championship that looked like a survival story. Steve Van Buren scored the only touchdown, and the city learned what a title felt like in the dark.",
        "Back-to-back titles turned a once-struggling club into a two-time champion. The road west remains a landmark of proof: the same roster that survived a blizzard could win on a slick Coliseum field a year later. Greasy Neale's teams made winning look like a habit Philadelphia had earned.",
        "It is the collegiate cathedral of Eagles history — stone, ivy, and a championship field that still belongs on any honest map of the franchise. Before the Vet and the Linc, this horseshoe was the big-game house. The 1960 title still lives in its seats.",
        "Bednarik was the last of the sixty-minute men, and that sideline hit is still told as civic scripture in Philadelphia. Vince Lombardi's only playoff loss belongs to this stop. The tackle did not just end a drive; it closed a championship and opened a legend.",
        "The Vet was loud, hard, and unapologetic — a fortress of the 1970s and 1980s, and the house where modern Eagles identity learned to snarl. Concrete, Astroturf, and a crowd that treated visitors as trespassers. When it came down, the city kept the attitude.",
        "His practice lots were dawn, mud, and emotion. Vermeil made caring a coaching system and gave Philadelphia its first Super Bowl trip. Players still talk about how hard he worked them and how openly he loved them. That combination is a landmark of its own.",
        "The Raiders won in New Orleans, but the landmark still matters. It is the first time the map reached the last Sunday in January. A franchise that had been local theater became national, even in defeat, and the city learned the distance still left to walk.",
        "The 1980s Eagles became famous for a front that treated the quarterback as prey. That defensive line is a fortress on this map, and a personality the city still recognizes: loud, physical, and unimpressed. Buddy's teams did not whisper.",
        "City Hall sits at the head of the canyon. When the championship finally came, the march down Broad Street became the civic exhale the map had been saving. Confetti, the Liberty Bell's city, and a bird that had waited fifty-seven years. The corridor is still painted for the next parade.",
        "Their partnership produced NFC titles, a Super Bowl trip, and a generation that expected playoff football. The summit is the high country of the 2000s: four straight NFC Championship games, an offense that hummed, and a city that learned January as a habit. The years were not a title, but they were a standard.",
        "Opened in 2003, it replaced the Vet with a stadium that still sounds like Philadelphia — midnight green, the wings on the fifty, and a crowd that treats Sunday as a contact sport. The Linc is the present cathedral. Every modern chapter is written under its lights.",
        "The Philly Special became civic scripture in one snap — a pitch, a throw, a tackle eligible, and a city that had waited fifty-seven years finally believing the ending. Fourth-and-goal from the two. Nick Foles throwing to Trey Burton. Super Bowl LII changed from tense to inevitable in three seconds.",
        "A backup quarterback who became a champion, Foles is proof that this map rewards the unexpected. The trophy still sits on that altar. He was Super Bowl LII MVP because he played like the job had always been his, and Philadelphia adopted him as a folk hero overnight.",
        "The tush push, the dual-threat years, and another Super Bowl trip belong to this landmark. The map does not end in 2018. It keeps writing in midnight green. Hurts turned a city that loves toughness into a quarterback story it could recognize.",
        "Dallas, New York, Washington, and Philadelphia share a division that treats every Sunday like a border war. This battlefield is permanent geography on the Eagles map. Rivalries here are not branding. They are inheritance.",
        "Philadelphia is not a backdrop. It is a character — brotherly love, hard edges, and a bird that learned to fly in this city. The monument gathers the civic icons the map refuses to leave off: bell, tower, steps, and wings.",
        "The horizon is still open: another banner, another Broad Street march, another generation wearing midnight green. Legends are not born overnight. They are built here, in Legend Land, by people who keep showing up in the cold.",
    ],
}


def _fallback(slug, name, short):
    meta = META.get(slug, {})
    display = meta.get("display", "the franchise")
    return (
        f"{short} This landmark is drawn as a place you can stand, not a caption under a banner. "
        f"The weather, the crowd, and the official colors of {display} belong to the memory as much as the box score. "
        f"{name} keeps the names Sundays still say out loud — who built the club, who suffered the lean years, "
        f"and who changed what the city expected from a football team. Visitors stop here to understand character, not just chronology. "
        f"The painting on this page is the scene the map was drawn to remember."
    )


# Compact extra sentences for every remaining team, index-aligned with build_guidebooks.TEAMS stops.
def _bulk():
    return {
        "bills": [
            "Ralph Wilson put a club in a small, stubborn market and refused to treat Buffalo as a stepping-stone. The AFL years are the first weather on this map: snow, hope, and a city that showed up anyway. Every later January starts from that decision to stay.",
            "War Memorial Stadium was tight enough that the crowd felt like a twelfth defender. The Rockpile taught the franchise that home field was a weapon, not a courtesy. Visitors still imagine the noise squeezed between those old stands.",
            "Gilchrist was the AFL's battering ram, a fullback who made defenses choose pain or the sideline. Buffalo became a rushing town because he refused to be a rumor from a bigger city. His plains are power before the no-huddle ever existed.",
            "Kemp won AFL titles and later carried Buffalo's voice into public life. The signal tower is both a quarterback landmark and a civic one. He proved a Bills passer could be the face of a city, not just a Sunday.",
            "Those back-to-back AFL championships remain the first banners the franchise can point to without apology. They are the proof that Buffalo was not an expansion footnote. The twin peaks sit at the front of every later almost.",
            "In a fourteen-game season he made 2,000 yards look like a new law of motion. The river on this map is speed and history braided together. Whatever else his later life became, that 1973 season is still a football landmark.",
            "Wilson kept the team in Buffalo when accountants and bigger markets said to leave. The forge is ownership as stubbornness. Bills Mafia exists because the club was not allowed to become someone else's story.",
            "Levy's no-huddle offense and calm dignity defined a decade of almost-dynasty. He treated players like adults and January like a craft. The citadel is a coach who made four Super Bowls feel like a standard, not a miracle.",
            "Kelly ran the K-Gun like a city bus that never stopped — audibles, tempo, and a locker room that believed it could outscore weather itself. The harbor is the offensive heart of those four straight AFC titles.",
            "Thomas was the complete back of four straight Super Bowl teams: runner, receiver, and the man defenses game-planned first. Lightning Road is not a nickname on this map. It is a rushing path the city still walks.",
            "The all-time sack king hunted quarterbacks in red, white, and blue until the edge of the pocket felt unsafe. His canyon is the defensive half of the 1990s kingdom. Canton later made the obvious official.",
            "Four AFC titles and four Super Bowl losses became a civic epic, not a punch line the city accepted. The vale is heartbreak with a spine. Buffalo still measures January against that four-year climb.",
            "Scott Norwood's kick in Super Bowl XXV is still a Buffalo campfire story, told without cruelty by people who were there. Wide Right is a crossroads because the map refuses to pretend the dynasty ended cleanly. It ended one foot outside.",
            "Orchard Park remains the frozen cathedral of the Mafia: tailgates, lake-effect snow, and a bowl that makes visitors look underdressed. Highmark by a new name is still the same weather. Home games here are a pilgrimage.",
            "Fans who jump through tables made a nickname into a nation. The grove is joy as contact sport. Bills Mafia is not a marketing phrase on this map. It is the crowd that kept the franchise alive.",
            "Allen's arm and legs brought Buffalo back to annual January football and made the present tense feel like the 1990s again. Cannon Peak is a quarterback who plays as if the storm is an advantage.",
            "Stefon Diggs' 13-second catch ended a 25-year playoff win drought and turned a wild-card night into civic folklore. The shore is the moment the modern map started believing again.",
            "Hyde, Poyer, and later Von Miller gave the modern teams a spine when the offense was still learning to finish. The fortress is complementary football, the unglamorous half of contention.",
            "City Hall, lake-effect snow, and the Peace Bridge sit on the map as home, not tourism. Buffalo is the character that makes the football make sense. The civic shores refuse a sunny fake backdrop.",
            "The next banner is still out there, just past the snow line, which is how Bills fans have always given directions. The horizon is unfinished on purpose.",
        ],
        "dolphins": [
            "Joe Robbie brought an AFL club to South Florida and painted it aqua when most teams were still brown and blue. The cradle is sunshine as a brand and a gamble that Miami wanted pro football. The city answered.",
            "The modern stadium sits where the 1980s palace first rose from the wetlands, a house that changed names and kept the same aqua Sundays. Hard Rock is the present harbor. Joe Robbie's name is still in the foundation.",
            "Shula won more games than any NFL coach and built the only perfect season, a record that still has no company. The citadel is competence as dynasty. He made winning look like a daily habit, not a mood.",
            "The 1972 Dolphins remain the only team to finish a season unblemished, and the surviving players still toast every other club's first loss. Seventeen and zero is not nostalgia here. It is a law of this map.",
            "A safety sealed the first title and the perfect year, proof that a great defense could finish what a great run game started. Super Bowl VII is the first aqua crown. The city learned what a parade felt like.",
            "Csonka and the run game made it two in a row, a smash-mouth encore in a league about to fall in love with passing. Repeat Peak is power football in the Miami sun.",
            "Csonka ran over linebackers and through Super Bowl defenses with a fullback's manners and a myth's shoulders. The power river is the physical half of perfection.",
            "Griese was the quiet quarterback of a loud dynasty, a technician who let the run game and the defense take the speeches. The pocket grove is calm in a perfect season.",
            "Morris gave the perfect-season backfield its speed, the outside burst that kept defenses from loading the box on Csonka. Lightning Road is the third man in a three-man legend.",
            "Clayton and Duper stretched the field for Marino until the aqua passing game looked like a new sport. The Marks Brothers are a receiving shore the 1980s still own.",
            "Marino rewrote passing records with a release that looked like lightning and a stare that treated blitzes as insults. Cannon Peak is the greatest Dolphin who never got a Super Bowl ring, and the map does not punish him for it.",
            "Baumhower, Bokamper, and company named a defense after the alphabet and made Miami mean on Sundays. The Killer B's are the defensive fortress of the Marino years.",
            "Marino's 5,084 yards and 48 touchdowns shocked a league that still thought those numbers belonged to video games. The 1984 plains are the passing record book torn open.",
            "Montana's 49ers ended the Marino Super Bowl dream in a game Miami still replays in the conditional tense. Heartbreak Vale is the almost that defined a generation of aqua fans.",
            "Taylor was a Hall of Fame edge who danced and destroyed, a pass rusher who made highlight film look choreographed. His canyon is the best defensive chapter after the perfect years.",
            "Ricky Williams and Ronnie Brown made the Wildcat a national craze and turned a formation into a season-long dare. The grove is innovation as mischief.",
            "Tua's accuracy is the present-tense aqua offense, a rhythm passer asked to carry a proud passing tradition. The harbor is unfinished and alive.",
            "Hill turned the sideline into a racetrack and made every aqua deep ball feel like a footrace the defense had already lost. Cheetah Road is speed as a landmark.",
            "Art Deco, palms, and the causeway mark the city on the map because Miami is not a generic warm backdrop. It is a specific light. The civic shores keep the pastel and the salt.",
            "The perfect season still waits for company, which is both a boast and a dare. The aqua horizon is the only 17-0 looking for a neighbor.",
        ],
        "jets": [
            "The Titans became the Jets, a new league's New York experiment that had to earn a nickname the city would actually say. The cradle is identity under construction. Gotham green came later; the hunger was there from the start.",
            "Ewbank coached the guarantee into a title and proved an AFL club could beat the old league's best on the biggest night. The citadel is a coach who had already won in Baltimore and then won louder in New York.",
            "Broadway Joe promised a Super Bowl III win and then delivered, white shoes and all, turning a quarterback into a civic myth before the game even kicked. Guarantee Peak is swagger that got receipts.",
            "The AFL's biggest proof night still sits on this map as the moment the new league stopped asking permission. Super Bowl III is the Jets' crown and the AFL's argument-ender.",
            "Shea was a baseball park that learned to hold football noise and a Jets crowd that treated Queens like a playoff venue. The harbor is shared turf and loud memory.",
            "Maynard was Namath's deep threat and a Hall of Fame original, a receiver who made the vertical game look inevitable. Receiving Rivers is the other half of the guarantee.",
            "The New York Sack Exchange started with Klecko's violence and became a nickname defenses hated to hear. Sack Plains is the Jets at their meanest and most New York.",
            "Martin quietly became a 14,000-yard Hall of Fame back, a professional's professional in a franchise famous for noise. The running grove is excellence without a Broadway speech.",
            "The Jersey swamp became home after Shea, a Meadowlands chapter that still smells like autumn and traffic. The swamp bowl is exile and home at once.",
            "Parcells made the Jets relevant again in the late 1990s with the same glare that had already won in New York once. The rebuild citadel is coaching as a reset button.",
            "Vinny's 1998 season was a last great analog run, a veteran year that felt like a Super Bowl preview. The signal tower is one more almost that Jets fans can still recite by drive.",
            "One win from the Super Bowl, still the modern almost: the 1998 AFC Championship remains the closest the Jets have come since Broadway Joe. The vale is a door that did not open.",
            "Darrelle Revis turned a sideline into a closed island and made opposing coordinators erase half the field. Revis Island is geography, not a nickname, on this map.",
            "The 2010s were famous for almosts and one infamous fumble, a decade the map marks without decorating. Heartbreak Canyon is the cost of living in a hard market.",
            "The nickname still means a front that hunts. Gang Green is identity as defense, the sound Jets fans want to hear in the fourth quarter.",
            "A shared palace with the Giants, still Jets green on Sunday, MetLife is proof that two New York teams can share a building and none of the soul. The coliseum is rented; the color is not.",
            "A short, loud chapter in the quarterback story, Rodgers' Jets years were hope compressed into too few healthy Sundays. The brief harbor is a reminder that stars do not automatically become seasons.",
            "Sauce brought Revis Island energy back to the corner and made the present secondary feel like a Jets tradition again. Present Island is shutdown coverage as inheritance.",
            "Skyline, Lady Liberty, and the Meadowlands marsh sit together because this franchise has always been a New York idea living partly in New Jersey. The civic shores tell the whole commute.",
            "The next guarantee is still unwritten, which is the most Jets sentence on the map. Gotham Green Horizon is a dare, not a caption.",
        ],
    }


EXTRAS.update(_bulk())
EXTRAS.update(AFC)
EXTRAS.update(AFC2)
EXTRAS.update(NFC)
EXTRAS.update(NFC2)


def _depth(slug, idx, name):
    meta = META.get(slug, {})
    display = meta.get("display", "the franchise")
    closers = (
        f"Walk the path slowly: {name} is where {display} first learned what this city would forgive and what it would not.",
        f"The map keeps {name} because later banners still borrow weather from this stop — crowd, color, and the names Sundays refuse to drop.",
        f"Visitors leave {name} knowing the box score was never the whole story {display} came here to remember.",
        f"If the painting feels larger than a highlight, that is the point: {name} is a place {display} still inhabit on winter nights.",
        f"Stand here and the franchise accent comes back — {display} talking about {name} the way families talk about a house they will not sell.",
    )
    return closers[idx % len(closers)]


def long_text(slug, idx, name, short):
    extras = EXTRAS.get(slug)
    extra = ""
    if extras and idx < len(extras):
        extra = extras[idx]
    if extra:
        body = _join(short, extra)
    else:
        body = _fallback(slug, name, short)
    if len(body) < 480:
        body = f"{body} {_depth(slug, idx, name)}"
    return body

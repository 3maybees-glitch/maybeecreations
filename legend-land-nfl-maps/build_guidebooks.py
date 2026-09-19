#!/usr/bin/env python3
"""Build 8.5x11 Legend Land 20-landmark guidebooks for every NFL team."""
from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import Color, white, black
from reportlab.pdfgen import canvas

OUT = Path("/workspace/legend-land-nfl-maps")
ART = Path("/opt/cursor/artifacts")

TEAMS = {
    "bills": {
        "title": "BUFFALO BILLS", "land": "Legend Land of the Charge",
        "tag": "BILLS MAFIA", "quote": "Charge the storm.",
        "c": (0.00, 0.20, 0.55), "stops": [
            ("AFL Birth Cradle", "The Bills began in the AFL in 1960, a Buffalo club that had to earn every Sunday in the snow."),
            ("War Memorial Stadium Harbor", "The old Rockpile was loud, tight, and the first true home of the franchise."),
            ("Cookie Gilchrist Power Plains", "Cookie was the AFL's battering ram, a fullback who made Buffalo matter."),
            ("Jack Kemp Signal Tower", "Kemp quarterbacked titles and later carried the city into public life."),
            ("1964-65 AFL Title Twin Peaks", "Back-to-back AFL championships remain the first banners in Bills history."),
            ("O.J. Simpson 2,003-Yard River", "In 1973 Simpson became the first rusher to break 2,000 in a 14-game season."),
            ("Ralph Wilson Founding Forge", "The founding owner kept the team in Buffalo when bigger markets called."),
            ("Marv Levy K-Gun Citadel", "Levy's no-huddle offense and calm dignity defined a decade."),
            ("Jim Kelly No-Huddle Harbor", "Kelly ran the K-Gun like a city bus that never stopped."),
            ("Thurman Thomas Lightning Road", "Thomas was the complete back of four straight Super Bowl teams."),
            ("Bruce Smith Pass-Rush Canyon", "The all-time sack king hunted quarterbacks in red, white, and blue."),
            ("Four Straight Super Bowl Heartbreak Vale", "1990-93: four AFC titles, four Super Bowl losses, one unforgettable run."),
            ("Wide Right Crossroads", "Scott Norwood's kick in Super Bowl XXV is still a Buffalo campfire story."),
            ("Highmark Stadium Coliseum", "Orchard Park remains the frozen cathedral of the Mafia."),
            ("Bills Mafia Table-Jump Grove", "Fans who jump through tables made a nickname into a nation."),
            ("Josh Allen Present Cannon Peak", "Allen's arm and legs brought Buffalo back to annual January football."),
            ("Diggs Catch Shore", "Stefon Diggs' 13-second catch ended a 25-year playoff win drought."),
            ("Defense Fortress", "Hyde, Poyer, and later Von Miller gave the modern teams a spine."),
            ("Buffalo Civic Shores", "City Hall, lake-effect snow, and the Peace Bridge sit on the map as home."),
            ("Charge Legacy Horizon", "The next banner is still out there, just past the snow line."),
        ],
    },
    "dolphins": {
        "title": "MIAMI DOLPHINS", "land": "Legend Land of the Aqua",
        "tag": "FIN FANS FOREVER", "quote": "Perfect the season.",
        "c": (0.00, 0.56, 0.59), "stops": [
            ("1966 AFL Expansion Cradle", "Joe Robbie brought an AFL club to South Florida and painted it aqua."),
            ("Hard Rock / Joe Robbie Harbor", "The modern stadium sits where the 1980s palace first rose from the wetlands."),
            ("Don Shula Winningest Citadel", "Shula won more games than any NFL coach and built the only perfect season."),
            ("Perfect Season 17-0 Plains", "The 1972 Dolphins remain the only team to finish a season unblemished."),
            ("Super Bowl VII First Crown", "A safety sealed the first title and the perfect year."),
            ("Super Bowl VIII Repeat Peak", "Csonka and the run game made it two in a row."),
            ("Larry Csonka Power River", "Csonka ran over linebackers and through Super Bowl defenses."),
            ("Bob Griese Pocket Grove", "Griese was the quiet quarterback of a loud dynasty."),
            ("Mercury Morris Lightning Road", "Morris gave the perfect-season backfield its speed."),
            ("The Marks Brothers Receiving Shores", "Clayton and Duper stretched the field for Marino."),
            ("Dan Marino Cannon Peak", "Marino rewrote passing records with a release that looked like lightning."),
            ("Killer B's Defense Fortress", "Baumhower, Bokamper, and company named a defense after the alphabet."),
            ("1984 Record-Passing Plains", "Marino's 5,084 yards and 48 touchdowns shocked the league."),
            ("Super Bowl XIX Heartbreak Vale", "Montana's 49ers ended the Marino Super Bowl dream."),
            ("Jason Taylor Pass-Rush Canyon", "Taylor was a Hall of Fame edge who danced and destroyed."),
            ("Wildcat Grove", "Ricky Williams and Ronnie Brown made the Wildcat a national craze."),
            ("Tua Tagovailoa Present Harbor", "Tua's accuracy is the present-tense aqua offense."),
            ("Tyreek Hill Cheetah Road", "Hill turned the sideline into a racetrack."),
            ("Miami Civic Shores", "Art Deco, palms, and the causeway mark the city on the map."),
            ("Aqua Legacy Horizon", "The perfect season still waits for company."),
        ],
    },
    "jets": {
        "title": "NEW YORK JETS", "land": "Legend Land of Gotham Green",
        "tag": "JETS JETS JETS", "quote": "Guarantee the win.",
        "c": (0.07, 0.33, 0.27), "stops": [
            ("Titans of New York Birth Cradle", "The Titans became the Jets, a new league's New York experiment."),
            ("Weeb Ewbank Championship Citadel", "Ewbank coached the guarantee into a title."),
            ("Joe Namath Guarantee Peak", "Broadway Joe promised a Super Bowl III win and then delivered."),
            ("Super Bowl III Upset Crown", "The AFL's biggest proof night, white shoes and all."),
            ("Shea Stadium Harbor", "A baseball park that learned to hold football noise."),
            ("Don Maynard Receiving Rivers", "Maynard was Namath's deep threat and a Hall of Fame original."),
            ("Joe Klecko Sack Plains", "The New York Sack Exchange started with Klecko's violence."),
            ("Curtis Martin Running Grove", "Martin quietly became a 14,000-yard Hall of Fame back."),
            ("Meadowlands Swamp Bowl", "The Jersey swamp became home after Shea."),
            ("Bill Parcells Rebuild Citadel", "Parcells made the Jets relevant again in the late 1990s."),
            ("Vinny Testaverde Signal Tower", "Vinny's 1998 season was a last great analog run."),
            ("1998 AFC Title Vale", "One win from the Super Bowl, still the modern almost."),
            ("Revis Island Fortress", "Darrelle Revis turned a sideline into a closed island."),
            ("Heartbreak Canyon", "The 2010s were famous for almosts and one infamous fumble."),
            ("Gang Green Defense Line", "The nickname still means a front that hunts."),
            ("MetLife Stadium Shared Coliseum", "A shared palace with the Giants, still Jets green on Sunday."),
            ("Aaron Rodgers Brief Harbor", "A short, loud chapter in the quarterback story."),
            ("Sauce Gardner Present Island", "Sauce brought Revis Island energy back to the corner."),
            ("Gotham Civic Shores", "Skyline, Lady Liberty, and the Meadowlands marsh."),
            ("Gotham Green Horizon", "The next guarantee is still unwritten."),
        ],
    },
    "ravens": {
        "title": "BALTIMORE RAVENS", "land": "Legend Land of Nevermore",
        "tag": "RAVEN NATION", "quote": "Protect this house.",
        "c": (0.15, 0.10, 0.32), "stops": [
            ("1996 Arrival Harbor", "Baltimore got football back and named it for Poe."),
            ("Ozzie Newsome Architect Citadel", "Ozzie drafted the spine of two champions."),
            ("Ray Lewis Middle Linebacker Volcano", "Lewis was the emotional and physical center of Raven Nation."),
            ("Ed Reed Safety Island", "Reed intercepted the league's imagination."),
            ("Jonathan Ogden Tackle Fortress", "Ogden was a dancing mountain at left tackle."),
            ("Super Bowl XXXV First Crown", "A defense so good it felt like a purple wall."),
            ("Shannon Sharpe Grove", "Sharpe gave the first title team a tight end who talked and blocked."),
            ("M&T Bank Stadium Purple Coliseum", "The downtown bowl that turns purple on Sunday."),
            ("Harbaugh Brotherhood Citadel", "John Harbaugh built a second champion on competition."),
            ("Super Bowl XLVII Blackout Peak", "Flacco, Jacoby Jones, and a Super Bowl that lost its lights."),
            ("Joe Flacco Elite Harbor", "One January, elite was not a joke."),
            ("Terrell Suggs Pass-Rush Canyon", "Sizzle hunted quarterbacks for a generation."),
            ("Marshal Yanda Trench Plains", "Yanda was the quiet best guard in football."),
            ("Lamar Jackson Dual-Threat River", "Lamar made the Ravens' offense a new kind of weather."),
            ("Derrick Henry Present Power Road", "Henry brought Oilers thunder into purple."),
            ("Purple Friday Civic Corridor", "The city wears the bird before kickoff."),
            ("Inner Harbor Shores", "Domino Sugars, Fort McHenry, and the harbor sit on the map."),
            ("Marching Band Grove", "The band is part of the franchise's civic sound."),
            ("Nevermore Memorial Woods", "Poe's city and a football team sharing one dark bird."),
            ("Purple Legacy Horizon", "Two crowns, and a defense that still believes in the house."),
        ],
    },
    "bengals": {
        "title": "CINCINNATI BENGALS", "land": "Legend Land of the Stripes",
        "tag": "WHO DEY", "quote": "Who Dey think gonna beat them Bengals?",
        "c": (0.98, 0.37, 0.11), "stops": [
            ("1968 AFL Birth Cradle", "Paul Brown built a second Ohio team and striped it orange."),
            ("Paul Brown Founding Citadel", "The founding coach's name is still on the stadium."),
            ("Riverfront Stadium Harbor", "A cookie-cutter bowl on the Ohio that felt like home."),
            ("Ken Anderson Signal Tower", "Anderson was the first great Bengal quarterback."),
            ("Ickey Woods Shuffle Grove", "The Shuffle made a Super Bowl run into a dance."),
            ("Super Bowl XVI Heartbreak Vale", "The first Super Bowl ended in San Francisco."),
            ("Super Bowl XXIII Heartbreak Peak", "Montana's drive broke Cincinnati again."),
            ("Anthony Munoz Tackle Fortress", "Munoz is the standard at left tackle."),
            ("Boomer Esiason Pocket Grove", "Boomer's arm and mouth filled the 1980s."),
            ("Corey Dillon Power River", "Dillon ran angry through late-1990s Sundays."),
            ("Chad Johnson Receiving Shores", "Ocho Cinco made the end zone a stage."),
            ("Carson Palmer Era Ridge", "Palmer's years were talent waiting on January."),
            ("Paycor Stadium Coliseum", "The river palace of Who Dey Nation."),
            ("Joe Burrow Present Cannon Peak", "Burrow turned a 0-2-1 start into a Super Bowl trip."),
            ("Ja'Marr Chase Receiving Lightning", "Chase and Burrow from LSU to the NFL felt inevitable."),
            ("Tee Higgins Grove", "Higgins is the other half of the modern deep shots."),
            ("Super Bowl LVI Almost Crown", "Stafford's Rams won a game Cincinnati still replays."),
            ("Who Dey Jungle Corridor", "Flying pigs and the Roebling Bridge mark the city."),
            ("Cincinnati Civic Shores", "The riverfront skyline is painted into the land."),
            ("Stripe Legacy Horizon", "Who Dey is not a question anymore. It is a map."),
        ],
    },
    "browns": {
        "title": "CLEVELAND BROWNS", "land": "Legend Land of the Dawgs",
        "tag": "DAWG POUND", "quote": "Dawg Pound.",
        "c": (0.19, 0.12, 0.08), "stops": [
            ("1946 AAFC Birth Cradle", "Paul Brown invented a modern franchise in postwar Cleveland."),
            ("Paul Brown Innovator Citadel", "Playbooks, facemasks, and the teaching tree start here."),
            ("Otto Graham Championship Tower", "Graham won titles like they were scheduled."),
            ("Marion Motley Integration Gates", "Motley helped reopen the NFL to Black stars."),
            ("Jim Brown Rushing Rivers", "The greatest Browns back, and still the argument starter."),
            ("1964 Championship Peak", "The last title, still the mountain the city climbs."),
            ("Lou Groza Automatic Toe Ridge", "The Toe made field goals a Cleveland art."),
            ("Municipal Stadium Lakefront Harbor", "The Mistake by the Lake was never a mistake on Sunday."),
            ("Bernie Kosar Dawg Pound Grove", "Kosar and the Dawgs made the 1980s loud."),
            ("The Drive and The Fumble Canyons", "Two January wounds that still have names."),
            ("1995 Exile Vale", "The move to Baltimore is remembered, not celebrated."),
            ("1999 Return Harbor", "An expansion club wearing the old colors came home."),
            ("Huntington Bank Stadium Coliseum", "The lakefront bowl of the modern Dawgs."),
            ("Joe Thomas Tackle Fortress", "Ten straight Pro Bowls, zero drama, all trench."),
            ("Baker Mayfield Era Ridge", "A Heisman first pick who made Cleveland loud again."),
            ("Myles Garrett Present Canyon", "Garrett is the best pass rusher the Dawgs have ever drafted."),
            ("Nick Chubb Power River", "Chubb runs north like the lake wind."),
            ("Dawg Pound Civic Bleachers", "The bleacher nation that named itself."),
            ("Cleveland Civic Shores", "Terminal Tower, the Rock Hall, and the lake."),
            ("Dawg Legacy Horizon", "The next title is the one this city still deserves."),
        ],
    },
    "texans": {
        "title": "HOUSTON TEXANS", "land": "Legend Land of the Bull",
        "tag": "BULLS ON PARADE", "quote": "Bull up.",
        "c": (0.00, 0.13, 0.27), "stops": [
            ("2002 Expansion Birth Cradle", "Houston got football back and branded it with a bull."),
            ("NRG Stadium Coliseum", "A retractable-roof palace built for a new Texas team."),
            ("David Carr First Harbor", "The first pick learned behind a young line."),
            ("Andre Johnson Receiving Rivers", "Andre was the first Texans legend, period."),
            ("Mario Williams Pass-Rush Canyon", "The first overall pick who actually rushed the passer."),
            ("Arian Foster Zone-Read Grove", "Foster made zone-read fashionable in Houston."),
            ("J.J. Watt Destroyer Peak", "Watt was a three-time Defensive Player of the Year wrecking crew."),
            ("2011-12 Playoff Plains", "The first January wins in franchise history."),
            ("DeAndre Hopkins Receiving Shores", "Nuk caught everything that entered his zip code."),
            ("Bill O'Brien Era Ridge", "A stretch of AFC South titles and quarterback weather."),
            ("Storm Vale", "A hard chapter the map marks without celebrating."),
            ("2018-19 AFC South Twin Peaks", "Back-to-back division banners in battle red."),
            ("DeMeco Ryans Coach Citadel", "A former Texans linebacker came home to coach."),
            ("C.J. Stroud Present Cannon Harbor", "Stroud looked like a veteran as a rookie."),
            ("Nico Collins Receiving Grove", "Collins became the present deep threat."),
            ("Will Anderson Jr. Pass-Rush Canyon", "The new edge of the bull."),
            ("2023 Playoff Climb", "A young team that refused to play like an expansion memory."),
            ("Houston Civic Shores", "Skyline, Space Center, and the ship channel."),
            ("Battle Red Friday Corridor", "The city wears red before kickoff."),
            ("Bull Legacy Horizon", "A young franchise still writing its first crown."),
        ],
    },
    "colts": {
        "title": "INDIANAPOLIS COLTS", "land": "Legend Land of the Horseshoe",
        "tag": "BLEED BLUE", "quote": "Bleed blue.",
        "c": (0.00, 0.21, 0.49), "stops": [
            ("Baltimore Birth Cradle 1953", "The Colts began in Baltimore with a horseshoe on the helmet."),
            ("Johnny Unitas Signal Tower", "Unitas invented the two-minute drill as a way of life."),
            ("Raymond Berry Receiving Rivers", "Berry ran routes like they were drafted on paper."),
            ("Super Bowl V First Crown", "A messy, famous first Super Bowl win."),
            ("Memorial Stadium Harbor", "The old Baltimore bowl of blue."),
            ("1984 Midnight Move Crossroads", "Mayflower vans and a new city, still a sore memory."),
            ("Indianapolis Arrival Plains", "The Hoosier Dome made the Colts a Midwest team."),
            ("Lucas Oil Dome Coliseum", "The modern blue palace downtown."),
            ("Peyton Manning Playbook Peak", "Manning turned the audible into theater."),
            ("Harrison and Wayne Twin Groves", "The greatest receiving pair in horseshoe history."),
            ("Edgerrin James Power River", "Edge was the back of the first Indianapolis dynasty."),
            ("Super Bowl XLI First Indy Crown", "Rain in Miami, a blue trophy going home."),
            ("Super Bowl XLIV Heartbreak Vale", "Brees and the Saints ended the three-peat dream."),
            ("Andrew Luck Harbor", "Luck's arm and early retirement still sting."),
            ("Freeney and Mathis Sack Canyon", "The greatest pass-rush pair the shoe has known."),
            ("Jonathan Taylor Present River", "Taylor is the modern power back."),
            ("Present Quarterback Harbor", "The next horseshoe passer is still being drawn."),
            ("Indianapolis Civic Shores", "Monument Circle, the Speedway, and the canal."),
            ("Horseshoe Memorial Grove", "A lucky shape that became a city's mark."),
            ("Bleed Blue Horizon", "From Unitas to Manning, the shoe still fits."),
        ],
    },
    "jaguars": {
        "title": "JACKSONVILLE JAGUARS", "land": "Legend Land of the Jaguar",
        "tag": "DUUUVAL", "quote": "Duuuval.",
        "c": (0.00, 0.40, 0.47), "stops": [
            ("1995 Expansion Birth Cradle", "Wayne Weaver's expansion club arrived in teal."),
            ("Tom Coughlin Founding Citadel", "Coughlin made a new team old-school fast."),
            ("EverBank Stadium Harbor", "The river bowl that learned to roar Duuuval."),
            ("Mark Brunell Signal Tower", "Brunell's left arm was the first Jaguar identity."),
            ("Smith and McCardell Twin Rivers", "Jimmy Smith and Keenan McCardell stretched every defense."),
            ("Fred Taylor Power Road", "Taylor was a Hall-level back who never got the bust."),
            ("1996-99 AFC Title Twin Vales", "Two AFC Championship games in the first four years."),
            ("Tony Boselli Tackle Fortress", "The first Jaguar in Canton."),
            ("1999 AFC Championship Peak", "The closest the teal has come to a Super Bowl."),
            ("2000s Wilderness Marsh", "A long stretch of almost and rebuild."),
            ("Maurice Jones-Drew Lightning River", "MJDs compact violence led the league in rushing."),
            ("Blake Bortles Playoff Grove", "A wild-card run that felt like a second founding."),
            ("Urban Meyer Brief Vale", "A short, loud coaching chapter."),
            ("Trevor Lawrence Present Harbor", "The first overall pick who still owns the future."),
            ("Travis Etienne Power Grove", "Etienne is the present complementary back."),
            ("Pass-Rush Canyon", "Josh Allen and Travon Walker hunt from the edges."),
            ("2022 Playoff Climb", "A January reminder that Duuuval still believes."),
            ("Jacksonville Civic Shores", "The St. Johns, bridges, and beaches."),
            ("Duuuval Civic Corridor", "A county name turned into a battle cry."),
            ("Teal Legacy Horizon", "The jaguar is still young, and still hungry."),
        ],
    },
    "titans": {
        "title": "TENNESSEE TITANS", "land": "Legend Land of the Titans",
        "tag": "TITAN UP", "quote": "Titan up.",
        "c": (0.05, 0.09, 0.25), "stops": [
            ("Houston Oilers Birth Cradle 1960", "Bud Adams' AFL club was Houston's first love."),
            ("Bum Phillips Luv Ya Blue Citadel", "Luv Ya Blue was a city in powder blue."),
            ("Earl Campbell Power River", "Campbell ran through people, not around them."),
            ("Warren Moon Run-and-Shoot Tower", "Moon made the run-and-shoot a highlight film."),
            ("Astrodome Harbor", "The Eighth Wonder learned football noise."),
            ("1997 Tennessee Arrival Plains", "A new state, a temporary stadium, a new name coming."),
            ("Music City Miracle Lateral Peak", "Wycheck to Dyson, one lateral, a civic miracle."),
            ("Super Bowl XXXIV One-Yard Vale", "Kevin Dyson a yard short of overtime."),
            ("Eddie George Power Grove", "George was the bruising face of the first Titans teams."),
            ("Steve McNair Signal Tower", "McNair's toughness still defines the franchise."),
            ("Bruce Matthews Trench Fortress", "Matthews played forever and blocked everyone."),
            ("Nissan Stadium Coliseum", "The river palace across from downtown Nashville."),
            ("Derrick Henry King Henry Road", "Henry made 2,000-yard seasons look prehistoric."),
            ("A.J. Brown Grove", "Brown's Tennessee years were a deep-threat clinic."),
            ("Mike Vrabel Coach Citadel", "Vrabel's teams played angry and close."),
            ("2019 AFC Title Climb", "A wild-card run that reached the door of the Super Bowl."),
            ("Present Quarterback Harbor", "The next Titan passer is still being painted."),
            ("Nashville Civic Shores", "The Batman building, guitars, and the Cumberland."),
            ("Flaming T Memorial Grove", "The sword-and-flame mark of the Titans era."),
            ("Titan Legacy Horizon", "From Oilers blue to Titan navy, one long story."),
        ],
    },
    "broncos": {
        "title": "DENVER BRONCOS", "land": "Legend Land of the Orange Crush",
        "tag": "IN ORANGE WE TRUST", "quote": "Ride the horse.",
        "c": (0.98, 0.31, 0.00), "stops": [
            ("1960 AFL Birth Cradle", "The Broncos began in ugly brown and mustard and survived."),
            ("Mile High Harbor", "Thin air and a bowl that stole opponents' legs."),
            ("Orange Crush Defense Fortress", "The 1970s defense that named a color."),
            ("Floyd Little Power River", "The Franchise before Elway had a name."),
            ("John Elway Helicopter Peak", "Elway's arm and that helicopter spin are civic property."),
            ("The Drive Canyon", "98 yards in Cleveland, still the greatest two-minute story."),
            ("Super Bowl Heartbreak Vale", "Three 1980s Super Bowls that ended the wrong way."),
            ("Super Bowl XXXII First Crown", "Elway finally got the horse over the mountain."),
            ("Super Bowl XXXIII Repeat Peak", "Back-to-back titles to close the Elway book."),
            ("Terrell Davis Super Bowl River", "TD was the MVP engine of the first crown."),
            ("Shannon Sharpe Tight End Grove", "Sharpe talked as well as he blocked and caught."),
            ("Champ Bailey Shutdown Island", "Champ made a sideline into a closed country."),
            ("Peyton Manning Sunset Tower", "Manning's last great years were painted orange."),
            ("Super Bowl 50 Von Miller Crown", "Miller wrecked Cam Newton and won the last title."),
            ("Empower Field Coliseum", "Mile High by a new name, same thin air."),
            ("Russell Wilson Brief Ridge", "A short, expensive chapter."),
            ("Bo Nix Present Harbor", "The present quarterback of the orange."),
            ("Denver Civic Shores", "Gold-dome Capitol, the Rockies, Union Station."),
            ("Horse-Head Memorial Grove", "The charging horse is the city's other mountain."),
            ("Orange Crush Horizon", "Three crowns, and air that still favors the home team."),
        ],
    },
    "raiders": {
        "title": "LAS VEGAS RAIDERS", "land": "Legend Land of Silver and Black",
        "tag": "JUST WIN, BABY", "quote": "Commitment to excellence.",
        "c": (0.10, 0.10, 0.10), "stops": [
            ("1960 AFL Oakland Birth Cradle", "A last-minute AFL club that became a religion."),
            ("Al Davis Commitment Citadel", "Al made the shield a way of life."),
            ("John Madden Grove", "Madden's Raiders won ugly, loud, and often."),
            ("Ken Stabler Snake Pocket", "The Snake threw ducks that won titles."),
            ("Fred Biletnikoff Receiving Rivers", "Glue fingers and a Super Bowl MVP."),
            ("Tatum and Hayes Secondary Fortress", "The secondary that made receiving a contact sport."),
            ("Super Bowl XI First Crown", "The first silver-and-black Lombardi."),
            ("Super Bowl XV Second Peak", "Plunkett and the wild-card champions."),
            ("Super Bowl XVIII Third Horizon", "Marcus Allen's long run in Tampa."),
            ("Howie Long and Marcus Allen Twin Ridges", "Defense and a back who made January look easy."),
            ("Los Angeles Coliseum Exile Harbor", "A Hollywood chapter that still splits the nation."),
            ("Return to Oakland Plains", "The shield came home before it left again."),
            ("Super Bowl XXXVII Heartbreak Vale", "Tampa Bay ended the last Raiders Super Bowl."),
            ("Tim Brown and Woodson Grove", "Two Hall of Famers who carried the 1990s-2000s."),
            ("Allegiant Stadium Black Hole Coliseum", "A black palace in the desert."),
            ("Maxx Crosby Present Canyon", "Crosby is the present pass-rush religion."),
            ("Brock Bowers Grove", "A tight end who arrived like a veteran."),
            ("Las Vegas Civic Shores", "The Strip, the desert, and a welcome sign on the horizon."),
            ("Black Hole Fan Fortress", "The fans who wear the shield like armor."),
            ("Silver and Black Horizon", "Just win, baby, is still the only law."),
        ],
    },
    "chargers": {
        "title": "LOS ANGELES CHARGERS", "land": "Legend Land of the Bolt",
        "tag": "BOLT UP", "quote": "Bolt up.",
        "c": (0.00, 0.50, 0.70), "stops": [
            ("1960 AFL L.A. Birth Cradle", "The Chargers began in Los Angeles before San Diego claimed them."),
            ("San Diego Arrival Harbor", "Balboa Stadium and a city that loved powder blue."),
            ("Sid Gillman Innovator Citadel", "Gillman invented the modern vertical passing game."),
            ("Lance Alworth Bambi Receiving Rivers", "Bambi ran past defensive backs like they were statues."),
            ("Air Coryell Pass Plains", "Coryell made the pass the point of the sport."),
            ("Dan Fouts Cannon Peak", "Fouts threw the ball until records broke."),
            ("Kellen Winslow Tight End Grove", "Winslow invented the modern tight end."),
            ("Super Bowl XXIX Heartbreak Vale", "Steve Young ended the only Chargers Super Bowl."),
            ("Junior Seau Linebacker Volcano", "Seau was San Diego's heartbeat in a jersey."),
            ("L.T. Lightning River", "Tomlinson danced into the end zone and into Canton."),
            ("Philip Rivers Signal Tower", "Rivers talked and threw for a generation."),
            ("Antonio Gates Tight End Harbor", "A basketball player who became a Chargers immortal."),
            ("Qualcomm Memory Grove", "The old San Diego bowl still lives on the map."),
            ("Return to Los Angeles Harbor", "The bolt went home again in 2017."),
            ("SoFi Stadium Shared Coliseum", "A shared palace with the Rams."),
            ("Justin Herbert Present Cannon Peak", "Herbert's arm is the present-tense bolt."),
            ("Khalil Mack Pass-Rush Canyon", "Mack brought wrecking-ball energy to the edge."),
            ("San Diego / L.A. Civic Shores", "Coronado, palms, and a distant Hollywood sign."),
            ("Bolt Memorial Grove", "The lightning mark that outlived two cities."),
            ("Powder Blue Horizon", "The bolt still looks best in powder blue."),
        ],
    },
    "commanders": {
        "title": "WASHINGTON COMMANDERS", "land": "Legend Land of Burgundy and Gold",
        "tag": "HAIL", "quote": "Hail to the burgundy.",
        "c": (0.36, 0.09, 0.16), "stops": [
            ("1932 Boston Birth Cradle", "The franchise began in Boston before it found the capital."),
            ("Washington Arrival Harbor", "A capital team in burgundy and gold."),
            ("Sammy Baugh Slingin' Tower", "Slingin' Sammy invented the passing game in wool."),
            ("RFK Stadium Roar Coliseum", "The loudest horseshoe in the capital."),
            ("George Allen Citadel", "The Over-the-Hill Gang was built on veterans and belief."),
            ("Over-the-Hill Gang Ridge", "Old legs, Super Bowl VII, one famous almost."),
            ("Joe Gibbs Three-Crown Citadel", "Gibbs won three Super Bowls with three quarterbacks."),
            ("The Hogs Offensive Line Fortress", "The Hogs made trench work fashionable."),
            ("John Riggins Diesel River", "Riggo ran over Miami in Super Bowl XVII."),
            ("Joe Theismann Signal Grove", "Theismann was the face of the first Gibbs title."),
            ("Super Bowl XVII First Crown", "The diesel run that finally brought a Lombardi."),
            ("Super Bowl XXII Second Peak", "Doug Williams and an explosion of points."),
            ("Super Bowl XXVI Third Horizon", "Mark Rypien closed the Gibbs three-title book."),
            ("Darrell Green Shutdown Island", "The fastest corner and the longest career."),
            ("Art Monk Receiving Rivers", "Monk caught everything and said almost nothing."),
            ("Northwest Stadium Coliseum", "The modern suburban bowl."),
            ("Sean Taylor Memorial Grove", "A safety remembered with quiet respect."),
            ("Jayden Daniels Present Harbor", "The present quarterback of burgundy and gold."),
            ("Washington Civic Shores", "The Capitol, monuments, and cherry blossoms."),
            ("Burgundy and Gold Horizon", "Hail still means this city on Sunday."),
        ],
    },
    "vikings": {
        "title": "MINNESOTA VIKINGS", "land": "Legend Land of the North",
        "tag": "SKOL", "quote": "Skol.",
        "c": (0.31, 0.16, 0.50), "stops": [
            ("1961 Expansion Birth Cradle", "A northern expansion club in purple and gold."),
            ("Metropolitan Stadium Harbor", "An open-air bowl that invented Viking weather."),
            ("Purple People Eaters Fortress", "Page, Eller, Marshall, and Larsen ate offenses."),
            ("Fran Tarkenton Scramble Grove", "Tarkenton invented the scramble as a personality."),
            ("Alan Page and Carl Eller Twin Ridges", "Two Hall of Famers who made the purple front famous."),
            ("Super Bowl IV Heartbreak Vale", "The first of four Super Bowl losses."),
            ("Four-Vale Canyon", "IV, VIII, IX, XI: four Sundays that still sting."),
            ("Chuck Foreman Power River", "Foreman was the complete back of the 1970s."),
            ("Carter and Moss Twin Peaks", "Cris Carter and Randy Moss rewrote receiving in purple."),
            ("Brett Favre Purple Harbor", "A late-career gunslinger in unexpected colors."),
            ("Adrian Peterson All-Day River", "AP ran like the ground owed him something."),
            ("Metrodome Memory Bowl", "The loud inflated roof of the 1980s and 1990s."),
            ("U.S. Bank Stadium Glass Coliseum", "A glassy longship in downtown Minneapolis."),
            ("Minneapolis Miracle Catch Peak", "Stefon Diggs, last play, into the frozen night."),
            ("Super Bowl LII Heartbreak Shore", "The Eagles ended the closest modern Super Bowl trip."),
            ("Kirk Cousins Signal Tower", "Cousins' years were competence waiting on January."),
            ("Justin Jefferson Present Lightning", "Jefferson is the present greatest receiver on earth some Sundays."),
            ("Skol Chant Civic Corridor", "A clap and a word that became a nation's sound."),
            ("Twin Cities Civic Shores", "Lakes, skyways, and a longship on the horizon."),
            ("North Legacy Horizon", "Skol still means we have not finished."),
        ],
    },
    "falcons": {
        "title": "ATLANTA FALCONS", "land": "Legend Land of the Falcon",
        "tag": "RISE UP", "quote": "Rise up.",
        "c": (0.65, 0.05, 0.16), "stops": [
            ("1966 Expansion Birth Cradle", "Atlanta got an NFL club and a bird that dives."),
            ("Atlanta-Fulton County Stadium Harbor", "A shared baseball bowl for the first Sundays."),
            ("Tommy Nobis Linebacker Ridge", "Mr. Falcon, the first great player."),
            ("Deion Sanders Prime Time Island", "Prime covered the sideline and the highlight reel."),
            ("Jessie Tuggle Grove", "Tuggle tackled everybody for a generation."),
            ("Super Bowl XXXIII Heartbreak Vale", "Elway's last ride ended Atlanta's first Super Bowl."),
            ("Michael Vick Dual-Threat River", "Vick made quarterback look like a new sport."),
            ("Dirty Birds 1998 NFC Peak", "The dance, the banner, the first Super Bowl trip."),
            ("Arthur Blank Ownership Crown", "The Home Depot owner who stayed through the hard years."),
            ("Mercedes-Benz Stadium Coliseum", "A falcon-wing roof over downtown."),
            ("Matt Ryan Matty Ice Tower", "Ryan was the calm face of the 2010s."),
            ("Julio Jones Receiving Peak", "Julio caught the ball in another zip code."),
            ("Super Bowl LI 28-3 Heartbreak Canyon", "The lead that became a campfire ghost story."),
            ("2016 NFC Title Plains", "The best Falcons offense of the Super Bowl era."),
            ("Kyle Pitts Present Grove", "A tight end drafted like a receiver."),
            ("Drake London Receiving Harbor", "The present outside threat."),
            ("Atlanta Civic Shores", "Peachtree, the phoenix, and the skyline."),
            ("Rise Up Civic Corridor", "A civic chant painted onto the map."),
            ("Falcon Memorial Grove", "The bird that keeps diving."),
            ("Rise Up Horizon", "The next lead is the one they finish."),
        ],
    },
    "panthers": {
        "title": "CAROLINA PANTHERS", "land": "Legend Land of the Panther",
        "tag": "KEEP POUNDING", "quote": "Keep pounding.",
        "c": (0.00, 0.52, 0.75), "stops": [
            ("1995 Expansion Birth Cradle", "A Carolinas club in blue and black."),
            ("Bank of America Stadium Harbor", "The uptown bowl of Keep Pounding."),
            ("Dom Capers Founding Citadel", "Capers had them in a conference title game by year two."),
            ("1996 NFC Title Peak", "An expansion miracle run."),
            ("Muhsin Muhammad Grove", "Moose was the first great Panthers receiver."),
            ("Julius Peppers Pass-Rush Canyon", "Peppers was a deer who hunted quarterbacks."),
            ("Super Bowl XXXVIII Heartbreak Vale", "A last-second kick in Houston."),
            ("John Kasay Kick Ridge", "Kasay's left leg was a franchise constant."),
            ("Cam Newton Superman Peak", "Cam dove into the end zone like it owed him rent."),
            ("Luke Kuechly Linebacker Volcano", "Kuechly saw the play before it happened."),
            ("Super Bowl 50 Heartbreak Shore", "Von Miller ended the 15-1 season."),
            ("2015 15-1 Plains", "The greatest regular season in Panthers history."),
            ("Thomas Davis Fortress", "Davis played through injuries that would have ended others."),
            ("Bryce Young Present Harbor", "The present quarterback of the blue."),
            ("Present Receiving Grove", "The next Panthers skill players are still being drawn."),
            ("Charlotte Civic Shores", "Queen City skyline and a NASCAR horizon."),
            ("Keep Pounding Civic Corridor", "Sam Mills' words became the franchise law."),
            ("Panther Memorial Grove", "The cat that keeps pounding."),
            ("Bank of America Coliseum", "Uptown Sundays in process blue."),
            ("Keep Pounding Horizon", "The phrase is the map's last road."),
        ],
    },
    "buccaneers": {
        "title": "TAMPA BAY BUCCANEERS", "land": "Legend Land of the Buccaneer",
        "tag": "FIRE THE CANNONS", "quote": "Fire the cannons.",
        "c": (0.83, 0.18, 0.18), "stops": [
            ("1976 Expansion Birth Cradle", "An expansion club that lost first and later learned to plunder."),
            ("Creamsicle Era Grove", "Orange jerseys that became beloved in memory."),
            ("Lee Roy Selmon Pass-Rush Canyon", "The first Buccaneer in Canton."),
            ("John McKay Founding Citadel", "McKay's dry wit and the first winning teams."),
            ("Super Bowl XXXVII First Crown", "Gruden's defense wrecked the Raiders."),
            ("Warren Sapp and Derrick Brooks Twin Fortresses", "The heart of the first champion."),
            ("John Lynch Safety Island", "Lynch hit like a pirate with a plan."),
            ("Brad Johnson Grove", "The quarterback of the first title."),
            ("Raymond James Pirate Coliseum", "A stadium with a ship that fires cannons."),
            ("Jameis Winston Harbor", "A Heisman first pick who made Tampa loud."),
            ("Tom Brady Tampa Bay Peak", "Brady's last title was a Buccaneers title."),
            ("Super Bowl LV Home Crown", "A championship in their own building."),
            ("Mike Evans Receiving Rivers", "Evans is the present iron receiver."),
            ("Lavonte David Linebacker Ridge", "David has been the defensive constant."),
            ("Baker Mayfield Present Harbor", "The present quarterback of the pewter."),
            ("Tampa Civic Shores", "The bay, the skyway, and a pirate ship."),
            ("Pewter Cannon Grove", "Cannons that fire after every score."),
            ("Buccaneer Memorial Shores", "Skull and swords on the horizon."),
            ("Fire the Cannons Corridor", "The civic instruction after a touchdown."),
            ("Pirate Legacy Horizon", "Two crowns, and a ship that still sails."),
        ],
    },
    "cardinals": {
        "title": "ARIZONA CARDINALS", "land": "Legend Land of the Bird",
        "tag": "BIRD GANG", "quote": "Bird Gang.",
        "c": (0.58, 0.10, 0.16), "stops": [
            ("1920 Chicago Cardinals Birth Cradle", "A charter NFL club older than most of the league."),
            ("Comiskey / Wrigley Rental Harbors", "Borrowed baseball parks in the leather-helmet years."),
            ("Charles Bidwill Ownership Crown", "The family that kept the bird alive."),
            ("1947 Championship Peak", "The last title, still the mountain in the desert."),
            ("St. Louis Arrival Plains", "A Midwest chapter under the Arch."),
            ("Ottis Anderson Power River", "Anderson ran the Cardinals into relevance."),
            ("1988 Phoenix Arrival Harbor", "The bird landed in the desert."),
            ("Larry Fitzgerald Receiving Rivers", "Fitz is the franchise's greatest player."),
            ("Kurt Warner Desert Pocket", "Warner made a Super Bowl out of a desert."),
            ("Super Bowl XLIII Heartbreak Vale", "James Harrison's return ended the dream."),
            ("Anquan Boldin Grove", "Boldin was the tough complement to Fitz."),
            ("State Farm Stadium Desert Coliseum", "A retractable-roof bowl in a sea of saguaros."),
            ("Patrick Peterson Shutdown Island", "Pete covered the desert sideline."),
            ("Carson Palmer Ridge", "Palmer's late-career Cardinals years were real."),
            ("Kyler Murray Dual-Threat Harbor", "Murray is the present dual-threat bird."),
            ("Marvin Harrison Jr. Present Grove", "The next great receiver is already on the map."),
            ("Arizona Civic Shores", "Camelback, saguaros, and the Phoenix skyline."),
            ("Bird Gang Civic Corridor", "A civic nickname painted in red."),
            ("Cardinal Memorial Grove", "A red bird that has lived in three cities."),
            ("Red Bird Horizon", "The oldest franchise still hunting a new crown."),
        ],
    },
    "seahawks": {
        "title": "SEATTLE SEAHAWKS", "land": "Legend Land of the 12s",
        "tag": "GO HAWKS", "quote": "Go Hawks.",
        "c": (0.00, 0.13, 0.27), "stops": [
            ("1976 Expansion Birth Cradle", "A Pacific Northwest expansion club in blue and green."),
            ("Kingdome Harbor", "A concrete mushroom that invented 12th-man noise."),
            ("Steve Largent Receiving Rivers", "Largent was the first Seahawk in Canton."),
            ("Cortez Kennedy Tackle Fortress", "Tez wrecked the 1990s interior."),
            ("1983 AFC Title Peak", "The first conference title game."),
            ("Walter Jones Twin Ridges", "Jones was a dancing mountain at left tackle."),
            ("Mike Holmgren Rebuild Citadel", "Holmgren brought Super Bowl structure north."),
            ("Matt Hasselbeck Signal Tower", "Hasselbeck's we-want-the-ball years."),
            ("Super Bowl XL Heartbreak Vale", "A Super Bowl that Seattle still argues."),
            ("Lumen Field 12s Coliseum", "The loudest regular-season house in football."),
            ("Legion of Boom Fortress", "Sherman, Chancellor, Thomas, and Browner."),
            ("Marshawn Lynch Beast Mode River", "Beast Mode was a civic verb."),
            ("Russell Wilson Harbor", "Wilson made January a Seattle habit."),
            ("Super Bowl XLVIII First Crown", "A 43-8 wrecking of Denver."),
            ("Super Bowl XLIX Goal-Line Vale", "One yard, one throw, a ghost story."),
            ("Pete Carroll Competition Citadel", "Compete is still the house rule."),
            ("DK Metcalf Receiving Lightning", "Metcalf is the present deep threat."),
            ("Seattle Civic Shores", "Space Needle, market, ferry, and rain."),
            ("12th Man Flag Peak", "The flag that means the crowd is the extra player."),
            ("Hawk Legacy Horizon", "Go Hawks is the last line on the map."),
        ],
    },
    "packers": {
        "title": "GREEN BAY PACKERS", "land": "Legend Land of the Frozen Tundra",
        "tag": "TITLES SINCE 1921", "quote": "Honor Lambeau.",
        "c": (0.11, 0.33, 0.21), "stops": [
            ("Curly Lambeau Founding Grove", "A packing-company team that became a civic religion."),
            ("City Stadium Wooden Bowl", "The wooden ancestor of Lambeau Field."),
            ("Don Hutson Receiving Rivers", "Hutson invented the modern receiver."),
            ("1929-31 Three-Peat Plains", "Three straight titles in the leather-helmet years."),
            ("Vince Lombardi Sideline Citadel", "The coat, the hat, and the standard."),
            ("Ice Bowl Frozen Arena", "Starr sneak, 21-17, thirteen below."),
            ("Super Bowl I First Crown", "The first Lombardi Trophy, named later for him."),
            ("Super Bowl II Repeat Peak", "Back-to-back, then a retirement."),
            ("Bart Starr Pocket Grove", "Starr won when the weather and the moment were worst."),
            ("Ray Nitschke Middle Linebacker Ridge", "Nitschke was the frozen tundra in a jersey."),
            ("Lambeau Field Titletown Harbor", "The only stadium that feels like a town."),
            ("Reggie White Minister of Defense Fortress", "White made free agency into a title."),
            ("Brett Favre Gunslinger Canyon", "Favre threw it because he could."),
            ("Super Bowl XXXI Summit", "Desmond Howard and a return to the mountain."),
            ("Super Bowl XXXII Heartbreak Vale", "Elway's Broncos ended the repeat."),
            ("Aaron Rodgers Championship Drive", "Rodgers' Super Bowl XLV was precision as art."),
            ("Charles Woodson Secondary Grove", "Woodson made the secondary a second offense."),
            ("Jordan Love Present Harbor", "The present quarterback of Titletown."),
            ("Cheesehead Civic Monument", "Foam cheese as a civic crown."),
            ("Titletown Legacy Shores", "Thirteen crowns, and a town that still owns the team."),
        ],
    },
    "steelers": {
        "title": "PITTSBURGH STEELERS", "land": "Legend Land of Black and Gold",
        "tag": "HERE WE GO", "quote": "Here we go.",
        "c": (0.15, 0.15, 0.15), "stops": [
            ("Art Rooney Founding Forge", "The Chief bought a franchise and a city's Sundays."),
            ("Early Struggle Mill Neighborhood", "Decades of almost before the 1970s."),
            ("Chuck Noll Dynasty Citadel", "Noll drafted a dynasty and taught it to work."),
            ("Steel Curtain Fortress", "Greene, White, Greenwood, Holmes."),
            ("Immaculate Reception Ridge", "Franco's catch that still looks impossible."),
            ("Terry Bradshaw Rifle Tower", "Bradshaw won four and laughed last."),
            ("Super Bowl IX First Crown", "The first of four in six years."),
            ("Super Bowl X Repeat Peak", "Swann's grace in the air."),
            ("Super Bowl XIII Three-Peat Path", "A third title in the same decade."),
            ("Super Bowl XIV Four-Title Horizon", "The close of the first dynasty."),
            ("Mean Joe Greene Soda Shore", "The toughest commercial in football history."),
            ("Jack Lambert Gap-Tooth Ridge", "Lambert looked like the Steel Curtain felt."),
            ("Three Rivers Stadium Harbor", "A cookie-cutter bowl that became sacred."),
            ("Acrisure Modern Coliseum", "Heinz Field by a new name, same three rivers."),
            ("Bill Cowher Jaw Citadel", "Cowher's jaw won a Super Bowl and a city."),
            ("Super Bowl XL Bus-to-Glory Peak", "Bettis rode home a champion."),
            ("Super Bowl XLIII Holmes Catch Summit", "Santonio's toes in the grass."),
            ("Ben Roethlisberger Pocket Grove", "Big Ben extended plays until they became wins."),
            ("T.J. Watt Present Canyon", "Watt is the present sack king of the mill."),
            ("Three Rivers City Shores", "Bridges, the Incline, and Terrible Towels."),
        ],
    },
    "chiefs": {
        "title": "KANSAS CITY CHIEFS", "land": "Legend Land of the Kingdom",
        "tag": "CHIEFDOM FOREVER", "quote": "Chop on.",
        "c": (0.89, 0.15, 0.21), "stops": [
            ("Dallas Texans Birth Cradle", "An AFL club that started in Texas."),
            ("Kansas City Arrival Harbor", "1963, a new city, a new name."),
            ("Hank Stram Super Bowl IV Citadel", "Stram's stack defense and a first Super Bowl."),
            ("Len Dawson Signal Tower", "Dawson was the original Chiefs quarterback saint."),
            ("Bell and Lanier Linebacker Ridge", "Two Hall of Famers in the middle."),
            ("Arrowhead Stadium Sea of Red", "The loudest regular-season crater in football."),
            ("Derrick Thomas Sack Plains", "Thomas hunted quarterbacks like it was personal."),
            ("Joe Montana Kansas City Grove", "A late-career 19 in red."),
            ("Priest Holmes River", "Holmes' peak years were unstoppable."),
            ("Tony Gonzalez Tight End Terrace", "Gonzalez made the position a scoring threat."),
            ("Andy Reid Playbook Citadel", "Reid built the modern kingdom."),
            ("Patrick Mahomes Moonball Peak", "Mahomes throws from angles that should not work."),
            ("Travis Kelce Tight End Harbor", "Kelce is the greatest receiving tight end."),
            ("Super Bowl LIV First Modern Crown", "The first title of the Mahomes era."),
            ("Super Bowl LV Heartbreak Vale", "Brady's Buccaneers ended the repeat."),
            ("Super Bowl LVII Repeat Summit", "A second modern crown."),
            ("Super Bowl LVIII Three-Peat Path", "A third in five years."),
            ("Super Bowl LIX Upset Vale", "A rare January that ended early."),
            ("Chris Jones Present Fortress", "Jones is the interior wrecking ball."),
            ("Kansas City Civic Shores", "Fountains, BBQ smoke, Union Station."),
        ],
    },
    "bears": {
        "title": "CHICAGO BEARS", "land": "Legend Land of the Monsters",
        "tag": "BEAR DOWN", "quote": "Bear down.",
        "c": (0.05, 0.12, 0.28), "stops": [
            ("Decatur Staleys Founding Grove", "A company team that became Chicago."),
            ("George Halas Papa Bear Citadel", "Papa Bear founded the league's most stubborn franchise."),
            ("Wrigley Field Rental Harbor", "A baseball park that hosted Monsters."),
            ("Bronko Nagurski Iron Ridge", "Bronko was a two-way myth."),
            ("Red Grange Galloping Ghost Road", "Grange made pro football a ticket in New York and Chicago."),
            ("Sid Luckman T-Formation Tower", "Luckman ran Halas's T and won titles."),
            ("1940 Championship 73-0 Plains", "The most famous rout in league history."),
            ("Dick Butkus Middle Linebacker Volcano", "Butkus tackled the sport itself."),
            ("Gale Sayers Kansas Comet River", "Sayers was beauty in a Bears jersey."),
            ("Walter Payton Sweetness Rivers", "Sweetness was the complete Bear."),
            ("Mike Ditka Mustache Citadel", "Da Coach of the 1985 champions."),
            ("Super Bowl XX Shuffle Peak", "The 46 defense and a Super Bowl shuffle."),
            ("Soldier Field Greek Coliseum", "Columns on the lake."),
            ("Brian Urlacher Linebacker Ridge", "Urlacher was the 2000s middle linebacker."),
            ("Devin Hester Return Lightning Road", "Hester scored on kicks like it was a video game."),
            ("Super Bowl XLI Heartbreak Vale", "Rain in Miami, a second Super Bowl trip."),
            ("Khalil Mack Pass-Rush Canyon", "Mack's peak years were Bears years."),
            ("Caleb Williams Present Harbor", "The present quarterback of the navy."),
            ("Chicago Civic Shores", "The Bean, the L, and the skyline."),
            ("Monsters of the Midway Horizon", "Bear Down is still the civic instruction."),
        ],
    },
    "lions": {
        "title": "DETROIT LIONS", "land": "Legend Land of the Roar",
        "tag": "ONE PRIDE", "quote": "One Pride.",
        "c": (0.00, 0.46, 0.72), "stops": [
            ("Portsmouth Spartans Founding Grove", "A small-town NFL club that moved to Detroit."),
            ("Detroit Arrival Harbor 1934", "The Lions arrived and claimed Thanksgiving."),
            ("Dutch Clark Iron Signal Tower", "The first great Lions quarterback."),
            ("Bobby Layne Championship Citadel", "Layne won titles and stayed out late."),
            ("Doak Walker and Yale Lary Grove", "Skill and a safety who punted the era."),
            ("1957 Title Peak", "The last championship, still the mountain."),
            ("Barry Sanders Lightning River", "Sanders made defenders miss in ways film still cannot explain."),
            ("Billy Sims Rookie Harbor", "Sims was the 1980s hope."),
            ("Barry's 2k Season Plains", "1997, 2,053 yards, then a sudden retirement."),
            ("Thanksgiving Day Arena", "The annual feast that belongs to Detroit."),
            ("Pontiac Silverdome Harbor", "A suburban dome chapter."),
            ("Ford Field Downtown Coliseum", "A downtown bowl under glass."),
            ("Calvin Johnson Megatron Peak", "Megatron caught the ball in another county."),
            ("Matthew Stafford Exit Horizon", "Stafford left and won a Super Bowl elsewhere."),
            ("Dan Campbell Kneecap Citadel", "Campbell made belief a coaching style."),
            ("Aidan Hutchinson Pass-Rush Canyon", "Hutch is the present edge."),
            ("Amon-Ra St. Brown Receiving Grove", "Sun God is the present possession king."),
            ("2023 NFC Championship Vale", "The closest modern roar."),
            ("Detroit Civic Shores", "Spirit of Detroit, Motown, the Ambassador Bridge."),
            ("One Pride Legacy Horizon", "The next title is the one this city has earned."),
        ],
    },
    "saints": {
        "title": "NEW ORLEANS SAINTS", "land": "Legend Land of the Fleur-de-Lis",
        "tag": "WHO DAT", "quote": "Who Dat.",
        "c": (0.83, 0.66, 0.22), "stops": [
            ("1967 Expansion Birth Cradle", "A Saints club for a city that already knew processions."),
            ("Tulane Stadium Harbor", "The old bowl before the Dome."),
            ("Archie Manning Pocket Grove", "Archie was the saint of losing years."),
            ("Tom Dempsey 63-Yard Kick Peak", "A flat-footed kick that rewrote the record."),
            ("Dome Patrol Linebacker Fortress", "The 1980s linebackers who named a defense."),
            ("Rickey Jackson and Sam Mills Ridge", "Two Hall-level linebackers of the Patrol."),
            ("Superdome Modern Coliseum", "The dome that became a civic shelter and a cathedral."),
            ("1980s Almost-Dynasty Vale", "Good teams that could not finish January."),
            ("Mike Ditka Heartbreak Marsh", "A coaching chapter Saints fans still joke about."),
            ("Katrina Exile Crossroads", "A year on the road, a city that came home."),
            ("Sean Payton Rebuild Citadel", "Payton and Brees rebuilt a franchise and a feeling."),
            ("Drew Brees Gunslinger Harbor", "Brees completed everything, including a Super Bowl."),
            ("Super Bowl XLIV First Crown", "The only title, and the civic exhale."),
            ("Who Dat Nation Parade Corridor", "Bourbon and Canal as a victory road."),
            ("Alvin Kamara Present River", "Kamara is the present Swiss-army back."),
            ("Michael Thomas Receiving Grove", "Thomas set a single-season catch record."),
            ("Demario Davis Present Fortress", "Davis is the present defensive captain."),
            ("2018 Minneapolis Heartbreak Vale", "A no-call that still has a name."),
            ("New Orleans Civic Shores", "The Cathedral, the streetcar, and jazz horns."),
            ("Who Dat Legacy Horizon", "Who Dat still means we believe."),
        ],
    },
    "eagles": {
        "title": "PHILADELPHIA EAGLES", "land": "Legend Land of Midnight Green",
        "tag": "FLY, EAGLES, FLY", "quote": "Fly, Eagles, Fly.",
        "c": (0.00, 0.30, 0.24), "stops": [
            ("Bert Bell Founding Ground", "Bell and Wray named a club for the New Deal eagle."),
            ("Early Struggle Neighborhood", "Lean years of borrowed parks and one-win seasons."),
            ("Steve Van Buren Runway", "Van Buren ran Philadelphia into its first titles."),
            ("Shibe Park Championship Yard", "A blizzard, 7-0, the first crown."),
            ("Los Angeles Title Road", "A muddy Coliseum and a repeat championship."),
            ("Franklin Field Campus", "Ivy and a horseshoe that hosted a 1960 title."),
            ("1960 Title Sideline", "Bednarik's tackle sealed Lombardi's only playoff loss."),
            ("Veterans Stadium Concrete Bowl", "A brutalist bowl that taught the city toughness."),
            ("Dick Vermeil Practice Lot", "Vermeil cried, coached, and reached Super Bowl XV."),
            ("Super Bowl Fifteen Shore", "The first Super Bowl trip, not yet a win."),
            ("Buddy Ryan Defense Line", "A defense that hunted and talked."),
            ("Broad Street March Corridor", "The parade route that waited decades."),
            ("McNabb Reid Summit", "The partnership that made January normal."),
            ("Lincoln Financial Field", "The modern green palace."),
            ("Philly Special End Zone", "A trick play that became civic scripture."),
            ("Foles Underdog Altar", "Nick Foles, Super Bowl LII MVP."),
            ("Jalen Hurts Pocket", "Hurts and the tush push are the present."),
            ("NFC East Battlefield", "The division that never sleeps."),
            ("Civic Eagle Monument", "Liberty Bell, City Hall, Rocky steps."),
            ("Legend Land Horizon", "Fly, Eagles, Fly is the last line."),
        ],
    },
    "patriots": {
        "title": "NEW ENGLAND PATRIOTS", "land": "Legend Land of the Dynasty",
        "tag": "DO YOUR JOB", "quote": "Do your job.",
        "c": (0.00, 0.13, 0.33), "stops": [
            ("Boston Patriots Birth Cradle", "An AFL club named for a revolution."),
            ("Fenway and Nickerson Field", "Borrowed parks before a real home."),
            ("Parilli and Cappelletti Grove", "The first AFL stars."),
            ("1963 AFL Title Game Vale", "The first almost."),
            ("Foxboro Stadium Swamp", "A no-frills bowl in the wind."),
            ("1970s Heartbreak Ridge", "Good teams, bad breaks."),
            ("Super Bowl XX Loss Shore", "The Bears' lesson."),
            ("Drew Bledsoe Draft Harbor", "The arm that later handed the job to a sixth-rounder."),
            ("Bill Parcells Return Citadel", "Parcells made them a playoff team again."),
            ("Robert Kraft Ownership Crown", "The owner of the dynasty years."),
            ("Tom Brady Shea Day", "A sixth-round kid becoming 12."),
            ("Tuck Rule Snow Night", "Snow, Oakland, and a rule that built a dynasty."),
            ("Super Bowl XXXVI Upset Peak", "The first Lombardi."),
            ("Spygate and Deflategate Canyons", "Two controversies the map marks without celebrating."),
            ("18-0 Regular Season Plains", "The perfect regular season."),
            ("Super Bowl XLIX Goal-Line Peak", "Butler's intercept."),
            ("Super Bowl LI 28-3 Climb", "The greatest comeback."),
            ("Super Bowl LIII Last Crown", "The last Brady-Belichick trophy."),
            ("Brady Departure Horizon", "A ship leaving a New England coast."),
            ("Gillette Stadium Shores", "The lighthouse of the dynasty."),
        ],
    },
    "49ers": {
        "title": "SAN FRANCISCO 49ERS", "land": "Legend Land of the Gold Rush",
        "tag": "FAITHFUL TO THE BAY", "quote": "Faithful to the Bay.",
        "c": (0.67, 0.09, 0.12), "stops": [
            ("AAFC Gold Rush Cradle", "1946, a miner club in scarlet and gold."),
            ("Kezar Stadium Harbor", "The old wooden bowl in the park."),
            ("Million Dollar Backfield Plains", "Four names that still mean 1950s gold."),
            ("Y.A. Tittle Signal Tower", "Tittle's years before New York."),
            ("The Catch Candlestick Peak", "Clark over Jones, 1981."),
            ("Bill Walsh West Coast Citadel", "The offense that remade the league."),
            ("Joe Montana Cool Pocket", "Montana never looked hurried."),
            ("Jerry Rice Receiving Rivers", "The greatest receiver, period."),
            ("Ronnie Lott Secondary Fortress", "Lott hit like the Bay wind."),
            ("Super Bowl XVI First Crown", "The first of five."),
            ("Super Bowl XIX Repeat Summit", "Marino met Montana."),
            ("Super Bowl XXIII Drive Shore", "The last-minute drive."),
            ("Super Bowl XXIV Blowout Peak", "A wrecking-ball title."),
            ("Steve Young Left-Handed Ridge", "Young finally got his crown."),
            ("Super Bowl XXIX Dynasty Close", "The fifth Lombardi."),
            ("Candlestick Wind Arena", "Wind that was a twelfth man."),
            ("Levi's Stadium Silicon Coliseum", "The South Bay palace."),
            ("Kyle Shanahan Playbook Citadel", "The present architect."),
            ("Brock Purdy Mr. Irrelevant Harbor", "The last pick who started January runs."),
            ("Golden Gate Legacy Shores", "The bridge and the cable cars."),
        ],
    },
    "rams": {
        "title": "LOS ANGELES RAMS", "land": "Legend Land of the Horns",
        "tag": "THE HORNS ARE ALWAYS HOME", "quote": "The horns are always home.",
        "c": (0.00, 0.21, 0.54), "stops": [
            ("Cleveland Birth Cradle", "1936, a lake-city origin."),
            ("1945 Championship Frozen Field", "The last Midwestern crown."),
            ("Los Angeles Arrival Harbor", "The first NFL team on the Pacific."),
            ("Washington and Strode Gates", "Reintegration of the modern NFL."),
            ("Fearsome Foursome Pass-Rush Canyon", "Jones, Olsen, Lundy, Grier."),
            ("Roman Gabriel Signal Tower", "The face of the near-miss 1960s."),
            ("Merlin Olsen Ridge", "Fourteen straight Pro Bowls."),
            ("Deacon Jones Sack Plains", "He named the sack."),
            ("Super Bowl XIV Heartbreak Vale", "Bradshaw's Steelers."),
            ("Eric Dickerson Lightning Road", "Goggles and a 2,105-yard season."),
            ("Jack Youngblood Iron Will", "A broken leg and a playoff start."),
            ("Georgia Frontiere Crown", "The owner of the St. Louis chapter."),
            ("Greatest Show on Turf Arena", "Warner, Holt, Bruce."),
            ("Super Bowl XXXIV Summit", "One yard the other way."),
            ("Super Bowl XXXVI Upset Vale", "Brady's first title, Rams heartbreak."),
            ("Return to Los Angeles Harbor", "2016, the horns came home."),
            ("Aaron Donald Disruptor Peak", "The greatest interior rusher."),
            ("Sean McVay Playbook Citadel", "The present coach."),
            ("Super Bowl LVI SoFi Crown", "A title in their own building."),
            ("SoFi Stadium Horizon", "Hollywood light and a spaceship stadium."),
        ],
    },
    "cowboys": {
        "title": "DALLAS COWBOYS", "land": "Legend Land of America's Team",
        "tag": "AMERICA'S TEAM", "quote": "Respect the star.",
        "c": (0.00, 0.21, 0.40), "stops": [
            ("Expansion Frontier Plains 1960", "An expansion club that built a culture of excellence."),
            ("Landry Hat Summit", "Twenty-nine seasons and a fedora that became a civic mark."),
            ("20-Win Streak Ridge", "A generation of January football."),
            ("Ice Bowl Frozen Arena", "A title game so cold it became folklore."),
            ("Doomsday Defense Fortress", "Lilly, Howley, White, and a nickname that stuck."),
            ("Staubach Captain America Shores", "Captain America in a Cowboys jersey."),
            ("Super Bowl VI Victory Ridge", "The first Lombardi."),
            ("Super Bowl XII Championship Peak", "The second."),
            ("Texas Stadium Star Harbor", "The hole in the roof so God could watch."),
            ("Herschel Walker Trade Crossroads", "The trade that built the 1990s."),
            ("Triplets Dynasty Citadel", "Aikman, Irvin, Emmitt."),
            ("Super Bowl XXVII Triumph Plains", "The first of three in four years."),
            ("Super Bowl XXVIII Back-to-Back Summit", "Repeat."),
            ("Super Bowl XXX Three-Peat Horizon", "The third crown of the decade."),
            ("America's Team Banner Peaks", "A nickname that became a brand."),
            ("Ring of Honor Memorial Grove", "The names the star keeps."),
            ("Jerry Jones Rebuild Forge", "The owner who remade the franchise."),
            ("AT&T Stadium Modern Coliseum", "Jerry World."),
            ("Emmitt Smith Rushing Rivers", "The all-time rushing king."),
            ("Star on the Helmet Legacy Shores", "The star that still means Dallas."),
        ],
    },
    "giants": {
        "title": "NEW YORK GIANTS", "land": "Legend Land of the Giants",
        "tag": "ONCE A GIANT", "quote": "Once a Giant, always a Giant.",
        "c": (0.01, 0.14, 0.32), "stops": [
            ("Polo Grounds Cradle", "Tim Mara planted football in a baseball park."),
            ("Red Grange Gate", "One gate receipt proved the NFL could sell New York."),
            ("1927 Championship Field", "An early banner in black and white."),
            ("Sneakers Game Frozen Ridge", "Basketball shoes on ice, a title saved."),
            ("Tuffy Leemans and Mel Hein Citadel", "Two-way football as a city craft."),
            ("1956 Championship Yankee Stadium", "Gifford's golden New York team."),
            ("Greatest Game Ever Played Arena", "A loss that made the NFL national."),
            ("Frank Gifford Halfback Grove", "Glamour in a wool Giants jacket."),
            ("Sam Huff Middle Linebacker Ridge", "Defense as television."),
            ("1960s Almost-Dynasty Vale", "Title games that kept slipping."),
            ("Lawrence Taylor Hurricane", "LT changed the position."),
            ("Bill Parcells Sideline Citadel", "Parcells and Belichick's defense."),
            ("Super Bowl XXI Summit", "Simms and the first Super Bowl."),
            ("Super Bowl XXV Crossroads", "Wide right the other way."),
            ("1990s Wilderness Marsh", "A proud franchise in the wilderness."),
            ("Super Bowl XLII Helmet Catch Peak", "Manning to Tyree, Brady's 18-0 ended."),
            ("Super Bowl XLVI Repeat Crown", "Eli did it again."),
            ("Eli Manning Pocket Grove", "Two Super Bowl MVPs, one calm face."),
            ("Mara-Tisch Ownership Archives", "The families who kept the Giants a Giant thing."),
            ("MetLife Horizon", "A shared palace, still Big Blue."),
        ],
    },
}

# Also alias 49ers key
TEAMS["niners"] = TEAMS["49ers"] if "49ers" in TEAMS else None


def hex_rgb(t):
    return Color(*t)


def draw_book(slug, info):
    path = OUT / f"{slug}-guidebook.pdf"
    c = canvas.Canvas(str(path), pagesize=letter)
    W, H = letter
    col = hex_rgb(info["c"])
    accent = Color(min(1, info["c"][0] + 0.25), min(1, info["c"][1] + 0.15), min(1, info["c"][2] + 0.1))

    def header(title_extra=""):
        c.setFillColor(col)
        c.rect(0, H - 0.85 * inch, W, 0.85 * inch, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("Times-Bold", 11)
        c.drawString(0.6 * inch, H - 0.38 * inch, "LEGEND EXPLORER'S GUIDE")
        c.setFont("Times-Bold", 16)
        c.drawString(0.6 * inch, H - 0.64 * inch, info["title"])
        c.setFillColor(col)
        c.rect(0, 0, W, 0.45 * inch, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("Times-Italic", 9)
        c.drawCentredString(W / 2, 0.2 * inch, "MADE BY MAYBEE CREATIONS  ·  8.5×11  ·  20 LANDMARK GUIDE")

    # Cover
    c.setFillColor(col)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Times-Bold", 13)
    c.drawCentredString(W / 2, H - 1.3 * inch, "LEGEND EXPLORER'S GUIDE")
    c.setFont("Times-Bold", 28)
    c.drawCentredString(W / 2, H - 2.0 * inch, info["title"])
    c.setFont("Times-Italic", 16)
    c.drawCentredString(W / 2, H - 2.45 * inch, info["land"])
    c.setStrokeColor(white)
    c.setLineWidth(1.5)
    c.line(1.5 * inch, H - 2.7 * inch, W - 1.5 * inch, H - 2.7 * inch)
    c.setFont("Times-Bold", 14)
    c.drawCentredString(W / 2, H - 3.15 * inch, info["tag"])
    c.setFont("Times-Roman", 12)
    c.drawCentredString(W / 2, H - 3.55 * inch, "A Fantasy World Map Guide to Franchise History")
    c.setFont("Times-Italic", 12)
    c.drawCentredString(W / 2, H - 4.9 * inch, f'"{info["quote"]}"')
    c.setFont("Times-Roman", 11)
    y = H - 5.6 * inch
    c.drawCentredString(W / 2, y, "20 legendary landmarks")
    c.drawCentredString(W / 2, y - 18, "Past legends  ·  Present stars  ·  Coaches  ·  Stadiums  ·  City icons")
    c.setFont("Times-Bold", 10)
    c.drawCentredString(W / 2, 1.1 * inch, "Companion to the Legend Land world map")
    c.setFont("Times-Italic", 9)
    c.drawCentredString(W / 2, 0.8 * inch, "MADE BY MAYBEE CREATIONS")
    c.showPage()

    # Stop list
    header()
    c.setFillColor(col)
    c.setFont("Times-Bold", 14)
    c.drawString(0.65 * inch, H - 1.2 * inch, "THE 20 LANDMARKS")
    c.setFont("Times-Italic", 10)
    c.setFillColor(black)
    c.drawString(0.65 * inch, H - 1.42 * inch, "Names live on the map. This book is the walk-through.")
    c.setFont("Times-Roman", 10)
    y = H - 1.75 * inch
    for i, (name, _) in enumerate(info["stops"], 1):
        c.setFillColor(col)
        c.circle(0.85 * inch, y + 3, 8, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("Times-Bold", 8)
        c.drawCentredString(0.85 * inch, y, str(i))
        c.setFillColor(black)
        c.setFont("Times-Bold", 10)
        c.drawString(1.15 * inch, y, name)
        y -= 22
    c.showPage()

    # Landmark pages, two per page
    for i in range(0, 20, 2):
        header()
        y = H - 1.25 * inch
        for j in range(2):
            idx = i + j
            name, blurb = info["stops"][idx]
            c.setFillColor(col)
            c.roundRect(0.55 * inch, y - 2.55 * inch, W - 1.1 * inch, 2.7 * inch, 8, fill=0, stroke=1)
            c.setFillColor(col)
            c.rect(0.55 * inch, y - 0.05 * inch, W - 1.1 * inch, 0.38 * inch, fill=1, stroke=0)
            c.setFillColor(white)
            c.setFont("Times-Bold", 12)
            c.drawString(0.7 * inch, y + 0.08 * inch, f"LANDMARK {idx+1:02d}  ·  {name.upper()}")
            c.setFillColor(black)
            c.setFont("Times-Roman", 11)
            # wrap
            text = c.beginText(0.75 * inch, y - 0.4 * inch)
            text.setFont("Times-Roman", 11)
            text.setLeading(15)
            words = blurb.split()
            line = ""
            for w in words:
                trial = (line + " " + w).strip()
                if c.stringWidth(trial, "Times-Roman", 11) < 6.6 * inch:
                    line = trial
                else:
                    text.textLine(line)
                    line = w
            if line:
                text.textLine(line)
            c.drawText(text)
            y -= 3.05 * inch
        c.showPage()

    c.save()
    dest = ART / f"{slug}-guidebook.pdf"
    dest.write_bytes(path.read_bytes())
    return path


def main():
    n = 0
    for slug, info in TEAMS.items():
        if slug in ("niners",) or not info:
            continue
        p = draw_book(slug, info)
        print("wrote", p.name, p.stat().st_size)
        n += 1
    print("books", n)


if __name__ == "__main__":
    main()

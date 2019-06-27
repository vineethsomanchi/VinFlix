require 'open-uri'

User.destroy_all
Video.destroy_all
List.destroy_all

#Demo user
User.create!( email: "demo@appacademy.io", password: "demo" )

#Movies
aquaman = Video.create({title: "Aquaman", year: 2018, maturity_rating: "PG-13", runtime: "2h 23m", description: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land."} )
aquaman.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Aquaman/aquaman_trailer.mp4'), filename: 'aquaman_trailer.mp4')
aquaman.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Aquaman/aquaman_thumbnail.jpg'), filename: 'aquaman_thumbnail.jpg')

dark_phoenix = Video.create({title: "Dark Phoenix", year: 2019, maturity_rating: "PG-13", runtime: "1h 53m", description: "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world."} )
dark_phoenix.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/X-Men%3A+Dark+Phoenix/phoenix_trailer.mp4'), filename: 'dark_phoenix.mp4')
dark_phoenix.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/X-Men%3A+Dark+Phoenix/dark_phoenix_thumbnail.jpg'), filename: 'dark_phoenix.jpg')

deadpool = Video.create!({title: "Deadpool 2", year: 2018, maturity_rating: "R", runtime: "1h 59m", description: "Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable."})
deadpool.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Deadpool+2/deadpool_2.mp4'), filename: 'deadpool_2.mp4')
deadpool.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Deadpool+2/deadpool_2.jpg'), filename: 'deadpool_2.jpg') 

joker = Video.create({title: "Joker", year: 2019, maturity_rating: "R", runtime: "2h 0m", description: "Failed comedian Arthur Fleck encounters violent thugs while wandering the streets of Gotham City dressed as a clown. Disregarded by society, Fleck begins a slow dissent into madness as he transforms into the criminal mastermind known as the Joker."} )
joker.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Joker/joker_trailer.mp4'), filename: 'joker.mp4')
joker.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Joker/joker_thumbnail.jpg'), filename: 'joker.jpg')

spiderman = Video.create({title: "Spider-Man: Far from Home", year: 2019, maturity_rating: "PG-13", runtime: "2h 15m", description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."} )
spiderman.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Spiderman%3A+Far+From+Home/spiderman_trailer.mp4'), filename: 'spiderman.mp4')
spiderman.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Spiderman%3A+Far+From+Home/spider_man_thumbnail.jpg'), filename: 'spiderman.jpg')

avengers_end_game = Video.create!({title: "Avengers: Endgame", year: 2019, maturity_rating: "PG-13", runtime: "3h 1m", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe."} )
avengers_end_game.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Avengers%3A+Endgame/avengers_trailer.mp4'), filename: 'avengers_trailer.mp4')
avengers_end_game.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Avengers%3A+Endgame/avengers_thumbnail.jpg'), filename: 'avengers_thumbnail.jpg')




spongebob = Video.create!({title: "SpongeBob SquarePants", year: 2019, maturity_rating: "TV-Y", runtime: "12 Seasons", description: "The misadventures of a talking sea sponge who works at a fast food restaurant, attends a boating school, and lives in an underwater pineapple."})
spongebob.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Spongebob/spongebob_trailer.mp4'), filename: 'sponge.mp4')
spongebob.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Spongebob/spongebob_thumbnail.png'), filename: 'sponge.jpg')

lion_king = Video.create!({title: "The Lion King", year: 2019, maturity_rating: "PG", runtime: "1h 58m", description: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."})
lion_king.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Lion+King/lion_king.mp4'), filename: 'lion_king.mp4')
lion_king.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Lion+King/lion_king.jpeg'), filename: 'lion_king.jpg')

rick_and_morty = Video.create!({title: "Rick and Morty ", year: 2019, maturity_rating: "TV-MA", runtime: "4 Seasons", description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson."})
rick_and_morty.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Rick+and+Morty/rick_and_morty_trailer.mp4'), filename: 'ram.mp4')
rick_and_morty.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Rick+and+Morty/rick_and_morty_thumbnail.jpg'), filename: 'ram.jpg')

avatar = Video.create!({title: "Avatar: The Last Airbender ", year: 2008, maturity_rating: "TV-Y7", runtime: "3 Seasons", description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world."})
avatar.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Avatar+The+Last+Airbender/avatar_trailer.mp4'), filename: 'avatar.mp4')
avatar.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Avatar+The+Last+Airbender/avatar_thumbnail.jpg'), filename: '.jpg')

mha = Video.create!({title: "Boku no Hero Academia", year: 2018, maturity_rating: "TV-14", runtime: "3 Seasons", description: "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero."})
mha.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/MHA/mha_trailer.mp4'), filename: 'mha.mp4')
mha.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/MHA/mha_thumbnail.jpg'), filename: 'mha.jpg')

opm = Video.create!({title: "One Punch Man", year: 2019, maturity_rating: "TV-MA", runtime: "2 Seasons", description: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch."})
opm.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/OPM/opm_trailer.mp4'), filename: 'opm.mp4')
opm.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/OPM/opm_thumbnail.jpg'), filename: 'opm.jpg')




inglorious = Video.create!({title: "Inglourious Basterds", year: 2009, maturity_rating: "R", runtime: "2h 33m", description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."})
inglorious.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/inglorious_trailer.mp4'), filename: 'inglor.mp4')
inglorious.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/inglourious_thumbnail.jpg'), filename: 'inglor.jpg')

pulp_fiction = Video.create!({title: "Pulp Fiction", year: 1994, maturity_rating: "R", runtime: "2h 34m", description: "The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."})
pulp_fiction.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/pulp_fiction_trailer.mp4'), filename: 'pulp.mp4')
pulp_fiction.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/pulp_fiction_thumbnail.jpg'), filename: 'pulp.jpg')

killbill = Video.create!({title: "Kill Bill: Vol. 1", year: 2003, maturity_rating: "R", runtime: "1h 51m", description: "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her."})
killbill.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/killbill.mp4'), filename: 'killbill.mp4')
killbill.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/killbill.jpg'), filename: 'killbill.jpg')

hateful8 = Video.create!({title: "The Hateful Eight", year: 2015, maturity_rating: "R", runtime: "2h 48m", description: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters."})
hateful8.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/hateful8_trailer.mp4'), filename: 'hateful.mp4')
hateful8.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/hateful8.jpg'), filename: 'hateful.jpg')

django = Video.create!({title: "Django Unchained", year: 2012, maturity_rating: "R", runtime: "2h 45m", description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."})
django.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/django_trailer.mp4'), filename: 'django.mp4')
django.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/django_thumbnail.jpeg'), filename: 'django.jpg')

ouatih = Video.create!({title: "Once Upon a Time ... in Hollywood", year: 2019, maturity_rating: "R", runtime: "3h 0m", description: "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles."})
ouatih.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/ouatih_trailer.mp4'), filename: 'ouat.mp4')
ouatih.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/quentin+taretino/Once+Upon+a+Time+in+Hollywood.jpeg'), filename: 'ouat.jpg')




titanic = Video.create!({title: "Titanic", year: 1997, maturity_rating: "PG-13", runtime: "3h 14m", description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."})
titanic.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/titanic_trailer.mp4'), filename: 'titanic.mp4')
titanic.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/titanic+thumbnail.jpg'), filename: 'titanic.jpg')

revenant = Video.create!({title: "The Revenant", year: 2015, maturity_rating: "R", runtime: "2h 36m", description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team."})
revenant.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/revenant_trailer.mp4'), filename: 'revenant_trailer.mp4')
revenant.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/revenant_thumbnail.jpg'), filename: 'revenant.jpg')

departed = Video.create!({title: "The Departed", year: 2006, maturity_rating: "R", runtime: "2h 31m", description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."})
departed.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/departed.mp4'), filename: 'departed.mp4')
departed.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/departed.jpg'), filename: 'departed.jpg')

cmiyc = Video.create!({title: "Catch Me If You Can", year: 2002, maturity_rating: "PG-13", runtime: "2h 21m", description: "A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully forged millions of dollars' worth of checks while posing as a Pan Am pilot, a doctor, and a legal prosecutor."})
cmiyc.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/cmifc_trailer.mp4'), filename: 'cmifc_trailer.mp4')
cmiyc.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/CMIYC_thumbnail.png'), filename: 'cmifc.jpg')

inception = Video.create!({title: "Inception", year: 2010, maturity_rating: "PG-13", runtime: "2h 28m", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."})
inception.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/inception.mp4'), filename: 'inception.mp4')
inception.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/inception_thumbnail.jpg'), filename: 'inception.jpg')

wow = Video.create!({title: "The Wolf of Wall Street", year: 2013, maturity_rating: "R", runtime: "3h 0m", description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."})
wow.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/wow.mp4'), filename: 'wow.mp4')
wow.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Leonardo+DiCaprio/WOW_thumbnail.jpg'), filename: 'wow.jpg')







# stepbros = Video.create!({title: "Step Brothers", year: 2008, maturity_rating: "R", runtime: "1h 38m", description: "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry."})
# stepbros.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/comedy/step_brothers_thumbnail.jpeg'), filename: 'stepbros.jpg')

# dodgeball = Video.create!({title: "Dodgeball: A True Underdog Story", year: 2004, maturity_rating: "PG-13", runtime: "1h 32m", description: "A group of misfits enter a Las Vegas dodgeball tournament in order to save their cherished local gym from the onslaught of a corporate health fitness chain."})
# dodgeball.movie.attach(io: open(''), filename: '.mp4')
# dodgeball.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/comedy/dodgeball_thumbnail.jpg'), filename: 'dodgeball.jpg')

# tog = Video.create!({title: "The Other Guys", year: 2010, maturity_rating: "PG-13", runtime: "1h 47m", description: "Two mismatched New York City detectives seize an opportunity to step up like the city's top cops, whom they idolize, only things don't quite go as planned."})
# tog.movie.attach(io: open(''), filename: '.mp4')
# tog.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/comedy/TOG_thumbnail.jpeg'), filename: 'tog.jpg')

# tropic_thunder = Video.create!({title: "Tropic Thunder", year: 2008, maturity_rating: "R", runtime: "1h 47m", description: "Through a series of freak occurrences, a group of actors shooting a big-budget war movie are forced to become the soldiers they are portraying."})
# tropic.movie.attach(io: open(''), filename: '.mp4')
# tropic_thunder.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/comedy/tropic_thunder_thumbnail.jpg'), filename: 'tropic_thunder.jpg')

# ted2 = Video.create!({title: "Ted 2", year: 2015, maturity_rating: "R", runtime: "1h 55m", description: "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law."})
# ted2.movie.attach(io: open(''), filename: '.mp4')
# ted2.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/comedy/ted2_thumbnail.jpeg'), filename: 'ted2.jpg')



# filename = Video.create!({title: "", year: 2019, maturity_rating: "PG-13", runtime: "h m", description: ""})
# filename.movie.attach(io: open(''), filename: '.mp4')
# filename.thumbnail.attach(io: open(''), filename: '.jpg')
require 'open-uri'

User.destroy_all
Video.destroy_all

#Demo user
User.create!( email: "demo@appacademy.io", password: "demo" )

#Admin account
User.create!( email: "admin@nyu.edu", password: "admin" )

#Movies
avengers_end_game = Video.create!({title: "Avengers: Endgame", year: 2019, maturity_rating: "PG-13", runtime: "3h 1m", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe."} )
avengers_end_game.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Avengers%3A+Endgame/avengers_trailer.mp4'), filename: 'avengers_trailer.mp4')
avengers_end_game.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Avengers%3A+Endgame/avengers_thumbnail.jpg'), filename: 'avengers_thumbnail.jpg')

aquaman = Video.create({title: "Aquaman", year: 2018, maturity_rating: "PG-13", runtime: "2h 23m", description: "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land."} )
aquaman.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Aquaman/aquaman_trailer.mp4'), filename: 'aquaman_trailer.mp4')
aquaman.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Aquaman/aquaman_thumbnail.png'), filename: 'aquaman_thumbnail.jpg')

joker = Video.create({title: "Joker", year: 2019, maturity_rating: "R", runtime: "2h 0m", description: "Failed comedian Arthur Fleck encounters violent thugs while wandering the streets of Gotham City dressed as a clown. Disregarded by society, Fleck begins a slow dissent into madness as he transforms into the criminal mastermind known as the Joker."} )
joker.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Joker/joker_trailer.mp4'), filename: 'joker.mp4')
joker.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Joker/joker_thumbnail.jpg'), filename: 'joker.jpg')

spiderman = Video.create({title: "Spider-Man: Far from Home", year: 2019, maturity_rating: "PG-13", runtime: "2h 15m", description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."} )
spiderman.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Spiderman%3A+Far+From+Home/spiderman_trailer.mp4'), filename: 'spiderman.mp4')
spiderman.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/Spiderman%3A+Far+From+Home/spiderman_thumbnail.png'), filename: 'spiderman.jpg')

dark_knight = Video.create({title: "The Dark Knight", year: 2008, maturity_rating: "PG-13", runtime: "2h 32m", description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."} )
dark_knight.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/The+Dark+Knight/darkknight_trailer.mp4'), filename: 'dark_knight.mp4')
dark_knight.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/The+Dark+Knight/darkknight_thumbnail.png'), filename: 'dark_knight.jpg')

dark_phoenix = Video.create({title: "Dark Phoenix", year: 2019, maturity_rating: "PG-13", runtime: "1h 53m", description: "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world."} )
dark_phoenix.movie.attach(io: open('https://vinflix-dev.s3.amazonaws.com/X-Men%3A+Dark+Phoenix/phoenix_trailer.mp4'), filename: 'dark_phoenix.mp4')
dark_phoenix.thumbnail.attach(io: open('https://vinflix-dev.s3.amazonaws.com/X-Men%3A+Dark+Phoenix/phoenix_thumbnail.png'), filename: 'dark_phoenix.jpg')



# filename = Video.create!({title: "", year: 2019, maturity_rating: "PG-13", runtime: "h m", description: ""})
# filename.movie.attach(io: open(''), filename: '.mp4')
# filename.thumbnail.attach(io: open(''), filename: '.jpg')
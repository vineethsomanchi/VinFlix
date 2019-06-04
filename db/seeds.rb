User.destroy_all
Video.destroy_all

#Demo user
User.create!( email: "demo@appacademy.io", password: "demo" )

#Admin account
User.create!( email: "admin@gmail.com", password: "admin" )

Video.create!(title: "Vinny's day off", year: 2019, maturity_rating: "NC-17", runtime: "a minute", description: "vinny sleeps all day", my_list: true)

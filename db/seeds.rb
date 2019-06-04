User.destroy_all
Video.destroy_all

#Demo user
User.create!( email: "demo@appacademy.io", password: "demo" )

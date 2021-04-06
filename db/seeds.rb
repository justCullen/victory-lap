# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Destination.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
@travel = User.create!(username: 'travel_fan', email: 'travel_fan@email.com', password: '123456')
@cullen = User.create!(username: 'cullen', email: 'cullen@email.com', password: '123456')
@fly = User.create!(username: 'flyAway', email: 'fly@email.com', password: '123456')
@train = User.create!(username: 'by-train-only', email: 'train@email.com', password: '123456')
@road = User.create!(username: 'Road Tripper', email: 'road@email.com', password: '123456')

puts "#{User.count} users created!"

@grand = Destination.create!(name: 'Grand Canyon', content: 'Photo by Alan Carrillo on Unsplash', img_url: 'https://i.imgur.com/MCIGrXm.jpg', user: @travel)
@nara = Destination.create!(name: 'Nara, Japan', content: 'See the shrines, feed the deer.', img_url: 'https://i.imgur.com/RzSsPwC.jpg', user: @cullen)
@como = Destination.create!(name: 'Lake Como, Italy', content: 'relax by the lake', img_url: 'https://i.imgur.com/uYOzHrP.jpg', user: @fly)
@macchu = Destination.create!(name: 'Macchu Picchu', content: "I've been hiking in anticipation.", img_url: 'https://i.imgur.com/5HltucU.jpg', user: @train)
@hong = Destination.create!(name: 'Hong Kong', content: 'So much good food, I have to visit.', img_url: 'https://i.imgur.com/lOVY7mK.jpg', user: @road)
@bruges = Destination.create!(name: 'Bruges, Belgium', content: 'Such a beautiful city, and so much history!', img_url: 'https://i.imgur.com/OYqyE1H.jpg', user: @cullen)
@louvre = Destination.create!(name: 'The Louvre', content: 'The museum to end all museums', img_url: 'https://i.imgur.com/MI29Mio.jpg', user: @travel)
@viet = Destination.create!(name: 'Vietnam', content: 'Great food, great people', img_url: 'https://i.imgur.com/iXhwmDl.jpg', user: @road)
@romania = Destination.create!(name: 'Romania', content: 'Gorgeous countryside', img_url: 'https://i.imgur.com/3zrbvsx.jpg', user: @fly)

puts "#{Destination.count} destinations created!"

Comment.create!(content: "That's a big hole in the ground.", user: @cullen, destination: @grand)
Comment.create!(content: "Hey I've hiked there!", user: @fly, destination: @grand)
Comment.create!(content: "so inspiring", user: @train, destination: @grand)
Comment.create!(content: "hiking, biking, kayaking", user: @road, destination: @grand)
Comment.create!(content: "i love camping", user: @cullen, destination: @grand)
Comment.create!(content: "Always wanted to go there.", user: @fly, destination: @grand)
Comment.create!(content: "cool stuff to see around there too", user: @train, destination: @grand)
Comment.create!(content: 'Cute!', user: @travel, destination: @nara)
Comment.create!(content: 'Ooh, Italy!', user: @admin, destination: @como)
Comment.create!(content: "ive been there twice", user: @travel, destination: @macchu)
Comment.create!(content: "seems like such a fun place", user:@fly , destination: @hong)
Comment.create!(content: "spent a month there, ngl", user: @train, destination: @hong)
Comment.create!(content: "take the canal boat tour", user: @fly, destination: @bruges)
Comment.create!(content: "could spend days in here", user: @road, destination: @louvre)
Comment.create!(content: "i want to spend summer there", user: @cullen, destination: @viet)
Comment.create!(content: "castles are so cool!", user: @travel, destination: @romania)

puts "#{Comment.count} comments created!"
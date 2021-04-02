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
@travel = User.create!(username: 'travel_fan', email: 'travel_fan@email.com', password: '456123')

puts "#{User.count} users created!"

@grand = Destination.create!(name: 'Grand Canyon', content: 'Photo by Alan Carrillo on Unsplash', img_url: 'https://i.imgur.com/MCIGrXm.jpg', user: @admin)
@eiffel = Destination.create!(name: 'Eiffel Tower', content: 'I want to go to Paris!', img_url: 'https://i.imgur.com/yfAvXQe.jpg', user: @travel)
@nara = Destination.create!(name: 'Nara, Japan', content: 'See the shrines, feed the deer.', img_url: 'https://i.imgur.com/RzSsPwC.jpg', user: @admin)
@como = Destination.create!(name: 'Lake Como, Italy', content: 'relax by the lake', img_url: 'https://i.imgur.com/uYOzHrP.jpg', user: @travel)

puts "#{Destination.count} destinations created!"

Comment.create!(content: "That's a big hole in the ground.", user: @travel, destination: @grand)
Comment.create!(content: 'And baguettes!', user: @admin, destination: @eiffel)
Comment.create!(content: 'Cute!', user: @travel, destination: @nara)
Comment.create!(content: 'Ooh, Italy!', user: @admin, destination: @como)

puts "#{Comment.count} comments created!"
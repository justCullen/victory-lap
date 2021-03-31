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

@grand = Destination.create!(name: 'Grand Canyon', content: 'Photo by Alan Carrillo on Unsplash', img_url: 'https://i.imgur.com/MCIGrXm.jpg', user_id: @admin)

puts "#{Destination.count} destinations created!"

Comment.create!(content: "That/'s a big hole in the ground.", user_id: @travel, destination_id: @grand)

puts "#{Comment.count} comments created!"
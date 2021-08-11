# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Show.create(date:DateTime.strptime("08/01/2021 16:00", "%m/%d/%Y %H:%M"),artist:'skrillex', all_ages:true)

Show.create(date:DateTime.strptime("08/15/2021 16:00", "%m/%d/%Y %H:%M"),artist:'daft punk', all_ages:true)

Show.create(date:DateTime.strptime("08/21/2021 16:00", "%m/%d/%Y %H:%M"),artist:'Drake', all_ages:true)
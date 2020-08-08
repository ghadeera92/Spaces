require 'open-uri'

class Favorite < ApplicationRecord
    belongs_to :user

# def headline
#     begin
#         file = open("#{url}")
#         contents = file.read
#         unless contents.index("<h1>").nil?
#             start_location = contents.index(url)
#             header_start = contents.index("<h1>", start_location) + 4
#             header_end = contents.index("</h1>", start_location) - 1
#             p contents[header_start..header_end]
#         else
#             p "There were no h1 tags on #{url}"           
#         end
#        rescue
#         puts "You typed somrthing wrong. Please try again."
#        end
#     end
end

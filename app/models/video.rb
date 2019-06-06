# == Schema Information
#
# Table name: videos
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  year            :integer          not null
#  maturity_rating :string           not null
#  runtime         :string           not null
#  description     :text             not null
#  my_list         :boolean          not null
#  director        :string
#  cast            :string
#  writer          :string
#  genre           :string
#  theme           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Video < ApplicationRecord
    validates :title, :year, :maturity_rating, :runtime, :description, presence: true
    has_one_attached :movie
    has_one_attached :thumbnail
end

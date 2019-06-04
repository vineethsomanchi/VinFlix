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
    validates :title, :year, :maturity_rating, :runtime, :description, :my_list, presence: true
    has_one_attached :video_link
    has_one_attached :image_link
end

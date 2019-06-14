# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  image      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Profile < ApplicationRecord
    validates :name, presence: true
    
    belongs_to :user
end

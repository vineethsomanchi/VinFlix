json.videos do 
  @videos.each do |video|
    json.set! video.id do
      json.extract! video, :id, :title, :year, :maturity_rating, :runtime, :description
      json.video_link url_for(video.movie)
      json.image_link url_for(video.thumbnail)
    end
  end
end
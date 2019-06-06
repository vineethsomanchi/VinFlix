json.extract! video, :id, :title, :year, :maturity_rating, :runtime, :description

json.video_link url_for(video.movie)
json.image_link url_for(video.thumbnail)

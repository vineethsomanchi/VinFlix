json.extract! video, :id, :title, :year, :maturity_rating, :runtime, :description

json.video_link video.movie.service_url
json.image_link video.thumbnail.service_url

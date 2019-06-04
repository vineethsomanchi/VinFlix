#Iterate through all videos and create partial for each
@videos.each do |video|
    json.partial! 'api/videos/video', video: video
end
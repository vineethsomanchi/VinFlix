#Iterate through all videos and create partial for each
@videos.each do |video|
    json.set! video.id do
        json.partial! 'api/videos/video', video: video
    end
end
#Iterate through all profiles and return partial with formatted json
@profiles.each do |profile|
    json.set! profile.id do
        json.partial! 'api/profiles/profile', profile: profile
    end
end

=
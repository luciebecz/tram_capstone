class Report < ApplicationRecord
  def self.get_reports
    HTTParty.get('http://skiosk.skiutah.com/feed/resorts',
                    headers: {
                      "Authorization" => "",
                       "Content-Type" => ""
                    }).body
end

end

require 'digest/md5'

module Jekyll
  module GravatarFilter
    def gravatar_url(email)
      "//www.gravatar.com/avatar/#{hash(email)}?s=150&d=https%3A%2F%2Fcssbristol.co.uk%2Fassets%2Fimages%2Fcore%2Fplaceholder-avatar.png"
    end

    private :hash

    def hash(email)
      email_address = email ? email.downcase.strip : ''
      Digest::MD5.hexdigest(email_address)
    end
  end
end

Liquid::Template.register_filter(Jekyll::GravatarFilter)

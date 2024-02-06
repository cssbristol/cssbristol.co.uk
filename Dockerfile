FROM ruby:3.2.3-slim-bullseye

ARG PORT=8080
ENV PORT=${PORT}

EXPOSE ${PORT}
WORKDIR /site


RUN apt-get update &&\
    apt-get install -y build-essential g++ ruby-dev gcc libffi-dev make nodejs npm &&\
    gem install bundler

COPY . /site

RUN bundle install

CMD bundle exec jekyll serve --livereload --port ${PORT} --host 0.0.0.0